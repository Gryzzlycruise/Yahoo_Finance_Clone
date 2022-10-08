import {NewsList} from "../components/news/newsList";

import styles from "./newsPage.module.scss"

export const NewsPage = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Latest news</h1>
            <div className={styles.list}>
                <NewsList/>
            </div>
        </div>
    );
}