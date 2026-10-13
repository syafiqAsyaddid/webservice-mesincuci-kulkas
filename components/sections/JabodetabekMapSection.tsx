'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  ChevronRight,
  Building2,
} from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RegionArea } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface JabodetabekMapSectionProps {
  regions: RegionArea[];
}

export const JabodetabekMapSection: React.FC<JabodetabekMapSectionProps> = ({
  regions,
}) => {
  const [activeSlug, setActiveSlug] = useState<string>('bekasi');

  const activeRegion =
    regions.find((r) => r.slug === activeSlug) || regions[0];

  const regionSubtitles: Record<string, string> = {
    bekasi: 'Tambun Utara, Cibitung & Kota',
    jakarta: 'Selatan, Timur, Barat, Pusat, Utara',
    depok: 'Margonda, Cimanggis, Cinere & Sekitar',
    tangerang: 'BSD, Bintaro, Ciputat & Kota',
    bogor: 'Bogor Kota, Cibinong, Bojong Gede',
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#FCFDFE] to-[#F4F8FA] rounded-card p-6 sm:p-10 border border-border/80 shadow-soft space-y-8">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <Badge variant="accent">
          Cakupan Area Panggilan
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
          Wilayah Layanan Teknisi Jabodetabek
        </h2>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Workshop kami berpusat di Tambun Utara, Kabupaten Bekasi, dengan teknisi panggilan yang siap datang ke rumah atau tempat usaha Anda di seluruh Jabodetabek.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Daftar Kota / Region Selector */}
        <div className="lg:col-span-5 flex flex-col space-y-2.5">
          <div className="flex items-center justify-between px-1 pb-1 text-xs text-text-muted">
            <span className="font-semibold text-primary-900 uppercase tracking-wider text-[11px]">
              Pilih Wilayah Anda
            </span>
            <span className="text-[11px]">5 Wilayah Layanan</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {regions.map((region) => {
              const isActive = activeSlug === region.slug;
              const isBekasi = region.slug === 'bekasi';

              return (
                <button
                  key={region.slug}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveSlug(region.slug)}
                  className={`w-full text-left p-3.5 rounded-card transition-all cursor-pointer flex items-center justify-between gap-3 min-h-[56px] focus-visible:outline-2 focus-visible:outline-focus ${
                    isActive
                      ? isBekasi
                        ? 'bg-emerald-50/90 border-2 border-emerald-600 text-emerald-950 shadow-xs'
                        : 'bg-primary-50/90 border-2 border-primary-700 text-primary-950 shadow-xs'
                      : 'bg-white border border-border text-text hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-button flex items-center justify-center flex-shrink-0 ${
                        isActive
                          ? isBekasi
                            ? 'bg-emerald-600 text-white'
                            : 'bg-primary-700 text-white'
                          : 'bg-slate-100 text-text-muted'
                      }`}
                    >
                      {isBekasi ? (
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <MapPin className="w-4 h-4" aria-hidden="true" />
                      )}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-text block truncate">
                          {region.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-text-muted block truncate">
                        {regionSubtitles[region.slug] || region.coverageNote.slice(0, 35) + '...'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {isBekasi ? (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                        Pusat Workshop
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700 hidden sm:inline">
                        Panggilan
                      </span>
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-primary-700 translate-x-0.5' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Panel Detail Wilayah Terpilih */}
        <div className="lg:col-span-7 bg-white rounded-card p-6 sm:p-7 border border-border shadow-card flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Header Detail */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-border/80">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary-700 block">
                  Informasi Wilayah Terpilih
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-primary-900">
                  {activeRegion.name}
                </h3>
              </div>
              <Badge variant={activeRegion.slug === 'bekasi' ? 'accent' : 'info'}>
                {activeRegion.slug === 'bekasi' ? 'Pusat Workshop & Home Service' : 'Rute Panggilan Teknisi'}
              </Badge>
            </div>

            {/* Deskripsi Wilayah */}
            <p className="text-sm text-text-muted leading-relaxed">
              {activeRegion.coverageNote}
            </p>

            {/* Kecamatan yang Rutin Dilayani */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary-900 block">
                Area & Kecamatan yang Rutin Dilayani:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeRegion.subDistricts.map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-badge bg-surface-muted border border-border/60 text-text text-xs font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Catatan Operasional */}
            {activeRegion.localOperationalNote && (
              <div className="p-3.5 rounded-card bg-primary-50/60 border border-primary-100 text-xs text-primary-900 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-primary-700 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="leading-relaxed">
                  <strong className="font-semibold block mb-0.5">Catatan Jadwal Teknisi:</strong>
                  {activeRegion.localOperationalNote}
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-border/80 space-y-2.5">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({ region: activeRegion.name })}
              isExternal
              className="w-full gap-2 shadow-whatsapp hover:shadow-whatsapp-hover"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Jadwalkan Kunjungan ke {activeRegion.name}</span>
            </Button>

            <div className="text-center">
              <Link
                href={`/wilayah/${activeRegion.slug}`}
                className="text-xs font-semibold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1.5 py-1 transition-colors"
              >
                <span>Lihat informasi panduan area {activeRegion.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Strip */}
      <div className="pt-4 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-text-muted">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
          <span>Workshop: Srimahi No. 49, Tambun Utara, Bekasi</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
          <span>Jadwal fleksibel & konfirmasi langsung di WhatsApp</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
          <span>Garansi pekerjaan & suku cadang 14 - 30 hari</span>
        </div>
      </div>
    </div>
  );
};
