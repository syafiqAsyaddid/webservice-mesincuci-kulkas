import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { ServiceListFilter } from '@/components/sections/ServiceListFilter';
import { TradeInSection } from '@/components/sections/TradeInSection';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Service dan Perbaikan Kulkas & Mesin Cuci | Menerima Tukar Tambah Baru & Bekas',
  description:
    'Layanan service dan perbaikan panggilan serta tukar tambah baru dan bekas untuk kulkas (1 pintu, 2 pintu, side by side, freezer, showcase, chiller) dan mesin cuci segala jenis di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
  path: '/layanan',
});

export default function LayananPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
  ]);

  const serviceJsonLd = buildServiceJsonLd({
    name: 'Layanan Service Kulkas, Mesin Cuci & Tukar Tambah Panggilan',
    description:
      'Pemeriksaan fisik dan perbaikan langsung di tempat untuk kulkas (1 pintu, 2 pintu, side by side, freezer, showcase, chiller) dan mesin cuci segala jenis serta tukar tambah unit baru dan bekas.',
    path: '/layanan',
    serviceType: 'Jasa Perbaikan Kulkas dan Mesin Cuci Panggilan',
  });

  return (
    <div className="py-10 sm:py-14 space-y-16 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={[breadcrumbJsonLd, serviceJsonLd]} />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              href="/"
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              Beranda
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li className="text-text font-medium" aria-current="page">
            Layanan
          </li>
        </ol>
      </nav>

      {/* Asymmetric Editorial Page Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
            Service dan Perbaikan Kulkas &amp; Mesin Cuci
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Pemeriksaan fisik langsung di tempat untuk kulkas (1 pintu, 2 pintu, side by side, freezer, showcase, chiller) dan mesin cuci segala jenis, serta menerima tukar tambah baru dan bekas di area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/layanan/service-kulkas"
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-button bg-[#EEF2F6] hover:bg-primary-900 hover:text-white text-xs sm:text-sm font-bold text-primary-900 border border-border transition-colors group"
            >
              <span>Halaman Khusus Service Kulkas &amp; Freezer</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/layanan/service-mesin-cuci"
              className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 rounded-button bg-[#EEF2F6] hover:bg-primary-900 hover:text-white text-xs sm:text-sm font-bold text-primary-900 border border-border transition-colors group"
            >
              <span>Halaman Khusus Service Mesin Cuci</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8 space-y-2 text-xs sm:text-sm text-text-muted">
          <p className="font-semibold text-primary-900">
            Pengerjaan Langsung di Lokasi Anda
          </p>
          <p className="leading-relaxed">
            Setiap kunjungan diawali dengan pengecekan alat ukur secara terbuka. Rincian biaya disampaikan sebelum tindakan perbaikan dimulai.
          </p>
          <Link
            href="/kontak"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 pt-1 group"
          >
            <span>Pesan jadwal kunjungan teknisi</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Interactive Service Showcase & Issue Ledger */}
      <ServiceListFilter services={servicesData} issues={priorityIssues} />

      {/* Terima Jual, Beli & Tukar Tambah Workbench */}
      <section id="jual-beli-tukar-tambah" className="pt-4 border-t border-border">
        <TradeInSection variant="default" />
      </section>

      {/* Bottom Direct Consultation Banner */}
      <div className="bg-[#0E2A47] text-white rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Gejala Perangkat Anda Berbeda dari Daftar di Atas?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Kirimkan foto atau video singkat kondisi kulkas maupun mesin cuci Anda melalui WhatsApp agar teknisi kami dapat memberikan arahan pemeriksaan awal.
          </p>
        </div>
        <Button
          variant="whatsapp"
          size="lg"
          href={generateWhatsAppUrl()}
          isExternal
          data-inpage-whatsapp
          className="gap-2.5 w-full md:w-auto flex-shrink-0"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          <span>Hubungi Teknisi via WhatsApp</span>
        </Button>
      </div>
    </div>
  );
}
