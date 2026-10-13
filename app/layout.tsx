import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppSticky } from '@/components/layout/WhatsAppSticky';
import { businessInfo } from '@/lib/content/business';

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

export const metadata: Metadata = {
  title: {
    template: `%s | ${businessInfo.name}`,
    default: `${businessInfo.name} - Service Kulkas & Mesin Cuci Panggilan Jabodetabek`,
  },
  description:
    'Layanan perbaikan kulkas dan mesin cuci panggilan untuk wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Konsultasikan kendala dan jadwal via WhatsApp.',
  keywords: [
    'service kulkas jabodetabek',
    'service mesin cuci jabodetabek',
    'service kulkas terdekat',
    'service mesin cuci panggilan',
    'kulkas tidak dingin',
    'mesin cuci tidak berputar',
  ],
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
      <body className="min-h-screen flex flex-col font-sans bg-gradient-to-r from-white via-[#FCFDFE] to-[#F4F8FA] text-text relative">
        {/* Subtle Geometric Dot Pattern (3.5% Opacity) */}
        <div
          className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.035] bg-[radial-gradient(#12345A_1.2px,transparent_1.2px)] [background-size:24px_24px]"
          aria-hidden="true"
        />
        {/* Soft Ambient Corner Accents */}
        <div
          className="fixed top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#EAF3FB]/50 via-transparent to-transparent pointer-events-none z-[-1]"
          aria-hidden="true"
        />
        <div
          className="fixed bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#EAF3FB]/35 via-transparent to-transparent pointer-events-none z-[-1]"
          aria-hidden="true"
        />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
