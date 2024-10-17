import { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/assets/css/globals.css'

import { ConvexClientProvider } from '@/components/ConvexClientProvider'

const geistSans = localFont({
	src: 'assets/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})

const geistMono = localFont({
	src: 'assets/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Ocean8',
	description: 'Ocean8',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased`}
			>
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	)
}
