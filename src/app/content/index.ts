import { ContentSections } from "../types";

export const content: ContentSections = {
  home: [
    { text: "Welcome to my Neovim-inspired portfolio!" },
    { text: "Use 'hjkl' (or arrow keys) to navigate" },
    { text: "Use ':' to open the command line" },
    {
      text: "Type a section name (home, about, projects, skills, contact) and press Enter to navigate",
    },
    { text: "Use ':theme' to change themes" },
    { text: " " },
    { text: "Vim commands:" },
    { text: "w - move forward by word" },
    { text: "b - move backward by word" },
    { text: "^ - move to start of line" },
    { text: "$ - move to end of line" },
    { text: "gg - move to top of file" },
    { text: "G - move to bottom of file" },
  ],
  about: [
    { text: "About Me" },
    { text: " " },
    {
      text: "I'm a passionate developer with a love for Vim and terminal-based applications.",
    },
    {
      text: "Currently pursuing an Honors Bachelor of Science in Computer Science at the University of Toronto.",
    },
    {
      text: "I specialize in software engineering, front-end development, and API design.",
    },
    {
      text: "My work demonstrates a focus on clean, efficient, and scalable solutions.",
    },
    {
      text: "I enjoy contributing to open-source projects and mentoring aspiring developers.",
    },
  ],
  projects: [
    { text: "Projects" },
    { text: " " },
    {
      text: "StudyBuddies",
      link: "https://github.com/meliadamian17/studybuddies",
    },
    {
      text: "   - A Go-powered app enabling real-time location tracking and messaging for study sessions.",
    },
    {
      text: "   - Integrated PostgreSQL for secure and efficient data management.",
    },
    { text: "   - Utilized WebSocket for seamless user communication." },
    { text: " " },
    { text: "Personal Portfolio Website", link: "https://damian717.com" },
    {
      text: "   - Built with NextJS, TailwindCSS, and Go for showcasing technical expertise.",
    },
    { text: "   - Includes a custom CMS for managing dynamic content." },
    {
      text: "   - Features a dynamic Articles section highlighting my industry insights.",
    },
    { text: " " },
    {
      text: "Stack Selector",
      link: "https://github.com/meliadamian17/stack-selector",
    },
    {
      text: "   - A web application for recommending technology stacks based on project needs.",
    },
    { text: "   - Leveraged Go and MongoDB for a robust backend." },
    {
      text: "   - Designed a responsive frontend with HTMX for real-time updates.",
    },
    { text: " " },
    {
      text: "ShopTrack",
      link: "https://github.com/meliadamian17/shoptrack",
    },
    { text: "   - Android e-commerce app for store owners and shoppers." },
    { text: "   - Built with Java and Firebase for robust order processing." },
  ],
  skills: [
    { text: "Skills" },
    { text: " " },
    { text: "Languages:" },
    {
      text: "- Java, Python, C, HTML, CSS, JavaScript, TypeScript, Golang, Swift",
    },
    { text: " " },
    { text: "Frameworks & Libraries:" },
    { text: "- React, NextJS, ExpressJS, NodeJS, TailwindCSS, HTMX" },
    { text: " " },
    { text: "Developer Tools:" },
    { text: "- Vite, Git, Linux, Bash, Kubernetes, Docker" },
  ],
  experience: [
    { text: "Experience" },
    { text: " " },
    { text: "Software Engineering Advisor - AVOLTA Inc (Aug 2024 - Present)" },
    {
      text: "   - Designed an API testing architecture that increased test coverage by 60%.",
    },
    {
      text: "   - Improved query performance by 30% and reduced redundancy by 20% with optimized database schemas.",
    },
    {
      text: "   - Mentored 3 interns, enhancing their efficiency and project contributions by 40%.",
    },
    { text: "   - Refactored APIs to improve modularity and maintainability." },
    { text: " " },
    {
      text: "Software Developer Intern - JDRF Electromag Engineering (Jan 2024 - Sep 2024)",
    },
    {
      text: "   - Implemented an automated Slack alert system, doubling team responsiveness.",
    },
    {
      text: "   - Refactored a critical software module, improving maintainability by 25%.",
    },
    { text: "   - Managed CI/CD pipelines, reducing deployment time by 15%." },
    {
      text: "   - Achieved 90% code coverage in unit testing and reduced runtime by 30%.",
    },
    { text: " " },
    {
      text: "Developer / Plugin Engineer - Treasurelands (Jul 2023 - Jan 2024)",
    },
    {
      text: "   - Developed and maintained 20+ Minecraft plugins, increasing player retention by 15%.",
    },
    {
      text: "   - Engineered a load-balancing proxy, improving connection speed by 30%.",
    },
    {
      text: "   - Managed databases for 10,000+ players, optimizing performance and stability.",
    },
    {
      text: "   - Boosted plugin performance by 25% with new technology integrations.",
    },
  ],
  contact: [
    { text: "Contact" },
    { text: " " },
    {
      text: "Email: damian@damian717.com",
      link: "mailto:damian@damian717.com",
    },
    {
      text: "GitHub: github.com/meliadamian17",
      link: "https://github.com/meliadamian17",
    },
    {
      text: "LinkedIn: linkedin.com/in/meliadamian",
      link: "https://linkedin.com/in/meliadamian",
    },
    { text: "Portfolio: damian717.com", link: "https://damian717.com" },
    { text: " " },
    {
      text: "Feel free to reach out for collaborations, job opportunities, or just to chat about tech!",
    },
  ],
};
