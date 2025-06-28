import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/gallery/')({
  component: Gallery,
});

function Gallery() {
  return <div>Hello "/gallery"!</div>;
}
