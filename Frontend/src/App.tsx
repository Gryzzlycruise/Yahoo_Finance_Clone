import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Dashboard } from "./components/dashboard/dashboard";
import { Authorization } from "./components/authorization/authorization";
import {BackgroundVideo} from "./components/backgroundVideo/backgroundVideo";
import {PopUp} from "./components/popUp/popUp";
import {NavBar} from "./components/navBar/navBar";

import {AccountPage} from "./pages/account";
import {ErrorPage} from "./pages/error";
import {HomePage} from "./pages/home";
import {MarketsPage} from "./pages/markets";
import {NewsPage} from "./pages/news";
import {SearchPage} from "./pages/search";

import { IRootState, useAppDispatch } from "./store";
import { getProfile } from "./store/auth/actionCreators";

import styles from "./components/popUp/popUp.module.scss";

function App() {
  const isLoggedIn = useSelector(
    (state: IRootState) => !!state.auth.authData.accessToken
  );

  const [modalActive, setModalActive] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <Router>
      {isLoggedIn ? null : <BackgroundVideo/>}
        <Routes>
            <Route path="/" element={<Authorization setActive={setModalActive}
                                       login={login}
                                       setLogin={setLogin}
                                       password={password}
                                       setPassword={setPassword}
                                     />}/>
            {/*<Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}/>*/}
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/account" element={<AccountPage setLogin={setLogin} setPassword={setPassword}/>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      {isLoggedIn ? <NavBar/> : null}
      <PopUp active={modalActive}
             setActive={setModalActive}
             setLogin={setLogin}
             setPassword={setPassword}>
          <div >
              <h2 className={styles.title}> This application is a beta version so for authorization use next credentials</h2>
              <p className={styles.text}>Login: user</p>
              <p className={styles.text}>Password: user</p>
          </div>
      </PopUp>
    </Router>
  );
}

export default App;
