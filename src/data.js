import skyseer from "../src/assets/skyseer.png";
import moviebox from "../src/assets/moviebox.png";
import visio from "../src/assets/visio.png";

export const navigation = [
  { name: "home", href: "/" },
  { name: "works", href: "/works" },
  { name: "about-me", href: "/about-me" },
  { name: "contacts", href: "/contacts" },
];


export const Projects = [
  {
    title: "Skyseer",
    description:
      "Vanilla JS weather app utilizes OpenWeatherMap, Open-Meteo APIs.",
    tools: "HTML CSS JS",
    link: "sky-seer.vercel.app",
    imageUrl: skyseer,
  },
  {
    title: "Moviebox",
    description:
      "Vanilla JS weather app utilizes OpenWeatherMap, Open-Meteo APIs.",
    tools: "react firebase",
    link: "https://movie-app-273e2.web.app/",
    imageUrl: moviebox,
  },
  {
    title: "Visio",
    description:
      "Visionary photo-sharing platform. Upload. Curate. Enhance. Socialize.",
    tools: "react daisyUI tailwindcss firebase",
    link: "image-gallery-cb37d.web.app/",
    imageUrl: visio,
  },

];


 export  const skillContent = [
    {
      title: "Languages",
      tools: "Javascript Python TypeScript Lua",
    },
    {
      title: "Databases",
      tools: "SQLite Mongo POSTgreSQL Firebase",
    },
    {
      title: "Tools",
      tools:
        "VScode Bootstrap Tailwindcss MaterialUI DaisyUI FramerMotion GASP",
    },
    {
      title: "Other",
      tools: "HTML CSS SCSS RestAPI EJS",
    },
    {
      title: "Frameworks",
      tools: "ReactJS",
    },
  ];
