import React from "react";
import "./_typo.scss";

const H2TopicNav = (props) => {
    const { heading } = props;

    return (
        <h2 className="h2__topic--nav">{heading}</h2>
    );
};

const H2TopicSideBar = (props) => {
    const { heading } = props;

    return (
        <>
            <h2 className="h2__topic--side-bar">{heading}</h2>
        </>
    );
};

const PTopicSideBar = (props) => {
    const { content } = props;

    return (
        <>
            <p className="p__topic--sidebar">{content}</p>
        </>
    );
};

export { H2TopicNav, H2TopicSideBar, PTopicSideBar };
