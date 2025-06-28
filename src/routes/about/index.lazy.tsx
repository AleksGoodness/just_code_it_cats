import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/about/')({
  component: About,
});

function About() {
  return (
    <div>
      Hello "/About"!
      <Button variant={'action'}>send it!</Button>
    </div>
  );
}
