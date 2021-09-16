import avatar from "../assets/images/avatar-thomas-smith.jpeg";
import centaurs from "../assets/images/article-centaurs.png";
import devops from "../assets/images/article-dev-ops.jpeg";
import hooks from "../assets/images/article-hooks.jpeg";
import swift from "../assets/images/article-swift.png";

const articles = [
    {
        heading: "Will OpenAI’s Codex Replace Human Programmers?",
        subHeading: "No, but centaurs might",
        avatar: avatar,
        author: "Thomas Smith",
        publication: "OneZero",
        datePosted: "Sept 11",
        minutesToRead: 7,
        membersOnlyContent: true,
        image: centaurs,
        alt: "centaur",
        content: "Earlier this month, Elon Musk’s artificial intelligence company OpenAI released Codex, a new system that automatically writes software code using only simple prompts written in plain language. Codex is based on GPT-3, a revolutionary deep learning platform that OpenAI trained on nearly all publicly available written text produced by humanity through 2019.",
        featured: true,
        claps: 100,
    },
    {
        heading: "How to add git hooks for your python projects using the pre-commit framework",
        subHeading: "",
        avatar: "",
        author: "Mathanraj Sharma",
        publication: "Python",
        datePosted: "Sept 16",
        minutesToRead: 4,
        membersOnlyContent: false,
        image: hooks,
        alt: "fish hook",
        content: "As a developer, we need to ensure readability, writability, and reliability of the program we are writing.  If we take a git repo multiple contributors write or modify hundreds of lines of codes each day, new contributors come in as few go out.",
        featured: false,
        claps: 50,
    },
    {
        heading: "Map, Filter, and Reduce in Swift",
        subHeading: "Do you want to improve your skills in functional programming with Swift? In this article, we will discuss popular higher-order functions such as map, filter, reduce, flatMap, and compactMap.",
        avatar: "",
        author: "Arman Abkar",
        publication: "Swifty",
        datePosted: "Sept 10",
        minutesToRead: 6,
        membersOnlyContent: false,
        image: swift,
        alt: "map, filter and reduce words",
        content: "Swift, like many other modern programming languages, has implemented some functional capabilities to its core. Unless you have experience with functional languages, you probably use more familiar for-in loops in most of your problems. In this article, We’re going to discuss High Order Functions, which will let you simplify your code when working with collection types such as Array, Dictionary or Set.",
        featured: false,
        claps: 10,
    },
    {
        heading: "Introduction to DevOps",
        subHeading: "",
        avatar: "",
        author: "Darshan Mandade",
        publication: "DevOps Control",
        datePosted: "Sept 1",
        minutesToRead: 7,
        membersOnlyContent: false,
        image: devops,
        alt: "process of devops",
        content: "DevOps (development and operations) is a collection of tools and technologies combined to carry out various business processes. It aims to bridge the gap between two of the most significant that play a significant role in defining DevOps.",
        featured: false,
        claps: 150,
    }
];

export default articles;