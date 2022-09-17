import styles from "./buttonLoginForm.module.scss"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";

type ButtonLoginFormProps ={
    className: string;
    text: string;
    disabled?: boolean;
    title?: string;
    icon?: string;
}

export const ButtonLoginForm = (props: ButtonLoginFormProps) => {
    return (
        <button
            className={styles[props.className]}
            disabled={props.disabled}
            title={props.title}
        >
            {props.icon ? <GlobalSvgSelector id={props.icon}/>: null}
            {props.text}
        </button>
    )
}