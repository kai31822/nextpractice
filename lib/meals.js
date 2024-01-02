import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    //演飾用 模擬長時間動作
    await new Promise(reslove => setTimeout(reslove, 2000));
    /*
     獲取所有資料 用all(),
     單行用  get(),
     修改新增用 run()
    */
    return db.prepare('SELECT * FROM meals').all();
}