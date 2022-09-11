import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/auth/actionCreators";
import styles from "./login.module.scss";
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";

export const Login = () => {
  const dispatch = useAppDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(loginUser({ login, password }));
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>Sign up</h2>
        <div>
          <label htmlFor="login"></label>
          <input
            name="login"
            type="text"
            placeholder={"Login"}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            name="password"
            type="password"
            placeholder={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={styles.red}>
          <GlobalSvgSelector id={'closed_lock'}/>
          Log in
        </button>
      </form>
    </div>
  );
};
