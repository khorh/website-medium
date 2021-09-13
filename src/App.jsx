import './App.scss';
import Nav from "./components/Organisms/Nav/Nav"
import FeaturedArticle from "./components/Organisms/FeaturedArticle/FeaturedArticle";
import LatestArticles from "./components/Organisms/LatestArticles/LatestArticles";
import articles from "./data/articles";

const App = () => {
    const featuredArticle = articles.filter(article => article.featured);

    const latestArticles = articles.filter(article => article.featured === false);

    return (
        <div>
            <Nav />
            <main className="main">
                <FeaturedArticle featuredArr={featuredArticle} />
                <LatestArticles  latestArr={latestArticles} />
            </main>
        </div>
    );
}

export default App;
