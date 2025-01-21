import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "../../context/ThemeContext";


export const metadata = {
  title: "Turky Bazar",
  description: "AsadShahi.........",
  htmlAttributes: {
    dir: "rtl",
    lang: "fa",
  },
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      
      <body
        className="text-[#4D4D4D]"
      >
        <ThemeProvider>

        {children}

        </ThemeProvider>
        
      </body>
    </html>
  );
}
