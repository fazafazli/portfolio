'use client';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-[calc(100vh-4rem)] flex items-center">
      <div className="section-container flex flex-col lg:flex-row items-center gap-12">
        <LazyMotion features={domAnimation}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="heading-primary">
              Muhammad Fazli
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Technology Enthusiast <span className="text-indigo-600 rainbow-text">"techie"</span>
            </h2>
            <p className="text-body mb-8 max-w-2xl">
              The journey has just begun. I find myself at the edge of a dark forest with no path in sight and no light to guide me. 
              I hope for a lantern in the distance, or perhaps... I will learn to become the light myself (wavy wavyy~).
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary hover-lift rainbow-hover">
                View My Work
              </Link>
              <Link href="/contact" className="btn-secondary hover-lift">
                Nudge
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover-scale rainbow-border animate-float">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/fazli-photo.jpg" 
                  alt="Muhammad Fazli"
                  width={288} 
                  height={288}
                  className="w-full h-full object-cover"
                  priority 
                />
              </div>
            </div>
          </motion.div>
        </LazyMotion>
      </div>
    </section>
  );
}