// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Dynamic import for Header
const Header = dynamic(() => import('@/components/shared/header/Header'), {
  loading: () => (
    <div className="h-16 bg-white shadow-sm border-b border-gray-200 animate-pulse" />
  ),
  ssr: true
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
  title: "OneLot - Dealership Management Solutions",
  description: "Grow your dealership with working capital loans and digital tools from OneLot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}