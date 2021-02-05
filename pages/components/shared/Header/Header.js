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
    
    const avatar = <Image 
                        alt={'avatar'} 
                        src={'/avatar-700x700.jpeg'} 
                        height={55}
                        width={55}
                        className={styles.avatar}
                    />
    return (
        <div className={styles.headerContainer}>
            <div className={styles.wwwTitleRow}>
                {avatar} 
                <span className={styles.avatarPadding}></span>
                <span className={styles.title}> {props.titleText} </span>
                <div className={styles.navItemGroup}>
                    {pages.map((page) => generateNavLink(page))}
                </div>
            </div>

            <div className={styles.mobileTitleRow}>
                {avatar}
                <span className={styles.title}> {props.titleText} </span>
                <div className={styles.lineBreak}></div>
                <div className={styles.navItemGroup}>
                    {pages.map((page) => generateNavLink(page))}
                </div>
            </div>
        </div>
    );
};
