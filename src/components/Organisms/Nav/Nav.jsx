import React from "react";
import "./_nav.scss";
import Logo from "../../Atoms/logo/Logo";
import { HyperlinkTopic, HyperlinkJoin, HyperlinkSignIn } from "../../Atoms/hyperlinks/Hyperlinks";
import PrimaryButton from "../../Atoms/buttons/PrimaryButton/PrimaryButton";
import {VerticalDivider} from "../../Atoms/dividers/Dividers";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <Logo />
                <VerticalDivider />
                <HyperlinkTopic name="Programming" link="https://medium.com/topic/programming" />
            </div>
            <div className="nav-right">
                <HyperlinkJoin name="Become a member" link="https://medium.com/membership?source=upgrade_membership---nav_full----------------------------------" />
                <HyperlinkSignIn name="Sign In" link="https://medium.com/m/signin" />
                <PrimaryButton label="Get started" />
            </div>
        </nav>
    )
}

export default Nav;