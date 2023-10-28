import App from './app';
import React, { FC } from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import AppContextProvider from '@/context/BaseContext';
import '@/assets/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600']
});

export const metadata: Metadata = {
  title: 'Dilshan Ramesh | Mobile Engineer',
  description: "I'm a Software Engineer | Full Stack Developer | Innovator | Entrepreneur | Undergraduate | Student. This is the place where I opensource stuff and break things",
  keywords: "Dilshan, Ramesh, Dilshan Ramesh, Software Engineer, Senior Software Engineer, Mobile Apps, Flutter, React, Laravel, Sri Lanka, Sri Lankan Engineer, WebApps, Mobile Apps, dilshan97, github",
  applicationName: "Dilshan's Portfolio",
  openGraph: {
    type: 'profile',
    url: 'https://dilshan97.github.io',
    title: 'Dilshan Ramesh | Official website',
    description: 'Explore the world of Dilshan Ramesh: a passionate developer, innovator, and creator. Discover a diverse range of projects, insights, and expertise in technology and beyond.',
    siteName: 'Dilshan Ramesh | Official website',
    images: [{
      url: 'https://github.com/dilshan97.png'
    }]
  },
  twitter: {
    card: "summary_large_image", 
    site: "@site", 
    creator: "@dilshanramesh81",
    images: "https://github.com/dilshan97.png"
  },
  verification: {
    google: 'rhc0SldvTNmOomo_IaJaC4UsSt0N_lac1vyZy7Eaqkc',
  },
  appleWebApp: {
    capable: true, 
    title: "Dilshan Ramesh | Official website", 
    statusBarStyle: "black-translucent"
  },
  authors: [
    {
      name: 'Dilshan Ramesh',
      url: 'https://dilshan97.github.io'
    }
  ],
  alternates: {
    canonical: "https://dilshan97.github.io"
  },
  generator: "Next.js",
  referrer: "origin",
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  creator: 'Dilshan Ramesh',
  publisher: 'GitHub Pages',
  robots: {
    index: true,
    follow: true,
  }
}
interface RootLayoutProps {
  children: React.ReactNode;
}
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppContextProvider>
          <App children={children} />
        </AppContextProvider>
      </body>
    </html>
  )
}

export default RootLayout