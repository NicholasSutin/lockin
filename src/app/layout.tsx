import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavigationMenuDemo } from "@/components/ui/NavigationMenuDemo";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        
        <div className="sticky top-0 z-50">
          <div className="w-fit mx-auto mt-2 h-9">
            <NavigationMenuDemo />
          </div>
        </div>

        <div className="pt-2">
          {children}
        </div>
      </body>
    </html>
  );
}

