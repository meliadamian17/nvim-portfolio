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
      link: "/damian-melia-resume.pdf",
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
      link: "/damian-melia-resume.pdf",
    },
    { text: " " },
    { text: "Software Engineer - JDRF Electromag Engineering (November 2025 - Present)" },
    { text: " " },
    {
      text: "   - Built automation tools for field agents to interface with products using Python, improving customer service experience and reducing response times.",
    },
    { text: " " },
    {
      text: "   - Contributed to internal testing tool enabling developers to easily test product configurations using Protobuf and BLE through Nordic dev boards.",
    },
    { text: " " },
    {
      text: "   - Built monitoring system for CI/CD and logging infrastructure using Prometheus and Grafana, tracking internal processes with custom metrics and automating provisioning via Azure Pipelines and Ansible.",
    },
    { text: " " },
    { text: "Software Developer Intern - Bank of Montreal (BMO) (January 2025 - December 2025)" },
    { text: " " },
    {
      text: "   - Migrated OpenAPI Cloud API across teams, converting from JavaScript to TypeScript while implementing software engineering best practices for improved maintainability.",
    },
    { text: " " },
    {
      text: "   - Optimized Angular/Typescript micro frontend build scripts, reducing build & deployment times by 30%.",
    },
    { text: " " },
    {
      text: "   - Developed key features for commercial banking web app using Typescript and Angular, improving reporting & account management workflows.",
    },
    { text: " " },
    { text: "Research Software Engineer — View - UofT, UofM, USC, Harvard University (January 2025 - August 2025)" },
    { text: " " },
    {
      text: "   - Developed full-stack \"Sketch-then-Generate\" platform using Typescript, React, and Python, converting NLP to code via custom markup.",
    },
    { text: " " },
    {
      text: "   - Engineered custom language & parser in Python for structured code generation from natural language.",
    },
    { text: " " },
    {
      text: "   - Built intelligent autocomplete with AST parsing & LSP integration using Typescript for context-aware code generation.",
    },
    { text: " " },
    { text: "Software Engineering Advisor - AVOLTA Inc (August 2024 - January 2025)" },
    { text: " " },
    {
      text: "   - Architected API testing framework using Javascript (Jest), boosting test coverage by 60%.",
    },
    { text: " " },
    {
      text: "   - Engineered PostgreSQL DB schemas, improving query performance by 30% & cutting data redundancy by 20%.",
    },
    { text: " " },
    {
      text: "   - Mentored 3 interns in software design, key resources, and code reviews, fostering their technical growth.",
    },
    { text: " " },
    {
      text: "Software Developer Intern - JDRF Electromag Engineering (January 2024 - September 2024)",
    },
    { text: " " },
    {
      text: "   - Implemented automated Slack alerts for CI/CD using Python with Github Actions, increasing team responsiveness by 90%.",
    },
    { text: " " },
    {
      text: "   - Led refactoring of a core Swift module, greatly enhancing code modularity.",
    },
    { text: " " },
    {
      text: "   - Managed CI/CD pipelines (Github Actions), cutting deployment time by 15% & achieving 90% test coverage.",
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
