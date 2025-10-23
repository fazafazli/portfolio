'use client';
import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      label: 'GitHub',
      href: 'https://github.com/fazafazli',
      icon: Github,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/muhammad-fazli-a590a9381', 
      icon: Linkedin,
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com/fazafazli?igsh=MXU0a2toZjFrcGU3cQ==',
      icon: Instagram,
    },
    {
      label: 'Email',
      href: 'mailto:fazafazli@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {currentYear} Muhammad Fazli. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;