import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { buildPageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: `Tentang Kami - ${businessInfo.name} | Service Kulkas & Mesin Cuci`,
  description:
    'Mengenal D\'cool Technical Service: layanan service dan perbaikan panggilan serta tukar tambah baru dan bekas kulkas dan mesin cuci di area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
  path: '/tentang-kami',
});

export default function TentangKamiPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
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
            Tentang Kami
          </li>
        </ol>
      </nav>

      {/* 1. Asymmetric Editorial Header + Field Photo */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-border">
        <div className="lg:col-span-7 space-y-5">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
            Profil Operasional &amp; Standar Kerja
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
            {businessInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            {businessInfo.tagline}. Kami melayani pemeriksaan fisik, perbaikan langsung di tempat, serta tukar tambah unit baru dan bekas untuk kulkas (1 pintu, 2 pintu, side-by-side, freezer, showcase, chiller) dan mesin cuci segala jenis di wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border text-xs sm:text-sm">
            <div>
              <dt className="text-xs text-text-muted">Basis Workshop</dt>
              <dd className="font-bold text-primary-900 mt-0.5">
                {businessInfo.address}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-text-muted">Jam Operasional Kunjungan</dt>
              <dd className="font-bold text-primary-900 mt-0.5">
                {businessInfo.operatingHours}
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="p-2 bg-[#EEF2F6] rounded-card border border-border">
            <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-200">
              <Image
                src="/images/kulkas-vakum-kompresor.jpg"
                alt="Teknisi D'cool melakukan pengecekan kompresor dan pemvakuman jalur pendingin kulkas di lokasi pelanggan"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/70 to-transparent pt-10 pb-3.5 px-4">
                <p className="text-xs text-white/95 font-medium leading-snug">
                  Pemeriksaan komponen kelistrikan dan sirkuit refrigeran dilakukan terbuka di tempat pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Prinsip Kerja Lapangan (Editorial Numbered Ledger - No Generic Icon Cards) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-2xl font-extrabold text-primary-900 tracking-tight">
            Standar Layanan Kunjungan Kami
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Perbaikan perangkat pendingin dan mesin cuci membutuhkan pengukuran aktual, bukan sekadar tebakan jarak jauh.
          </p>
          <div className="pt-2 space-y-2">
            <Link
              href="/layanan/service-kulkas"
              className="min-h-[44px] flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:text-primary-900 group"
            >
              <span>Lihat layanan service kulkas</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/layanan/service-mesin-cuci"
              className="min-h-[44px] flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:text-primary-900 group"
            >
              <span>Lihat layanan service mesin cuci</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <ol className="lg:col-span-8 bg-white rounded-card border border-border divide-y divide-border overflow-hidden">
          <li className="p-6 sm:p-7 flex items-start gap-4 sm:gap-5">
            <span className="text-xs font-extrabold text-primary-700 bg-[#EEF2F6] border border-border rounded px-2.5 py-1 tabular-nums flex-shrink-0 mt-0.5">
              01
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-primary-900">
                Pengerjaan Terbuka Langsung di Tempat
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Unit kulkas maupun mesin cuci diperiksa dan dikerjakan langsung di rumah atau tempat usaha Anda. Pelanggan dapat menyaksikan proses pembongkaran, pengukuran komponen dengan multimeter atau manifold gauge, hingga pemasangan suku cadang.
              </p>
            </div>
          </li>

          <li className="p-6 sm:p-7 flex items-start gap-4 sm:gap-5">
            <span className="text-xs font-extrabold text-primary-700 bg-[#EEF2F6] border border-border rounded px-2.5 py-1 tabular-nums flex-shrink-0 mt-0.5">
              02
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-primary-900">
                Persetujuan Biaya Sebelum Tindakan Dimulai
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Rincian biaya jasa perbaikan dan harga suku cadang pengganti disampaikan secara jelas setelah sumber kerusakan teridentifikasi. Teknisi hanya memulai pengerjaan setelah pelanggan menyetujui rincian biaya tersebut.
              </p>
            </div>
          </li>

          <li className="p-6 sm:p-7 flex items-start gap-4 sm:gap-5">
            <span className="text-xs font-extrabold text-primary-700 bg-[#EEF2F6] border border-border rounded px-2.5 py-1 tabular-nums flex-shrink-0 mt-0.5">
              03
            </span>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-primary-900">
                Rute Terjadwal di 4 Wilayah Inti
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Kami memfokuskan armada teknisi pada wilayah Kota &amp; Kabupaten Bekasi, Jakarta Timur, Jakarta Selatan, dan Kota Depok agar waktu kedatangan sesuai dengan rentang jadwal yang telah dikonfirmasi bersama pelanggan.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* 3. Independensi Layanan Disclaimer */}
      <section className="bg-[#F8FAFC] border border-border rounded-card p-6 sm:p-8 space-y-3">
        <h2 className="text-xl font-extrabold text-primary-900">
          Keterangan Layanan Spesialis Mandiri (Independen)
        </h2>
        <div className="space-y-2.5 text-sm text-text-muted leading-relaxed max-w-4xl">
          <p>
            {businessInfo.name} adalah penyedia jasa servis panggilan mandiri dan independen yang berkedudukan di Pondok Gede, Bekasi. Kami menangani perbaikan berbagai merek kulkas dan mesin cuci yang beredar di Indonesia tanpa mengklaim afiliasi sebagai pusat layanan resmi (authorized service center) dari pemegang merek manufaktur tertentu.
          </p>
          <p>
            Pendekatan independen ini memungkinkan teknisi kami memberikan pilihan penanganan dan perbaikan yang praktis, transparan, serta terjadwal langsung ke lokasi Anda.
          </p>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <div className="bg-[#0E2A47] text-white rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Ingin Mengonsultasikan Kondisi Kulkas atau Mesin Cuci Anda?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Hubungi tim operasional kami melalui WhatsApp atau telepon untuk menanyakan jadwal kunjungan teknisi ke alamat Anda.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
          <Button
            variant="whatsapp"
            size="lg"
            href={generateWhatsAppUrl()}
            isExternal
            data-inpage-whatsapp
            className="gap-2 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            <span>Hubungi via WhatsApp</span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href={`tel:${businessInfo.whatsappNumber}`}
            className="gap-2 w-full sm:w-auto bg-white/10 text-white border-white/25 hover:bg-white/20"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{businessInfo.displayPhone}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
