export type Result = {
    description: string,
    displaySymbol: string,
    symbol: string,
    type: string,
}

type SearchResult = {
    count: number,
    result: Array<Result>,
}

export const mockSearchResults: SearchResult = {
    "count": 4,
    "result": [
        {
            "description": "APPLE INC",
            "displaySymbol": "AAPL",
            "symbol": "AAPL",
            "type": "Common Stock"
        },
        {
            "description": "APPLE INC",
            "displaySymbol": "AAPL.SW",
            "symbol": "AAPL.SW",
            "type": "Common Stock"
        },
        {
            "description": "APPLE INC",
            "displaySymbol": "APC.BE",
            "symbol": "APC.BE",
            "type": "Common Stock"
        },
        {
            "description": "APPLE INC",
            "displaySymbol": "APC.DE",
            "symbol": "APC.DE",
            "type": "Common Stock"
        }
    ]
}

export interface Details {
    country: string,
    currency: string,
    exchange: string,
    ipo: string,
    marketCapitalization: number,
    name: string,
    phone?: string,
    shareOutstanding?: number,
    ticker?: string,
    webUrl?: string,
    logo?: string,
    finnhubIndustry:string,
}

export const mockCompanyDetails: Details = {
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "webUrl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
}

export type Quote = {
    c: number,
    h: number,
    l: number,
    o: number,
    pc: number,
    t: number,
    d: number,
    dp: number,
}

export const mockStockQuote: Quote = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000,
    'd': 259.45,
    'dp': 259.45,
}

type HistoricalData = {
    c: number[],
    h: number[],
    l: number[],
    o: number[],
    s: string,
    t: number[],
    v: number[],
}

export const mockHistoricalData: HistoricalData = {
    "c": [
        217.68,
        221.03,
        219.89
    ],
    "h": [
        222.49,
        221.5,
        220.94
    ],
    "l": [
        217.19,
        217.1402,
        218.83
    ],
    "o": [
        221.03,
        218.55,
        220
    ],
    "s": "ok",
    "t": [
        1569297600,
        1569384000,
        1569470400
    ],
    "v": [
        33463820,
        24018876,
        20730608
    ]
}