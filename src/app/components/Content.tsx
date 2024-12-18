import React, { useState, useEffect } from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';

interface ContentProps {
  section: string;
  cursorPosition: { line: number; column: number };
  theme: {
    background: string;
    foreground: string;
    cursor: string;
  };
}
export const Content: React.FC<ContentProps> = ({ section, cursorPosition, theme }) => {
  const content = {
    home: [
      "Welcome to my Neovim-inspired portfolio!",
      "Use 'hjkl' to navigate",
      "Press 'i' to enter insert mode",
      "Press 'v' to enter visual mode",
      "Press 'Esc' to return to normal mode",
      "Use ':' to open the command line",
      "Type a section name (home, about, projects, skills, contact) and press Enter to navigate",
      "Use ':theme' to change themes",
      " ",
      "Vim-like commands:",
      "w - move forward by word",
      "b - move backward by word",
      "^ - move to start of line",
      "$ - move to end of line",
      "gg - move to top of file",
      "G - move to bottom of file",
    ],
    about: [
      "About Me",
      " ",
      "I'm a passionate developer with a love for Vim and terminal-based applications.",
      "This portfolio showcases my skills in creating unique and interactive web experiences.",
      "I specialize in front-end development, with a focus on React and Next.js.",
      "When I'm not coding, you can find me contributing to open-source projects",
      "or exploring new technologies to expand my skill set.",
    ],
    projects: [
      "Projects",
      " ",
      "1. Vim-inspired Portfolio",
      "   - A unique, interactive portfolio website inspired by Neovim",
      "   - Built with React, Next.js, and TypeScript",
      "   - Implements Vim-like navigation and commands",
      " ",
      "2. CLI Task Manager",
      "   - A command-line interface for managing tasks and projects",
      "   - Built with Node.js and Commander.js",
      "   - Features data persistence and priority-based task sorting",
      " ",
      "3. Terminal-based Game",
      "   - A text-based adventure game playable in the terminal",
      "   - Built with Python and the curses library",
      "   - Implements procedural generation for endless gameplay",
    ],
    skills: [
      "Skills",
      " ",
      "Languages:",
      "- JavaScript (ES6+)",
      "- TypeScript",
      "- Python",
      "- HTML5",
      "- CSS3",
      " ",
      "Frameworks & Libraries:",
      "- React",
      "- Next.js",
      "- Node.js",
      "- Express.js",
      "- TailwindCSS",
      " ",
      "Tools & Platforms:",
      "- Git",
      "- Docker",
      "- AWS",
      "- Vercel",
      "- Vim/Neovim",
    ],
    contact: [
      "Contact",
      " ",
      "Email: example@email.com",
      "GitHub: github.com/example",
      "LinkedIn: linkedin.com/in/example",
      "Twitter: @example",
      " ",
      "Feel free to reach out for collaborations, job opportunities, or just to chat about tech!",
    ],
  };

  const [key, setKey] = useState(0);
  const sectionContent = content[section as keyof typeof content] || content.home;

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [section]);

  return (
    <div className="font-mono">
      {sectionContent.map((line, lineIndex) => (
        <div key={lineIndex} className="whitespace-pre relative">
          <Typewriter
            key={`${section}-${lineIndex}`}
            words={[line]}
            loop={1}
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={500}
          />
          {lineIndex === cursorPosition.line && (
            <span
              className="blinking-cursor absolute"
              style={{
                left: `${cursorPosition.column}ch`,
                backgroundColor: theme.cursor,
              }}
            >
              {' '}
            </span>
          )}
        </div>
      ))}
      {cursorPosition.line >= sectionContent.length && (
        <div className="whitespace-pre relative">
          <span
            className="blinking-cursor absolute"
            style={{
              backgroundColor: theme.cursor,
            }}
          >
            {' '}
          </span>
        </div>
      )}
    </div>
  );
};
