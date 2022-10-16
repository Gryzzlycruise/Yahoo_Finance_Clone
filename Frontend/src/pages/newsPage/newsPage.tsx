import {NewsList} from "../../components/news/newsList";
import {Comment} from "react-loader-spinner";

import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./newsPage.module.scss"
import {useEffect, useState} from "react";

export const NewsPage = () => {
    const [fetching, setFetching] = useState(true);
    const [showButton, setShowButton] = useState(`${styles.button}`);

    const newsList = document.getElementById('newsList') as HTMLElement;

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

        if (event.target.scrollTop > 700) {
            setShowButton(`${styles.button} ${styles.showButton}`);
        } else if (event.target.scrollTop < 700) {
            setShowButton(`${styles.button}`);
        }
    }

    const scrollTop = () => {
        newsList.scrollTo(0,0);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.heading}>Latest news</h1>
            <div className={`${styles.list} custom-scrollbar`} id={'newsList'}>
                <NewsList fetching={fetching}
                          setFetching={setFetching}
                />
                <div className={styles.loader}>
                    <Comment
                        visible={fetching}
                        height="80"
                        width="80"
                        ariaLabel="comment-loading"
                        wrapperStyle={{}}
                        wrapperClass="comment-wrapper"
                        color="#fff"
                        backgroundColor="#F4442E"
                    />
                </div>
            </div>
            <button className={showButton} id={'scroll_top'} onClick={scrollTop}>
                <GlobalSvgSelector id={'scroll_top'}/>
            </button>
        </div>
    );
}