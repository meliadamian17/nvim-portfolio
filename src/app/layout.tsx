import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({
  weight: "variable",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Damian Melia | Portfolio",
  description: "vim is cool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
