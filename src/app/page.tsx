'use client';

import { useState, useEffect, useRef } from 'react';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import useVimNavigation from './hooks/useVimNavigation';
import { Content } from './components/Content';
import CommandLine from './components/CommandLine';
import ThemeModal from './components/ThemeModal';

const content = {
  home: [
    "Welcome to my Neovim-inspired portfolio!",
    "Use 'hjkl' to navigate",
    "Press 'i' to enter insert mode",
    "Press 'v' to enter visual mode",
    "Press 'Esc' to return to normal mode",
    "Use ':' to open the command line",
    "Use ':theme' to change themes",
    "Type a section name (home, about, projects, skills, contact) and press Enter to navigate",
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

const themes = {
  dark: {
    background: '#0a0a0a',
    foreground: '#ededed',
    cursor: '#00ff00',
  },
  light: {
    background: '#ffffff',
    foreground: '#000000',
    cursor: '#ff0000',
  },
  solarized: {
    background: '#002b36',
    foreground: '#839496',
    cursor: '#b58900',
  },
  dracula: {
    background: '#282a36',
    foreground: '#f8f8f2',
    cursor: '#50fa7b',
  },
  monokai: {
    background: '#272822',
    foreground: '#f8f8f2',
    cursor: '#f92672',
  },
  nord: {
    background: '#2e3440',
    foreground: '#d8dee9',
    cursor: '#88c0d0',
  },
  gruvbox: {
    background: '#282828',
    foreground: '#ebdbb2',
    cursor: '#fabd2f',
  },
  oceanic: {
    background: '#1B2B34',
    foreground: '#D8DEE9',
    cursor: '#6699CC',
  },
  material: {
    background: '#263238',
    foreground: '#FFFFFF',
    cursor: '#80CBC4',
  },
  nightOwl: {
    background: '#011627',
    foreground: '#D6DEEB',
    cursor: '#FFCC00',
  },
};
export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [theme, setTheme] = useState(themes.dark);
  const [savedTheme, setSavedTheme] = useState(themes.dark);

  const { mode, cursorPosition, setCursorPosition, handleKeyDown, commandLineOpen, setCommandLineOpen } =
    useVimNavigation(content[currentSection as keyof typeof content]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (containerRef.current && !commandLineOpen) {
      containerRef.current.focus();
    }
  }, [commandLineOpen, isClient]);

  const handleCommand = (command: string) => {
    const cmd = command.replace(':', '');
    const validSections = ['home', 'about', 'projects', 'skills', 'contact'];

    if (cmd === 'theme') {
      setShowThemeModal(true);
    } else if (validSections.includes(cmd)) {

      const newSectionContent = content[cmd as keyof typeof content];
      setCurrentSection(cmd);
      setCursorPosition((prev) => ({
        ...prev,
        line: Math.min(prev.line, newSectionContent.length - 1),
        column: 0,
      }));
    } else {
      console.error(`Invalid command: ${cmd}`);
    }

    setCommandLineOpen(false);
  };

  const closeModal = () => {
    setTheme(savedTheme);
    setShowThemeModal(false);
    containerRef.current?.focus();
  };

  const saveTheme = (themeKey: string) => {
    const newTheme = themes[themeKey];
    setSavedTheme(newTheme);
    setTheme(newTheme);
    setShowThemeModal(false);
    containerRef.current?.focus();
  };

  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-screen font-mono"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <Terminal theme={theme}>
        <Content section={currentSection} cursorPosition={cursorPosition} theme={theme} />
      </Terminal>
      <StatusBar
        mode={mode}
        currentSection={currentSection}
        cursorPosition={cursorPosition}
        theme={theme}
      />
      {commandLineOpen && <CommandLine onCommand={handleCommand} theme={theme} />}
      {showThemeModal && (
        <ThemeModal
          themes={themes}
          currentTheme={Object.keys(themes).find((key) => themes[key] === savedTheme) || 'dark'}
          setTheme={(themeKey: string) => setTheme(themes[themeKey])}
          onClose={closeModal}
          onSave={saveTheme}
        />
      )}
    </div>
  );
}
