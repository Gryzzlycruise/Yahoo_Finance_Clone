import styles from "./buttonLoginForm.module.scss"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

type ButtonLoginFormProps ={
    className: string;
    text: string;
    disabled?: boolean;
    title?: string;
    icon?: string;
    setActive?: Function;
}

export const ButtonLoginForm = (props: ButtonLoginFormProps) => {
    return (
        <button
            className={styles[props.className]}
            disabled={props.disabled}
            title={props.title}
            onClick={() => props.setActive ? props.setActive(false) : null}
        >
            {props.icon ? <GlobalSvgSelector id={props.icon}/>: null}
            {props.text}
        </button>
    )
}