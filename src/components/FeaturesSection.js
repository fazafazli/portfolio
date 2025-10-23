'use client';
import { Code, Palette, Zap } from 'lucide-react';
import { MotionDiv, MotionSection } from './ui/MotionSection';
import { SectionHeader } from './ui/SectionHeader';

const features = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code is my priority.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful interfaces that provide excellent user experiences.',
  },
  {
    icon: Zap,
    title: 'Cybersecurity',
    description: 'Implementing robust security measures to protect applications and user data.',
  },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <MotionDiv
      animation="fadeIn"
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="card text-center group hover-lift rainbow-hover"
    >
      <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600 transition-colors">
        <Icon className="text-indigo-600 group-hover:text-white transition-colors" size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </MotionDiv>
  );
};

export default function FeaturesSection() {
  return (
    <MotionSection background="white">
      <SectionHeader
        title="What I find interesting"
        subtitle="We're talking about technology, aren't we?"
      />
      
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
        ))}
      </div>
    </MotionSection>
  );
}