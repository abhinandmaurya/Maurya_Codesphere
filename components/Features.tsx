import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const Features = lazy(() => Promise.resolve({ default: FeaturesComponent }));

function FeaturesComponent() {
  const fadeInVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="min-h-[100dvh] flex items-center justify-center w-full py-12 scroll-mt-16 bg-black"
      aria-label="Features Section"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h2
              className="text-[#CCFF00] text-lg font-semibold tracking-wide uppercase"
              style={{
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Our Features
            </h2>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
              style={{
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              What Sets Maurya CodeSphere Apart
            </h1>
            <p
              className="text-base md:text-lg text-gray-400 max-w-2xl"
              style={{
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Explore the exceptional features that make LandFree your ultimate
              web development choice.
            </p>
          </motion.div>

          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/3] w-full"
          >
            <picture>
              <source
                srcSet="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80&format=webp"
                type="image/webp"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="rounded-lg w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                {...({ fetchpriority: "high" } as any)}
              />
            </picture>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function FeaturesWithSuspense() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Features />
    </Suspense>
  );
}
