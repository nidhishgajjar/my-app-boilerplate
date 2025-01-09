import type { Metadata } from "next";
import { Bricolage_Grotesque, Lato } from 'next/font/google'
import { NextUIProvider } from '@nextui-org/react';
import { ClerkProvider, ClerkLoaded, SignedIn, ClerkLoading } from '@clerk/nextjs';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import Header from "@/components/Header";
import AuthWrapper from "@/components/AuthWrapper";

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
          <ClerkLoading>
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-neutral-500">Loading...</span>
            </div>
          </div>
          </ClerkLoading>
          <ClerkLoaded>
            <AuthWrapper>
              <NextUIProvider>
                <Header />
                <SignedIn>
                <main>{children}</main>
                </SignedIn>
              </NextUIProvider>
            </AuthWrapper>
          </ClerkLoaded>
        </body>
      </ClerkProvider>
      <Analytics />
    </html>
  );
}
