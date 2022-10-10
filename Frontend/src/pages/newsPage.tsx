import {NewsList} from "../components/news/newsList";

import styles from "./newsPage.module.scss"
import {useEffect, useState} from "react";

export const NewsPage = () => {
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const newsList = document.getElementById('newsList') as HTMLElement;
        newsList.addEventListener('scroll', scrollHandler);

        return function() {
            newsList.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    const scrollHandler = (event: any) => {
        if (event.target.scrollHeight - (event.target.scrollTop + window.innerHeight) < 100) {
            setFetching(true);
        }
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Latest news</h1>
            <div className={styles.list} id={'newsList'}>
                <NewsList fetching={fetching}
                          setFetching={setFetching}
                />
            </div>
        </div>
    );
}