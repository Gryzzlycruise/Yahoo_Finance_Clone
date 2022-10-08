import {useState, useEffect} from "react";
import axios from "axios";

import {NewsItem} from "./newsItem";
import {PropsNewsItem} from "./newsItem";

export const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b5f970c697094202927aa40adb3dcdad');
            setArticles(response.data.articles);
        }

        getArticles();
    }, []);

    return (
        <div>
            {articles.map((article: PropsNewsItem) => {
                return <NewsItem title={article.title}
                                 description={article.description}
                                 url={article.url}
                                 urlToImage={article.urlToImage}
                                 publishedAt={article.publishedAt}
                        />
            })}
        </div>
    )
}