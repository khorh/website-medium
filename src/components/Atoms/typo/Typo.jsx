import React from "react";
import "./_typo.scss";

const TypoH2 = (props) => {
    const { heading } = props;

    return (
        <h2 className="h2">{heading}</h2>
    );
};


export { TypoH2 };
