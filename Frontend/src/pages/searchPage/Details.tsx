import {Card} from "./card";
import {reverseIpoDate} from "../../utils/functions";
import {useContext} from "react";
import {SearchPageContext} from "../../context/SearchPageContext";

type Details = {
    name: string,
    country: string,
    currency: string,
    exchange: string,
    ipo: string,
    marketCapitalization: string ,
    finnhubIndustry: string,
}

export const DetailsList = ({details}: any) => {
    const { darkMode } =useContext(SearchPageContext);

    const detailsList: Details ={
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry"
    };

    const convertMillionToBillion = (number: number) => {
        return (number / 1000).toFixed(2);
    };

    return <Card>
                <ul className={`w-full h-full flex flex-col justify-between divide-y-1 ${
                                darkMode ? 'divide-gray-800' : null}`
                              }>
                    {Object.keys(detailsList).map((item: string) => {
                        return <li key={item} className='flex-1 flex justify-between items-center'>
                                    <span className='md:text-sm'>{detailsList[item as keyof Details]}</span>
                                    <span className='md:text-sm'>
                                        {item === 'marketCapitalization'
                                            ? `${convertMillionToBillion(details[item])}B`
                                            // : item === 'ipo'
                                            //     ? `${reverseIpoDate(details[item])}`
                                                : details[item as keyof Details]}
                                    </span>
                               </li>
                        }
                    )}
                </ul>
           </Card>
}