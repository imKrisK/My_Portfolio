'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-lg text-center space-y-6">
        <h1 className="text-3xl font-bold mb-8">Something went wrong</h1>
        <p>Please try again or go back to the home page.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors"
            onClick={() => reset()}
          >
            Try again
          </button>
          <Link 
            href="/"
            className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-md transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
