import React from "react";
import "./_primaryButton.scss";

const PrimaryButton = (props) => {
    const { label } = props;

    return(
        <>
            <button className="primary-button">{label}</button>
        </>
    );
};

export default PrimaryButton;
