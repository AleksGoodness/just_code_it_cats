import { useEffect } from 'react';
import { Button } from '../ui/button';
const LS_NAME = 'theme';
type Theme = 'dark' | null;

const ThemeChanger = () => {
  const toggleTheme = () => {
    const savedTheme = localStorage.getItem(LS_NAME) as Theme;
    document.documentElement.classList.toggle(savedTheme || 'dark');
    if (savedTheme) localStorage.removeItem(LS_NAME);
    else localStorage.setItem(LS_NAME, 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(LS_NAME) as Theme;
    if (savedTheme) document.documentElement.classList.add(savedTheme);
  }, []);

  return (
    <Button size="lg" className="font-rage text-2xl" variant="secondary" onClick={toggleTheme}>
      ThemeChanger
    </Button>
  );
};

export default ThemeChanger;
