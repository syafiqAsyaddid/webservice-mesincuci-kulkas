import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppSticky } from '@/components/layout/WhatsAppSticky';
import { businessInfo } from '@/lib/content/business';

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
    <html lang="id">
      <body className="min-h-screen flex flex-col font-sans bg-surface text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppSticky />
      </body>
    </html>
  );
}
