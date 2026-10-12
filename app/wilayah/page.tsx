import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  MapPin,
  ArrowRight,
  MessageSquare,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { regionsData } from '@/lib/content/regions';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Area Layanan Service Kulkas & Mesin Cuci Jabodetabek',
  description:
    'Cakupan wilayah kunjungan teknisi panggilan untuk service kulkas dan mesin cuci di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
};

export default function WilayahPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Cakupan Area Layanan Service Panggilan
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Teknisi kami siap datang ke rumah, apartemen, kos, maupun ruko tempat usaha Anda di wilayah Jabodetabek. Pilih kota Anda di bawah untuk melihat rincian kecamatan dan jadwal rute kunjungan.
        </p>
      </div>

      {/* Grid Kota / Wilayah */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regionsData.map((region) => (
          <Card key={region.slug} className="flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="info">{region.province}</Badge>
                <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  Aktif Melayani
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-primary-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-700 flex-shrink-0" aria-hidden="true" />
                  <span>{region.name}</span>
                </h2>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">
                  {region.coverageNote}
                </p>
              </div>

              <div className="pt-2 border-t border-border space-y-1.5 text-xs text-text">
                <span className="font-semibold text-primary-900 block">
                  Area / Kecamatan Utama:
                </span>
                <ul className="space-y-1 text-text-muted">
                  {region.subDistricts.slice(0, 3).map((sub, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary-600 mt-1.5 flex-shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <Link
                href={`/wilayah/${region.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-900 focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-1"
              >
                <span>Info Jadwal & Detail</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <Button
                variant="whatsapp"
                size="sm"
                href={generateWhatsAppUrl({ region: region.name })}
                isExternal
                className="gap-1.5 text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Pesan di Area Ini</span>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Ketentuan Panggilan & Operasional */}
      <section className="bg-primary-50 border border-primary-100 rounded-card p-6 sm:p-10 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
          Prosedur Kunjungan Teknisi di Setiap Wilayah
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-primary-900">
              <Clock className="w-4 h-4 text-primary-700" />
              <span>1. Konfirmasi Rute Harian</span>
            </div>
            <p className="text-text-muted leading-relaxed">
              Jadwal kunjungan disesuaikan dengan posisi teknisi mobile terdekat agar waktu tempuh lebih efisien.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-primary-900">
              <MapPin className="w-4 h-4 text-primary-700" />
              <span>2. Share Location Alamat</span>
            </div>
            <p className="text-text-muted leading-relaxed">
              Kirimkan pin lokasi WhatsApp atau patokan alamat yang jelas untuk memudahkan teknisi menemukan lokasi rumah Anda.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 font-semibold text-primary-900">
              <ShieldCheck className="w-4 h-4 text-primary-700" />
              <span>3. Izin Akses Lingkungan</span>
            </div>
            <p className="text-text-muted leading-relaxed">
              Untuk perumahan dengan pos keamanan atau apartemen, teknisi kami mengikuti prosedur lapor tamu yang berlaku di lokasi Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA for Unlisted Area */}
      <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-primary-900">
            Kecamatan atau Lokasi Anda Belum Terdaftar?
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Tanyakan langsung kepada customer service kami di WhatsApp. Kami akan memeriksa rute terdekat ke titik Anda.
          </p>
        </div>
        <Button
          variant="whatsapp"
          size="md"
          href={generateWhatsAppUrl()}
          isExternal
          className="gap-2 flex-shrink-0"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>Tanyakan Ketersediaan Area</span>
        </Button>
      </div>
    </div>
  );
}
