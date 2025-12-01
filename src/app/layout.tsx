import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";

const switzer = localFont({
  src: "./fonts/Switzer-Variable.woff2",
  variable: "--font-switzer",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lock In ©",
  description: "Take back your attention and autonomy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${switzer.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        
        <div className="fixed top-0 left-0 w-full z-50 bg-background">
          <div className="flex justify-center mt-2 h-9">
            <NavigationMenuDemo />
          </div>
        </div>

        <div className="mt-20 border-top-2 border-blue-900">
          {children}
        </div>
      </body>
    </html>
  );
}

