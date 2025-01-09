"use client"

import { SignedIn, SignedOut, useUser, SignInButton, SignUpButton } from "@clerk/nextjs"
import { motion } from "framer-motion"

export default function Home() {
  const { user } = useUser();

  return (
    <main className="flex min-h-screen font-bricolage flex-col items-center justify-between">
      <SignedIn>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-screen"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome, {user?.firstName}!</h1>
        </motion.div>
      </SignedIn>

      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold text-center"
          >
            Boilerplate
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-gray-600 text-center"
          >
           Next.js + TailwindCSS + Typescript + Clerk + Shadcn/UI + Supabase + Framer
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col items-center gap-4"
          >
            <SignUpButton mode="modal">
              <button className="group px-8 py-4 text-lg font-medium text-white rounded-xl bg-black hover:bg-black/90 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl relative overflow-hidden">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative">Get Started for Free</span>
              </button>
            </SignUpButton>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Already have an account?</span>
              <SignInButton mode="modal">
                <button className="text-black hover:text-gray-700 font-medium">
                  Sign in
                </button>
              </SignInButton>
            </div>
          </motion.div>
        </div>
      </SignedOut>
    </main>
  );
}
