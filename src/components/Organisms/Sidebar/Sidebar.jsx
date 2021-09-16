import SidebarTopic from "../../Molecules/SidebarTopic/SidebarTopic";
import SidebarTopicsRelated from "../../Molecules/SidebarTopicsRelated/SidebarTopicsRelated";
import SidebarArticlesPopular from "../../Molecules/SidebarArticlesPopular/SidebarArticlesPopular";
import data from "../../../data/articles";

const Sidebar = () => {
    const highestClappedArticles = data.filter(article => article).sort((a, b) => b.claps - a.claps).slice(0, 3);

    return (
        <aside>
            <SidebarTopic />
            <SidebarTopicsRelated />
            <SidebarArticlesPopular articlesArr={highestClappedArticles} />
        </aside>
    );
};

export default Sidebar;
