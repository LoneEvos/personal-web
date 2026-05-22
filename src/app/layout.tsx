import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Teddy Steven Gotama - Software Engineering Student',
  description:
    'Software Engineering student at Asia Pacific University of Technology & Innovation pursuing a dual degree with De Montfort University. Interested in full-stack development, AI, and practical software solutions.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'React',
    'JavaScript',
    'Python',
    'APU Malaysia',
    'DMU',
  ],
  authors: [{ name: 'Teddy Steven Gotama' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Teddy Steven Gotama - Software Engineering Student',
    description:
      'Software Engineering student interested in full-stack development, AI, and practical software solutions.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  );
}
