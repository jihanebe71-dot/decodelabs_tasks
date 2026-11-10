
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    letsTalk: "Let's talk",

    available: "AVAILABLE FOR OPPORTUNITIES",
    hello: "Hello, I'm",
    role: "Full-Stack Developer",
    heroDescription: "I build clean, responsive and user-friendly digital experiences. I turn ideas into useful products with code and creativity.",
    viewWork: "Explore my work",
    contactMe: "Contact me",
    yearsLearning: "Years learning",
    projectsBuilt: "Projects to build",
    languages: "Languages",

    aboutLabel: "A LITTLE ABOUT MY JOURNEY",
    aboutTitle: "Beyond the code.",
    aboutSubtitle: "A little introduction to who I am and what drives me.",
    aboutTag: "MY JOURNEY",
    aboutCardTitle: "Learning today. Building for tomorrow.",
    aboutText: "I'm a second-year Développement Digital student at OFPPT, passionate about web development and technology. Through coursework and personal projects, I'm developing my skills in front-end and back-end development, databases, and responsive design. I enjoy learning by building, solving problems, and turning ideas into practical projects.",
    aboutTagOne: "Web Development",
    aboutTagTwo: "Problem Solving",
    aboutTagThree: "Continuous Learning",
    quote: "Every line of code is an opportunity to learn something new.",
    quoteAuthor: "MY MINDSET",
    aboutInfoOneTitle: "Education",
    aboutInfoOneText: "OFPPT · Développement Digital",
    aboutInfoTwoTitle: "Focus",
    aboutInfoTwoText: "Web Development",
    aboutInfoThreeTitle: "Mindset",
    aboutInfoThreeText: "Learn · Build · Improve",

    skillsLabel: "WHAT I WORK WITH",
    skillsTitle: "My toolbox.",
    skillsSubtitle: "The technologies and tools I use to bring ideas to life.",
    htmlDesc: "Semantic structure",
    cssDesc: "Responsive styling",
    jsDesc: "Interactive experiences",
    gitDesc: "Version control",

    projectsLabel: "SELECTED WORK",
    projectsTitle: "Featured projects.",
    projectOne: "Personal Portfolio",
    projectOneDesc: "A responsive space to introduce myself and showcase my work.",
    projectTwo: "Analytics Dashboard",
    projectTwoDesc: "A clean dashboard concept focused on layout and readability.",
    projectThree: "Weather Widget",
    projectThreeDesc: "A small interface concept exploring interactive components.",
    projectLink: "Discuss a similar project ↗",
    projectDisclaimer: "Note: These are portfolio concepts. Replace them with your completed projects and real GitHub links before publishing.",

    contactLabel: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's create something meaningful.",
    contactDescription: "Have an idea, a question or an opportunity? I'd be happy to hear from you.",
    footer: "Built with curiosity and code.",
    backTop: "Back to top ↑"
  },

  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navContact: "Contact",
    letsTalk: "Discutons",

    available: "DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS",
    hello: "Bonjour, je suis",
    role: "Développeuse Full-Stack",
    heroDescription: "Je crée des expériences numériques propres, responsives et faciles à utiliser. Je transforme les idées en produits utiles grâce au code et à la créativité.",
    viewWork: "Découvrir mes projets",
    contactMe: "Me contacter",
    yearsLearning: "Année d'apprentissage",
    projectsBuilt: "Projets à réaliser",
    languages: "Langues",

    aboutLabel: "MON PARCOURS",
    aboutTitle: "Au-delà du code.",
    aboutSubtitle: "Quelques mots pour me présenter et partager ma motivation.",
    aboutTag: "MON PARCOURS",
    aboutCardTitle: "Apprendre aujourd'hui. Construire demain.",
    aboutText: "Je suis étudiante en deuxième année en Développement Digital à l'OFPPT, passionnée par le développement web et les nouvelles technologies. À travers ma formation et mes projets personnels, je développe mes compétences en développement front-end et back-end, en bases de données et en design responsive. J'aime apprendre en pratiquant, résoudre des problèmes et transformer des idées en projets concrets.",
    aboutTagOne: "Développement Web",
    aboutTagTwo: "Résolution de problèmes",
    aboutTagThree: "Apprentissage continu",
    quote: "Chaque ligne de code est une occasion d'apprendre quelque chose de nouveau.",
    quoteAuthor: "MON ÉTAT D'ESPRIT",
    aboutInfoOneTitle: "Formation",
    aboutInfoOneText: "OFPPT · Développement Digital",
    aboutInfoTwoTitle: "Domaine",
    aboutInfoTwoText: "Développement Web",
    aboutInfoThreeTitle: "État d'esprit",
    aboutInfoThreeText: "Apprendre · Créer · Progresser",

    skillsLabel: "MES OUTILS",
    skillsTitle: "Ma boîte à outils.",
    skillsSubtitle: "Les technologies et outils que j'utilise pour donner vie aux idées.",
    htmlDesc: "Structure sémantique",
    cssDesc: "Styles responsives",
    jsDesc: "Expériences interactives",
    gitDesc: "Gestion de versions",

    projectsLabel: "TRAVAUX SÉLECTIONNÉS",
    projectsTitle: "Projets à la une.",
    projectOne: "Portfolio personnel",
    projectOneDesc: "Un espace responsive pour me présenter et montrer mes réalisations.",
    projectTwo: "Tableau de bord analytique",
    projectTwoDesc: "Un concept de tableau de bord clair, axé sur la mise en page et la lisibilité.",
    projectThree: "Widget météo",
    projectThreeDesc: "Un petit concept d'interface pour explorer les composants interactifs.",
    projectLink: "Parlons d'un projet similaire ↗",
    projectDisclaimer: "Remarque : ce sont des concepts de portfolio. Remplacez-les par vos projets terminés et vos vrais liens GitHub avant publication.",

    contactLabel: "UN PROJET EN TÊTE ?",
    contactTitle: "Créons quelque chose qui a du sens.",
    contactDescription: "Une idée, une question ou une opportunité ? Je serais ravie d'en discuter.",
    footer: "Créé avec curiosité et du code.",
    backTop: "Retour en haut ↑"
  }
};

const languageToggle = document.querySelector("#languageToggle");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

let currentLanguage = "en";

function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(translations[language], key)) {
      element.textContent = translations[language][key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "FR" : "EN";

    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Passer en français" : "Switch to English"
    );
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    setLanguage(newLanguage);
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

setLanguage("en");
