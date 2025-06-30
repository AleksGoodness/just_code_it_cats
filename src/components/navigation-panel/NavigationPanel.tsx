import { Link, linkOptions } from '@tanstack/react-router';
import ThemeChanger from '../theme-changer/ThemeChanger';

const links = linkOptions([
  {
    to: '/',
    label: 'purrchome',
  },
  {
    to: '/about',
    label: 'meow us',
  },
  {
    to: '/gallery',
    label: 'meowseum',
  },
]);

const NavigationPanel = () => {
  return (
    <header className="bg-background fixed w-[100%]">
      <nav className="container mx-auto flex w-[100%] flex-wrap items-center gap-2 p-2 capitalize">
        {links.map((link) => (
          <Link {...link} key={link.to} className="[&.active]:text-amber-500">
            {link.label}
          </Link>
        ))}

        <ThemeChanger classNames="ml-auto" />
      </nav>
    </header>
  );
};

export default NavigationPanel;
