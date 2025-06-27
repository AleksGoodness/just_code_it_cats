import { Button } from '../ui/button';

const ThemeChanger = () => {
  return (
    <Button
      size="lg"
      className="font-rage text-2xl"
      variant="secondary"
      onClick={() => {
        document.documentElement.classList.toggle('dark');
      }}
    >
      ThemeChanger
    </Button>
  );
};

export default ThemeChanger;
