import {useContext} from "react";

import {Result} from "../../constants/mock";

import {SearchPageContext} from "../../context/SearchPageContext";
import {StockContext} from "../../context/StockContext";

export const SearchResults =({results}: any) => {
    const { darkMode } = useContext(SearchPageContext);
    const { setStockSymbol } = useContext(StockContext);

    return <ul className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
                            darkMode 
                                ? 'bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark'
                                : 'bg-white border-neutral-200 custom-scrollbar' 
                         }`}>
                {results.map((item: Result) => {
                    return <li key={item.symbol}
                               className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
                                            darkMode ? 'hover:bg-indigo-600' : 'hover:bg-indigo-200'
                               } transition duration-300 `}
                               onClick={() => {
                                   setStockSymbol(item.symbol);
                               }}
                            >
                                <span>{item.symbol}</span>
                                <span>{item.description}</span>
                            </li>
                })}
           </ul>
}