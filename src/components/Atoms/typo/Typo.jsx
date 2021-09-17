import "./_typo.scss";

const H1Article = (props) => {
    const {heading} = props;

    return (
        <>
            <h1 className="h1__article">{heading}</h1>
        </>
    );
};

const H2Topic = (props) => {
    const {heading} = props;

    return (
        <h2 className="h2__topic">{heading}</h2>
    );
};

const H2TopicSideBar = (props) => {
    const {heading} = props;

    return (
        <>
            <h2 className="h2__topic--side-bar">{heading}</h2>
        </>
    );
};

const H3ArticlePrimary = (props) => {
    const {heading} = props;

    return (
        <>
            <h3 className="h3__article--primary">{heading}</h3>
        </>
    );
};

const H3ArticleSecondary = (props) => {
    const {heading} = props;

    return (
        <>
            <h3 className="h3__article--secondary">{heading}</h3>
        </>
    );
};

const H4ArticleContent = (props) => {
    const {content} = props;

    return (
        <>
            <h4 className="h4__article--content">{content}</h4>
        </>
    );
};

const PTopicSideBar = (props) => {
    const {content} = props;

    return (
        <>
            <p className="p__topic--sidebar">{content}</p>
        </>
    );
};

const PAuthorPublication = (props) => {
    const {author, publication} = props;

    return (
        <>
            <p className="p__author-publication">{author} in {publication}</p>
        </>
    );
};

const PMinRead = (props) => {
    const {minRead} = props;

    return (
        <>
            <p className="p__date-and-min-read">{minRead} min read</p>
        </>
    );
};

const PDateAndMinRead = (props) => {
    const {date, minRead} = props;

    return (
        <>
            <p className="p__date-and-min-read">{date} • {minRead} min read</p>
        </>
    );
};

export {H1Article, H2Topic, H2TopicSideBar, H3ArticlePrimary, H3ArticleSecondary, H4ArticleContent, PTopicSideBar, PAuthorPublication, PMinRead, PDateAndMinRead};
