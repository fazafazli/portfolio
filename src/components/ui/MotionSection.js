'use client';
import { motion, LazyMotion, domAnimation } from 'framer-motion';

export const MotionSection = ({ 
  children, 
  className = "", 
  background = "white",
  ...props 
}) => {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-to-br from-indigo-50 via-white to-purple-50"
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className={`${bgClasses[background]} ${className}`}>
        <div className="section-container">
          {children}
        </div>
      </section>
    </LazyMotion>
  );
};

export const MotionDiv = ({ 
  children, 
  className = "", 
  animation = "fadeIn",
  ...props 
}) => {
  const animations = {
    fadeIn: {
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" }
    },
    slideLeft: {
      initial: { opacity: 0, x: -50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, margin: "-100px" }
    },
    slideRight: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, margin: "-100px" }
    }
  };

  return (
    <motion.div
      className={className}
      {...animations[animation]}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};