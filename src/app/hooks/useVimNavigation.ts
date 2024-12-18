"use client";

import { useState, useCallback, KeyboardEvent } from "react";

const useVimNavigation = (content: string[]) => {
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

        setCursorPosition((prev) => {
          let newLine = prev.line;
          let newColumn = prev.column;

          switch (event.key) {
            case "h":
            case "ArrowLeft":
              newColumn = Math.max(0, prev.column - multiplier);
              break;
            case "j":
            case "ArrowDown":
              newLine = Math.min(content.length - 1, prev.line + multiplier);
              newColumn = Math.min(newColumn, content[newLine].length - 1);
              break;
            case "k":
            case "ArrowUp":
              newLine = Math.max(0, prev.line - multiplier);
              newColumn = Math.min(newColumn, content[newLine].length - 1);
              break;
            case "l":
            case "ArrowRight":
              newColumn = Math.min(
                content[newLine].length - 1,
                prev.column + multiplier,
              );
              break;
            case "w":
              for (let i = 0; i < multiplier; i++) {
                if (newColumn >= content[newLine].length - 1) {
                  if (newLine < content.length - 1) {
                    newLine++;
                    newColumn = 0;
                  }
                } else {
                  const restOfLine = content[newLine].slice(newColumn + 1);
                  const nextWordMatch = restOfLine.match(/\S+\s/);
                  if (nextWordMatch) {
                    newColumn +=
                      nextWordMatch.index! + nextWordMatch[0].length + 1;
                  } else {
                    newColumn = content[newLine].length - 1;
                  }
                }
              }
              break;
            case "b":
              for (let i = 0; i < multiplier; i++) {
                if (newColumn === 0) {
                  if (newLine > 0) {
                    newLine--;
                    newColumn = content[newLine].length - 1;
                  }
                } else {
                  const beforeCursor = content[newLine].slice(0, newColumn);
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
              newColumn = Math.max(0, content[newLine].length - 1);
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
            case "i":
              setMode("insert");
              break;
            case "v":
              setMode("visual");
              break;
            case ":":
              setCommandLineOpen(true);
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
