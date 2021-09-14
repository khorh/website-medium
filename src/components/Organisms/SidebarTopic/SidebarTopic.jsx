import React from "react";
import "./_sidebarTopic.scss";
import {H2TopicSideBar, PTopicSideBar} from "../../Atoms/typo/Typo";

const SidebarTopic = () => {
    return (
        <div className="topic">
            <H2TopicSideBar heading="Programming" />
            <PTopicSideBar content="The good, the bad, the buggy." />
            <button>Follow</button>
            <PTopicSideBar content="Follow to see more stories about Programming on your homepage and in your Medium Daily Digest" />
        </div>
    );
};

export default SidebarTopic;