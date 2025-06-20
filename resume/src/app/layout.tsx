import './globals.css';
import type { Metadata } from 'next';
import { GeistSans, GeistMono } from '@/utils/fonts';
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
      <body className="font-sans">
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