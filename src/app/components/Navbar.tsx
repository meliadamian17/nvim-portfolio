'use client';

import React, { useState } from 'react';
import { NavbarProps } from '../props';

const Navbar: React.FC<NavbarProps> = ({
  sections,
  onNavigate,
  onToggleTheme,
  theme,
  isVisible,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isVisible) return null;

  const handleOnMouseDown = (section: string) => {
    onNavigate(section);
    setMenuOpen(false);
  }

  return (
    <nav
      className={`w-full rounded-xl z-50 transition-all ${menuOpen ? 'pb-4 shadow-lg' : 'shadow-md'
        }`}
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
      }}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <h1
          className="text-xl font-semibold tracking-wide"
          style={{ color: theme.title }}
        >
          Damian Melia
        </h1>

        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-1 bg-current mb-1 rounded"></div>
          <div className="w-6 h-1 bg-current mb-1 rounded"></div>
          <div className="w-6 h-1 bg-current rounded"></div>
        </button>

        <ul className="hidden md:flex space-x-24 text-lg font-medium">
          {sections.map((section, index) => (
            <li
              key={index}
              onMouseDown={() => handleOnMouseDown(section)}
              className="cursor-pointer hover:opacity-90 hover:underline-offset-4 hover:underline transition-all"
              style={{ color: theme.foreground }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-opacity-95 w-full py-4 space-y-3 text-center transition-all duration-1000 ease-in-out">
          {sections.map((section, index) => (
            <li
              key={index}
              onMouseDown={() => handleOnMouseDown(section)}
              className="py-2 px-4 cursor-pointer hover:bg-opacity-90 transition-all"
              style={{
                backgroundColor: theme.background,
                color: theme.foreground,
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
          <li>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleTheme()

                setMenuOpen(false);
              }}
              className="w-11/12 mx-auto py-2 rounded text-sm font-medium transition-colors"
              style={{
                backgroundColor: theme.foreground,
                color: theme.background,
              }}
            >
              Change Theme
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

