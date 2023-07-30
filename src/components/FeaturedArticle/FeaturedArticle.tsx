import React from 'react';
import './FeaturedArticle.css';

type Props = {
  article: {
    image: string;
    title: string;
  };
};

const FeaturedArticle: React.FC<Props> = ({ article }) => {
  return (
    <div className="featured-article">
      <img src={article.image} alt={article.title} />
    </div>
  );
};

export default FeaturedArticle;
