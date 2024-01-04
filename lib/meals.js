import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'node:fs';

const db = sql('meals.db');

export async function getMeals() {
    //演飾用 模擬長時間動作
    await new Promise(reslove => setTimeout(reslove, 2000));
    //test error
    // throw new Error('Loading meals failed');
    /*
     獲取所有資料 用all(),
     單行用  get(),
     修改新增用 run()
    */

    return db.prepare('SELECT * FROM meals').all();
}
//
export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}
//
export async function saveMeal(meal) {
    //slugify xss
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), error => {
        if (error) {
            throw new Error('Saving image failed!!');
        }
    });

    meal.image = `/images/${fileName}`;
    db.prepare(
        `
    INSERT INTO meals
      (title, summary, instructions, creator,creator_email, image, slug)
    VALUES(
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
    `
    ).run(meal);
}
