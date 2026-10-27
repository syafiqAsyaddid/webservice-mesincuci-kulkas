import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan (404)',
  description:
    'Halaman yang Anda cari tidak ditemukan atau telah dipindahkan. Kembali ke beranda atau hubungi teknisi D\'cool untuk layanan kulkas dan mesin cuci.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="py-16 sm:py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-card border border-border overflow-hidden">
        <div className="bg-[#0E2A47] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Status 404
          </span>
          <span className="text-xs text-slate-300">
            D&apos;cool Technical Service
          </span>
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-primary-900 tracking-tight">
              Halaman yang Anda Cari Tidak Ditemukan
            </h1>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Tautan yang Anda buka mungkin sudah berubah atau terjadi kesalahan penulisan alamat URL. Silakan pilih halaman layanan di bawah ini atau hubungi teknisi kami secara langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/layanan/service-kulkas"
              className="p-4 rounded-subtle border border-border bg-[#F8FAFC] hover:border-primary-700 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-primary-900 group-hover:text-primary-700">
                  Service Kulkas &amp; Freezer
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  1/2 Pintu, Side by Side, Showcase
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-900 group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/layanan/service-mesin-cuci"
              className="p-4 rounded-subtle border border-border bg-[#F8FAFC] hover:border-primary-700 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-primary-900 group-hover:text-primary-700">
                  Service Mesin Cuci
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  Front Loading, Top Loading, 2 Tabung
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-900 group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/wilayah"
              className="p-4 rounded-subtle border border-border bg-[#F8FAFC] hover:border-primary-700 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-primary-900 group-hover:text-primary-700">
                  Cek Wilayah Layanan
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  Bekasi, Jaktim, Jaksel &amp; Depok
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-900 group-hover:translate-x-0.5 transition-all" />
            </Link>

            <Link
              href="/kontak"
              className="p-4 rounded-subtle border border-border bg-[#F8FAFC] hover:border-primary-700 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="block text-sm font-bold text-primary-900 group-hover:text-primary-700">
                  Kontak &amp; Pemesanan
                </span>
                <span className="block text-xs text-text-muted mt-0.5">
                  Jadwalkan kunjungan teknisi
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-900 group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button variant="primary" size="md" href="/">
              Kembali ke Beranda
            </Button>
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl()}
              isExternal
              data-inpage-whatsapp
              className="gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Chat Teknisi via WhatsApp</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
