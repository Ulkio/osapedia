import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osapedia",
  description: "Le guide pour votre aventure Osatopia 2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body className="text-white">
        <Header />
        <main className="flex flex-col items-center min-h-screen py-4 px-44">
          <div className="flex bg-primary-blue px-16 border-primary-yellow border rounded-md h-[90vh] w-full">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
