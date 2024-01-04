'use server';

//server action for form submission
export async function shareMeal(formData) {
    const meal = {
        tilte: formData.get('title'),
        summatry: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    // test
    console.log(meal);
}
