/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <SessionProvider>
        <Navbar />
        {children}
        <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
