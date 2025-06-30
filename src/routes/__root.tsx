import { PageTransition } from '@/components/animations/page-transitions';
import FooterPanel from '@/components/footer-panel/FooterPanel';
import NavigationPanel from '@/components/navigation-panel/NavigationPanel';
import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AnimatePresence } from 'motion/react';

export const Route = createRootRoute({
  component: Layout,
});

function Layout() {
  const location = useLocation();

  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <NavigationPanel />
        <main className="flex-grow pt-15">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Outlet />
            </PageTransition>
          </AnimatePresence>
        </main>
        <FooterPanel />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
