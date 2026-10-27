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
  title: 'Jasa Service Mesin Cuci Panggilan Bekasi, Jaktim, Jaksel & Depok (Front Loading, Top Loading, 2 Tabung)',
  description:
    'Layanan service mesin cuci panggilan langsung ke rumah atau laundry untuk tipe front loading, top loading 1 tabung, 2 tabung, dan dryer. Pengecekan terbuka di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
  path: '/layanan/service-mesin-cuci',
  ogImage: '/images/mesincuci-bongkar-unit.jpg',
});

const mesinCuciApplianceSpecs = [
  {
    type: 'Mesin Cuci Bukaan Depan (Front Loading & Inverter)',
    brands: 'LG Direct Drive, Samsung EcoBubble, Electrolux, Bosch, Sharp, Modena, Beko',
    focus: 'Perbaikan modul PCB kontrol, door lock switch, drain pump tersumbat/mati, penggantian bearing & spider drum, serta karet bellow pintu.',
  },
  {
    type: 'Mesin Cuci Bukaan Atas 1 Tabung (Top Loading Otomatis)',
    brands: 'Samsung, LG Smart Inverter, Sharp, Panasonic, Polytron Zeromatic, Aqua, Sanken',
    focus: 'Penanganan mekanisme gearbox aus, motor drain retraktor, water level pressure sensor, katup water inlet valve, dan modul tombol display.',
  },
  {
    type: 'Mesin Cuci 2 Tabung (Twin Tub Semi-Otomatis)',
    brands: 'Sharp, Aqua, Polytron, Panasonic, Sanken, Denpoo, Midea',
    focus: 'Perbaikan dinamo pencuci/pengering lemah, penggantian kapasitor, seal karet pembuangan bocor, timer pencuci, dan v-belt kendor.',
  },
  {
    type: 'Mesin Pengering Pakaian (Dryer) & Unit Laundry',
    brands: 'Maytag, Speed Queen, Electrolux, Galanz, Midea, Beko, Modena',
    focus: 'Pemeriksaan pemanas/elemen heater, thermostat pengaman suhu, belt pemutar drum, roller tumpuan tabung, serta pembersihan jalur lint.',
  },
];

