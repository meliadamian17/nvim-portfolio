'use client';

import React, { useState, useRef, useEffect } from 'react';
import { CommandLineProps } from '../props';

const CommandLine: React.FC<CommandLineProps> = ({
  onCommand,
  onClose,
  setCursorPosition,
  sectionContent,
  theme,
}) => {
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  const validCommands = ['home', 'about', 'projects', 'skills', 'contact', 'theme', 'experience'];

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCommand(value);

    const trimmedValue = value.startsWith(':') ? value.slice(1) : value;

    if (value === ':') {
      setSuggestions(validCommands);
    } else if (trimmedValue.trim()) {
      setSuggestions(
        validCommands.filter((cmd) =>
          cmd.toLowerCase().startsWith(trimmedValue.toLowerCase())
        )
      );
    } else {
      setSuggestions([]);
    }

    setHistoryIndex(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setCommand('');
      setSuggestions([]);
      setHistoryIndex(null);
      onClose();
    } else if (e.key === 'ArrowUp') {
      if (historyIndex === null && commandHistory.length > 0) {
        setHistoryIndex(commandHistory.length - 1);
        setCommand(commandHistory[commandHistory.length - 1]);
      } else if (historyIndex !== null && historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setCommand(commandHistory[historyIndex - 1]);
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== null) {
        if (historyIndex < commandHistory.length - 1) {
          setHistoryIndex(historyIndex + 1);
          setCommand(commandHistory[historyIndex + 1]);
        } else {
          setHistoryIndex(null);
          setCommand(':');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        setCommand(`:${suggestions[0]}`);
        setSuggestions([]);
      }
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCommand(`:${suggestion}`);
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lineCommandMatch = command.match(/^:(\d+)$/);
    if (lineCommandMatch) {
      const lineNumber = parseInt(lineCommandMatch[1], 10) - 1;
      setCursorPosition({
        line: Math.max(0, Math.min(lineNumber, sectionContent.length - 1)),
        column: 0,
      });
      onClose();
    } else if (command.trim()) {
      onCommand(command);

      setCommandHistory((prev) => [...prev, command]);
    }

    setCommand(':');
    setSuggestions([]);
    setHistoryIndex(null);
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-2"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      {suggestions.length > 0 && (
        <ul
          className="absolute bottom-full left-0 w-full text-sm z-10 mb-1"
          style={{
            backgroundColor: theme.foreground,
            color: theme.background,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-2 py-1 cursor-pointer hover:opacity-80"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none w-full"
        />
      </form>
    </div>
  );
};

export default CommandLine;

