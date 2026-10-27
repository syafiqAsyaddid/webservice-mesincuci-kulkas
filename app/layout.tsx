import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppSticky } from '@/components/layout/WhatsAppSticky';
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider';
import { JsonLd } from '@/components/seo/JsonLd';
import { businessInfo } from '@/lib/content/business';
import { SITE_URL, DEFAULT_OG_IMAGE, buildLocalBusinessJsonLd } from '@/lib/seo';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${businessInfo.name}`,
    default: `${businessInfo.name} - Service Kulkas & Mesin Cuci Panggilan Bekasi, Jakarta & Depok`,
  },
  description:
    'Layanan teknisi panggilan untuk perbaikan kulkas (1 pintu, 2 pintu, side-by-side, freezer, showcase, chiller) dan mesin cuci segala jenis di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok. Menerima tukar tambah unit baru dan bekas.',
  keywords: [
    'service kulkas bekasi',
    'service kulkas jakarta timur',
    'service kulkas jakarta selatan',
    'service kulkas depok',
    'service mesin cuci bekasi',
    'service mesin cuci jakarta timur',
    'service mesin cuci jakarta selatan',
    'service mesin cuci depok',
    'jasa perbaikan kulkas panggilan',
    'jasa servis mesin cuci panggilan',
    'tukar tambah kulkas dan mesin cuci',
    'service showcase chiller freezer',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: businessInfo.name,
    title: `${businessInfo.name} - Service Kulkas & Mesin Cuci Panggilan`,
    description:
      'Pemeriksaan dan perbaikan langsung di lokasi untuk kulkas, freezer, showcase, dan mesin cuci di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok. Menerima tukar tambah baru dan bekas.',
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 900,
        alt: `${businessInfo.name} - Teknisi Kulkas dan Mesin Cuci Panggilan`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} - Service Kulkas & Mesin Cuci Panggilan`,
    description:
      'Perbaikan kulkas dan mesin cuci langsung di tempat wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  ...(gscVerification
    ? {
        verification: {
          google: gscVerification,
        },
      }
    : {}),
  icons: {
    icon: [{ url: '/images/logo_favicon.png', type: 'image/png' }],
    shortcut: '/images/logo_favicon.png',
    apple: [{ url: '/images/logo_favicon.png', type: 'image/png' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#12345A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-text relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary-900 focus:text-white focus:font-semibold focus:text-sm focus:rounded-button focus:shadow-lg"
        >
          Langsung ke konten utama
        </a>
        <JsonLd data={buildLocalBusinessJsonLd()} />
        <AnalyticsProvider />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
