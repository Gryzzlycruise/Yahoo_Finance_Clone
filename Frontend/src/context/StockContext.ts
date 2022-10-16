import {createContext} from "react";

interface Props {
    stockSymbol: string;
    setStockSymbol: (stockSymbol: string) => void;
}

export const StockContext = createContext<Props>({
    stockSymbol: '',
    setStockSymbol: () => {}
});