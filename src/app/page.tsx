'use client';

import { useState, useEffect, useRef } from 'react';
import Terminal from './components/Terminal';
import StatusBar from './components/StatusBar';
import useVimNavigation from './hooks/useVimNavigation';
import { Content } from './components/Content';
import CommandLine from './components/CommandLine';
import ThemeModal from './components/ThemeModal';
import { content } from './content';
import { themes } from './themes';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [theme, setTheme] = useState(themes.monokai);
  const [savedTheme, setSavedTheme] = useState(themes.monokai);
  const [navbarVisible, setNavbarVisible] = useState(false);

  const {
    mode,
    cursorPosition,
    setCursorPosition,
    handleKeyDown,
    commandLineOpen,
    setCommandLineOpen,
  } = useVimNavigation(content[currentSection as keyof typeof content]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const globalKeyDownHandler = (event: KeyboardEvent) => {
      if (commandLineOpen || showThemeModal) return;
      //@ts-ignore
      handleKeyDown(event);
    };

    window.addEventListener('keydown', globalKeyDownHandler);
    return () => {
      window.removeEventListener('keydown', globalKeyDownHandler);
    };
  }, [handleKeyDown, commandLineOpen, showThemeModal]);

  useEffect(() => {
    if (window.innerWidth < 640) {
      setNavbarVisible(true)
    } else {
      setNavbarVisible(false)
    }
  }, []);

  const handleCommand = (command: string) => {
    const cmd = command.replace(':', '');
    const validSections = ['home', 'about', 'projects', 'skills', 'contact', 'experience', 'navbar'];

    if (cmd === 'theme') {
      setShowThemeModal(true);
    } else if (cmd === 'navbar') {
      setNavbarVisible(!navbarVisible);
    } else if (!isNaN(Number(cmd))) {
      const lineNumber = parseInt(cmd, 10) - 1;
      const sectionContent = content[currentSection as keyof typeof content];
      setCursorPosition({
        line: Math.max(0, Math.min(lineNumber, sectionContent.length - 1)),
        column: 0,
      });
    } else if (validSections.includes(cmd)) {
      const newSectionContent = content[cmd as keyof typeof content];
      setCurrentSection(cmd);
      setCursorPosition({
        line: Math.min(cursorPosition.line, newSectionContent.length - 1),
        column: 0,
      });
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

  return (
    <div className="crt-wrapper h-screen flex">
      <div className="crt flex flex-col flex-1">
        <div
          className="flex flex-col h-full font-mono"
          style={{ backgroundColor: theme.background, color: theme.foreground }}
          ref={containerRef}
          tabIndex={0}
        >
          <Terminal
            theme={theme}
            navbarVisible={navbarVisible}
            onToggleNavbar={() => setNavbarVisible(!navbarVisible)}
            onNavigate={setCurrentSection}
          >
            <Content
              section={currentSection}
              cursorPosition={cursorPosition}
              theme={{
                ...theme,
                title: theme.title || '#000000',
                lineNumber: theme.lineNumber || '#888888',
                instructions: theme.instructions || '#555555',
              }}
            />
          </Terminal>
          <StatusBar
            mode={mode}
            currentSection={currentSection}
            cursorPosition={cursorPosition}
            theme={theme}
          />
          {commandLineOpen && (
            <CommandLine
              onCommand={handleCommand}
              theme={theme}
              setCursorPosition={setCursorPosition}
              sectionContent={content[currentSection as keyof typeof content]}
              onClose={() => setCommandLineOpen(false)}
            />
          )}
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
      </div>
    </div>
  );
}