export default function ServiceMesinCuciPage() {
  const mesinCuciService = servicesData.find((s) => s.slug === 'service-mesin-cuci')!;
  const mesinCuciIssues = priorityIssues.filter((i) => i.category === 'mesin-cuci');
  const mesinCuciFaqs = faqData.filter(
    (f) => f.category === 'mesin-cuci' || f.category === 'biaya' || f.category === 'umum'
  );

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Service Mesin Cuci Segala Jenis', path: '/layanan/service-mesin-cuci' },
  ]);

  const serviceJsonLd = buildServiceJsonLd({
    name: 'Jasa Service Mesin Cuci Segala Jenis Panggilan',
    description: mesinCuciService.shortDescription,
    path: '/layanan/service-mesin-cuci',
    serviceType: 'Perbaikan Mesin Cuci Front Loading, Top Loading, 2 Tabung, dan Dryer',
  });

  const faqJsonLd = buildFaqJsonLd(mesinCuciFaqs);

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
            Service Mesin Cuci Segala Jenis
          </li>
        </ol>
      </nav>

      {/* 1. Hero Section: Asymmetric Split Dossier */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-border">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-800 bg-[#EEF2F6] border border-border px-3 py-1.5 rounded-full">
            <span>Layanan Spesialis Mesin Cuci Panggilan ke Lokasi</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
              Jasa Service Mesin Cuci Panggilan: Front Loading, Top Loading &amp; 2 Tabung
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              Perbaikan mesin cuci langsung di rumah atau tempat usaha laundry Anda. Menangani keluhan tabung tidak berputar, air tidak mau keluar (drain error), modul mati total, hingga bocor air dengan pemeriksaan fisik terbuka sebelum tindakan.
            </p>
          </div>

          {/* Primary Conversion Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
            <Button
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppUrl({
                category: 'mesin-cuci',
                issue: 'Konsultasi Service Mesin Cuci',
              })}
              isExternal
              data-inpage-whatsapp
              className="gap-2.5 shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              <span>Pesan Teknisi Mesin Cuci via WhatsApp</span>
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
                src="/images/mesincuci-bongkar-unit.jpg"
                alt="Teknisi D'cool membongkar unit mesin cuci front loading di lokasi pelanggan untuk pengecekan komponen"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 480px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/70 to-transparent pt-12 pb-4 px-4">
                <p className="text-xs text-white/95 font-medium leading-snug">
                  Dokumentasi lapangan: pembongkaran dan pengecekan mekanis mesin cuci front loading langsung di lokasi pelanggan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Jenis Mesin Cuci & Cakupan Komponen (2x2 Architectural Spec Sheet) */}
      <section className="space-y-6">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Tipe Mesin Cuci yang Kami Tangani
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Mulai dari mesin cuci bukaan depan berteknologi inverter hingga mesin cuci 2 tabung rumahan, teknisi kami memeriksa komponen kelistrikan dan mekanis secara menyeluruh:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-border rounded-card overflow-hidden bg-white divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="divide-y divide-border">
            {mesinCuciApplianceSpecs.slice(0, 2).map((spec) => (
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
            {mesinCuciApplianceSpecs.slice(2, 4).map((spec) => (
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

      {/* 3. Daftar Gejala Kerusakan Mesin Cuci (Direct Internal Links to /kerusakan/[slug]) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Pilih Gejala Kerusakan Mesin Cuci Anda
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Pelajari penyebab komponen internal, tahapan pengecekan alat ukur di lokasi, atau langsung jadwalkan kunjungan teknisi sesuai keluhan:
            </p>
          </div>
          <Link
            href="/layanan/service-kulkas"
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-800 hover:text-primary-900 group flex-shrink-0"
          >
            <span>Butuh service kulkas/freezer? Lihat halaman kulkas</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mesinCuciIssues.map((issue) => (
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
                    category: 'mesin-cuci',
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
      {mesinCuciService.galleryImages && mesinCuciService.galleryImages.length > 0 && (
        <section className="space-y-6 pt-4 border-t border-border">
          <div className="max-w-2xl space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Dokumentasi Pemeriksaan Mesin Cuci di Lokasi Pelanggan
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Foto asli pengerjaan teknisi saat membongkar panel depan, mengecek tabung dan seal karet pintu, serta menguji putaran motor di rumah pelanggan:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {mesinCuciService.galleryImages.map((img) => (
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
                    sizes="(max-width: 640px) 100vw, 380px"
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
        issueTitle="Service Mesin Cuci Segala Jenis"
        category="mesin-cuci"
      />

      {/* 6. Tukar Tambah & Jual Beli Unit Mesin Cuci */}
      <section className="pt-4 border-t border-border">
        <TradeInSection variant="compact" />
      </section>

      {/* 7. FAQ Khusus Mesin Cuci & Biaya */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4 border-t border-border">
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-2xl font-extrabold text-primary-900 tracking-tight">
            Pertanyaan Seputar Service Mesin Cuci
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Penjelasan mengenai alur pemeriksaan di lokasi, kesepakatan biaya sebelum perbaikan, serta penanganan komponen pengganti.
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
            items={mesinCuciFaqs.map((f) => ({
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
            Mesin Cuci Anda Bermasalah Saat Mencuci atau Mengeringkan?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Informasikan merek dan tipe mesin cuci (front loading, top loading, atau 2 tabung) beserta keluhan dan lokasi Anda. Teknisi kami siap menjadwalkan pemeriksaan ke rumah Anda.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
          <Button
            variant="whatsapp"
            size="lg"
            href={generateWhatsAppUrl({
              category: 'mesin-cuci',
              issue: 'Pesan Jadwal Teknisi Mesin Cuci',
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
