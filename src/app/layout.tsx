import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from '@/components/Navbar';
import Analytics from '@/components/Analytics';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Kristoffer K. | Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}