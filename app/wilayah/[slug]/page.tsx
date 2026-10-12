import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  MapPin,
  CheckCircle2,
  Clock,
  MessageSquare,
  Wrench,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { regionsData } from '@/lib/content/regions';
import { servicesData } from '@/lib/content/services';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

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

  return {
    title: `Service Kulkas & Mesin Cuci di ${region.name} - Panggilan Teknisi`,
    description: `Layanan service panggilan kulkas dan mesin cuci untuk area ${region.name}. Cek daftar kecamatan dan jadwalkan kunjungan teknisi via WhatsApp.`,
  };
}

export default async function RegionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const region = regionsData.find((r) => r.slug === slug);

  if (!region) {
    notFound();
  }

  const otherRegions = regionsData.filter((r) => r.slug !== region.slug);

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Region Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2">
          <Badge variant="info">{region.province}</Badge>
          <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            Jadwal Rute Tersedia
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight leading-tight">
          Service Kulkas & Mesin Cuci Panggilan di {region.name}
        </h1>

        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {region.coverageNote}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Informasi Kecamatan & Karakteristik Wilayah */}
        <div className="lg:col-span-8 space-y-10">
          {/* Catatan Operasional Lokal */}
          <section className="bg-primary-50 border border-primary-100 rounded-card p-6 space-y-3">
            <div className="flex items-center gap-2 font-semibold text-primary-900 text-base">
              <Clock className="w-5 h-5 text-primary-700 flex-shrink-0" aria-hidden="true" />
              <span>Karakteristik & Rute Layanan di {region.name}</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {region.localOperationalNote}
            </p>
          </section>

          {/* Daftar Kecamatan / Area Spesifik */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-700" aria-hidden="true" />
              <span>Kecamatan & Titik Layanan di {region.name}</span>
            </h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Berikut adalah area pemukiman yang tercakup dalam rute reguler teknisi kami:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {region.subDistricts.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-card p-4 border border-border flex items-start gap-3 shadow-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm font-medium text-text">{sub}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Pilihan Layanan untuk Wilayah Ini */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-primary-900 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary-700" aria-hidden="true" />
              <span>Layanan yang Dapat Dipanggil ke {region.name}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {servicesData.map((svc) => (
                <Card key={svc.id} className="flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-primary-900">{svc.name}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border">
                    <Link
                      href="/layanan"
                      className="text-xs font-semibold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1"
                    >
                      <span>Lihat Gejala Kerusakan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Kolom Kanan: Kotak Pemesanan Cepat & Link Kota Lain */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <Card highlighted className="space-y-4">
            <h3 className="text-lg font-bold text-primary-900">
              Panggil Teknisi ke {region.name}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Hubungi kami untuk konfirmasi slot jadwal kedatangan teknisi ke alamat Anda hari ini atau besok.
            </p>

            <div className="space-y-3 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({ region: region.name })}
                isExternal
                className="w-full gap-2"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Pesan Kunjungan ({region.name})</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/estimasi-biaya"
                className="w-full text-sm"
              >
                Cek Estimasi Biaya
              </Button>
            </div>

            <div className="pt-3 border-t border-border/80 text-xs text-text-muted space-y-1.5">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Teknisi siap datang ke lokasi</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pengecekan jelas di tempat</span>
              </p>
            </div>
          </Card>

          {/* Kota Lain */}
          <div className="bg-surface rounded-card p-5 border border-border space-y-3">
            <h4 className="text-sm font-bold text-primary-900 uppercase tracking-wide">
              Area Layanan Lainnya
            </h4>
            <ul className="space-y-2 text-sm">
              {otherRegions.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/wilayah/${other.slug}`}
                    className="text-primary-700 hover:text-primary-900 font-medium flex items-center justify-between group py-1"
                  >
                    <span className="group-hover:underline">{other.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
