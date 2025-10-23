'use client';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { MotionSection } from './ui/MotionSection';
import { SectionHeader } from './ui/SectionHeader';

export default function ExperienceSection() {
  return (
    <MotionSection background="white">
      <SectionHeader title="Education" />
      
      <LazyMotion features={domAnimation}>
        <div className="max-w-3xl mx-auto space-y-8">
          {}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="card flex gap-4 hover-lift group"
          >
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 transition-colors">
              <GraduationCap className="text-indigo-600 group-hover:text-white transition-colors" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                University
              </h3>
              <p className="text-indigo-600 font-medium mb-2">Gadjah Mada University • 2025 - Present</p>
              <p className="text-gray-600">
                Undergraduate student of Information Technology.
              </p>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="card flex gap-4 hover-lift group"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
              <GraduationCap className="text-purple-600 group-hover:text-white transition-colors" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                High School
              </h3>
              <p className="text-purple-600 font-medium mb-2">SMAN 1 Yogyakarta • 2022 - 2025</p>
              <p className="text-gray-600">
                Focus on Mathematics and Natural Sciences.
              </p>
            </div>
          </motion.div>
        </div>
      </LazyMotion>
    </MotionSection>
  );
}