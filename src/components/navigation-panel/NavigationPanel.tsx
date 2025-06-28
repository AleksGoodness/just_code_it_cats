import { Link } from '@tanstack/react-router';
import ThemeChanger from '../theme-changer/ThemeChanger';

const NavigationPanel = () => {
  return (
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
  );
};

export default NavigationPanel;
