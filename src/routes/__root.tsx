import ThemeChanger from '@/components/theme-changer/ThemeChanger';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex min-h-dvh flex-col">
        <header>
          <nav className="flex items-center justify-center gap-2 p-2">
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
            <Link to="/gallery" className="[&.active]:font-bold">
              Gallery
            </Link>

            <ThemeChanger />
          </nav>
          <hr />
        </header>
        <main className="container mx-auto flex-grow">
          <Outlet />
        </main>
        <footer className="flex items-center justify-center p-2">{new Date().getFullYear()}</footer>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
