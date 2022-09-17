import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";
import styles from "./login.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {ErrorMessage} from "../errorMessage/errorMessage";

export const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("You don't entered login");
  const [passwordError, setPasswordError] = useState("You don't entered password");

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const onChangeLogin = (event:any) => {
    setLogin(event.target.value);
    if (event.target.value.length < 4) {
      setLoginError('You entered less than 4 characters');
    }
    if (event.target.value.length > 10) {
      setLoginError('You entered more than 10 characters');
    }
    if (event.target.value.length >= 4 && login.length <= 10) {
      setLoginError('');
    }
  }

  const onChangePassword = (event:any) => {
    setPassword(event.target.value);
    if (event.target.value.length < 3) {
      setPasswordError("Password must be at least 3 characters");
    }
    if (event.target.value.length > 10) {
      setPasswordError("Password can't be more than 10 characters");
    }
    if (event.target.value.length >= 3 && event.target.value.length <= 10) {
      setPasswordError('');
    }
  }

  const handleBlur = (event: any) => {
    switch (event.target.name) {
      case 'login': setLoginDirty(true);
        break;
      case 'password': setPasswordDirty(true);
        break;
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ login, password }));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign up</h2>
        <div>
          <label htmlFor="login">
            {loginDirty && loginError ? <ErrorMessage error={loginError}/>: null}
          </label>
          <input
            name="login"
            type="text"
            placeholder={"Login"}
            value={login}
            className={loginDirty && loginError ? styles.red : ""}
            onChange={onChangeLogin}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="password">
            {passwordDirty && passwordError ? <ErrorMessage error={passwordError}/>: null}
          </label>
          <input
            name="password"
            type="password"
            placeholder={"Password"}
            value={password}
            className={passwordDirty && passwordError ? styles.red : ""}
            onChange={onChangePassword}
            onBlur={handleBlur}
          />
        </div>
        <button
            className={!!(loginError || passwordError) ? styles.red : styles.green}
            disabled={!!(loginError || passwordError)}
            title={loginError || passwordError}
        >
          {!!(loginError || passwordError) ? <GlobalSvgSelector id={'closed_lock'}/>: <GlobalSvgSelector id={'opened_lock'}/>}
          Log in
        </button>
      </form>
    </div>
  );
};
