 const portafolioData = [
  {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/react_org.webp",
    title: "portfolio",
    skills: ["React", "JavaScript"],
    excerpt:
      "",
    demoURL: "https://medo-fox1.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>هـذا <strong>بـورتـفـوليـو</strong> مـنـاسب ل تـعـريـف نـفـسـك بـشـكل <strong>مـمـيز</strong>. لانـه يـمـتاز بـشـكـل رائـع وتـصمـيم جـذاب جـدا. وفـيـه تـنـاصـق بـصـري مـمـيز, ويـمـكـنك عـرض خـدمـاتـك عـلـيه.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "Alura Geek",
    skills: ["JavaScript", "CSS"],
    excerpt: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
    demoURL: "https://alura-geek-ruddy.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>Alura Geek is a web application built with <strong>JavaScript</strong> and <strong>CSS</strong>. It allows users to browse and manage a collection of geek products, implementing CRUD operations and responsive layouts. Developed as part of the One Oracle Next Education Program.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "React ORG",
    skills: ["React", "CSS"],
    excerpt: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
    demoURL: "https://react-org-delta.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>React ORG is a team management app built with <strong>React</strong> and <strong>CSS</strong>. It showcases dynamic team creation, member assignment, and interactive UI elements. Created as a capstone project for the One Oracle Next Education Program.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "My Portfolio",
    skills: ["Astro", "React", "JavaScript"],
    excerpt: "Final project for the One Oracle Next Education Program. Educational programming video website demonstrating CRUD requests.",
    demoURL: "https://sofidev-portfolio-astro-delta.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>This portfolio site is built with <strong>Astro</strong>, <strong>React</strong>, and <strong>JavaScript</strong>. It highlights my projects, skills, and experience, featuring a modern design and fast performance. Developed as a showcase for the One Oracle Next Education Program.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "Eco Store",
    skills: ["Sass", "JavaScript"],
    excerpt: "Made with sass for the,Sass fundamentals course",
    demoURL: "https://sofidevo.github.io/eco-store-sass/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>Eco Store is an e-commerce landing page created with <strong>Sass</strong> and <strong>JavaScript</strong>. It demonstrates advanced Sass features and modular CSS architecture, built for the Sass Fundamentals course.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "fruto & Fruta",
    skills: ["Bootstrap", "JavaScript"],
    excerpt: "Made with Bootstrap for the, Bootstrap  course",
    demoURL: "https://sofidevo.github.io/bootstrap-curso/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>fruto & Fruta is a responsive website built with <strong>Bootstrap</strong> and <strong>JavaScript</strong>. It features modern layouts and interactive components, developed for the Bootstrap course.</p>`
  },
  {
    imgSrc:
      "https://cdn.outsideonline.com/wp-content/uploads/2023/03/Funny_Dog_H.jpg?crop=16:9&width=960&enable=upscale&quality=100",
    title: "Message Encryptor",
    skills: ["JavaScript", "CSS"],
    excerpt:
      "Incididunt amet proident id elit id excepteur  eiusmod esse consequat veniam. Eu reprehenderit quis deserunt ea non deserunt dolor consequat fugiat. \n\n Consectetur deserunt dolor do dolore occaecat reprehenderit ipsum ex.",
    demoURL: "https://sofidevo.github.io/encriptador-mensajes/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>Message Encryptor is a simple text encryption tool built with <strong>JavaScript</strong> and <strong>CSS</strong>. It allows users to encrypt and decrypt messages in the browser, featuring a clean and intuitive interface.</p>`
  },
];

export const skillIcons = {
  JavaScript: "skill-icons:javascript",
  React: "skill-icons:react-dark",
  Astro: "skill-icons:astro",
  CSS: "vscode-icons:file-type-css",
  Sass: "skill-icons:sass",
  StyledComponents: "skill-icons:styledcomponents",
  Bootstrap: "devicon:bootstrap",
  Tailwind: "skill-icons:tailwindcss-dark",
  NodeJs: "skill-icons:nodejs-dark",
  Express: "skill-icons:expressjs-dark",
  MySQL: "skill-icons:mysql-dark",
  Wordpress: "skill-icons:wordpress",
  HTML: "skill-icons:html",
  Vue: "skill-icons:vuejs-dark",
  GraphQL: "skill-icons:graphql-dark"
};
const skillsIconsMapped = portafolioData.map((item) => {
  return {
    ...item,
    skills: item.skills.map((skiil) => skillIcons[skiil]),
  };
});

export { portafolioData, skillsIconsMapped };
