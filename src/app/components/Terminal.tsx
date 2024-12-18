import React from 'react';
import { TerminalProps } from '../props';

const Terminal: React.FC<TerminalProps> = ({ children, theme }) => {
  return (
    <div
      className="flex-1 p-4 overflow-auto"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      {children}
    </div>
  );
};

export default Terminal;

