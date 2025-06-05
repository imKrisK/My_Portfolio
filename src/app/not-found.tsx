import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
        <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
