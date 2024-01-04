'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

//server action for form submission
export async function shareMeal(formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    // test
    // console.log(meal);
    await saveMeal(meal);
    redirect('/meals');
}
