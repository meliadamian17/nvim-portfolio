import React, { useEffect, useRef } from 'react';

interface ThemeModalProps {
  themes: Record<string, { background: string; foreground: string; cursor: string }>;
  currentTheme: string;
  setTheme: (theme: string) => void;
  onClose: () => void;
  onSave: (themeKey: string) => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({
  themes,
  currentTheme,
  setTheme,
  onClose,
  onSave,
}) => {
  const themeKeys = Object.keys(themes);
  const [selectedThemeIndex, setSelectedThemeIndex] = React.useState(
    themeKeys.indexOf(currentTheme)
  );
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
    switch (e.key) {
      case 'ArrowUp':
        setSelectedThemeIndex((prev) => (prev - 1 + themeKeys.length) % themeKeys.length);
        break;
      case 'ArrowDown':
        setSelectedThemeIndex((prev) => (prev + 1) % themeKeys.length);
        break;
      case 'Enter':
        onSave(themeKeys[selectedThemeIndex]);
        break;
      case 'Escape':
        onClose();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTheme(themeKeys[selectedThemeIndex]);
  }, [selectedThemeIndex, setTheme, themeKeys]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundColor: themes[themeKeys[selectedThemeIndex]].background,
        color: themes[themeKeys[selectedThemeIndex]].foreground,
      }}
      ref={modalRef}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <div
        className="p-4 rounded shadow-lg w-1/2 text-center"
        style={{
          backgroundColor: themes[themeKeys[selectedThemeIndex]].background,
          color: themes[themeKeys[selectedThemeIndex]].foreground,
        }}
      >
        <h2 className="text-lg font-bold mb-4">Select a Theme</h2>
        <ul className="space-y-2">
          {themeKeys.map((theme, index) => (
            <li
              key={theme}
              className={`p-2 cursor-pointer rounded ${index === selectedThemeIndex ? 'border-2 border-gray-300' : ''
                }`}
              style={{
                backgroundColor:
                  index === selectedThemeIndex
                    ? themes[theme].foreground
                    : themes[theme].background,
                color:
                  index === selectedThemeIndex
                    ? themes[theme].background
                    : themes[theme].foreground,
              }}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </li>
          ))}
        </ul>
        <p className="mt-4">Use ↑/↓ to navigate, Enter to select, Esc to close.</p>
      </div>
    </div>
  );
};

export default ThemeModal;

