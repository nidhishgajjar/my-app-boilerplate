import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react';
import { ClerkProvider, ClerkLoaded } from '@clerk/nextjs';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "Boilerplate for Next.js + TailwindCSS + Typescript + Clerk + Shadcn/UI + Supabase + Firebase",
};

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={`${bricolage.variable} ${lato.variable} font-bricolage`}>
          <ClerkLoaded>
            <NextUIProvider>
              <Header />
              <main>{children}</main>
            </NextUIProvider>
          </ClerkLoaded>
        </body>
      </ClerkProvider>
      <Analytics />
    </html>
  );
}
