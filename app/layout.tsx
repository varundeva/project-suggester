/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
  session
}: Readonly<{
  children: React.ReactNode;
  session: any
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <SessionProvider session={session}>

      {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
