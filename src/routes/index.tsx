import { createFileRoute, Link } from '@tanstack/react-router';
import catPlaceholder from '../assets/img/cat.png';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <section>
      <section
        className="flex flex-col justify-between gap-2 p-2"
        style={{ backgroundImage: '/assets/img/promo-bg.jpeg', minHeight: 'calc(100vh - 100px)' }}
      >
        <header>
          <h2 className="text-2xl font-bold uppercase">cat needs to thrive</h2>
          <h1 className="p-4 text-center text-4xl font-bold sm:text-6xl md:text-8xl">
            The Cat <span className="font-rage font-light">Gallery</span>
          </h1>
          <p className="text-center text-2xl">A collection of cats from the internet.</p>
        </header>
        <main className="flex flex-col gap-4">
          <section className="flex flex-col items-center gap-4 text-4xl sm:flex-row">
            <div className="border-primary rounded-full border-2 p-8 font-light">{new Date().getFullYear()}</div>
            <div className="capitalize">necessary cat</div>
          </section>
          <section className="flex flex-col items-center gap-4 md:flex-row">
            <div className="border-primary flex shrink-0 basis-1/3 flex-col gap-2 rounded-2xl border-2 p-6">
              <h3 className="text-2xl font-bold">Caution </h3>
              <hr className="border-primary" />
              <p className="text-lg">
                If you’re a cat person or a soon-to-be cat person you’ve come to the right place.
              </p>
            </div>
            <div className="shrink-0 basis-1/3 text-center">
              <h3>Cat's faces</h3>
              <Link
                to="/gallery"
                className="text-primary text-2xl uppercase transition-all duration-600 hover:underline"
              >
                discover
              </Link>
            </div>
            <div className="basis-1/4">
              <img
                className="h-full w-full object-cover"
                style={{ filter: 'drop-shadow(0 0 10px var(--primary))' }}
                src={catPlaceholder}
                alt="cat"
              />
            </div>
          </section>
        </main>
      </section>
    </section>
  );
}
