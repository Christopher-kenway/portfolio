import skyseer from "../src/assets/skyseer.png";
import moviebox from "../src/assets/moviebox.png";
import visio from "../src/assets/visio.png";
import fashion from '../src/assets/fashion.png'
import grocery from '../src/assets/grocery.png'

export const navigation = [
  { name: "projects", href: "projects" },
  { name: "about-me", href: "aboutme" },
  { name: "contacts", href: "contacts" },
];


export const Projects = [
  {
    title: "Skyseer",
    description:
      "Vanilla JS weather app utilizes OpenWeatherMap, Open-Meteo APIs.",
    tools: "HTML CSS JS",
    link: "https://sky-seer.vercel.app/",
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
    link: "https://image-gallery-cb37d.web.app/",
    imageUrl: visio,
  },
  {
    title: "Grocery-app",
    description:
      "E-commerce, product page, add more stuff and finish api integration dummy",
    tools: "react materialUI tailwindcss timbuAPI",
    link: "https://grocery-app-amber.vercel.app/",
    imageUrl: grocery,
  },
  {
    title: "Que-hero",
    description:
      "put sth that makes sense and bro correct site ya fool",
    tools: "HTML5 css",
    link: "https://que-hero.vercel.app/",
    imageUrl: visio,
  },
  {
    title: "Élégance Couturière",
    description:
      "fashion landing page... complete site ya fool",
    tools: "HTML5 css",
    link: "https://fashion-landing-page-teal.vercel.app/",
    imageUrl: fashion,
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
