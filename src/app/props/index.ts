export interface ContentProps {
  section: string;
  cursorPosition: { line: number; column: number };
  theme: {
    background: string;
    foreground: string;
    cursor: string;
    title: string;
    lineNumber: string;
    instructions: string;
  };
}
export interface CommandLineProps {
  onCommand: (command: string) => void;
  onClose: () => void;
  setCursorPosition: (position: { line: number; column: number }) => void;
  sectionContent: string[];
  theme: {
    background: string;
    foreground: string;
    cursor: string;
  };
}

export interface NavigationProps {
  theme: {
    background: string;
    foreground: string;
    cursor: string;
    title: string;
    lineNumber: string;
    instructions: string;
  };
}

export interface StatusBarProps {
  mode: string;
  currentSection: string;
  cursorPosition: { line: number; column: number };
  theme: {
    background: string;
    foreground: string;
    cursor: string;
  };
}

export interface ThemeModalProps {
  themes: Record<
    string,
    { background: string; foreground: string; cursor: string }
  >;
  currentTheme: string;
  setTheme: (theme: string) => void;
  onClose: () => void;
  onSave: (themeKey: string) => void;
}

export interface TerminalProps {
  children: React.ReactNode;
  theme: {
    background: string;
    foreground: string;
    cursor: string;
  };
}
