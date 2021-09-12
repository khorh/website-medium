import React from "react";
import "./_hyperlinks.scss";

const HyperlinkTopic = (props) => {
    const { name, link } = props;

    return (
        <>
            <a className="hyperlink-topic" href={link}>{name}</a>
        </>
    )
};

const HyperlinkJoin = (props) => {
    const { name, link } = props;

    return (
        <>
            <a className="hyperlink-join" href={link}>{name}</a>
        </>
    )
};

const HyperlinkSignIn = (props) => {
    const { name, link } = props;

    return (
      <>
          <a className="hyperlink-sign-in" href={link}>{name}</a>
      </>
    );
};

export { HyperlinkTopic, HyperlinkJoin, HyperlinkSignIn };