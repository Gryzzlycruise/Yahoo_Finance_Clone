import {Search} from "./Search";
import {ThemeIcon} from "./themeIcom";

interface Props {
    name: string
}

export const Header = ({ name }: Props) => {
    return <>
        <div className='xl:px-32'>
            <h1 className='text-4xl'>{name}</h1>
            <Search/>
        </div>
        <ThemeIcon/>
    </>
}