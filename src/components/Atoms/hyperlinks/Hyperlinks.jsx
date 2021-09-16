import "./_hyperlinks.scss";

const HyperlinkTopic = (props) => {
    const {name, link} = props;

    return (
        <>
            <a className="hyperlink__topic" href={link}>{name}</a>
        </>
    )
};

const HyperlinkJoin = (props) => {
    const {name, link} = props;

    return (
        <>
            <a className="hyperlink__join" href={link}>{name}</a>
        </>
    )
};

const HyperlinkSignIn = (props) => {
    const {name, link} = props;

    return (
        <>
            <a className="hyperlink__sign-in" href={link}>{name}</a>
        </>
    );
};

const HyperlinkRelatedTopics = (props) => {
    const {name, link} = props;

    return (
        <>
            <a className="hyperlink__related-topics" href={link}>{name}</a>
        </>
    );
};

const HyperlinkAuthorPublication = (props) => {
    const {author, publication} = props;

    return (
        <>
            <a className="hyperlink__author-publication">{author} in {publication}</a>
        </>
    );
};

export {HyperlinkTopic, HyperlinkJoin, HyperlinkSignIn, HyperlinkRelatedTopics, HyperlinkAuthorPublication};