import "./_articleFeatured.scss";

const ArticleFeatured = (props) => {
    const { featuredArr } = props;

    const featuredContent = featuredArr.map(article => (
        <>
            <img className="featured-article__image" src={article.image} alt={article.alt} />
            <h1>{article.heading}</h1>
            <h3>{article.subHeading}</h3>
            <a>{article.author} in {article.publication}</a>
            <p>{article.datePosted} • {article.minutesToRead} min read</p>
        </>
    ));

    return (
        <section className="featured-article">
            {featuredContent}
        </section>
    );
};

export default ArticleFeatured;
