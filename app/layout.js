import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Front-End Entwickler Marc-Constantin Enke",
  description:
    "Marc-Constantin Enke - Front-End Entwickler mit Spezialisierung auf moderne Javascript-Frameworks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
