import RecipeBlogGif from "./projects_gif/RecipeBlog.gif";
import IP from "./projects_gif/IP.png";
import PortfolioGif from "./projects_gif/Portfolio.gif";


export const projects = [
  {
    id: 1,
    img: RecipeBlogGif,
    title: "Recipe Blog",
    description:
      "Recipe Blog is a group project exercise and a full-stack web app. It was first built with a CMS (Contentful) as the backend and later on changed to PostgreSQL.",
    tools: "React.js, Node.js/Express.js, PostgreSQL, CSS3, git",
    link: "https://recipeblog-wbs.netlify.app/",
    github: "https://github.com/meikinski/Blog-Project",
  },
  {
    id: 2,
    img: IP,
    title: "IP Locator",
    description: "Simple IP locator with the goal to practice fetching APIs.",
    tools: "React.js, CSS3, git",
    link: "https://ip-locator-finder.netlify.app/",
    github: "https://github.com/flsk08/what-is-my-ip",
  },
  {
    id: 3,
    img: PortfolioGif,
    title: "Portfolio",
    description: "This is my portfolio website you are looking at right now :)",
    tools: "React.js, PostgreSQL, CSS3, git",
    link: "",
    github: "https://github.com/flsk08/Portfolio",
  },
];
