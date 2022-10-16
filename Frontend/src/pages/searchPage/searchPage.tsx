import { Dashboard } from './dashboard';
import styles from "./searchPage.module.scss";
import {useState} from "react";

import { SearchPageContext } from '../../context/SearchPageContext';
import { StockContext } from '../../context/StockContext';

export const SearchPage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [stockSymbol, setStockSymbol] = useState('FB');

    return (
        <div className={styles.wrapper}>
            <SearchPageContext.Provider value={{ darkMode, setDarkMode }}>
                <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
                    <Dashboard/>
                </StockContext.Provider>
            </SearchPageContext.Provider>
        </div>
    )
}