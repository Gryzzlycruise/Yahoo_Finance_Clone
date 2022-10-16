import Image from '../../assets/images/1.jpeg';

import styles from './accountPage.module.scss';
import {IRootState, useAppDispatch} from "../../store";
import {getProfile, logoutUser} from "../../store/auth/actionCreators";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {PopUpProps} from "../../components/popUp/popUp";
import {useTheme} from "../../hooks/useTheme";
import {Theme} from "../../context/ThemeContext";

type AccountProps = Pick<PopUpProps, "setLogin" | "setPassword">;

export const AccountPage = (props: AccountProps) => {
    const dispatch = useAppDispatch();
    const theme = useTheme();

    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile
    );

    function logout () {
        props.setLogin('');
        props.setPassword('');
        dispatch(logoutUser());
    }

    function changeTheme() {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}><img src={Image} alt={'File not found'}></img>
            </div>
            <h1 className={styles.title}>Вы успeшно авторизовались, {profile}</h1>
            <button className={styles.link} onClick={changeTheme}>Change theme</button>
            <button className={styles.link} onClick={() => dispatch(getProfile())}>Update profile</button>
            <NavLink  to={'/'} className={styles.link} onClick={() => logout()}>Log out</NavLink>
        </div>
    )
}