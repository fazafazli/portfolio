import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://webp-sigma.vercel.app/'),
  title: {
    default: 'fazafazli - website portfolio',
    template: '%s | fazafazli'
  },
  description: 'Portfolio showcasing modern web development projects, skills, and experience in Next.js.',
  keywords: 'web developer, full stack developer, react, next.js, portfolio, javascript, typescript',
  authors: [{ name: 'fazafazli' }],
  creator: 'fazafazli',
  openGraph: {
    title: 'fazafazli - website portfolio',
    description: 'First website portfolio',
    url: 'https://portfolio-kappa-lilac-67.vercel.app/',
    siteName: 'fazafazli Portfolio',
    images: [
      {
        url: '/project1.png',
        width: 1200,
        height: 630,
        alt: 'fazafazli Portfolio',
      },
    ],
    locale: 'Indonesian',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}