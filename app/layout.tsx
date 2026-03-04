import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Crafty Alpacas | Experiences, Workshops & Eco Gifts',
  description: 'Alpaca experiences, craft workshops, and eco-friendly gifts in Monmouthshire, South Wales.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased text-slate-900" suppressHydrationWarning>{children}</body>
    </html>
  );
}
