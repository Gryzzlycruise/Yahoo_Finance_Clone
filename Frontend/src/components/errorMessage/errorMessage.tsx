import styles from "./errorMessage.module.scss";

type ErrorMessageProps = {
    error: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
    return (<h2 className={styles.text}>{props.error}</h2>)
}