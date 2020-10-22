import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "touyu.me", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is",
  name: "touyu",
  subtitle: "I'm just a developer.",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne: "CTO @ RINACITA, Inc.",
  paragraphTwo:
    "I develop iOS App with Swift, API with Go and GAN with Python.",
  paragraphThree: "",
  resume: "https://www.resumemaker.online/es.php", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "portannict.jpg",
    title: "Portannict",
    info: "Modern annict client app for iOS.",
    info2: "",
    url: "https://apps.apple.com/jp/app/portannict/id1205227187",
    repo: "https://github.com/touyu/Portannict", // if no repo, the button will not show up
  },
];

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/akkey0222",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/touyu",
    },
  ],
};
