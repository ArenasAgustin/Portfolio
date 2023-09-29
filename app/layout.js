import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Agustin Arenas",
  description:
    "Hola, soy Agustín Arenas. Soy Full Stack Web Developer especializado en Front-end.",
  openGraph: {
    title: "Portfolio de Agustin Arenas",
    description:
      "Hola, soy Agustín Arenas. Soy Full Stack Web Developer especializado en Front-end.",
    url: "https://portfolio-agustin-arenas.vercel.app/",
    type: "website",
    siteName: "Portfolio de Agustin Arenas",
    images: [
      {
        url: "https://portfolio-agustin-arenas.web.app/img.png",
        width: 800,
        height: 600,
        alt: "Portfolio de Agustin Arenas",
      },
    ],
    locale: "es_ES",
  },
  authors: [{ name: "Agustin Arenas" }],
  keywords: [
    "React",
    "JavaScript",
    "Web",
    "Developer",
    "Front-end",
    "Full Stack",
    "Portfolio",
    "Agustin Arenas",
    "Programador",
    "Css",
    "Html",
    "Sass",
    "Scss",
    "Node",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
