import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Uganda Safari Company - Authentic African Safari Experiences",
    template: "%s | Uganda Safari Company"
  },
  description: "Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda. Gorilla trekking, chimpanzee tracking, wildlife tours, and custom African adventures with expert local guides.",
  keywords: [
    "Uganda safari company",
    "African safari tours",
    "gorilla trekking Uganda",
    "chimpanzee trekking",
    "Rwanda safaris",
    "wildlife tours Africa",
    "custom safari experiences",
    "East Africa travel",
    "mountain gorilla tours",
    "sustainable tourism Uganda"
  ],
  authors: [{ name: "Uganda Safari Company" }],
  creator: "Uganda Safari Company",
  publisher: "Uganda Safari Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ugandasafaricompany.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ugandasafaricompany.com',
    siteName: 'Uganda Safari Company',
    title: 'Uganda Safari Company - Authentic African Safari Experiences',
    description: 'Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda. Gorilla trekking, chimpanzee tracking, and custom African adventures.',
    images: [
      {
        url: '/images/reasons-blade-1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Uganda Safari Company - Authentic African Safari Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uganda Safari Company - Authentic African Safari Experiences',
    description: 'Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda. Gorilla trekking, chimpanzee tracking, and custom African adventures.',
    images: ['/images/reasons-blade-1.jpeg'],
    creator: '@ugandasafari',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": "Uganda Safari Company",
    "description": "Uganda Safari Company offers authentic safari experiences in Uganda and Rwanda, specializing in destination management for tour operators worldwide and private or group tailor-made African adventures.",
    "url": "https://ugandasafaricompany.com",
    "telephone": "+256-XXX-XXXXXX",
    "email": "bigapesafrica@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Uganda"
    },
    "areaServed": ["Uganda", "Rwanda", "Kenya", "Tanzania"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safari Tours",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gorilla Trekking Tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chimpanzee Trekking Tours"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Safari Experiences"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
