import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Phone, MapPin, Clock, Check } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { IssueRouteExplorer } from '@/components/sections/IssueRouteExplorer';
import { TradeInSection } from '@/components/sections/TradeInSection';
import { JsonLd } from '@/components/seo/JsonLd';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Jasa Service Kulkas Panggilan Bekasi, Jaktim, Jaksel & Depok (1/2 Pintu, Inverter, Freezer, Showcase)',
  description:
    'Layanan service kulkas panggilan langsung di tempat untuk kulkas 1 pintu, 2 pintu, side by side, inverter, freezer box, showcase, dan chiller. Pengecekan manifold terbuka di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
  path: '/layanan/service-kulkas',
  ogImage: '/images/kulkas-manifold-kompresor.jpg',
});

const kulkasApplianceSpecs = [
  {
    type: 'Kulkas 1 Pintu & 2 Pintu Rumah Tangga',
    brands: 'LG, Samsung, Sharp, Polytron, Panasonic, Aqua, Toshiba, Hitachi, Electrolux',
    focus: 'Perbaikan jalur defrost (bimetal, heater, timer), kebocoran evaporator, karet pintu getas, dan pengisian refrigeran R134a / R600a.',
  },
  {
    type: 'Kulkas Side-by-Side & Multi-Door Inverter',
    brands: 'Samsung Digital Inverter, LG Linear Inverter, Sharp J-Tech, Hitachi, Modena',
    focus: 'Diagnosa modul PCB inverter, sensor thermistor ruang, kipas motor DC evaporator/kondensor, serta kalibrasi sirkulasi damper.',
  },
  {
    type: 'Freezer Box, Freezer Rak & Chest Freezer',
    brands: 'Gea, RSA, Modena, Aqua, Sharp, Frigigate, Uchida',
    focus: 'Penanganan suhu beku yang turun lambat, penggantian filter dryer, vakum sirkuit pipa kapiler, dan pengecekan relay/overload kompresor.',
  },
  {
    type: 'Showcase Pendingin Minuman & Under-Counter Chiller',
    brands: 'Gea, Sansio, RSA, Polytron, Sanden Intercool, unit komersial ruko/UMKM',
    focus: 'Perbaikan motor fan kondensor bising, thermostat suhu tidak memutus, kebocoran air kondensasi, dan perawatan berkala kondensor.',
  },
];

