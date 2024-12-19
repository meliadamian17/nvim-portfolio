import React, { useEffect, useState } from "react";
import { Typewriter } from "nextjs-simple-typewriter";
import { content } from "../content";
import { Navigation } from "./Navigation";
import { ContentProps } from "../props";

export const Content: React.FC<ContentProps> = ({ section, cursorPosition, theme }) => {
  const sectionContent = content[section as keyof typeof content] || content.home;
  const [renderedKey, setRenderedKey] = useState(0);

  useEffect(() => {
    setRenderedKey((prev) => prev + 1);
  }, [section]);

  return (
    <div className="relative flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-4">
        {sectionContent.map((line, index) => (
          <div key={`${renderedKey}-${index}`} className="whitespace-pre-wrap flex items-start">
            <span
              className="text-right"
              style={{
                color: theme.lineNumber,
                width: "3ch",
                textAlign: "right",
                display: "inline-block",
              }}
            >
              {index + 1}.
            </span>

            <span className="ml-2 relative w-full">
              {line.link ? (
                <a
                  href={line.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: theme.foreground,
                    textDecoration: "underline",
                  }}
                >
                  <Typewriter
                    key={`${renderedKey}-${index}`}
                    words={[line.text]}
                    loop={1}
                    typeSpeed={40}
                    deleteSpeed={30}
                    delaySpeed={500}
                  />
                </a>
              ) : (
                <Typewriter
                  key={`${renderedKey}-${index}`}
                  words={[line.text]}
                  loop={1}
                  typeSpeed={40}
                  deleteSpeed={30}
                  delaySpeed={500}
                />
              )}

              {index === cursorPosition.line && (
                <span
                  className="blinking-cursor absolute"
                  style={{
                    left: `${cursorPosition.column}ch`,
                    backgroundColor: theme.cursor,
                  }}
                >
                  {" "}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <Navigation theme={theme} />
      </div>
    </div>
  );
};

