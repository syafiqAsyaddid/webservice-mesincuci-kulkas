import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Hubungi Kami - Layanan Service Kulkas & Mesin Cuci',
  description:
    'Kontak resmi perbaikan kulkas dan mesin cuci panggilan wilayah Jabodetabek. Hubungi via WhatsApp untuk konsultasi dan jadwal teknisi.',
};

export default function KontakPage() {
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
            Kontak
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Hubungi Layanan Service Panggilan
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Kami siap membantu memperbaiki kendala kulkas dan mesin cuci Anda di area Jabodetabek. Hubungi saluran resmi kami untuk konsultasi dan penjadwalan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Kolom Kiri: Informasi Kontak */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="space-y-6">
            <h2 className="text-xl font-bold text-primary-900 pb-3 border-b border-border">
              Saluran Komunikasi Resmi
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-whatsapp/15 flex items-center justify-center text-whatsapp-dark flex-shrink-0">
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900">
                    WhatsApp Customer Care (Resmi)
                  </h3>
                  <p className="text-sm text-text mt-0.5 font-medium">
                    {businessInfo.displayPhone}
                  </p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Respon cepat untuk tanya jawab kendala, konfirmasi tarif estimasi, dan pengiriman alamat (share location).
                  </p>
                  <div className="pt-3">
                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={generateWhatsAppUrl()}
                      isExternal
                      className="gap-2"
                    >
                      <MessageSquare className="w-4 h-4" aria-hidden="true" />
                      <span>Buka Chat WhatsApp</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900">
                    Jam Operasional & Kunjungan
                  </h3>
                  <p className="text-sm text-text mt-0.5 font-medium">
                    {businessInfo.operatingHours}
                  </p>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">
                    Chat WhatsApp tetap dapat diterima di luar jam kerja untuk penjadwalan hari berikutnya.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-primary-900">
                    Sistem Layanan Panggilan
                  </h3>
                  <p className="text-sm text-text-muted mt-0.5 leading-relaxed">
                    Layanan kami berbasis kunjungan langsung ke lokasi rumah atau toko Anda. Kami tidak menerima penyerahan barang mandiri ke bengkel tanpa janji temu sebelumnya.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Kolom Kanan: Tips Persiapan Sebelum Chat */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary-50 border border-primary-100 rounded-card p-6 space-y-4">
            <div className="flex items-center gap-2 text-primary-900 font-semibold">
              <Info className="w-5 h-5 text-primary-700 flex-shrink-0" />
              <span>Agar Konsultasi Lebih Cepat</span>
            </div>

            <p className="text-xs text-text-muted leading-relaxed">
              Saat mengirimkan pesan WhatsApp, sertakan informasi berikut agar tim kami dapat segera memperkirakan solusi:
            </p>

            <ul className="space-y-2 text-xs text-text">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Merek dan jenis perangkat (misal: Kulkas 2 Pintu Sharp).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Gejala yang terjadi (misal: freezer dingin tapi bawah tidak dingin).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Kecamatan atau kota lokasi tempat tinggal Anda.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>Foto label spesifikasi unit atau video singkat kendala jika ada.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
