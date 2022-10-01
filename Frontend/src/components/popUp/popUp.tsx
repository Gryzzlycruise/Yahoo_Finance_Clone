import styles from "./popUp.module.scss"
import {ButtonLoginForm} from "../shared/buttonLoginForm/buttonLoginForm";

export interface PopUpProps {
    active: boolean;
    setActive: Function;
    setLogin: Function;
    setPassword: Function;
    children?: JSX.Element|JSX.Element[];
}

export const PopUp = (props:PopUpProps) => {
    return (
        <div className={props.active ? `${styles.modal} ${styles.active}` : styles.modal}>
            <div className={props.active ? `${styles.modal__content} ${styles.active}` : styles.modal__content}>
                {props.children}
                <ButtonLoginForm text={'Use credentials'}
                                 className={'null'}
                                 setActive={props.setActive}
                />
            </div>
        </div>
    )
}