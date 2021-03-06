import React from 'react';
import styles from './Header.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export default function Header(props) {

    const pages = [
        {
            name: 'home',
            route: '/'
        },
        {
            name: 'about', 
            route: '/about'
        },
        {
            name: 'words',
            route: '/words'
        }
    ];

    /* 
        Creates a single navigation link and applies the correct styling.
    */
    const generateNavLink = (page) => {
        const router = useRouter();
        const currentPageIndicatorClass = router.pathname === page.route ? styles.selectedNavItem : styles.unselectedNavItem;

        return(
            <Link href={page.route} key={page.route}> 
                <a className={classNames(styles.navItem, currentPageIndicatorClass)}> 
                    {page.name} 
                </a> 
            </Link>
        );
    };
    
    return (
        <div className={styles.headerContainer}>
            <div className={styles.wwwTitleRow}>
                <span className={styles.title}> {props.titleText} </span>
                <div className={styles.navItemGroup}>
                    {pages.map((page) => generateNavLink(page))}
                </div>
            </div>

            <div className={styles.mobileTitleRow}>
                <span className={styles.title}> {props.titleText} </span>
                <div className={styles.lineBreak}></div>
                <div className={styles.navItemGroup}>
                    {pages.map((page) => generateNavLink(page))}
                </div>
            </div>
        </div>
    );
};
