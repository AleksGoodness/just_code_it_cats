import cn from 'clsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { SiGnuicecat } from 'react-icons/si';
import { Button } from '../ui/button';
const MotionButton = motion.create(Button);

interface Props {
  classNames?: string;
}

const LS_NAME = 'theme';
type Theme = 'dark' | null;

const ThemeChanger = ({ classNames }: Props) => {
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
    <MotionButton
      size="lg"
      className={cn('font-rage text-2xl capitalize', classNames)}
      variant="default"
      onClick={toggleTheme}
      initial={{ rotate: 180, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
      transition={{
        type: 'spring',
        bounce: 0.5,
      }}
    >
      <span className="hidden sm:inline">cat colour</span> <SiGnuicecat color="var(--secondary)" />
    </MotionButton>
  );
};

export default ThemeChanger;
