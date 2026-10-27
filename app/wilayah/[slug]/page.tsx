import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { regionsData } from '@/lib/content/regions';
import { servicesData, tradeInInfo } from '@/lib/content/services';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return regionsData.map((region) => ({
    slug: region.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = regionsData.find((r) => r.slug === slug);

  if (!region) {
    return {
      title: 'Wilayah Tidak Ditemukan',
    };
  }

  const photoInfo =
    REGION_FIELD_PHOTOS[region.slug] || REGION_FIELD_PHOTOS.bekasi;

  return buildPageMetadata({
    title: `Service dan Perbaikan Kulkas & Mesin Cuci di ${region.name}`,
    description: `Layanan service dan perbaikan panggilan serta tukar tambah baru dan bekas kulkas dan mesin cuci untuk area ${region.name}. Cek daftar kecamatan dan jadwalkan teknisi via WhatsApp.`,
    path: `/wilayah/${region.slug}`,
    ogImage: photoInfo.src,
  });
}

const REGION_FIELD_PHOTOS: Record<
  string,
  { src: string; alt: string; caption: string }
> = {
  bekasi: {
    src: '/images/kulkas-manifold-kompresor.jpg',
    alt: 'Pemeriksaan tekanan freon kulkas di wilayah Bekasi menggunakan manifold gauge',
    caption:
      'Basis utama Pondok Gede melayani Kota & Kabupaten Bekasi dengan waktu tempuh tercepat.',
  },
  'jakarta-timur': {
    src: '/images/mesincuci-bongkar-unit.jpg',
    alt: 'Pengerjaan perbaikan mesin cuci langsung di rumah pelanggan area Jakarta Timur',
    caption:
      'Rute reguler harian menjangkau Duren Sawit, Cakung, Jatinegara, Kramat Jati, dan sekitarnya.',
  },
  'jakarta-selatan': {
    src: '/images/kulkas-cek-kabinet-dalam.jpg',
    alt: 'Pengecekan sirkulasi pendingin kulkas dua pintu di area Jakarta Selatan',
    caption:
      'Melayani panggilan ke rumah tinggal, apartemen, dan ruko komersial di Jakarta Selatan.',
  },
  depok: {
    src: '/images/kulkas-cek-jalur-belakang.jpg',
    alt: 'Pemeriksaan jalur kelistrikan dan kompresor belakang kulkas di wilayah Depok',
    caption:
      'Kunjungan teknisi terjadwal untuk area Cimanggis, Margonda, Beji, Cinere, hingga Sawangan.',
  },
};

export default async function RegionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const region = regionsData.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const otherRegions = regionsData.filter((r) => r.slug !== region.slug);
  const photoInfo =
    REGION_FIELD_PHOTOS[region.slug] || REGION_FIELD_PHOTOS.bekasi;

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Area Layanan', path: '/wilayah' },
    { name: region.name, path: `/wilayah/${region.slug}` },
  ]);

  const serviceJsonLd = buildServiceJsonLd({
    name: `Service Kulkas & Mesin Cuci Panggilan di ${region.name}`,
    description: region.coverageNote,
    path: `/wilayah/${region.slug}`,
    serviceType: `Jasa Service Kulkas dan Mesin Cuci Panggilan ${region.name}`,
  });

  return (
    <div className="py-10 sm:py-14 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={[breadcrumbJsonLd, serviceJsonLd]} />
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
              href="/wilayah"
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              Area Layanan
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li className="text-text font-medium" aria-current="page">
            {region.name}
          </li>
        </ol>
      </nav>

      {/* 1. Split Regional Case-Study Hero */}
      <section className="bg-white rounded-card border border-border p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left 7 Cols */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
                Wilayah Provinsi {region.province} •{' '}
                {region.slug === 'bekasi'
                  ? 'Pusat Workshop & Panggilan'
                  : 'Rute Panggilan Terjadwal'}
              </p>

              <h1 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-primary-900 tracking-tight leading-[1.12]">
                Service Kulkas &amp; Mesin Cuci<br />
                <span className="text-primary-700">Panggilan di {region.name}.</span>
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                {region.coverageNote}
              </p>
            </div>

            {/* Operational Parameters Strip */}
            <dl className="pt-5 border-t border-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <dt className="text-text-muted font-medium">Sistem Pengerjaan</dt>
                <dd className="font-bold text-primary-900">
                  Langsung di Lokasi Anda
                </dd>
              </div>
              <div className="space-y-1 sm:border-l sm:border-border sm:pl-4">
                <dt className="text-text-muted font-medium">Layanan Unit</dt>
                <dd className="font-bold text-primary-900">
                  Service &amp; Tukar Tambah
                </dd>
              </div>
              <div className="space-y-1 sm:border-l sm:border-border sm:pl-4">
                <dt className="text-text-muted font-medium">Peralatan Teknis</dt>
                <dd className="font-bold text-emerald-800">
                  Alat Ukur Lengkap di Tempat
                </dd>
              </div>
            </dl>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({ region: region.name })}
                isExternal
                data-inpage-whatsapp
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>Panggil Teknisi ke {region.name}</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/kontak"
                showArrow
                className="w-full sm:w-auto"
              >
                Format Pemesanan Cepat
              </Button>
            </div>
          </div>

          {/* Right 5 Cols: Double-Bezel Field Photo */}
          <div className="lg:col-span-5">
            <div className="p-2 bg-[#EEF2F6] rounded-[16px] border border-border space-y-2.5">
              <div className="relative aspect-[4/3] w-full rounded-[12px] overflow-hidden bg-slate-200">
                <Image
                  src={photoInfo.src}
                  alt={photoInfo.alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 440px"
                />
              </div>
              <div className="px-2.5 pb-1.5 space-y-1">
                <p className="text-xs font-bold text-primary-900">
                  Dokumentasi Layanan Area {region.name}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {photoInfo.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Asymmetric Content & Sticky Dispatch Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left 8 Cols */}
        <div className="lg:col-span-8 space-y-10">
          {/* Unified Kecamatan & Route Ledger (Replaces Grid of Repetitive Mini-Cards) */}
          <section className="bg-white rounded-card border border-border overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-border space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                Daftar Kecamatan &amp; Koridor Rute di {region.name}
              </h2>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                Pilih kecamatan tempat tinggal Anda di bawah ini untuk langsung mengatur jadwal kunjungan teknisi melalui WhatsApp:
              </p>
            </div>

            <div className="divide-y divide-border">
              {region.subDistricts.map((sub, idx) => (
                <a
                  key={sub}
                  href={generateWhatsAppUrl({
                    region: `${sub}, ${region.name}`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-inpage-whatsapp
                  className="min-h-[52px] px-6 sm:px-8 py-3.5 flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors group"
                >
                  <div className="flex items-baseline gap-3.5">
                    <span className="text-xs font-bold text-primary-700 tabular-nums w-6 flex-shrink-0">
                      {idx + 1}.
                    </span>
                    <span className="text-sm font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                      {sub}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-primary-700 inline-flex items-center gap-1.5 flex-shrink-0">
                    <span className="hidden sm:inline">Jadwalkan ke Kecamatan Ini</span>
                    <span className="sm:hidden">Pesan</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>

            {region.localOperationalNote && (
              <div className="p-6 sm:px-8 sm:py-5 bg-[#F8FAFC] border-t border-border space-y-1">
                <h3 className="text-xs font-bold text-primary-900">
                  Karakteristik &amp; Catatan Jadwal {region.name}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {region.localOperationalNote}
                </p>
              </div>
            )}
          </section>

          {/* Unified Service & Trade-In Scope Sheet (Replaces 2 Repetitive Cards) */}
          <section className="bg-white rounded-card border border-border overflow-hidden">
            <div className="p-6 sm:p-8 border-b border-border space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                Cakupan Layanan Panggilan di {region.name}
              </h2>
              <p className="text-xs sm:text-sm text-text-muted">
                Seluruh jenis perangkat pendingin dan pencuci dikerjakan langsung di tempat Anda secara transparan.
              </p>
            </div>

            <div className="divide-y divide-border">
              {servicesData.map((svc) => (
                <div
                  key={svc.id}
                  className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
                >
                  <div className="md:col-span-5 space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-primary-900">
                      <Link
                        href={`/layanan/${svc.slug}`}
                        className="hover:text-primary-700 transition-colors"
                      >
                        {svc.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {svc.shortDescription}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={`/layanan/${svc.slug}`}
                        className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
                      >
                        <span>Lihat detail layanan &amp; gejala</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-7 md:border-l md:border-border md:pl-6 space-y-2">
                    <h4 className="text-xs font-bold text-primary-900">
                      Keluhan yang Rutin Ditangani:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-text">
                      {svc.symptoms.map((sym) => (
                        <li key={sym} className="py-1 border-b border-border/60 last:border-b-0">
                          {sym}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Trade-In Row */}
              <div className="p-6 sm:p-8 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1 max-w-lg">
                  <h3 className="text-base font-extrabold text-primary-900">
                    {tradeInInfo.title} Area {region.name}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Terima unit lama/rusak dan sedia unit seken siap pakai berkualitas dengan layanan antar-jemput langsung ke lokasi Anda di {region.name}.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  href="/layanan#jual-beli-tukar-tambah"
                  showArrow
                  className="flex-shrink-0 text-xs"
                >
                  Info Tukar Tambah
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Right 4 Cols: Sticky Dispatch Panel */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <div className="bg-[#0E2A47] text-white rounded-card p-6 sm:p-7 space-y-5">
            <div className="space-y-2 pb-4 border-b border-white/15">
              <p className="text-xs font-semibold text-emerald-400">
                Konfirmasi Rute Harian
              </p>
              <h2 className="text-xl font-extrabold text-white">
                Pesan Kunjungan ke {region.name}
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kirimkan alamat lengkap dan keluhan perangkat Anda melalui WhatsApp untuk mendapatkan jadwal kedatangan teknisi terdekat.
              </p>
            </div>

            <dl className="space-y-2.5 text-xs">
              <div className="flex justify-between gap-2 py-1 border-b border-white/10">
                <dt className="text-slate-300">Basis Keberangkatan</dt>
                <dd className="font-semibold text-white text-right">
                  Pondok Gede, Bekasi
                </dd>
              </div>
              <div className="flex justify-between gap-2 py-1 border-b border-white/10">
                <dt className="text-slate-300">Jam Operasional</dt>
                <dd className="font-semibold text-white text-right">
                  {businessInfo.operatingHours}
                </dd>
              </div>
              <div className="flex justify-between gap-2 py-1">
                <dt className="text-slate-300">Pengerjaan Unit</dt>
                <dd className="font-semibold text-emerald-400 text-right">
                  Langsung di Tempat Anda
                </dd>
              </div>
            </dl>

            <div className="space-y-2.5 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({ region: region.name })}
                isExternal
                data-inpage-whatsapp
                className="w-full text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>Hubungi via WhatsApp</span>
              </Button>

              <Link
                href="/kontak"
                className="min-h-[44px] w-full inline-flex items-center justify-center rounded-button border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
              >
                Format Pemesanan Cepat
              </Link>
            </div>
          </div>

          {/* Navigation to Other Covered Cities */}
          <div className="bg-white rounded-card border border-border overflow-hidden">
            <div className="p-4 sm:px-5 border-b border-border bg-[#F8FAFC]">
              <h3 className="text-xs font-bold text-primary-900">
                Wilayah Operasional Lainnya
              </h3>
            </div>
            <div className="divide-y divide-border">
              {otherRegions.map((other) => (
                <Link
                  key={other.slug}
                  href={`/wilayah/${other.slug}`}
                  className="min-h-[44px] px-5 py-3 flex items-center justify-between gap-2 text-xs font-semibold text-text hover:text-primary-900 hover:bg-[#F8FAFC] transition-colors group"
                >
                  <span>{other.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary-900 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
