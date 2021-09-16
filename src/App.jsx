import './App.scss';
import Nav from "./components/Organisms/Nav/Nav"
import ArticleFeatured from "./components/Molecules/ArticleFeatured/ArticleFeatured";
import ArticlesLatest from "./components/Molecules/ArticlesLatest/ArticlesLatest";
import Sidebar from "./components/Organisms/Sidebar/Sidebar";
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
                    <Sidebar />
                </section>
            </main>
        </div>
    );
}

export default App;
