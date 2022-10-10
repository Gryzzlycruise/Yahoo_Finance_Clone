import {useState, useEffect} from "react";
import axios from "axios";

import {NewsItem} from "./newsItem";
import {PropsNewsItem} from "./newsItem";

interface PropsNewsList {
    fetching: boolean,
    setFetching: Function
}

type Article = {
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

export const NewsList = ({fetching, setFetching}: PropsNewsList) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (fetching) {
            axios.get(`https://newsapi.org/v2/everything?domains=wsj.com&language=en&pageSize=5&page=${currentPage}&apiKey=b5f970c697094202927aa40adb3dcdad`)
                 .then(response => {
                     setArticles([...articles, ...response.data.articles]);
                     setCurrentPage(prevState => prevState + 1);
                 })
                .finally(() => setFetching(false));
        }
    }, [fetching]);

    return (
        <div>
            {articles.map((article: PropsNewsItem, index: number) => {
                return <div key={index}>
                    <NewsItem title={article.title}
                              description={article.description}
                              url={article.url}
                              urlToImage={article.urlToImage}
                              publishedAt={article.publishedAt}
                    />
                </div>

            })}
        </div>
    )
}