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
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="font-bold text-xl">
                Shop
              </Link>
              <div className="flex items-center justify-end gap-4">
              <Link href="/signup" className="px-4 py-2  rounded hover:bg-gray-100">
                Sign Up
              </Link>
               <Link href="/login" className="px-4 py-2  rounded hover:bg-gray-100">
                Log in
              </Link>

              <Link href="/cart" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Cart
              </Link>
              </div>
            </nav>
          </header>
          <main className="container mx-auto px-4 py-6">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
