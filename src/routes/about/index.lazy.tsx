import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about/')({
  component: About,
});

function About() {
  return (
    <div className="grid items-center justify-center text-center">
      <h1 className="p-5">Under maintenance</h1>
      <Button variant={'action'}>meow us!</Button>
    </div>
  );
}
