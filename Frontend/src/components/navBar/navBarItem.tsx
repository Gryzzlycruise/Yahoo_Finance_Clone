import {INavBarItem} from "./navBar";
import { NavLink } from "react-router-dom";

import styles from './navBar.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

interface Props {
    item: INavBarItem
}

const setActive = ({isActive}: any) => isActive ? `${styles.item} ${styles.active}` : `${styles.item}`;

export const NavBarItem = ({item}: Props) => {
    const {icon_id, name} =item;

    return (
            <NavLink  to={icon_id} className={setActive}>
                <div className={styles.icon}>
                    <GlobalSvgSelector id={icon_id}/>
                </div>
                <div className={styles.item_name}>{name}</div>
            </NavLink>
    )
}