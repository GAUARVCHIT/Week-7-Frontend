import React, { useState, useEffect } from 'react';
import FeaturedArticle from '../FeaturedArticle/FeaturedArticle';
import ArticleList from '../ArticleList/ArticleList';
import { ArticleType } from '../../assets/Common/types';
import './FeaturedSection.css';
type Props = {
    articles: ArticleType[];
};

const FeaturedSection: React.FC<Props> = ({ articles }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const handleArticleClick = (article: ArticleType) => {
        const index = articles.indexOf(article);
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % articles.length;
            setCurrentIndex(nextIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, articles]);

    return (
        <div className="featured-section">
            <FeaturedArticle article={articles[currentIndex]} />
            <ArticleList articles={articles} currentArticle={articles[currentIndex]} articleIndex={currentIndex} onArticleClick={handleArticleClick} />
        </div>
    );
};



export default FeaturedSection;