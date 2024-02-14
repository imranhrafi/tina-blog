import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tina cms blog ",
  description: " My blog built with tina cms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className='container'>
        <Navbar />
        <div className='prose-base dark:prose-invert mx-auto py-20 w-full max-w-4xl px-4 mx:px-0 '>
          {children}
        </div>
      </body>
    </html>
  );
}