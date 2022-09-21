import styles from "./copyright.module.scss";

export const Copyright = () => {
    return (
        <p className={styles.title}>Copyright: <span>{new Date().getFullYear()} </span></p>
    );
}