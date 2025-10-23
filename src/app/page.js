'use client';
import { lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const ExperienceSection = lazy(() => import('@/components/ExperienceSection'));

const SectionSkeleton = () => (
  <div className="h-96 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-lg"></div>
);

export default function HomePage() {
  return (
    <div className="min-h-screen pt-16">
      <HeroSection />
      <FeaturesSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>
    </div>
  );
}