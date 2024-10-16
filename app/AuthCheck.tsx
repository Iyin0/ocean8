'use client';

import { useConvexAuth } from 'convex/react';
import Loading from './loading';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo, useEffect } from 'react';

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const router = useRouter();
  const pathname = usePathname();

  const globalRoutes = useMemo(() => ['/auth/login', '/auth/register'], []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated && !globalRoutes.includes(pathname)) {
      router.push('/auth/login');
    }
  }, [isLoading, isAuthenticated, pathname, router, globalRoutes]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated && !globalRoutes.includes(pathname)) {
    return <Loading />; // Show loading while redirecting
  }

  return <>{children}</>;
}
