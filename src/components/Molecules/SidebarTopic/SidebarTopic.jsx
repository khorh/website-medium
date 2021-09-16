import "./_sidebarTopic.scss";
import {H2TopicSideBar, PTopicSideBar} from "../../Atoms/typo/Typo";
import {ButtonSecondary} from "../../Atoms/buttons/Buttons";

const SidebarTopic = () => {
    return (
        <>
            <div className="sidebar__topic">
                <H2TopicSideBar heading="Programming" />
                <PTopicSideBar content="The good, the bad, the buggy." />
                <ButtonSecondary label="Follow"/>
                <PTopicSideBar content="Follow to see more stories about Programming on your homepage and in your Medium Daily Digest" />
            </div>
        </>
    );
};

export default SidebarTopic;
