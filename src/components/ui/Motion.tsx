"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/motion";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
};

export function FadeIn({ children, className }: MotionProps) {
  return (
    <motion.div {...fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

export function StaggerChildren({ children, className }: MotionProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: MotionProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
