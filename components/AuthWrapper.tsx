'use client'

import { useUser } from '@clerk/nextjs';

export default function AuthWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-3 w-3 bg-yellow-500 rounded-full animate-pulse"></div>
          <span className="text-neutral-500">Signing out...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
