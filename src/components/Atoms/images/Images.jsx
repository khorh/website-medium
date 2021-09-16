import "./_images.scss";

const ImageArticleAvatar = (props) => {
    const {src, alt} = props;

    return (
        <>
            <img className="image__article--avatar" src={src} alt={alt} />
        </>
    );
};

const ImageArticleLatest = (props) => {
    const {src, alt} = props;

    return (
        <>
            <img className="image__article__latest" src={src} alt={alt} />
        </>
    );
};

const ImageArticlePopular = (props) => {
    const {src, alt} = props;

    return (
        <>
            <img className="image__article--popular" src={src} alt={alt} />
        </>
    );
};

export {ImageArticleAvatar, ImageArticleLatest, ImageArticlePopular};
