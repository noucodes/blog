import React from "react";
import { Article as ArticleType } from "../types/Article";

const Article: React.FC<ArticleType> = ({
  date,
  title,
  description,
  href,
  readTime,
}) => {
  return (
    <a href={href} className="pb-8 h-fit">
      <div className="date">
        <p className="text-xs font-bold">
          {date} • {readTime} MIN. READ
        </p>
      </div>
      <div className="title">
        <h2 className="font-bold text-2xl py-1">{title}</h2>
      </div>
      <div className="description mb-10">
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Article;
