import "./_articleFeatured.scss";
import {H1Article, H3ArticlePrimary, PDateAndMinRead} from "../../Atoms/typo/Typo";
import {HyperlinkAuthorPublication} from "../../Atoms/hyperlinks/Hyperlinks";
import {ImageArticleAvatar} from "../../Atoms/images/Images";
import {IconMembersOnlyContent} from "../../Atoms/icons/Icons";

const ArticleFeatured = (props) => {
    const {featuredArr} = props;

    const featuredContent = featuredArr.map(article => {
        const date = new Date (article.epochTimestamp * 1000);

        const monthDay = `${date.toLocaleString("default", {month: "short"})} ${date.getDate()}`;

        const membersArticle = article.membersOnlyContent ? <IconMembersOnlyContent /> : "";

        return (
            <>
                <img className="featured-article__image" src={article.image} alt={article.alt} />
                <div className="featured-article__headings">
                    <H1Article heading={article.heading} />
                    <H3ArticlePrimary heading={article.subHeading} />
                </div>
                <div className="featured-article__details">
                    <ImageArticleAvatar src={article.avatar} alt={article.author} />
                    <div className="featured-article__details--right">
                        <HyperlinkAuthorPublication author={article.author} publication={article.publication} />
                        <div className="featured-article__details--right--info">
                            <PDateAndMinRead date={monthDay} minRead={article.minutesToRead} />
                            {membersArticle}
                        </div>
                    </div>
                </div>
            </>
        )}
    );

    return (
        <section className="featured-article">
            {featuredContent}
        </section>
    );
};

export default ArticleFeatured;
