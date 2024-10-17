'use client'

import { useMemo, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useConvexAuth } from 'convex/react'

import Loading from '@/app/loading'

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const { isLoading, isAuthenticated } = useConvexAuth()
	const router = useRouter()
	const pathname = usePathname()

	const globalRoutes = useMemo(() => ['/auth/login', '/auth/register'], [])

	useEffect(() => {
		if (!isLoading && !isAuthenticated && !globalRoutes.includes(pathname)) {
			router.push('/auth/login')
		}
	}, [isLoading, isAuthenticated, pathname, router, globalRoutes])

	if (isLoading) {
		return <Loading />
	}

	if (!isAuthenticated && !globalRoutes.includes(pathname)) {
		return <Loading /> // Show loading while redirecting
	}

	return <>{children}</>
}
