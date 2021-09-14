import React from "react";
import "./_buttons.scss";

const Buttons = (props) => {
    const { label } = props;

    return(
        <>
            <button className="button__primary">{label}</button>
        </>
    );
};

const ButtonSecondary = () => {
    return (
        <>
            <button className="button__secondary"></button>
        </>
    );
};

export default Buttons;
