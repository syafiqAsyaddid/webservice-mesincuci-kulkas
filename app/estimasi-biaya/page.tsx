import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { CostEstimator } from '@/components/sections/CostEstimator';
import { Accordion } from '@/components/ui/Accordion';

export const metadata: Metadata = {
  title: 'Kalkulator Estimasi Biaya Service Kulkas & Mesin Cuci',
  description:
    'Hitung perkiraan kisaran biaya perbaikan kulkas dan mesin cuci di Jabodetabek secara transparan sebelum teknisi datang ke lokasi Anda.',
};

const pricingFaqs = [
  {
    id: 'faq-price-change',
    title: 'Apakah biaya akhir bisa berbeda dengan angka di kalkulator?',
    content:
      'Angka kalkulator merupakan perkiraan acuan pekerjaan standar. Biaya akhir bisa berbeda apabila saat dibongkar di lokasi ditemukan kerusakan komponen ganda atau pipa yang keropos. Namun seluruh biaya selalu diinformasikan dan disetujui oleh Anda terlebih dahulu sebelum teknisi mulai bekerja.',
  },
  {
    id: 'faq-cancel-fee',
    title: 'Bagaimana jika setelah teknisi memeriksa saya memutuskan batal memperbaiki?',
    content:
      'Jika perbaikan dibatalkan setelah teknisi membongkar unit untuk pemeriksaan fisik, Anda hanya dikenakan biaya jasa pengecekan dan transportasi yang telah disepakati di WhatsApp sebelum kunjungan.',
  },
  {
    id: 'faq-payment-method',
    title: 'Bagaimana cara pembayaran setelah perbaikan selesai?',
    content:
      'Pembayaran dilakukan langsung setelah teknisi selesai menguji perangkat bersama Anda di lokasi. Pembayaran dapat melalui transfer bank atau tunai disertai nota resmi pekerjaan.',
  },
];

export default function EstimasiBiayaPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb Navigation */}
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
            Estimasi Biaya
          </li>
        </ol>
      </nav>

      {/* Header Halaman */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Kalkulator Estimasi Biaya Service
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Dapatkan gambaran kisaran biaya perbaikan kulkas dan mesin cuci secara terbuka sebelum menjadwalkan kunjungan teknisi ke lokasi Anda di wilayah Jabodetabek.
        </p>
      </div>

      {/* Main Interactive Estimator */}
      <CostEstimator />

      {/* Prinsip Transparansi Biaya */}
      <section className="bg-primary-50/70 border border-primary-100 rounded-card p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5">
          <ShieldCheck className="w-6 h-6 text-primary-700" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
            Prinsip Transparansi Biaya Layanan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="bg-surface rounded-card p-5 border border-border space-y-2 shadow-card">
            <h3 className="font-bold text-primary-900">1. Konfirmasi Sebelum Pengerjaan</h3>
            <p className="text-text-muted leading-relaxed">
              Teknisi selalu menjelaskan detail kerusakan dan biaya yang dibutuhkan sebelum mulai mengganti suku cadang. Tidak ada tindakan tanpa persetujuan Anda.
            </p>
          </div>

          <div className="bg-surface rounded-card p-5 border border-border space-y-2 shadow-card">
            <h3 className="font-bold text-primary-900">2. Suku Cadang Teruji & Bergaransi</h3>
            <p className="text-text-muted leading-relaxed">
              Komponen pengganti yang dipasang menggunakan suku cadang berkualitas dengan garansi servis untuk menjamin kenyamanan Anda.
            </p>
          </div>

          <div className="bg-surface rounded-card p-5 border border-border space-y-2 shadow-card">
            <h3 className="font-bold text-primary-900">3. Nota Transparan</h3>
            <p className="text-text-muted leading-relaxed">
              Setiap perbaikan disertai rincian nota yang memisahkan antara biaya jasa dan harga komponen suku cadang secara jelas.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Terkait Biaya */}
      <section className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary-700" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
            Pertanyaan Umum Seputar Biaya Service
          </h2>
        </div>

        <Accordion items={pricingFaqs} />
      </section>
    </div>
  );
}
