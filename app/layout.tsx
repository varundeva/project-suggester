"use client";

import { Session } from "next-auth";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
      {children}
        <Footer />
      </body>
    </html>
  );
}
