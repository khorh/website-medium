import './App.scss';
import Nav from "./components/Organisms/Nav/Nav"
import ArticleFeatured from "./components/Organisms/ArticleFeatured/ArticleFeatured";
import ArticlesLatest from "./components/Organisms/ArticlesLatest/ArticlesLatest";
import SidebarTopic from "./components/Organisms/SidebarTopic/SidebarTopic";
import articles from "./data/articles";

const App = () => {
    const featuredArticle = articles.filter(article => article.featured);

    const latestArticles = articles.filter(article => article.featured === false);

    return (
        <div>
            <Nav />
            <main className="main">
                <section className="section-left">
                    <ArticleFeatured featuredArr={featuredArticle} />
                    <ArticlesLatest latestArr={latestArticles} />
                </section>
                <section className="section-right">
                    <SidebarTopic />
                </section>
            </main>
        </div>
    );
}

export default App;
