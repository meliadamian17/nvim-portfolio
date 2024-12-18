import React from 'react';

interface StatusBarProps {
  mode: string;
  currentSection: string;
  cursorPosition: { line: number; column: number };
  theme: {
    background: string;
    foreground: string;
    cursor: string;
  };
}

const StatusBar: React.FC<StatusBarProps> = ({
  mode,
  currentSection,
  cursorPosition,
  theme,
}) => {
  return (
    <div
      className="p-1 flex justify-between items-center text-sm"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
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

