import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi - Layanan Service Kulkas & Mesin Cuci',
  description:
    'Kebijakan privasi mengenai penggunaan data, komunikasi WhatsApp, dan analitik situs web layanan service panggilan kami.',
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="py-8 sm:py-12 space-y-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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
            Kebijakan Privasi
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="max-w-3xl space-y-8 text-text">
        <div className="space-y-3 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold text-primary-900 tracking-tight">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-text-muted">
            Terakhir diperbarui: 12 Oktober 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            1. Informasi yang Kami Kumpulkan
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Website ini dirancang sebagai sarana informasi dan penghubung kontak langsung. Kami tidak menyediakan formulir pendaftaran akun atau meminta kata sandi pelanggan. Informasi yang kami peroleh meliputi:
          </p>
          <ul className="list-disc pl-5 text-sm text-text-muted space-y-1.5">
            <li>
              <strong>Data Komunikasi WhatsApp:</strong> Nama, nomor telepon, alamat rumah, serta detail kendala perangkat yang Anda bagikan secara sukarela saat berinteraksi dengan nomor WhatsApp resmi kami.
            </li>
            <li>
              <strong>Data Teknis Situs:</strong> Informasi penggunaan agregat seperti jenis peramban (browser), halaman yang dikunjungi, dan interaksi tombol (seperti klik tombol WhatsApp atau kalkulator estimasi biaya) melalui alat analitik web standar.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            2. Penggunaan Informasi
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Data yang Anda bagikan hanya digunakan untuk keperluan operasional layanan perbaikan, antara lain:
          </p>
          <ul className="list-disc pl-5 text-sm text-text-muted space-y-1.5">
            <li>Menghubungi Anda kembali untuk konfirmasi waktu dan rute teknisi.</li>
            <li>Menavigasi teknisi ke alamat yang Anda berikan.</li>
            <li>Mencatat riwayat pekerjaan servis dan masa garansi suku cadang.</li>
            <li>Mengevaluasi dan meningkatkan performa fungsional website.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            3. Perlindungan & Kerahasiaan Data
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Kami tidak menjual, menyewakan, atau membagikan data nomor telepon atau alamat Anda kepada pihak ketiga untuk kepentingan periklanan pihak lain. Data Anda hanya dapat diakses oleh petugas customer service dan teknisi yang bertugas ke lokasi Anda.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            4. Cookie dan Pelacakan Analitik
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Website dapat menggunakan cookie esensial dan kode analitik (seperti Google Analytics / Google Ads conversion tag) untuk mengukur efektivitas kampanye informasi. Kode ini tidak mengumpulkan pesan percakapan pribadi atau data pembayaran. Anda dapat mengatur browser Anda untuk menolak cookie kapan saja.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            5. Kontak Terkait Privasi
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Jika Anda memiliki pertanyaan mengenai penggunaan data atau ingin meminta penghapusan riwayat chat pemesanan Anda dari catatan operasional kami, hubungi customer care kami melalui nomor WhatsApp resmi yang tercantum di website ini.
          </p>
        </section>
      </article>
    </div>
  );
}
