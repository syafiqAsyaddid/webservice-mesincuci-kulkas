'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
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

  const activeRegion = regions.find((r) => r.slug === activeSlug) || regions[0];

  return (
    <div className="bg-gradient-to-b from-white via-[#F8FAFC] to-white rounded-card p-6 sm:p-10 border border-border/60 shadow-soft space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <Badge variant="accent">
          Cakupan Area Panggilan
        </Badge>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
          Wilayah Layanan Teknisi Jabodetabek
        </h2>
        <p className="text-sm sm:text-base text-text-muted leading-relaxed">
          Workshop kami berpusat di Tambun Utara, Kabupaten Bekasi, dengan teknisi panggilan yang menjangkau seluruh kawasan Jabodetabek sesuai jadwal konfirmasi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sisi Kiri: Peta Diagram Visual Interaktif Jabodetabek */}
        <div className="lg:col-span-7 bg-white rounded-card p-6 border border-border/60 shadow-card">
          <div className="flex items-center justify-between pb-3 border-b border-border/60 text-xs text-text-muted">
            <span className="font-semibold text-primary-900">Peta Jaringan Rute Panggilan</span>
            <span>Pilih titik kota untuk melihat detail</span>
          </div>

          {/* Stylized Visual Hub Map */}
          <div className="relative py-6 sm:py-8 flex flex-col items-center justify-center min-h-[300px]">
            {/* SVG Connecting Network Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Radial subtle radar waves */}
              <circle cx="280" cy="140" r="110" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <circle cx="280" cy="140" r="60" stroke="#E2E8F0" strokeWidth="1" opacity="0.8" />

              {/* Connector lines from Bekasi Hub to others */}
              <path d="M 360 140 L 250 110" stroke="#10B981" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 360 140 L 140 120" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 360 140 L 230 210" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
              <path d="M 360 140 L 240 270" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* City Pinpoint Markers */}
            <div className="relative z-10 w-full max-w-md grid grid-cols-3 gap-y-8 gap-x-3 text-center">
              {/* Tangerang Node */}
              <button
                type="button"
                onClick={() => setActiveSlug('tangerang')}
                className={`p-3 rounded-card transition-all text-xs focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                  activeSlug === 'tangerang'
                    ? 'bg-primary-900 text-white shadow-md scale-105 ring-2 ring-primary-700'
                    : 'bg-white border border-border/80 text-text hover:bg-slate-50'
                }`}
              >
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${activeSlug === 'tangerang' ? 'text-emerald-400' : 'text-primary-600'}`} />
                <span className="font-bold block">Tangerang</span>
                <span className="text-[10px] opacity-80 block">& Tangsel</span>
              </button>

              {/* Jakarta Node */}
              <button
                type="button"
                onClick={() => setActiveSlug('jakarta')}
                className={`p-3 rounded-card transition-all text-xs focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                  activeSlug === 'jakarta'
                    ? 'bg-primary-900 text-white shadow-md scale-105 ring-2 ring-primary-700'
                    : 'bg-white border border-border/80 text-text hover:bg-slate-50'
                }`}
              >
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${activeSlug === 'jakarta' ? 'text-emerald-400' : 'text-primary-600'}`} />
                <span className="font-bold block">DKI Jakarta</span>
                <span className="text-[10px] opacity-80 block">Selatan, Timur, dll.</span>
              </button>

              {/* Bekasi Node (Pusat Workshop) */}
              <button
                type="button"
                onClick={() => setActiveSlug('bekasi')}
                className={`p-3 rounded-card transition-all text-xs focus-visible:outline-2 focus-visible:outline-focus cursor-pointer relative ${
                  activeSlug === 'bekasi'
                    ? 'bg-emerald-600 text-white shadow-whatsapp scale-105 ring-2 ring-emerald-400'
                    : 'bg-emerald-50 border border-emerald-300 text-emerald-900 hover:bg-emerald-100/70'
                }`}
              >
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded text-[9px] font-bold bg-amber-400 text-amber-950 uppercase tracking-tight">
                  Workshop
                </span>
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${activeSlug === 'bekasi' ? 'text-white' : 'text-emerald-700'}`} />
                <span className="font-bold block">Bekasi</span>
                <span className="text-[10px] opacity-90 block">Tambun Utara</span>
              </button>

              {/* Depok Node */}
              <button
                type="button"
                onClick={() => setActiveSlug('depok')}
                className={`col-start-2 p-3 rounded-card transition-all text-xs focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                  activeSlug === 'depok'
                    ? 'bg-primary-900 text-white shadow-md scale-105 ring-2 ring-primary-700'
                    : 'bg-white border border-border/80 text-text hover:bg-slate-50'
                }`}
              >
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${activeSlug === 'depok' ? 'text-emerald-400' : 'text-primary-600'}`} />
                <span className="font-bold block">Kota Depok</span>
                <span className="text-[10px] opacity-80 block">Margonda & Sekitar</span>
              </button>

              {/* Bogor Node */}
              <button
                type="button"
                onClick={() => setActiveSlug('bogor')}
                className={`col-start-3 p-3 rounded-card transition-all text-xs focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                  activeSlug === 'bogor'
                    ? 'bg-primary-900 text-white shadow-md scale-105 ring-2 ring-primary-700'
                    : 'bg-white border border-border/80 text-text hover:bg-slate-50'
                }`}
              >
                <MapPin className={`w-4 h-4 mx-auto mb-1 ${activeSlug === 'bogor' ? 'text-emerald-400' : 'text-primary-600'}`} />
                <span className="font-bold block">Bogor</span>
                <span className="text-[10px] opacity-80 block">& Cibinong</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Detail Wilayah Terpilih */}
        <div className="lg:col-span-5 bg-white rounded-card p-6 sm:p-8 border border-border/60 shadow-card space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">
                Wilayah Terpilih
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-900">
                {activeRegion.name}
              </h3>
            </div>
            <Badge variant={activeRegion.slug === 'bekasi' ? 'accent' : 'info'}>
              {activeRegion.slug === 'bekasi' ? 'Pusat Operasional' : 'Rute Panggilan'}
            </Badge>
          </div>

          <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
            {activeRegion.coverageNote}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold text-primary-900 block">
              Kecamatan yang rutin dilayani:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {activeRegion.subDistricts.slice(0, 4).map((sub, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 rounded-badge bg-[#F1F5F9] text-text text-[11px] font-medium"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-border/60 flex flex-col gap-2.5">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({ region: activeRegion.name })}
              isExternal
              className="w-full gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Jadwalkan Teknisi ke {activeRegion.name}</span>
            </Button>

            <Link
              href={`/wilayah/${activeRegion.slug}`}
              className="text-xs font-semibold text-primary-700 hover:text-primary-900 text-center inline-flex items-center justify-center gap-1 py-1"
            >
              <span>Lihat info lengkap area {activeRegion.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
