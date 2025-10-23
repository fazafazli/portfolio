'use client';
import { MotionDiv } from './MotionSection';

export const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  className = "" 
}) => (
  <MotionDiv 
    animation="fadeIn" 
    className={`${centered ? 'text-center' : ''} mb-16 ${className}`}
  >
    <h2 className="heading-secondary">{title}</h2>
    {subtitle && (
      <p className="text-body max-w-2xl mx-auto mt-4">{subtitle}</p>
    )}
  </MotionDiv>
);