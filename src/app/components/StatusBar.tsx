import React from 'react';
import { StatusBarProps } from '../props';

const StatusBar: React.FC<StatusBarProps> = ({
  mode,
  currentSection,
  cursorPosition,
  theme,
}) => {
  return (
    <div
      className="absolute bottom-4 left-0 right-0 p-2 text-sm flex justify-between items-center"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)', // Adds separation from terminal content
      }}
    >
      <div className="flex items-center space-x-4">
        <span className="font-bold">{mode.toUpperCase()}</span>
        <span>{currentSection.charAt(0).toUpperCase() + currentSection.slice(1)}</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>
          Line {cursorPosition.line}, Col {cursorPosition.column}
        </span>
        <span>Neovim Portfolio</span>
      </div>
    </div>
  );
};

export default StatusBar;

