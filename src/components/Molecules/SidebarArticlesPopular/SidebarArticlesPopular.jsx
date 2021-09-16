import "./_sidebarArticlesPopular.scss";
import {H2Topic, H3ArticleSecondary, PMinRead} from "../../Atoms/typo/Typo";
import {ImageArticlePopular} from "../../Atoms/images/Images";

const SidebarArticlesPopular = (props) => {
    const {articlesArr} = props;

    const articlesList = articlesArr.map(article => {
        const trimmedArticleHeading = article.heading.substring(0, 30) + "...";

        return (
            <div className="sidebar__articles-popular-list">
                <div className="sidebar__articles-popular-list--summary">
                    <H3ArticleSecondary heading={trimmedArticleHeading} />
                    <PMinRead minRead={article.minutesToRead} />
                </div>
                <div>
                    <ImageArticlePopular src={article.image} alt={article.alt} />
                </div>
            </div>
        )
    });

    return (
        <div className="sidebar__articles-popular-container">
            <H2Topic heading="POPULAR IN PROGRAMMING" />
            {articlesList}
        </div>
    );
};

export default SidebarArticlesPopular;
