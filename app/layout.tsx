import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export type RootLayoutProps = {
  children: React.ReactNode;
};

const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/contract", label: "Contract" },
  { href: "/info", label: "Info" },
  { href: "/login", label: "Login" },
];

const TopNav: React.FC = () => {
  return (
    <nav className="pt-4 pb-4 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {navLinks.map((link: { href: string; label: string }) => (
              <Link key={link.href} href={link.href}>
                <span className="flex items-center py-5 px-2 text-gray-200 hover:text-gray-400 cursor-pointer font-bold">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TopNav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
