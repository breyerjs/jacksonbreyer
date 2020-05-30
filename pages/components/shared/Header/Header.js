import React from 'react';
import styles from './Header.scss'
import Link from 'next/link';
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
        const currentPageIndicatorClass = router.pathname === page.route ? 'selectedNavItem' : 'unselectedNavItem';

        return(
            <Link href={page.route} key={page.route}> 
                <a className={classNames('navItem', currentPageIndicatorClass)}> 
                    {page.name} 
                </a> 
            </Link>
        );
    };
    
    const avatar = <img className={'avatar'} alt={'avatar'} src={require('../../../../public/avatar.png')} />;
    return (
        <div className={'headerContainer'}>
            <div className={'wwwTitleRow'}>
                {avatar}
                <span className={'title'}> {props.titleText} </span>
                {pages.map((page) => generateNavLink(page))}
            </div>

            <div className={'mobileTitleRow'}>
                {avatar}
                <span className={'title'}> {props.titleText} </span>
                <div className={'lineBreak'}></div>
                <div className={'navItemGroup'}>
                    {pages.map((page) => generateNavLink(page))}
                </div>
            </div>
        </div>
    );
};
