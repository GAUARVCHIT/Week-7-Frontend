import React from 'react';
import Article from '../Article/Article';
import { ArticleType } from '../../assets/Common/types';
import './ArticleList.css';
type Props = {
    articles: ArticleType[];
    onArticleClick: (article: ArticleType) => void;
    currentArticle: ArticleType;
    articleIndex: number;
};

const ArticleList: React.FC<Props> = ({ articles, onArticleClick, currentArticle, articleIndex }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => {
                // console.log(index, articleIndex);
                // console.log('isActiveValue', index == articleIndex)
                return <Article key={index} article={article} isActive={index == articleIndex} onClick={() => onArticleClick(article)} />
            })}
        </div>
    );
};



export default ArticleList;


