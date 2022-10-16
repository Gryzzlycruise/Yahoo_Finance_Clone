import { Card } from "./card";

export const Overview = ({symbol, price, change, changePercent, currency}: any) => {
    return <Card>
                <span className='absolute left-1 top-1 text-neutral-400 text-sm xl:text-lg'>
                    {symbol}
                </span>
                <div className='w-full h-full flex items-center justify-around md:justify-center'>
                    <span className='text-2xl xl:text-4xl 2xl:text-5xl flex items-center md:text-xl'>
                        ${price}
                        <span className='text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2'>
                        {currency}
                    </span>
                    </span>
                    <span className={`text-lg xl:text-lg 2xl:text-2xl ${
                        change > 0 ? 'text-lime-500' : 'text-red-500'
                    }`}>
                        {change} <span>({changePercent}%)</span>
                    </span>
                </div>
           </Card>
}