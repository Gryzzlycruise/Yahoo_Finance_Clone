import {ReactNode, useContext} from "react";
import {SearchPageContext} from "../../context/SearchPageContext";

interface Props {
    children: ReactNode
}

export const Card = ({children}: Props) => {
    const { darkMode } = useContext(SearchPageContext);

    return <div className={`w-full h-full rounded-md relative p-8 border-2 filter-none lg:p-6 md:p-2 md:overflow-y-scroll ${
                          darkMode ? 'bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark' : 'bg-gray-300 bg-white border-neutral-200 custom-scrollbar'
                          }`}
           >
                {children}
           </div>
}