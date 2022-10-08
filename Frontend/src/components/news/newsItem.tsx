import styles from "./news.module.scss";

export interface PropsNewsItem {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

export const NewsItem = ({title, description, url, urlToImage, publishedAt}: PropsNewsItem) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <img src={urlToImage} alt={urlToImage} className={styles.image}></img>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.additional}>
                        <h3 className={styles.link}><a href={url} target={'_blank'}>Read more...</a></h3>
                        <time dateTime={publishedAt} className={styles.date}>{publishedAt}</time>
                    </div>
                </div>
            </div>
        </div>
    )
};