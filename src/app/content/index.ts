import { ContentSections } from "../types";

export const content: ContentSections = {
  home: [
    { text: "Hey there, I'm Damian!" },
    { text: " " },
    {
      text: "Welcome to my Neovim (kinda) portfolio!",
    },
    { text: " " },
    {
      text: "This site isn't just for the sake of displaying my work. This is a represenation of my passions.",
    },
    {
      text: "Neovim made me re-love programming, and there's no better way for me to display what I've accomplished rather than paying homage to what got me here.",
    },
    {
      text: "Take a look around, check out my projects, or just mess with the commands for fun. Glad you stopped by!",
    },
    { text: " " },
    {
      text: "Check Out My Resume Here!",
      link: "https://damian-melia-resume.tiiny.site/",
    },
  ],

  about: [
    { text: "About Me" },
    { text: " " },
    {
      text: "Hey! I'm Damian, a software developer who’s big into building cool stuff and solving tricky problems.",
    },
    {
      text: "I’m studying Computer Science and Math at U of T, but honestly, most of my favorite learning comes from just writing code and seeing what breaks.",
    },
    {
      text: "I’m really into networks, distributed systems, and all things communication. Recently, I’ve been diving deeper into SRE, infrastructure, and tools that make developers' lives easier.",
    },
    {
      text: "Right now, Go and Elixir are the two pieces of tech I've been enjoying working with  — they're the languages that make me have fun, which is all that matters (luckily they fit right into the topics I enjoy lol)",
    },
    {
      text: "Outside of coding, I love finding ways to share what I know with others, whether it’s mentoring or collaborating on open-source projects.",
    },
    {
      text: "When I’m not staring at a terminal, I’m probably thinking about how to make something faster, better, or just a little cooler.",
    },
    {
      text: "Be sure to check out the other sections! Try :experience or :projects !",
    },
  ],
  projects: [
    { text: "Projects" },
    { text: " " },

    {
      text: "TCP Pool",
      link: "https://github.com/meliadamian17/tcppool",
    },
    { text: "Go" },
    { text: " " },
    {
      text: "   - A fully concurrent TCP connection pooling library written in Go.",
    },
    { text: " " },
    {
      text: "   - Optimized for high-performance applications with configurable pooling parameters.",
    },
    { text: " " },
    {
      text: "   - Handles concurrent client requests efficiently, minimizing connection overhead.",
    },
    { text: " " },
    {
      text: "   - Includes built-in safety mechanisms to handle pool exhaustion and failures gracefully.",
    },
    { text: " " },
    {
      text: "   - Ideal for microservices and distributed systems with scalability in mind.",
    },
    { text: " " },
    {
      text: "ScriptBox",
      link: "https://scriptbox.tech",
    },
    { text: "NextJS, Typescript, TailwindCSS, Prisma, SQLite, Docker" },
    { text: " " },
    {
      text: "   - A live online code editor and blogging platform with AI assistance.",
    },
    { text: " " },
    {
      text: "   - Built using NextJS, TypeScript, TailwindCSS, and Prisma for a modern stack.",
    },
    { text: " " },
    {
      text: "   - Includes real-time collaborative editing capabilities.",
    },
    { text: " " },
    {
      text: "   - Integrated OpenAI API for AI-powered suggestions and content generation.",
    },
    { text: " " },
    {
      text: "   - Deployed and managed on a scalable cloud infrastructure.",
    },
    { text: " " },
    {
      text: "BootstrapMe",
      link: "https://github.com/meliadamian17/bootstrapme",
    },
    { text: "Go" },
    { text: " " },
    {
      text: "   - A universal project bootstrapping CLI tool written in Go.",
    },
    { text: " " },
    {
      text: "   - Supports custom, predefined bootstrapping configurations for various project types.",
    },
    { text: " " },
    {
      text: "   - Simplifies project initialization for teams by enforcing standardized templates.",
    },
    { text: " " },
    {
      text: "   - Extensible design allows users to define and share their own configurations.",
    },
    { text: " " },
    {
      text: "   - Built with performance and developer productivity in mind.",
    },
    { text: " " },

    {
      text: "StudyBuddies",
      link: "https://github.com/UofT-UTSC-CS-sandbox/StudyBuddies",
    },
    { text: "Go, React Native, PostgreSQL" },
    { text: " " },
    {
      text: "   - A Go-powered app enabling real-time location tracking and messaging for study sessions.",
    },
    { text: " " },
    {
      text: "   - Integrated PostgreSQL for secure and efficient data management.",
    },
    { text: " " },
    { text: "   - Utilized WebSocket for seamless user communication." },
    { text: " " },

    {
      text: "Neovim-Inspired Portfolio Website",
      link: "https://damian717.com",
    },
    { text: "NextJS, Typescript" },
    { text: " " },
    {
      text: "   - A fully interactive, Neovim-inspired portfolio built with NextJS, TailwindCSS, FROM SCRATCH!",
    },
    { text: " " },
    {
      text: "   - Features Vim-style navigation, a customizable theme, and command-line functionality.",
    },
    { text: " " },
    {
      text: "   - Includes a Help section and dynamic visual elements to showcase technical expertise and creativity.",
    },
    { text: " " },
    {
      text: "   - Highlights personal projects and industry insights in a uniquely engaging format.",
    },

    { text: " " },
    {
      text: "Stack Selector",
      link: "https://github.com/meliadamian17/stack-selector",
    },
    { text: "Go, HTMX, MongoDB" },
    { text: " " },
    {
      text: "   - A web application for recommending technology stacks based on project needs.",
    },
    { text: " " },
    { text: "   - Leveraged Go and MongoDB for a robust backend." },
    { text: " " },
    {
      text: "   - Designed a responsive frontend with HTMX for real-time updates.",
    },
    { text: " " },
    {
      text: "ShopTrack",
      link: "https://github.com/meliadamian17/shoptrack",
    },
    { text: "Java, Firebase, AndroidStudio" },
    { text: " " },
    { text: "   - Android e-commerce app for store owners and shoppers." },
    { text: " " },
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
    {
      text: "View My Resume",
      link: "https://damian-melia-resume.tiiny.site/",
    },
    { text: " " },
    { text: "Software Engineering Advisor - AVOLTA Inc (Aug 2024 - Present)" },
    { text: " " },
    {
      text: "   - Designed an API testing architecture that increased test coverage by 60%.",
    },
    { text: " " },
    {
      text: "   - Improved query performance by 30% and reduced redundancy by 20% with optimized database schemas.",
    },
    { text: " " },
    {
      text: "   - Mentored 3 interns, enhancing their efficiency and project contributions by 40%.",
    },
    { text: " " },
    { text: "   - Refactored APIs to improve modularity and maintainability." },
    { text: " " },
    {
      text: "Software Developer Intern - JDRF Electromag Engineering (Jan 2024 - Sep 2024)",
    },
    { text: " " },
    {
      text: "   - Implemented an automated Slack alert system, doubling team responsiveness.",
    },
    { text: " " },
    {
      text: "   - Refactored a critical software module, improving maintainability by 25%.",
    },
    { text: " " },
    { text: "   - Managed CI/CD pipelines, reducing deployment time by 15%." },
    { text: " " },
    {
      text: "   - Achieved 90% code coverage in unit testing and reduced runtime by 30%.",
    },
    { text: " " },
    {
      text: "Developer / Plugin Engineer - Treasurelands (Jul 2023 - Jan 2024)",
    },
    { text: " " },
    {
      text: "   - Developed and maintained 20+ Minecraft plugins, increasing player retention by 15%.",
    },
    { text: " " },
    {
      text: "   - Engineered a load-balancing proxy, improving connection speed by 30%.",
    },
    { text: " " },
    {
      text: "   - Managed databases for 10,000+ players, optimizing performance and stability.",
    },
    { text: " " },
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
