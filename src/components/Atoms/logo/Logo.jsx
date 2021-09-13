import React from "react";
import mediumLogo from "../../../assets/images/medium-logo.png";
import "./_logo.scss";

const Logo = () => {
    return (
        <>
            <img className="medium-logo" src={mediumLogo} alt="medium logo" />
        </>
    )
}

export default Logo;
