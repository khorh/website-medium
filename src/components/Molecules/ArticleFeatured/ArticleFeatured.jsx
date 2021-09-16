import "./_articleFeatured.scss";
import {H1Article, H3ArticlePrimary, PDateAndMinRead} from "../../Atoms/typo/Typo";
import {HyperlinkAuthorPublication} from "../../Atoms/hyperlinks/Hyperlinks";
import {ImageArticleAvatar} from "../../Atoms/images/Images";

const ArticleFeatured = (props) => {
    const {featuredArr} = props;

    const featuredContent = featuredArr.map(article => (
        <>
            <img className="featured-article__image" src={article.image} alt={article.alt} />
            <div className="featured-article__headings">
                <H1Article heading={article.heading}/>
                <H3ArticlePrimary heading={article.subHeading} />
            </div>
            <div className="featured-article__details">
                <ImageArticleAvatar src={article.avatar} alt={article.author}/>
                <div className="featured-article__details--info">
                    <HyperlinkAuthorPublication author={article.author} publication={article.publication} />
                    <PDateAndMinRead date={article.datePosted} minread={article.minutesToRead}/>
                </div>
            </div>
        </>
    ));

    return (
        <section className="featured-article">
            {featuredContent}
        </section>
    );
};

export default ArticleFeatured;
