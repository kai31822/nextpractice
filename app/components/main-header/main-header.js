import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/logo.png';
import classes from './main-header.module.css';
import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';
import React from 'react';

const MainHeader = () => {
    return (
        <>
            <MainHeaderBackground></MainHeaderBackground>
            <header className={classes.header}>
                <Link href='/' className={classes.logo}>
                    <Image src={logoImage} alt='A plate with food on it' priority></Image>
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default MainHeader;
