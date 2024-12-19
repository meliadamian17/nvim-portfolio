export interface Theme {
  background: string;
  foreground: string;
  cursor: string;
  title: string;
  lineNumber: string;
  instructions: string;
}

export interface ContentLine {
  text: string;
  link?: string;
}

export type Content = ContentLine[];

export interface ContentSections {
  [key: string]: ContentLine[];
}
