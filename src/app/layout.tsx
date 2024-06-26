import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { MonoCloudAuthProvider } from "@monocloud/nextjs-auth/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MonoCloudAuthProvider>
          <Header />
          {children}
        </MonoCloudAuthProvider>
      </body>
    </html>
  );
}
