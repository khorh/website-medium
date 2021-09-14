import React from "react";
import "./_articlesLatest.scss";
import { H2TopicNav } from "../../Atoms/typo/Typo";

const ArticlesLatest = (props) => {
    const { latestArr } = props;

    const latestContent = latestArr.map(article => {
        return (
            <div className="latest-article">
                <div className="latest-article__left">
                    <h3>{article.heading}</h3>
                    <h4>{article.content}</h4>
                    <a>{article.author} in {article.publication}</a>
                    <p>{article.datePosted} • {article.minutesToRead} min read</p>
                </div>
                <div className="latest-article__right">
                    <img className="latest-article__image" src={article.image} alt={article.alt} />
                </div>
            </div>
        )
    });

    return (
        <section>
            <H2TopicNav heading="LATEST" />
            {latestContent}
        </section>
    );
};

export default ArticlesLatest;
