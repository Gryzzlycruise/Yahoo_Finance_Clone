import {Header} from "./header";
import {DetailsList} from "./Details";
import {Overview} from "./Overview";
import {Chart} from "./Chart";
import {useContext, useState, useEffect} from "react";
import {SearchPageContext} from "../../context/SearchPageContext";
import {StockContext} from "../../context/StockContext";
import {getQuote, getStockDetails} from "../../api/stock-api";
import {Details, Quote} from "../../constants/mock";

export const Dashboard = () => {
    const { darkMode } = useContext(SearchPageContext);
    const { stockSymbol } = useContext(StockContext);

    const [stockDetails, setStockDetails] = useState<Details>({ "country": "-",
                                                                          "currency": "-",
                                                                          "exchange": "-",
                                                                          "ipo": "-",
                                                                          "marketCapitalization": 0,
                                                                          "name": "-",
                                                                          "finnhubIndustry":"-"
                                                                        });
    const [quote, setQuote] = useState<Quote>({ "c": 0,
                                                          "h": 0,
                                                          "l": 0,
                                                          "o": 0,
                                                          "pc": 0,
                                                          "t": 0,
                                                          "d": 0,
                                                          "dp": 0,
                                                        });

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result =  await getStockDetails(stockSymbol);
                setStockDetails(result);
            } catch (error) {
                setStockDetails({ "country": "-",
                                        "currency": "-",
                                        "exchange": "-",
                                        "ipo": "-",
                                        "marketCapitalization": 0,
                                        "name": "-",
                                        "finnhubIndustry":"-"
                                      });
                console.log(error);
            }
        };

        const updateStockOverview = async () => {
            try {
                const result = await getQuote(stockSymbol);
                setQuote(result);
            } catch (error) {
                setQuote({ "c": 0,
                                 "h": 0,
                                 "l": 0,
                                 "o": 0,
                                 "pc": 0,
                                 "t": 0,
                                 "d": 0,
                                 "dp": 0,
                               });
                console.log(error);
            }
        };

        updateStockDetails();
        updateStockOverview();
    }, [stockSymbol]);

    return <div className= {`h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-roboto ${
                            darkMode ? 'bg-gray-900 text-gray-300' : 'bg-neutral-100'
                             }`}
            >
                <div className='col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center'>
                    <Header name={stockDetails.name}/>
                </div>
                <div className='md:col-span-2 row-span-4'>
                    <Chart/>
                </div>
                <div>
                    <Overview symbol={stockSymbol}
                              price={quote.pc}
                              change={quote.d}
                              changePercent={quote.dp}
                              currency={stockDetails.currency}
                    />
                </div>
                <div className='row-span-2 xl:row-span-3'>
                    <DetailsList details={stockDetails}/>
                </div>
           </div>
}