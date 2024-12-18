import React, { useEffect, useState } from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';
import { content } from '../content';
import { Navigation } from './Navigation';
import { ContentProps } from '../props';

export const Content: React.FC<ContentProps> = ({ section, cursorPosition, theme }) => {

  const sectionContent = content[section as keyof typeof content] || content.home;
  const [renderedKey, setRenderedKey] = useState(0);

  useEffect(() => {
    setRenderedKey((prev) => prev + 1);
  }, [section]);

  return (
    <div className="relative flex">
      <div className="w-3/4">
        {sectionContent.map((line, lineIndex) => (
          <div key={`${renderedKey}-${lineIndex}`} className="whitespace-pre flex relative">
            <span
              style={{
                color: theme.lineNumber,
              }}
            >
              {lineIndex + 1}.
            </span>
            <span className="ml-2 relative">
              <Typewriter
                key={`${renderedKey}-${lineIndex}`}
                words={[line]}
                loop={1}
                typeSpeed={40}
                deleteSpeed={30}
                delaySpeed={500}
              />
              {lineIndex === cursorPosition.line && (
                <span
                  className="blinking-cursor absolute"
                  style={{
                    left: `${cursorPosition.column}ch`,
                    backgroundColor: theme.cursor,
                  }}
                >
                  {' '}
                </span>
              )}
            </span>
          </div>
        ))}
      </div>

      <Navigation theme={theme} />
    </div>
  );
};

