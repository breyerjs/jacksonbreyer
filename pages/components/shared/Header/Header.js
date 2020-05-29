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
        const currentPageIndicatorClass = router.pathname === page.route ? 'currentIndicator' : classNames('hiddenIndicator', 'currentIndicator')

        return(
            <div className={'navFlex'} key={page.route}>
               <Link href={page.route}> 
                    <a className={'navItem'}> 
                        <span className={currentPageIndicatorClass}> ● </span>
                        {page.name} 
                    </a> 
                </Link>
            </div>
        );
    };
    
    return (
        <div className={'headerContainer'}>
            <div className={'titleRow'}>
                <img className={'avatar'} alt={'avatar'} src={require('../../../../public/avatar.png')} />
                <span className={'title'}> {props.titleText} </span>
                {pages.map((page) => generateNavLink(page))}

            </div>
            {/* {props.subheader && <div className={'subheader'}>...{props.subheader}</div>} */}
        </div>
    );
};
