import {NavBarItem} from "./navBarItem";

import styles from './navBar.module.scss';

export interface INavBarItem {
    icon_id: string,
    name: string
}

export const NavBar = () => {
    const items= [
        {
            icon_id: 'home',
            name: 'Home'
        },
        {
            icon_id: 'news',
            name: 'News'
        },
        {
            icon_id: 'search',
            name: 'Search'
        },
        {
            icon_id: 'markets',
            name: 'Markets'
        },
        {
            icon_id: 'account',
            name: 'Account'
        }
    ];

    return (
        <>
            <div className={styles.navbar}>
               {
                    items.map((item: INavBarItem) => {
                        return <NavBarItem key={item.icon_id} item={item}/>
                    })}
            </div>
        </>
    )
}