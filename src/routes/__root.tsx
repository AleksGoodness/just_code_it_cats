import FooterPanel from '@/components/footer-panel/FooterPanel';
import NavigationPanel from '@/components/navigation-panel/NavigationPanel';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-dvh flex-col">
        <NavigationPanel />
        <main className="container mx-auto flex-grow">
          <Outlet />
        </main>
        <FooterPanel />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
