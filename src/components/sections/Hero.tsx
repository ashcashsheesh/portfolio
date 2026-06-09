"use client";

import { motion } from "framer-motion";
import { personal } from "@/data";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[85vh] scroll-mt-0 flex-col justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <motion.div
        className="mx-auto w-full max-w-6xl px-6 sm:px-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={item}
          className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          {personal.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 max-w-md text-base text-muted sm:text-lg"
        >
          {personal.subtitle}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <Button href={personal.resumeUrl} variant="primary" external>
            Resume
          </Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
