import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Firansibekan | Trade & Investment",
  description: "Firansibekan Trade and Investment — IT consulting, electromechanical works, and health and hospital solutions in Addis Ababa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
