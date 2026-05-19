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
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/IMG_20260519_213511_869.webp",
    title: "WEB FOR DEVELOPERS",
    skills: ["JavaScript", "CSS"],
    excerpt: "A suitable website for programmers to introduce themselves and showcase their projects.",
    demoURL: "https://medofox.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>مـوقـع مـنـاسب لـلـمـبـرمـجـين لـعـرض الـمـشـاريع  وهـو مـصـنـوع بـ <strong>JavaScript</strong> و <strong>CSS</strong>. وايـضـا شـكـله مـمـيز والـوانـه, عـصـريـه بـ واجـهه امـامـيه فـخـمـه.</p>`
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/aluraFlix.webp",
    title: "Website Portfolio",
    skills: ["React", "CSS"],
    excerpt: "A great location for those looking for quiet spots with a smooth and harmonious design.",
    demoURL: "https://medo-hackerz.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>مـوقـع مـتـمـيـز بـ شـكـل هـادئ وجـذاب ومـصـنوع بـ <strong>React</strong> و <strong>CSS</strong>. ويـمـكنـك عـرض خـدمـاتـك عـلـي هـذا المـوقـع بـشـكـل مـنـصـق ومـنـظـم</p>`
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/alura_geek.webp",
    title: "Web business",
    skills: ["Astro", "React", "JavaScript"],
    excerpt: "A website designed to showcase a large collection of links and projects in an organized and attractive format. .",
    demoURL: "https:https://medonumber-1.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>موجود عـنـدك مـشـاريـع تـريـد رفـع روابـطـها فـي مـوقـع مـتـمـيـز ومـخـتـلف هـذا هـوا الـحـل المـناسـب.</p>`
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/SASS.webp",
    title: "Programming Web",
    skills: ["Sass", "JavaScript"],
    excerpt: "If you are a programmer and want to showcase your resume ",
    demoURL: "https://abdelhamed-fox.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>لـو مـبـرمـج وبـتـعـرض سـيـرتـك الـزاتـيـه ف ده حـلو اوي .</p>`
  },
   {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/portfolio.webp",
    title: "Social Media",
    skills: ["JavaScript", "CSS"],
    excerpt:
      "A suitable site for displaying contact links.",
    demoURL: "https://fox-media.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>مـوقـع مـنـاسب لـلبـلوجـرز لـعـرض روابـط حـسـاباتـهم بـشكـل مـنـصق ومـمـيز.</p>`
  },
  {
    imgSrc:
      "https://raw.githubusercontent.com/Abdelhamed-mohamed/File-pictures/refs/heads/main/FOX/BooststrapCurso.webp",
    title: "fruto & Fruta",
    skills: ["Bootstrap", "JavaScript"],
    excerpt: "I made it to preserve memories between me and my friends",
    demoURL: "https://fox-frends.vercel.app/",
    repoURL: "https://devabdelhamed.vercel.app/",
    description: `<p>هـذا المـوقع صـنـعـته مـن اجـل الـمـرح و لـتـخلـيـد اسـمـاء اصـدقـائي.</p>`
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
