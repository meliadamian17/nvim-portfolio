"use client";

import { useState, useCallback, KeyboardEvent } from "react";
import { Content } from "../types";

const useVimNavigation = (content: Content) => {
  const [mode, setMode] = useState("normal");
  const [cursorPosition, setCursorPosition] = useState({ line: 0, column: 0 });
  const [commandLineOpen, setCommandLineOpen] = useState(false);
  const [lastKeyPressed, setLastKeyPressed] = useState("");
  const [prefix, setPrefix] = useState<number>(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (commandLineOpen) {
        if (event.key === "Escape") {
          setCommandLineOpen(false);
        }
        return;
      }

      if (mode === "normal") {
        if (/\d/.test(event.key)) {
          setPrefix((prev) => prev * 10 + parseInt(event.key, 10));
          return;
        }

        const multiplier = prefix > 0 ? prefix : 1;
        setPrefix(0);

        const blockSize = Math.max(Math.floor(content.length / 10), 1);

        setCursorPosition((prev) => {
          let newLine = prev.line;
          let newColumn = prev.column;

          switch (event.key) {
            case "h":
            case "ArrowLeft":
              event.preventDefault();
              newColumn = Math.max(0, prev.column - multiplier);
              break;
            case "j":
            case "ArrowDown":
              event.preventDefault();
              newLine = Math.min(content.length - 1, prev.line + multiplier);
              newColumn = Math.min(newColumn, content[newLine].text.length - 1);
              break;
            case "k":
            case "ArrowUp":
              event.preventDefault();
              newLine = Math.max(0, prev.line - multiplier);
              newColumn = Math.min(newColumn, content[newLine].text.length - 1);
              break;
            case "l":
            case "ArrowRight":
              event.preventDefault();
              newColumn = Math.min(
                content[newLine].text.length - 1,
                prev.column + multiplier,
              );
              break;
            case "w":
              for (let i = 0; i < multiplier; i++) {
                if (newColumn >= content[newLine].text.length - 1) {
                  if (newLine < content.length - 1) {
                    newLine++;
                    newColumn = 0;
                  }
                } else {
                  const restOfLine = content[newLine].text.slice(newColumn + 1);
                  const nextWordMatch = restOfLine.match(/\S+\s/);
                  if (nextWordMatch) {
                    newColumn +=
                      nextWordMatch.index! + nextWordMatch[0].length + 1;
                  } else {
                    newColumn = content[newLine].text.length - 1;
                  }
                }
              }
              break;
            case "b":
              for (let i = 0; i < multiplier; i++) {
                if (newColumn === 0) {
                  if (newLine > 0) {
                    newLine--;
                    newColumn = content[newLine].text.length - 1;
                  }
                } else {
                  const beforeCursor = content[newLine].text.slice(
                    0,
                    newColumn,
                  );
                  const prevWordMatch = beforeCursor.match(/\S+\s*$/);
                  if (prevWordMatch) {
                    newColumn = prevWordMatch.index!;
                  } else {
                    newColumn = 0;
                  }
                }
              }
              break;
            case "^":
              newColumn = 0;
              break;
            case "$":
              newColumn = Math.max(0, content[newLine].text.length - 1);
              break;
            case "g":
              if (lastKeyPressed === "g") {
                newLine = 0;
                newColumn = 0;
                setLastKeyPressed("");
              } else {
                setLastKeyPressed("g");
              }
              break;
            case "G":
              newLine = content.length - 1;
              newColumn = 0;
              break;
            case ":":
              setCommandLineOpen(true);
              break;
            case "d":
              if (event.ctrlKey) {
                event.preventDefault();
                newLine = Math.min(content.length - 1, prev.line + blockSize);
              }
              break;
            case "u":
              if (event.ctrlKey) {
                event.preventDefault();
                newLine = Math.max(0, prev.line - blockSize);
              }
              break;
            case "Enter":
              const currentLine = content[newLine];
              if (currentLine.link) {
                window.open(currentLine.link, "_blank");
              }
              break;
            default:
              setLastKeyPressed("");
          }

          return { line: newLine, column: newColumn };
        });
      } else if (event.key === "Escape") {
        setMode("normal");
      }
    },
    [mode, commandLineOpen, content, lastKeyPressed, prefix],
  );

  return {
    mode,
    cursorPosition,
    setCursorPosition,
    handleKeyDown,
    commandLineOpen,
    setCommandLineOpen,
  };
};

export default useVimNavigation;
