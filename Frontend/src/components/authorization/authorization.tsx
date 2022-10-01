import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";
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
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  return (
      <>
          {isLoggedIn ? null :
              <div className={styles.wrapper}>
                  <img src={Logo} alt={'Main logo'} className={styles.logo}></img>
                  {isLoggedIn ? null : <Login setActive={props.setActive}
                                              login={props.login}
                                              setLogin={props.setLogin}
                                              password={props.password}
                                              setPassword={props.setPassword}
                  />}
                  <Copyright/>
              </div>
          }
      </>
  );
};
