import React from 'react';
import Article from '../Article/Article';
import { ArticleType } from '../../assets/Common/types';
import './ArticleList.css';
type Props = {
    articles: ArticleType[];
    onArticleClick: (article: ArticleType) => void;
    currentArticle: ArticleType;
};

const ArticleList: React.FC<Props> = ({ articles, onArticleClick, currentArticle }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <Article key={index} article={article} isActive={article === currentArticle} onClick={() => onArticleClick(article)} />
            ))}
        </div>
    );
};



export default ArticleList;


