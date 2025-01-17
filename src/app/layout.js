import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../context/ThemeContext";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Turky Bazar",
  description: "AsadShahi.........",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="fa">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>

        {children}

        </ThemeProvider>
        
      </body>
    </html>
  );
}