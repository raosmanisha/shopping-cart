import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import ReduxProvider from '@/components/ReduxProvider';

export const metadata = {
  title: 'Shopping Cart',
  description: 'A sample shopping cart with Next.js, Redux, and Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <header className="bg-white shadow">
            <nav className="container mx-auto px-4 py-4 flex justify-between">
              <Link href="/" className="font-bold text-xl">
                Shop
              </Link>
              <Link href="/cart" className="text-gray-700 hover:text-gray-900">
                Cart
              </Link>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-6">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
