import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { WilayahExplorer } from '@/components/sections/WilayahExplorer';
import { JsonLd } from '@/components/seo/JsonLd';
import { regionsData } from '@/lib/content/regions';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { buildPageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Area Layanan Service Kulkas & Mesin Cuci - Bekasi, Jaktim, Jaksel, Depok',
  description:
    'Cakupan wilayah kunjungan teknisi panggilan serta antar-jemput jual beli kulkas dan mesin cuci di Kota & Kab. Bekasi, Jakarta Timur, Jakarta Selatan, dan Kota Depok.',
  path: '/wilayah',
});

export default function WilayahPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Area Layanan', path: '/wilayah' },
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
            Area Layanan
          </li>
        </ol>
      </nav>

      {/* Asymmetric Editorial Page Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
            Cakupan Area Layanan<br />
            <span className="text-primary-700">&amp; Rute Kunjungan Teknisi.</span>
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Armada teknisi kami melayani panggilan pemeriksaan, perbaikan di tempat, serta pengantaran unit jual-beli dan tukar tambah khusus untuk wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
          </p>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-border lg:pl-8 space-y-2 text-xs sm:text-sm text-text-muted">
          <p className="font-semibold text-primary-900">
            Fokus 4 Wilayah untuk Ketepatan Waktu
          </p>
          <p className="leading-relaxed">
            Pembatasan rute operasional memastikan teknisi datang tepat sesuai jadwal yang disepakati dan ketepatan penanganan perangkat Anda.
          </p>
          <Link
            href="/layanan"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 pt-1 group"
          >
            <span>Telusuri katalog layanan &amp; kerusakan</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      {/* Interactive Hub Spotlight & Regional Route Explorer */}
      <WilayahExplorer regions={regionsData} />

      {/* Prosedur Kunjungan Lapangan (Editorial Process Table - No Generic Icon Cards) */}
      <section className="bg-[#F8FAFC] border border-border rounded-card p-6 sm:p-10 space-y-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900 tracking-tight">
            Standar Operasional Kunjungan ke Lokasi Anda
          </h2>
          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            Setiap jadwal kunjungan mengikuti tahapan koordinasi berikut agar pemeriksaan di rumah, apartemen, maupun tempat usaha berjalan lancar.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4 border-t border-border">
          <li className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-primary-900">
                Penjadwalan Rute Terdekat
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-10">
              Admin memetakan posisi teknisi mobile terdekat dengan kecamatan Anda serta mengonfirmasi jam tiba melalui WhatsApp.
            </p>
          </li>

          <li className="space-y-2 md:border-l md:border-border md:pl-6">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-primary-900">
                Konfirmasi Titik &amp; Akses Masuk
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-10">
              Untuk klaster perumahan, apartemen, atau ruko komersial, teknisi mematuhi prosedur lapor keamanan dan perizinan kerja gedung.
            </p>
          </li>

          <li className="space-y-2 md:border-l md:border-border md:pl-6">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0">
                3
              </span>
              <h3 className="text-sm sm:text-base font-bold text-primary-900">
                Inspeksi &amp; Pengerjaan di Tempat
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed pl-10">
              Pengecekan dan perbaikan dilakukan langsung di lokasi secara terbuka tanpa perlu membawa unit keluar rumah.
            </p>
          </li>
        </ol>
      </section>

      {/* Bottom Direct Dispatch Banner */}
      <div className="bg-[#0E2A47] text-white rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Ingin Memastikan Ketersediaan Jadwal Hari Ini?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Kirimkan nama jalan atau kecamatan tempat tinggal Anda di Bekasi, Jakarta Timur, Jakarta Selatan, atau Depok melalui WhatsApp untuk konfirmasi instan.
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
          <span>Tanyakan Jadwal Rute Anda</span>
        </Button>
      </div>
    </div>
  );
}