export default function ServiceKulkasPage() {
  const kulkasService = servicesData.find((s) => s.slug === 'service-kulkas')!;
  const kulkasIssues = priorityIssues.filter((i) => i.category === 'kulkas');
  const kulkasFaqs = faqData.filter(
    (f) => f.category === 'kulkas' || f.category === 'biaya' || f.category === 'umum'
  );

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Service Kulkas, Freezer & Showcase', path: '/layanan/service-kulkas' },
  ]);

  const serviceJsonLd = buildServiceJsonLd({
    name: 'Jasa Service Kulkas, Freezer & Showcase Panggilan',
    description: kulkasService.shortDescription,
    path: '/layanan/service-kulkas',
    serviceType: 'Perbaikan Kulkas, Freezer, Showcase, dan Chiller',
  });

  const faqJsonLd = buildFaqJsonLd(kulkasFaqs);

  return (
    <div className="py-10 sm:py-14 space-y-16 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={[breadcrumbJsonLd, serviceJsonLd, faqJsonLd]} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
        <ol className="flex items-center space-x-2 flex-wrap">
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
          <li>
            <Link
              href="/layanan"
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              Layanan
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li className="text-text font-medium" aria-current="page">
            Service Kulkas, Freezer &amp; Showcase
          </li>
        </ol>
      </nav>

      {/* 1. Hero Section: Asymmetric Split Dossier */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-border">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-800 bg-[#EEF2F6] border border-border px-3 py-1.5 rounded-full">
            <span>Layanan Spesialis Pendingin Panggilan ke Lokasi</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
              Jasa Service Kulkas, Freezer &amp; Showcase Panggilan di Tempat
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Penanganan perbaikan kulkas 1 pintu, 2 pintu, side-by-side inverter, freezer box, hingga showcase pendingin ruko. Teknisi datang membawa manifold gauge, pompa vakum, dan multimeter untuk pengecekan fisik terbuka di rumah atau tempat usaha Anda.
            </p>
          </div>

          {/* Primary Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <Button
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppUrl({
                category: 'kulkas',
                issue: 'Konsultasi Service Kulkas / Freezer / Showcase',
              })}
              isExternal
              data-inpage-whatsapp
              className="gap-2.5 shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>Pesan Teknisi Kulkas via WhatsApp</span>
            </Button>

            <Button
              variant="secondary"
              size="lg"
              href={`tel:${businessInfo.whatsappNumber}`}
              className="gap-2"
            >
              <Phone className="w-4 h-4 text-primary-800 flex-shrink-0" />
              <span>Telepon: {businessInfo.displayPhone}</span>
            </Button>
          </div>

          {/* Verified Operational Facts Strip */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-border text-xs sm:text-sm">
            <div>
              <dt className="text-xs text-text-muted flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-700" />
                <span>Wilayah Kunjungan</span>
              </dt>
              <dd className="font-bold text-primary-900 mt-1">
                Bekasi, Jaktim, Jaksel &amp; Depok
              </dd>
            </div>
            <div>
              <dt className="text-xs text-text-muted flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary-700" />
                <span>Jam Operasional</span>
              </dt>
              <dd className="font-bold text-primary-900 mt-1">
                Senin - Sabtu (08.00 - 18.00 WIB)
              </dd>
            </div>
            <div>
              <dt className="text-xs text-text-muted">Sistem Biaya</dt>
              <dd className="font-bold text-emerald-800 mt-1">
                Disepakati Setelah Cek Fisik
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: Authentic Field Photo with Double-Bezel Frame */}
        <div className="lg:col-span-5">
          <div className="p-2 bg-[#EEF2F6] rounded-card border border-border">
            <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-200">
              <Image
                src="/images/kulkas-manifold-kompresor.jpg"
                alt="Teknisi D'cool melakukan pengukuran tekanan freon pada kompresor kulkas menggunakan manifold gauge"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/70 to-transparent pt-12 pb-4 px-4">
                <p className="text-xs text-white/95 font-medium leading-snug">
                  Dokumentasi lapangan: pengukuran tekanan sirkuit refrigeran dan uji beban kompresor langsung di rumah pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Jenis Perangkat Pendingin & Cakupan Komponen (2x2 Architectural Spec Sheet) */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Tipe Unit Pendingin yang Kami Tangani
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Setiap jenis kulkas dan mesin pendingin memiliki sistem sirkulasi serta kelistrikan yang berbeda. Berikut cakupan unit dan fokus pemeriksaan teknisi kami:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-card overflow-hidden bg-white divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="divide-y divide-border">
            {kulkasApplianceSpecs.slice(0, 2).map((spec) => (
              <div key={spec.type} className="p-6 sm:p-7 space-y-3">
                <h3 className="text-lg font-extrabold text-primary-900">
                  {spec.type}
                </h3>
                <p className="text-xs font-semibold text-primary-800 bg-[#F8FAFC] border border-border px-3 py-1.5 rounded-subtle">
                  Merek umum: {spec.brands}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {spec.focus}
                </p>
              </div>
            ))}
          </div>
          <div className="divide-y divide-border">
            {kulkasApplianceSpecs.slice(2, 4).map((spec) => (
              <div key={spec.type} className="p-6 sm:p-7 space-y-3">
                <h3 className="text-lg font-extrabold text-primary-900">
                  {spec.type}
                </h3>
                <p className="text-xs font-semibold text-primary-800 bg-[#F8FAFC] border border-border px-3 py-1.5 rounded-subtle">
                  Merek umum: {spec.brands}
                </p>
                <p className="text-sm text-text-muted leading-relaxed">
                  {spec.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Daftar Gejala Kerusakan Kulkas (Direct Internal Links to /kerusakan/[slug]) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Pilih Gejala Kerusakan Kulkas Anda
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Pelajari penyebab komponen internal, tahapan pengecekan alat ukur di lokasi, atau langsung jadwalkan kunjungan teknisi sesuai keluhan:
            </p>
          </div>
          <Link
            href="/layanan/service-mesin-cuci"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-800 hover:text-primary-900 group flex-shrink-0"
          >
            <span>Butuh service mesin cuci? Lihat halaman mesin cuci</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {kulkasIssues.map((issue) => (
            <article
              key={issue.slug}
              className="bg-white rounded-card border border-border overflow-hidden flex flex-col justify-between hover:border-primary-700 transition-colors"
            >
              <div>
                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-primary-800 bg-[#EEF2F6] px-2.5 py-1 rounded-sm">
                      {issue.componentFocus}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-primary-900">
                    <Link
                      href={`/kerusakan/${issue.slug}`}
                      className="hover:text-primary-700 transition-colors"
                    >
                      {issue.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {issue.symptomSummary}
                  </p>
                </div>

                <div className="px-5 sm:px-6 pb-5 space-y-2">
                  <p className="text-xs font-bold text-primary-900">
                    Tindakan pengecekan di lokasi:
                  </p>
                  <ul className="space-y-1.5">
                    {issue.availableAssistance.slice(0, 3).map((step, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-text-muted"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 sm:px-6 py-4 bg-[#F8FAFC] border-t border-border flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/kerusakan/${issue.slug}`}
                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-900 hover:text-primary-700 group"
                >
                  <span>Baca Detail Pemeriksaan</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Button
                  variant="whatsapp"
                  size="sm"
                  href={generateWhatsAppUrl({
                    category: 'kulkas',
                    issue: issue.title,
                  })}
                  isExternal
                  data-inpage-whatsapp
                  className="text-xs gap-1.5"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Pesan Cek {issue.title}</span>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Dokumentasi Pengerjaan Lapangan (Authentic Photos) */}
      {kulkasService.galleryImages && kulkasService.galleryImages.length > 0 && (
        <section className="space-y-6 pt-4 border-t border-border">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Dokumentasi Pemeriksaan Kulkas di Lokasi Pelanggan
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Foto asli pengerjaan teknisi saat memeriksa tekanan kompresor, memvakum jalur freon, dan mengecek ruang evaporator kulkas pelanggan:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {kulkasService.galleryImages.map((img) => (
              <figure
                key={img.src}
                className="bg-white rounded-card border border-border overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  />
                </div>
                <figcaption className="p-4 text-xs text-text-muted leading-relaxed">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* 5. Rute Kunjungan & Kecamatan Terdekat */}
      <IssueRouteExplorer
        regions={regionsData}
        issueTitle="Service Kulkas, Freezer & Showcase"
        category="kulkas"
      />

      {/* 6. Tukar Tambah & Jual Beli Unit Kulkas */}
      <section className="pt-4 border-t border-border">
        <TradeInSection variant="compact" />
      </section>

      {/* 7. FAQ Khusus Kulkas & Biaya */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 border-t border-border">
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-2xl font-extrabold text-primary-900 tracking-tight">
            Pertanyaan Seputar Service Kulkas
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Penjelasan transparan mengenai prosedur pengecekan awal, kesepakatan biaya sebelum tindakan, dan ketersediaan suku cadang.
          </p>
          <div className="pt-2">
            <Link
              href="/faq"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-800 hover:text-primary-900 group"
            >
              <span>Lihat seluruh daftar FAQ</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Accordion
            items={kulkasFaqs.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
            }))}
          />
        </div>
      </section>

      {/* 8. Bottom Conversion Banner */}
      <div className="bg-[#0E2A47] text-white rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Kulkas atau Freezer Anda Mengalami Kendala Hari Ini?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Sebutkan merek kulkas (1 pintu, 2 pintu, inverter, freezer, atau showcase), keluhan utama, dan kecamatan lokasi Anda. Teknisi kami siap mengonfirmasi jadwal kedatangan.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
          <Button
            variant="whatsapp"
            size="lg"
            href={generateWhatsAppUrl({
              category: 'kulkas',
              issue: 'Pesan Jadwal Teknisi Kulkas',
            })}
            isExternal
            data-inpage-whatsapp
            className="gap-2.5 w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
            <span>Chat WhatsApp Sekarang</span>
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/kontak"
            className="w-full sm:w-auto bg-white/10 text-white border-white/25 hover:bg-white/20"
          >
            <span>Isi Format Pemesanan</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
