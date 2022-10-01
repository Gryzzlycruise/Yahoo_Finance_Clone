import Image from '../assets/images/1.jpeg';

import styles from './account.module.scss';
import {IRootState, useAppDispatch} from "../store";
import {logoutUser, getProfile} from "../store/auth/actionCreators";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {PopUpProps} from "../components/popUp/popUp";

type AccountProps = Pick<PopUpProps, "setLogin" | "setPassword">;

export const AccountPage = (props: AccountProps) => {
    const dispatch = useAppDispatch();

    const profile = useSelector(
        (state: IRootState) => state.auth.profileData.profile
    );

    function logout () {
        props.setLogin('');
        props.setPassword('');
        dispatch(logoutUser());
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}><img src={Image} alt={'File not found'}></img>
            </div>
            <h1>Вы успeшно авторизовались, {profile}</h1>
            <button className={styles.link} onClick={() => dispatch(getProfile())}>Update profile</button>
            <NavLink  to={'/'} className={styles.link} onClick={() => logout()}>Log out</NavLink>
        </div>
    )
}