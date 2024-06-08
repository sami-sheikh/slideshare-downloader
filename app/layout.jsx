import { Analytics } from "@vercel/analytics/react";
import "normalize.css";
import { AppProvider } from "@/store";
import { Inter } from "next/font/google";
import "./css/globals.css";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SlideShare Downloader",
  description:
    "Effortlessly convert SlideShare presentations to PDF. Customize downloads by selecting specific pages. Convenient access to valuable content.",
  keywords: [
    "SlideShare",
    "PDF converter",
    "download",
    "downloader",
    "presentation",
    "document",
    "online",
    "user-friendly",
    "customization",
    "ease of use",
  ],
  meta: {
    charset: "utf-8",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: "1.0",
  maximumScale: "1.0",
  userScalable: "0",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "rgb(65, 49, 45)" },
    { media: "(prefers-color-scheme: dark)", color: "rgb(65, 49, 45)" },
  ],
};

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
];

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className={`${inter.className} pt-20`}>
          <Header links={navLinks} />
          {children}
          <Footer />
          <Analytics />
        </body>
      </html>
    </AppProvider>
  );
}
