import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import SessionWrapper from '@/components/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Option Trading Dashboard',
  description: 'A dashboard for option trading strategies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          {children}
          <Toaster />
        </SessionWrapper>
      </body>
    </html>
  );
}