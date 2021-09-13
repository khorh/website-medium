import React from "react";
import "./_latestArticles.scss";
import { TypoH2 } from "../../Atoms/typo/Typo";

const LatestArticles = (props) => {
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
            <TypoH2 heading="LATEST" />
            {latestContent}
        </section>
    );
};

export default LatestArticles;
