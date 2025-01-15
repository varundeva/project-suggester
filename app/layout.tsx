"use client";

import { Session } from "next-auth";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <SessionProvider session={session}>{children}</SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
