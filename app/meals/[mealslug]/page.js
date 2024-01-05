import React from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const meal = getMeal(params.mealslug);
    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary,
    };
}

const MealDetailsPage = ({ params }) => {
    const meal = getMeal(params.mealslug);
    if (!meal) {
        notFound();
    }
    /*
    /\n/g  :It is a regular expression , which matches all the \n
      */
    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                {/* image */}
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                {/*  */}
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_mail}`}></a> {meal.creator}
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
            </main>
        </>
    );
};

export default MealDetailsPage;
