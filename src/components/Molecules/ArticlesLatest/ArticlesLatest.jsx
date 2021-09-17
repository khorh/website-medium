import "./_articlesLatest.scss";
import {H2Topic, H3ArticleSecondary, H4ArticleContent, PAuthorPublication, PDateAndMinRead} from "../../Atoms/typo/Typo";
import {ImageArticleLatest} from "../../Atoms/images/Images";
import {IconBookmark} from "../../Atoms/icons/Icons";

const ArticlesLatest = (props) => {
    const { latestArr } = props;

    const latestContent = latestArr.map(article => {
        const trimmedLatestContent = article.content.substring(0, 135) + "...";

        const date = new Date (article.epochTimestamp * 1000);
        const monthDay = `${date.toLocaleString("default", {month: "short"})} ${date.getDate()}`;

        return (
            <div className="latest-article">
                <div className="latest-article__left">
                    <H3ArticleSecondary heading={article.heading} />
                    <H4ArticleContent content={trimmedLatestContent} />
                    <div className="latest-article__left--info">
                        <div>
                            <PAuthorPublication author={article.author} publication={article.publication} />
                            <PDateAndMinRead date={monthDay} minRead={article.minutesToRead} />
                        </div>
                        <IconBookmark />
                    </div>
                </div>
                <div className="latest-article__right">
                    <ImageArticleLatest src={article.image} alt={article.alt} />
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
