import "./_articlesLatest.scss";
import {H2Topic, H3ArticleSecondary, H4ArticleContent} from "../../Atoms/typo/Typo";

const ArticlesLatest = (props) => {
    const { latestArr } = props;

    const latestContent = latestArr.map(article => {
        return (
            <div className="latest-article">
                <div className="latest-article__left">
                    <H3ArticleSecondary heading={article.heading} />
                    <H4ArticleContent content={article.content} />
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
            <H2Topic heading="LATEST" />
            {latestContent}
        </section>
    );
};

export default ArticlesLatest;
