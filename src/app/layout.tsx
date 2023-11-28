"use client";
// import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: 'PROPAS Indonesia',
//   description: 'PRO PRABOWO SUBIANTO',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserProvider>
      <html lang="en">
        <head>
          <title>PROPAS INDONESIA</title>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </UserProvider>
  );
}
