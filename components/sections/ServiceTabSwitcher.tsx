import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { ServiceItem } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceTabSwitcherProps {
  services: ServiceItem[];
}

export const ServiceTabSwitcher: React.FC<ServiceTabSwitcherProps> = ({ services }) => {
  const kulkasService = services.find((s) => s.category === 'kulkas') || services[0];
  const mesinCuciService = services.find((s) => s.category === 'mesin-cuci') || services[1];

  return (
    <div className="space-y-8">
      {/* Asymmetric Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-border">
        <div className="max-w-xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Layanan Perbaikan Spesialis
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Dua fokus penanganan teknis perbaikan di tempat kami: unit pendingin kulkas dan mekanisme mesin cuci tanpa perlu mengangkut unit keluar rumah.
          </p>
        </div>

        <Link
          href="/layanan"
          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary-700 hover:text-primary-900 py-2 group flex-shrink-0"
        >
          <span>Buka katalog layanan lengkap</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Side-by-Side Specialist Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* Panel 1: Kulkas & Pendingin */}
        <article className="bg-white rounded-card border border-border overflow-hidden flex flex-col justify-between">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                Spesialis Pendingin
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-900 tracking-tight">
                <Link
                  href="/layanan/service-kulkas"
                  className="hover:text-primary-700 transition-colors"
                >
                  {kulkasService.name}
                </Link>
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {kulkasService.shortDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <h4 className="text-xs font-bold text-primary-900 uppercase tracking-wider">
                Keluhan yang Rutin Ditangani di Lokasi:
              </h4>
              <ol className="divide-y divide-border border-y border-border">
                {kulkasService.symptoms.map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 py-2.5 text-xs sm:text-sm text-text"
                  >
                    <span className="text-xs font-bold tabular-nums text-primary-700 select-none w-5 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-4 bg-[#F8FAFC] border-t border-border flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({ category: 'kulkas' })}
              isExternal
              data-inpage-whatsapp
              className="w-full sm:w-auto gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Pesan Teknisi Kulkas</span>
            </Button>

            <Link
              href="/layanan/service-kulkas"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
            >
              <span>Halaman service kulkas</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </article>

        {/* Panel 2: Mesin Cuci Segala Jenis */}
        <article className="bg-white rounded-card border border-border overflow-hidden flex flex-col justify-between">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                Spesialis Pencuci &amp; Pengering
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-900 tracking-tight">
                <Link
                  href="/layanan/service-mesin-cuci"
                  className="hover:text-primary-700 transition-colors"
                >
                  {mesinCuciService.name}
                </Link>
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                {mesinCuciService.shortDescription}
              </p>
            </div>

            <div className="pt-4 border-t border-border space-y-3">
              <h4 className="text-xs font-bold text-primary-900 uppercase tracking-wider">
                Keluhan yang Rutin Ditangani di Lokasi:
              </h4>
              <ol className="divide-y divide-border border-y border-border">
                {mesinCuciService.symptoms.map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-baseline gap-3 py-2.5 text-xs sm:text-sm text-text"
                  >
                    <span className="text-xs font-bold tabular-nums text-primary-700 select-none w-5 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-4 bg-[#F8FAFC] border-t border-border flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({ category: 'mesin-cuci' })}
              isExternal
              data-inpage-whatsapp
              className="w-full sm:w-auto gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Pesan Teknisi Mesin Cuci</span>
            </Button>

            <Link
              href="/layanan/service-mesin-cuci"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
            >
              <span>Halaman service mesin cuci</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};
