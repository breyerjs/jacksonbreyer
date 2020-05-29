import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './Navigation.scss';
import hamburger from './hamburger.png';

const pages = [
    {
        title: 'Home',
        route: '/'
    },
    {
        title: 'Work',
        route: '/work'
    },
    {
        title: 'History',
        route: '/history'
    },
    {
        title: 'Words',
        route: '/words'
    },
];


export default function Navigation(props) {
    const generateNavCell = (title, route) => {
        // This hook needs to be used inside a functional component. 
        const router = useRouter();
        const classes = classNames(
            // Apply the gridlines
            'navCell',
            // Highlight the current page
            router.pathname === route ? 'currentPage' : null
        );
        return (
            <Link href={route} key={route}>
                <a className={classes}>
                    <span className={'navText'}>{title}</span>
                </a>
            </Link>
        );
    };

    return (
        <div className={'navContainer'}>
            {pages.map((page) => generateNavCell(page.title, page.route ))}
        </div>
    );
};
