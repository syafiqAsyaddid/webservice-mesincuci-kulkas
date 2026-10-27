import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { buildPageMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Ketentuan Layanan - Layanan Service Kulkas & Mesin Cuci',
  description:
    'Syarat dan ketentuan layanan perbaikan panggilan, biaya pembatalan pengecekan, serta persetujuan biaya perbaikan kulkas & mesin cuci.',
  path: '/ketentuan',
});

export default function KetentuanPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Ketentuan Layanan', path: '/ketentuan' },
  ]);

  return (
    <div className="py-8 sm:py-12 space-y-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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
            Ketentuan Layanan
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <article className="max-w-3xl space-y-8 text-text">
        <div className="space-y-3 pb-6 border-b border-border">
          <h1 className="text-3xl font-bold text-primary-900 tracking-tight">
            Ketentuan Layanan
          </h1>
          <p className="text-sm text-text-muted">
            Terakhir diperbarui: 12 Oktober 2026
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            1. Ruang Lingkup Layanan
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Layanan kami mencakup jasa pemeriksaan fisik, perawatan, perbaikan, serta jual beli dan tukar tambah perangkat kulkas (1 pintu, 2 pintu, side-by-side, freezer, showcase, chiller) serta mesin cuci segala jenis secara panggilan ke lokasi pelanggan di wilayah operasional kami (Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok) yang telah dikonfirmasi.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            2. Biaya Pemeriksaan & Pembatalan
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Untuk menjaga keadilan operasional dan transportasi teknisi:
          </p>
          <ul className="list-disc pl-5 text-sm text-text-muted space-y-1.5">
            <li>
              Jika teknisi telah tiba di lokasi dan melakukan pembongkaran pemeriksaan namun pelanggan memutuskan untuk tidak melanjutkan perbaikan, hanya dikenakan biaya jasa pengecekan dan transportasi standar yang telah disepakati sebelum kunjungan.
            </li>
            <li>
              Jika perbaikan dilanjutkan dan disepakati, biaya pengecekan sudah termasuk dalam total paket biaya perbaikan yang tertera pada nota.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            3. Persetujuan Biaya & Suku Cadang
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Teknisi kami tidak diperkenankan mengganti suku cadang apa pun tanpa terlebih dahulu menginformasikan jenis kerusakan dan kisaran harga kepada pemilik perangkat. Tindakan perbaikan hanya dilakukan setelah pemilik memberikan persetujuan lisan atau tertulis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-primary-900">
            4. Keselamatan Kerja di Lokasi
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Pelanggan diharapkan menyediakan akses kerja yang aman di sekitar perangkat (bebas genangan air di lantai kerja dan sumber daya listrik yang dapat diakses dengan baik).
          </p>
        </section>
      </article>
    </div>
  );
}
