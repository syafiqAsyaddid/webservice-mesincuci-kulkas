import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { WhatsAppComposer } from '@/components/sections/WhatsAppComposer';
import { JsonLd } from '@/components/seo/JsonLd';
import { businessInfo } from '@/lib/content/business';
import { regionsData } from '@/lib/content/regions';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { buildPageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Hubungi Kami - ${businessInfo.name}`,
  description:
    'Kontak resmi service dan perbaikan serta tukar tambah baru dan bekas untuk kulkas dan mesin cuci panggilan wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok. Hubungi via WhatsApp untuk pemesanan jadwal teknisi.',
  path: '/kontak',
});

export default function KontakPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Kontak', path: '/kontak' },
  ]);

  return (
    <div className="py-10 sm:py-14 space-y-14 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={breadcrumbJsonLd} />
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
            Kontak
          </li>
        </ol>
      </nav>

      {/* Asymmetric Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
            Saluran Resmi &amp;<br />
            <span className="text-primary-700">Penjadwalan Teknisi.</span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Kami siap membantu service dan perbaikan serta tukar tambah baru dan bekas untuk kulkas dan mesin cuci Anda di area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
          </p>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8 space-y-2 text-xs sm:text-sm text-text-muted">
          <p className="font-semibold text-primary-900">
            Respon Langsung oleh Tim Operasional
          </p>
          <p className="leading-relaxed">
            Setiap pesan yang masuk ditangani langsung untuk mengonfirmasi ketersediaan slot rute harian serta perkiraan biaya sebelum keberangkatan.
          </p>
        </div>
      </div>

      {/* Main Split Layout: Editorial Contact Ledger (Left 6 Cols) + Interactive WhatsApp Composer (Right 6 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left 6 Columns: Official Contact Ledger & Workshop Visual */}
        <div className="lg:col-span-6 space-y-8">
          <div className="bg-white rounded-card border border-border overflow-hidden divide-y divide-border">
            {/* Row 1: WhatsApp & Nomor Resmi */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-baseline justify-between gap-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  WhatsApp &amp; Telepon Customer Care
                </h2>
                <span className="text-xs font-semibold text-emerald-800">
                  Aktif Setiap Hari
                </span>
              </div>

              <div className="space-y-1.5">
                <p className="text-2xl sm:text-3xl font-extrabold text-primary-900 tabular-nums tracking-tight">
                  {businessInfo.displayPhone}
                </p>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Saluran resmi untuk pelaporan gejala kerusakan, pengiriman titik lokasi (share location), serta penawaran jual-beli atau tukar tambah unit.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="whatsapp"
                  size="md"
                  href={generateWhatsAppUrl()}
                  isExternal
                  data-inpage-whatsapp
                  className="gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Buka Chat WhatsApp Langsung</span>
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={`tel:${businessInfo.whatsappNumber}`}
                  className="gap-2"
                >
                  <Phone className="w-4 h-4 text-primary-800 flex-shrink-0" />
                  <span>Telepon: {businessInfo.displayPhone}</span>
                </Button>
              </div>
            </div>

            {/* Row 2: Alamat Workshop & Jam Operasional */}
            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  Basis Workshop Fisik
                </h3>
                <p className="text-sm font-bold text-primary-900 leading-snug">
                  {businessInfo.address}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  Titik keberangkatan teknisi panggilan dan gudang pengujian unit seken siap pakai.
                </p>
              </div>

              <div className="space-y-1.5 sm:border-l sm:border-border sm:pl-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                  Jam Operasional Kunjungan
                </h3>
                <p className="text-sm font-bold text-primary-900 leading-snug">
                  {businessInfo.operatingHours}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pesan WhatsApp di luar jam kerja tetap diterima untuk penjadwalan rute keesokan pagi.
                </p>
              </div>
            </div>

            {/* Row 3: Quick Region Dispatch Links */}
            <div className="p-6 sm:p-8 bg-[#F8FAFC] space-y-3">
              <h3 className="text-xs font-bold text-primary-900">
                Rute Wilayah Layanan Panggilan:
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {regionsData.map((reg) => (
                  <Link
                    key={reg.slug}
                    href={`/wilayah/${reg.slug}`}
                    className="min-h-[44px] px-3.5 py-2 rounded bg-white border border-border hover:border-primary-700 text-xs font-bold text-primary-900 flex items-center justify-between gap-2 group transition-colors"
                  >
                    <span>{reg.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary-700 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Double-Bezel Field Verification Frame */}
          <div className="p-2 bg-[#EEF2F6] rounded-[16px] border border-border grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-5 relative aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-200">
              <Image
                src="/images/kulkas-cek-jalur-belakang.jpg"
                alt="Teknisi D'cool Technical Service memeriksa instalasi kompresor belakang kulkas di rumah pelanggan"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 220px"
              />
            </div>
            <div className="sm:col-span-7 px-2 py-1 space-y-1.5">
              <p className="text-xs font-bold text-primary-900">
                Pengerjaan Transparan di Hadapan Pelanggan
              </p>
              <p className="text-xs text-text-muted leading-relaxed">
                Sertakan foto unit atau video singkat gejala kendala saat menghubungi WhatsApp agar teknisi kami dapat membawa suku cadang yang tepat sejak awal keberangkatan.
              </p>
            </div>
          </div>
        </div>

        {/* Right 6 Columns: Interactive WhatsApp Message Composer */}
        <div className="lg:col-span-6">
          <WhatsAppComposer />
        </div>
      </div>
    </div>
  );
}
