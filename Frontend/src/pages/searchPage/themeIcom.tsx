import {MoonIcon} from "@heroicons/react/solid";
import {useContext} from "react";
import {SearchPageContext} from "../../context/SearchPageContext";

export const ThemeIcon = () =>{
    const {darkMode, setDarkMode} = useContext(SearchPageContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return <button className={`rounded-lg border-1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg 
                            ${darkMode ? 'shadow-gray-800' : null
                             } transition duration-300 hover:scale-125`}
                   onClick={toggleDarkMode}
           >
                <MoonIcon className={`h-8 w-8 cursor-pointer stroke-1 fill-none  
                                        ${darkMode 
                                            ? 'fill-yellow-400 stroke-yellow-400' 
                                            : 'fill-none stroke-neutral-400'
                                        }
                                    `}
                />
           </button>
}