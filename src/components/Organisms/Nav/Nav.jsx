import React from "react";
import "./_nav.scss";
import Logo from "../../Atoms/logo/Logo";
import { VerticalDivider } from "../../Atoms/dividers/Dividers";
import { HyperlinkTopic, HyperlinkJoin, HyperlinkSignIn } from "../../Atoms/hyperlinks/Hyperlinks";
import { ButtonPrimary } from "../../Atoms/buttons/Buttons";

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
                <ButtonPrimary label="Get started" />
            </div>
        </nav>
    )
}

export default Nav;