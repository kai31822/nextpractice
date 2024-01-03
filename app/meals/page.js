import React, { Suspense } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/app/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>;
}

const Mealspage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created {''}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>Choose your favorite recipe and cook it yourself. It is easy and fun.</p>
                <p className={classes.cta}>
                    <Link href='meals/share'>Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                {/*
<Suspense fallback={讀取元件}>目標載入元件</Suspense>;
當「目標載入元件」還沒載入完成時，React會顯示fallback這個props綁定的「讀取元件」，一直到「目標載入元件」載入完成後再切換過來。 */}
                <Suspense fallback={<div className={classes.loading}>Fetching meals...</div>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default Mealspage;
