import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Tentang Kami - Layanan Service Panggilan Terpercaya',
  description:
    'Mengenal layanan perbaikan kulkas dan mesin cuci panggilan kami di Jabodetabek dengan prinsip transparansi, garansi, dan teknisi terampil.',
};

export default function TentangKamiPage() {
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
            Tentang Kami
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Tentang Layanan Kami
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {businessInfo.tagline}. Kami hadir memberikan solusi perbaikan perangkat pendingin dan pencuci rumah tangga dengan komunikasi terbuka dan pengerjaan langsung di tempat Anda.
        </p>
      </div>

      {/* Visi & Komitmen Layanan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
            <Wrench className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-primary-900">Pengerjaan di Tempat</h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Perangkat dikerjakan langsung di rumah Anda agar Anda dapat melihat proses pembongkaran, diagnosa, dan penggantian komponen secara nyata.
          </p>
        </Card>

        <Card className="space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
            <ShieldCheck className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-primary-900">Transparansi Biaya</h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Biaya jasa dan harga suku cadang selalu diinformasikan sebelum pekerjaan dimulai. Anda memiliki hak penuh untuk menyetujui atau menolak tindakan.
          </p>
        </Card>

        <Card className="space-y-3">
          <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
            <Clock className="w-5 h-5" aria-hidden="true" />
          </div>
          <h2 className="text-lg font-bold text-primary-900">Jadwal Pasti</h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Jadwal kunjungan disinkronkan dengan rute harian teknisi untuk memastikan teknisi datang sesuai rentang waktu yang disepakati bersama.
          </p>
        </Card>
      </div>

      {/* Independensi Layanan Disclaimer */}
      <section className="bg-primary-50 border border-primary-100 rounded-card p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-primary-900">
          Layanan Spesialis Mandiri
        </h2>
        <div className="space-y-3 text-sm text-text-muted leading-relaxed">
          <p>
            Kami adalah penyedia jasa servis panggilan mandiri dan independen. Kami menangani berbagai merek peralatan rumah tangga yang beredar di Indonesia tanpa mengklaim sebagai service center tunggal dari salah satu merek manufaktur.
          </p>
          <p>
            Pendekatan ini memungkinkan kami memberikan saran alternatif yang lebih fleksibel, cepat, dan ekonomis untuk perbaikan perangkat yang sudah lewat masa garansi resmi pabrikan.
          </p>
        </div>

        <div className="pt-2 flex items-center gap-2 text-xs text-primary-800 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Garansi layanan diberikan secara tertulis untuk komponen yang diganti oleh teknisi kami.</span>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-primary-900">
            Ingin Mengonsultasikan Perangkat Anda?
          </h3>
          <p className="text-sm text-text-muted">
            Customer care kami siap membantu menjawab pertanyaan Anda melalui WhatsApp.
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
          <span>Konsultasi Sekarang</span>
        </Button>
      </div>
    </div>
  );
}
