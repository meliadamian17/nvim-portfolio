import React from 'react';
import Navbar from './Navbar';
import { TerminalProps } from '../props';

const Terminal: React.FC<TerminalProps> = ({ children, theme, navbarVisible, onToggleNavbar, onNavigate, onToggleTheme }) => {
  return (
    <div
      className="flex-1 p-4 overflow-auto hide-scrollbar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      {navbarVisible && (
        <Navbar
          sections={['home', 'about', 'projects', 'skills', 'contact', 'experience']}
          onNavigate={onNavigate}
          onToggleNavbar={onToggleNavbar}
          onToggleTheme={onToggleTheme}
          theme={theme}
          isVisible={navbarVisible}
        />
      )}
      <div className={`${navbarVisible ? 'pt-4' : ''}`}>
        {children}
      </div>
    </div >
  );
};

export default Terminal;

