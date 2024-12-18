export interface Theme {
  background: string;
  foreground: string;
  cursor: string;
  title: string;
  lineNumber: string;
  instructions: string;
}

export interface ContentSections {
  [key: string]: string[];
}
