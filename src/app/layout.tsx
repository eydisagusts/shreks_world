import { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import { CounterProvider } from "@/context/CounterContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='bg-green-100 text-black font-shrek'>
          <CounterProvider>
          <header className="bg-green-500 p-6 text-xl">
            <nav className="container mx-auto flex justify-between items-center">
            <Link 
            href="/"
            className=" text-green-900 font-bold text-3xl hover:underline"
            >
              Shrek's World
              </Link> 
              <ul className="flex space-x-16">
                <li>
                <Link href="/" className="hover:underline">
                Home
                </Link>
                </li>

                <li>
                <Link href="/characters" className="hover:underline">
                Characters
                </Link>
                </li>

                <li>
                <Link href="/locations" className="hover:underline">
                Locations
                </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:underline">
                  About
                  </Link>
                </li>

                <li>
                  <Link href="/search" className="hover:underline">
                  Search
                  </Link>
                </li>
              </ul>
              </nav>
            </header>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow">
              {children}
              </main>
              <footer className="mt-auto ">
              <p className="text-center bg-green-500 p-6 text-xl py-8 text-gray-100">
                &copy; 2021 Shrek&apos;s World. All rights reserved.
              </p>
              </footer>
            </div>
            
          </CounterProvider>
      </body>
    </html>
  );
}
