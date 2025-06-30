import { Text } from '@/components/ui/text';
import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import catPlaceholder from '../assets/img/cat.png';
import promoBg from '../assets/img/promo-bg.jpeg';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <section className="h-[100%]">
      <section
        className="flex flex-col justify-between gap-2 bg-cover bg-top bg-no-repeat py-10 sm:py-5"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4)), url(${promoBg})` }}
      >
        <div className="container mx-auto">
          <header>
            <h2 className="text-2xl font-bold uppercase">cat needs to thrive</h2>
            <h1 className="p-4 text-center text-4xl font-bold sm:text-6xl md:text-8xl">
              Just Cats <span className="font-rage text-accent-foreground font-light">Meowseum</span>
            </h1>
            <Text className="text-center" variant={'xl'}>
              A collection of cats from the internet.
            </Text>
          </header>
          <main className="flex flex-col gap-4">
            <section className="flex flex-col items-center gap-4 text-4xl sm:flex-row">
              <Text className="border-primary rounded-full border-2 p-8 font-light">{new Date().getFullYear()}</Text>
              <Text className="capitalize">necessary cat</Text>
            </section>
            <section className="flex flex-col items-center gap-4 md:flex-row">
              <div className="border-primary flex shrink-0 basis-1/3 flex-col gap-2 rounded-2xl border-2 p-6">
                <h3 className="text-2xl font-bold">Caution </h3>
                <hr className="border-primary" />
                <Text variant={'md'}>
                  If you’re a cat person or a soon-to-be cat person you’ve come to the right place.
                </Text>
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
              <motion.div
                className="basis-1/4"
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  bounce: 0.5,
                }}
              >
                <img
                  className="h-64 w-full object-cover"
                  style={{
                    filter: 'drop-shadow(5px 5px 2px var(--primary)) drop-shadow(-5px -5px 2px var(--primary))',
                  }}
                  src={catPlaceholder}
                  alt="cat"
                />
              </motion.div>
            </section>
          </main>
        </div>
      </section>
      ]
    </section>
  );
}
