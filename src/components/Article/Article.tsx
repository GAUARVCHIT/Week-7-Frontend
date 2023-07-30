import React from 'react';
import './Article.css';

type Props = {
    article: {
        smallImage: string;
        title: string;
    };
    onClick: () => void;
    isActive: boolean; // Indicate if this article is currently active/featured
};

const Article: React.FC<Props> = ({ article, onClick, isActive }) => {
    return (
        <div className="article" onClick={onClick}>
            <div className={`progress-bar-container ${isActive ? '' : 'active'}`}> {/* Flip the logic here */}
                <div className="progress-bar" />
            </div>
            <img src={article.smallImage} alt={article.title} />
            <p>{article.title}</p>
        </div>
    );
};


export default Article;
