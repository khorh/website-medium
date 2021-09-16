import "./_sidebarTopicsRelated.scss";
import {H2Topic} from "../../Atoms/typo/Typo";
import {HyperlinkRelatedTopics} from "../../Atoms/hyperlinks/Hyperlinks";

const SidebarTopicsRelated = () => {
    return (
        <div className="sidebar__related-topics-container">
            <H2Topic heading="RELATED TOPICS" />
            <div className="sidebar__related-topics-list">
                <HyperlinkRelatedTopics name="JAVASCRIPT" link="https://medium.com/topic/javascript" />
                <HyperlinkRelatedTopics name="SOFTWARE ENGINEERING" link="https://medium.com/topic/software-engineering" />
                <HyperlinkRelatedTopics name="DATA SCIENCE" link="https://medium.com/topic/data-science" />
                <HyperlinkRelatedTopics name="UX" link="https://medium.com/topic/ux" />
                <HyperlinkRelatedTopics name="MATH" link="https://medium.com/topic/math" />
            </div>
        </div>
    );
};

export default SidebarTopicsRelated;
