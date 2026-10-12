import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, MessageSquare } from 'lucide-react';
import { ServiceListFilter } from '@/components/sections/ServiceListFilter';
import { Button } from '@/components/ui/Button';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Layanan Service Kulkas & Mesin Cuci',
  description:
    'Daftar lengkap layanan perbaikan kulkas dan mesin cuci panggilan wilayah Jabodetabek. Temukan penanganan sesuai gejala kerusakan alat rumah tangga Anda.',
};

export default function LayananPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb per WCAG & design.md 7.7 */}
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
            Layanan
          </li>
        </ol>
      </nav>

      {/* Header Halaman */}
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Layanan Service & Perbaikan Panggilan
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Pilih kategori perangkat dan cari gejala kendala yang Anda hadapi. Teknisi kami menangani servis panggilan di tempat untuk wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
        </p>
      </div>

      {/* Interactive Service & Issue List */}
      <ServiceListFilter services={servicesData} issues={priorityIssues} />

      {/* Bottom CTA */}
      <div className="bg-primary-50 border border-primary-100 rounded-card p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
            Tidak Menemukan Gejala Kerusakan Anda?
          </h2>
          <p className="text-sm text-text-muted max-w-lg leading-relaxed">
            Jelaskan tipe perangkat dan kendala spesifik yang terjadi langsung kepada teknisi kami melalui WhatsApp untuk konfirmasi awal.
          </p>
        </div>
        <Button
          variant="whatsapp"
          size="lg"
          href={generateWhatsAppUrl()}
          isExternal
          className="gap-2 flex-shrink-0"
        >
          <MessageSquare className="w-5 h-5" aria-hidden="true" />
          <span>Konsultasikan via WhatsApp</span>
        </Button>
      </div>
    </div>
  );
}
