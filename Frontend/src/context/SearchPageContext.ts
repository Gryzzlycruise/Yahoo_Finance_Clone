import {createContext} from "react";

interface Props {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export const SearchPageContext = createContext<Props>({
    darkMode: false,
    setDarkMode: () => {}
});