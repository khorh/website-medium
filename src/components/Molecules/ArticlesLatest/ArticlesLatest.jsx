import "./_articlesLatest.scss";
import {H2Topic, H3ArticleSecondary, H4ArticleContent, PDateAndMinRead} from "../../Atoms/typo/Typo";
import {HyperlinkAuthorPublication} from "../../Atoms/hyperlinks/Hyperlinks";
import {ImageArticleLatest} from "../../Atoms/images/Images";
import {IconBookmark} from "../../Atoms/icons/Icons";

const ArticlesLatest = (props) => {
    const { latestArr } = props;

    const latestContent = latestArr.map(article => {
        const date = new Date (article.epochTimestamp * 1000);
        const monthDay = `${date.toLocaleString("default", {month: "short"})} ${date.getDate()}`;

        const trimmedLatestContent = article.content.substring(0, 100) + "...";

        return (
            <div className="latest-article">
                <div className="latest-article__left">
                    <H3ArticleSecondary heading={article.heading} />
                    <H4ArticleContent content={trimmedLatestContent} />
                    <div className="latest-article__left--info">
                        <div>
                            <HyperlinkAuthorPublication author={article.author} publication={article.publication} />
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
