import React, { useEffect, useRef } from 'react';
import { ThemeModalProps } from '../props';

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
  const [isMobile, setIsMobile] = React.useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }

    // Detect if on mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const handleThemeClick = (index: number) => {
    setSelectedThemeIndex(index);
    onSave(themeKeys[index]);
  };

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
        className="p-4 rounded shadow-lg w-11/12 md:w-1/2 text-center relative"
        style={{
          backgroundColor: themes[themeKeys[selectedThemeIndex]].background,
          color: themes[themeKeys[selectedThemeIndex]].foreground,
        }}
      >
        {/* Close Button for Mobile */}
        {isMobile && (
          <button
            className="absolute top-2 right-2 text-lg font-bold"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              color: themes[themeKeys[selectedThemeIndex]].foreground,
            }}
          >
            ×
          </button>
        )}

        <h2 className="text-lg font-bold mb-4">Select a Theme</h2>
        <ul className="space-y-2">
          {themeKeys.map((theme, index) => (
            <li
              key={theme}
              onClick={() => handleThemeClick(index)} // Make themes tappable
              className={`p-2 cursor-pointer rounded transition ${index === selectedThemeIndex ? 'border-2 border-gray-300' : ''
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
        <p className="mt-4">
          {isMobile
            ? 'Tap on a theme to select or press X to close.'
            : 'Use ↑/↓ to navigate, Enter to select, Esc to close.'}
        </p>
      </div>
    </div>
  );
};

export default ThemeModal;

