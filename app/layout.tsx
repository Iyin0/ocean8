import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ConvexClientProvider } from './ConvexClientProvider';
import { SignedOut, SignedIn } from '@clerk/nextjs';
import './globals.css';
import AuthCheck from './AuthCheck';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Ocean8',
  description: 'Ocean8',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <ConvexClientProvider>
          <SignedIn>
            <AuthCheck>{children}</AuthCheck>
          </SignedIn>
          <SignedOut>{children}</SignedOut>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
