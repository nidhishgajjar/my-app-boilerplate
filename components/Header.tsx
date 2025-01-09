"use client"

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { UserButton, useUser, useClerk } from '@clerk/nextjs';

export default function Header() {
  const searchParams = useSearchParams();
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  useEffect(() => {
    if (isSignedIn) {
      const checkAndCleanUrl = () => {
        const hash = window.location.hash;

        if (hash.includes('__clerk_db_jwt')) {
          // Remove the JWT token from the hash
          const cleanUrl = window.location.origin + window.location.pathname;
          window.history.replaceState({}, document.title, cleanUrl);
        }
      };

      // Initial check
      checkAndCleanUrl();

      // We don't need the interval since we only want to run it once
      // console.log(window.location.href); // Print the current URL
    }

    if (user) {
      // console.log(user)]
      // console.log("Signed in")
    }

    if (!user) {
      // console.log("Not signed in")
      signOut()
    }
  }, [isSignedIn, searchParams, user, signOut]);

  return (
    <div className="w-full fixed bg-white z-50">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          {/* <Logo /> */}
          <h1 className="font-medium text-xl tracking-wide">my app</h1>
            <UserButton />
        </div>
      </nav>
    </div>
  );
}
