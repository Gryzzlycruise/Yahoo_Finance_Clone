import axios from "axios";

const basePath = 'https://finnhub.io/api/v1';

export const searchSymbols = async (query: any) => {
    const url = `${basePath}/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);

    if (response.status < 200 || response.status > 299) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.data;
}

export const getStockDetails = async (stockSymbol: any) => {
    const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`;
    const response = await axios.get(url);

    if (response.status < 200 || response.status > 299) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.data;
}

export const getQuote = async (stockSymbol: any) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.REACT_APP_API_KEY}`
    const response = await axios.get(url);

    if (response.status < 200 || response.status > 299) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.data;
}

export const getHistoricalData = async (stockSymbol: any, resolution: any, from: any, to: any) => {
    const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.REACT_APP_API_KEY}`
    const response = await axios.get(url);

    if (response.status < 200 || response.status > 299) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }

    return response.data;
}