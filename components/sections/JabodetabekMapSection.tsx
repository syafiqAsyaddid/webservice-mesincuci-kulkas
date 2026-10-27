'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Wrench,
  Clock,
  ChevronRight,
  Building2,
} from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { RegionArea } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

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
    bekasi: 'Pondok Gede, Jatiwaringin & Kota Bekasi',
    'jakarta-timur': 'Duren Sawit, Jatinegara, Cakung & Sekitar',
    'jakarta-selatan': 'Tebet, Pasar Minggu, Cilandak & Sekitar',
    depok: 'Margonda, Cimanggis, Cinere & Sekitar',
  };

  const handleSelectRegion = (slug: string) => {
    setActiveSlug(slug);
    trackEvent('service_area_click', {
      region_slug: slug,
      context: 'home_map_section',
    });
  };

  return (
    <div className="space-y-10">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Wilayah Jangkauan Layanan Teknisi
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Workshop kami berpusat di Pondok Gede, Kota Bekasi, dengan rute teknisi panggilan terjadwal khusus untuk area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
          </p>
        </div>
        <div className="lg:col-span-5 lg:text-right text-xs text-text-muted">
          <span>Pilih area untuk melihat daftar kecamatan yang rutin dilayani.</span>
        </div>
      </div>

      {/* Unified Split Directory */}
      <div className="bg-white rounded-card border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Left Column: Interactive Region Selector List */}
        <div className="lg:col-span-5 divide-y divide-border">
          {regions.map((region) => {
            const isActive = activeSlug === region.slug;
            const isBekasi = region.slug === 'bekasi';

            return (
              <button
                key={region.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleSelectRegion(region.slug)}
                className={`w-full text-left p-4 sm:p-5 transition-colors cursor-pointer flex items-center justify-between gap-3 min-h-[64px] focus-visible:outline-2 focus-visible:outline-focus group ${
                  isActive ? 'bg-[#F1F5F9]' : 'hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0 transition-colors ${
                      isActive
                        ? isBekasi
                          ? 'bg-emerald-700 text-white'
                          : 'bg-primary-900 text-white'
                        : 'bg-slate-100 text-text-muted group-hover:bg-slate-200'
                    }`}
                  >
                    {isBekasi ? (
                      <Building2 className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <MapPin className="w-4 h-4" aria-hidden="true" />
                    )}
                  </div>
                  <div className="truncate">
                    <span
                      className={`font-bold text-sm sm:text-base block truncate ${
                        isActive ? 'text-primary-900' : 'text-text'
                      }`}
                    >
                      {region.name}
                    </span>
                    <span className="text-xs text-text-muted block truncate">
                      {regionSubtitles[region.slug] ||
                        region.coverageNote.slice(0, 35) + '...'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {isBekasi ? (
                    <span className="text-[11px] font-semibold text-emerald-800">
                      Pusat Workshop
                    </span>
                  ) : (
                    <span className="text-[11px] text-text-muted hidden sm:inline">
                      Panggilan
                    </span>
                  )}
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? 'text-primary-900 translate-x-0.5'
                        : 'text-slate-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Region Specification Panel */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-border">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                {activeRegion.name}
              </h3>
              <span className="text-xs font-semibold text-primary-700">
                {activeRegion.slug === 'bekasi'
                  ? 'Pusat Workshop & Home Service'
                  : 'Rute Panggilan Teknisi Terjadwal'}
              </span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed">
              {activeRegion.coverageNote}
            </p>

            {/* Kecamatan List */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-primary-900">
                Area &amp; Kecamatan yang Rutin Dilayani ({activeRegion.subDistricts.length} Kecamatan):
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeRegion.subDistricts.map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#F8FAFC] border border-border text-text text-xs font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Operational Schedule Note */}
            {activeRegion.localOperationalNote && (
              <div className="pt-4 border-t border-border flex items-start gap-2.5 text-xs text-text-muted">
                <Clock
                  className="w-4 h-4 text-primary-700 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="leading-relaxed">
                  <strong className="font-semibold text-primary-900">
                    Catatan Jadwal Teknisi:{' '}
                  </strong>
                  {activeRegion.localOperationalNote}
                </p>
              </div>
            )}

            {/* Action Row */}
            <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <Link
                href={`/wilayah/${activeRegion.slug}`}
                className="min-h-[44px] text-xs font-bold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1.5 py-2 group"
              >
                <span>Panduan lengkap area {activeRegion.name}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Button
                variant="whatsapp"
                size="md"
                href={generateWhatsAppUrl({ region: activeRegion.name })}
                isExternal
                data-inpage-whatsapp
                className="w-full sm:w-auto gap-2"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <span>Jadwalkan ke {activeRegion.name}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Ledger */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-text-muted pt-2">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
          <span>Workshop: Jln. Antara no 371, Pondok Gede, Bekasi</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
          <span>Jadwal fleksibel &amp; konfirmasi langsung di WhatsApp</span>
        </div>
        <div className="flex items-center gap-2">
          <Wrench className="w-4 h-4 text-emerald-700 flex-shrink-0" aria-hidden="true" />
          <span>Pemeriksaan langsung dengan alat ukur di tempat</span>
        </div>
      </div>
    </div>
  );
};
