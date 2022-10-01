import React from "react";
import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../store";
import { getProfile, logoutUser } from "../../store/auth/actionCreators";
import { Login } from "../login/login";
import { Copyright } from "../copyright/copyright";
import Logo from "../../assets/images/MainLogo.svg";
import styles from "./authorization.module.scss";

export type AuthorizationProps = {
    setActive: Function;
    login: string;
    setLogin: Function;
    password: string;
    setPassword: Function;
}

export const Authorization = (props: AuthorizationProps) => {
  const dispatch = useAppDispatch();

  const profile = useSelector(
    (state: IRootState) => state.auth.profileData.profile
  );
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const renderProfile = () => (
    <div>
      <div>Вы успeшно авторизовались, {profile}</div>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
      <button onClick={() => dispatch(getProfile())}>update profile</button>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <img src={Logo} alt={'Main logo'} className={styles.logo}></img>
      {isLoggedIn ? renderProfile() : <Login setActive={props.setActive}
                                             login={props.login}
                                             setLogin={props.setLogin}
                                             password={props.password}
                                             setPassword={props.setPassword}
                                             />}
      <Copyright/>
    </div>
  );
};