'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

type HeroFocusId = 'kulkas' | 'mesin-cuci' | 'jual-beli';

interface HeroFocusItem {
  id: HeroFocusId;
  tabLabel: string;
  shortTag: string;
  scopeTitle: string;
  scopeItems: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  technicalNote: string;
  ctaLabel: string;
  detailHref: string;
  detailLabel: string;
  waParams: {
    category?: 'kulkas' | 'mesin-cuci';
    issue?: string;
  };
}

const HERO_FOCUS_MODES: HeroFocusItem[] = [
  {
    id: 'kulkas',
    tabLabel: 'Service Kulkas & Pendingin',
    shortTag: 'Spesialis Sistem Pendingin',
    scopeTitle: 'Cakupan Unit Pendingin yang Ditangani di Lokasi:',
    scopeItems: [
      'Kulkas 1 Pintu & 2 Pintu',
      'Side by Side & Multidoor Inverter',
      'Freezer Box & Standing Rak',
      'Showcase Minuman & Chiller Usaha',
    ],
    imageSrc: '/images/kulkas-manifold-kompresor.jpg',
    imageAlt:
      'Teknisi memeriksa tekanan kompresor kulkas menggunakan manifold gauge di lokasi pelanggan',
    imageCaption:
      'Pengukuran tekanan freon dan arus kerja kompresor menggunakan manifold gauge serta tang ampere.',
    technicalNote: 'Pengecekan Kompresor, Evaporator, Freon & Modul Inverter',
    ctaLabel: 'Pesan Teknisi Kulkas via WhatsApp',
    detailHref: '/layanan/service-kulkas',
    detailLabel: 'Detail Layanan Kulkas',
    waParams: {
      category: 'kulkas',
      issue: 'Service Kulkas / Freezer / Showcase / Chiller',
    },
  },
  {
    id: 'mesin-cuci',
    tabLabel: 'Service Mesin Cuci',
    shortTag: 'Spesialis Segala Jenis Mesin Cuci',
    scopeTitle: 'Cakupan Unit Pencuci & Pengering yang Ditangani:',
    scopeItems: [
      'Front Loading (Bukaan Depan)',
      'Top Loading 1 Tabung Otomatis',
      'Mesin Cuci 2 Tabung (Twin Tub)',
      'Mesin Pengering (Dryer) & Laundry',
    ],
    imageSrc: '/images/mesincuci-bongkar-unit.jpg',
    imageAlt:
      'Pembongkaran dan pemeriksaan mekanis mesin cuci langsung di rumah pelanggan',
    imageCaption:
      'Pemeriksaan langsung motor penggerak, pompa pembuangan (drain pump), gearbox, dan modul PCB.',
    technicalNote: 'Perbaikan Dinamo, Gearbox, Drain Pump, Seal & Modul Kontrol',
    ctaLabel: 'Pesan Teknisi Mesin Cuci via WhatsApp',
    detailHref: '/layanan/service-mesin-cuci',
    detailLabel: 'Detail Layanan Mesin Cuci',
    waParams: {
      category: 'mesin-cuci',
      issue: 'Service Mesin Cuci',
    },
  },
  {
    id: 'jual-beli',
    tabLabel: 'Tukar Tambah Baru & Bekas',
    shortTag: 'Menerima Tukar Tambah Baru & Bekas',
    scopeTitle: 'Layanan Transaksi Unit di Bekasi, Jaktim, Jaksel & Depok:',
    scopeItems: [
      'Menerima Tukar Tambah Unit Baru & Bekas',
      'Terima Beli Kulkas & Mesin Cuci Bekas',
      'Sedia Unit Baru & Seken Siap Pakai',
      'Antar & Jemput Langsung ke Alamat Anda',
    ],
    imageSrc: '/images/hero-technician.jpg',
    imageAlt:
      "Teknisi D'cool Technical Service menguji kelayakan fungsi unit kulkas dan mesin cuci",
    imageCaption:
      'Setiap unit baru dan seken diuji siklus pendinginan dan pencuciannya secara menyeluruh sebelum diserahkan.',
    technicalNote: 'Menerima Tukar Tambah Baru & Bekas dengan Taksiran Terbuka',
    ctaLabel: 'Tanya Tukar Tambah Baru & Bekas',
    detailHref: '/layanan#jual-beli-tukar-tambah',
    detailLabel: 'Info Tukar Tambah',
    waParams: {
      issue: 'Tukar Tambah Baru dan Bekas Kulkas / Mesin Cuci',
    },
  },
];

export const HeroSection: React.FC = () => {
  const [activeId, setActiveId] = useState<HeroFocusId>('kulkas');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = HERO_FOCUS_MODES.findIndex((item) => item.id === activeId);
  const activeFocus = HERO_FOCUS_MODES[activeIndex] || HERO_FOCUS_MODES[0];

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const total = HERO_FOCUS_MODES.length;
    const nextIdx =
      e.key === 'ArrowRight'
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    const nextItem = HERO_FOCUS_MODES[nextIdx];
    setActiveId(nextItem.id);
    tabRefs.current[nextIdx]?.focus();
  };

  return (
    <section className="bg-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
        {/* Main Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 Columns: Editorial Typography + Live Service Focus Switcher */}
          <div className="lg:col-span-7 space-y-7">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-700">
                {businessInfo.name} • Workshop Pondok Gede, Bekasi
              </p>

              {/* 2-Line Headline Law */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-primary-900 tracking-tight leading-[1.08]">
                  Service dan Perbaikan<br />
                  <span className="text-primary-700">Kulkas dan Mesin Cuci.</span>
                </h1>

                <p className="text-lg sm:text-2xl font-bold text-emerald-800 tracking-tight">
                  Menerima Tukar Tambah Baru dan Bekas
                </p>
              </div>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
                Layanan teknisi panggilan langsung ke tempat untuk perbaikan kulkas (1 pintu, 2 pintu, side by side, freezer, showcase, chiller) dan mesin cuci segala jenis di wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.
              </p>
            </div>

            {/* Interactive Quick-Focus Workbench Selector */}
            <div className="bg-[#F8FAFC] rounded-card border border-border p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold text-primary-900">
                  Pilih Kebutuhan Anda Saat Ini:
                </span>
                <span className="text-[11px] font-semibold text-primary-700">
                  {activeFocus.shortTag}
                </span>
              </div>

              {/* Accessible WAI-ARIA Tab Switcher */}
              <div
                role="tablist"
                aria-label="Pilih fokus layanan utama"
                onKeyDown={handleTabKeyDown}
                className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-[#EEF2F6] rounded-button border border-border"
              >
                {HERO_FOCUS_MODES.map((item, idx) => {
                  const isSelected = item.id === activeFocus.id;
                  return (
                    <button
                      key={item.id}
                      ref={(el) => {
                        tabRefs.current[idx] = el;
                      }}
                      type="button"
                      role="tab"
                      id={`hero-tab-${item.id}`}
                      aria-selected={isSelected}
                      aria-controls={`hero-panel-${item.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => setActiveId(item.id)}
                      className={`min-h-[44px] px-3 py-2 text-xs font-bold rounded-[8px] transition-all duration-150 cursor-pointer text-left sm:text-center flex items-center justify-between sm:justify-center gap-2 ${
                        isSelected
                          ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                          : 'text-text-muted hover:text-text border border-transparent'
                      }`}
                    >
                      <span>{item.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Scope Specification Grid */}
              <div
                id={`hero-panel-${activeFocus.id}`}
                role="tabpanel"
                aria-labelledby={`hero-tab-${activeFocus.id}`}
                className="pt-2 border-t border-border space-y-2.5"
              >
                <p className="text-xs font-semibold text-text-muted">
                  {activeFocus.scopeTitle}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-1 text-xs">
                  {activeFocus.scopeItems.map((scope) => (
                    <li
                      key={scope}
                      className="py-1.5 border-b border-border/70 flex items-center justify-between gap-2"
                    >
                      <span className="font-semibold text-primary-900">
                        {scope}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl(activeFocus.waParams)}
                isExternal
                data-inpage-whatsapp
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{activeFocus.ctaLabel}</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={activeFocus.detailHref}
                showArrow
                className="w-full sm:w-auto"
              >
                <span>{activeFocus.detailLabel}</span>
              </Button>
            </div>
          </div>

          {/* Right 5 Columns: Double-Bezel Field Documentation Showcase (Immediate SSR Paint for Fast LCP) */}
          <div className="lg:col-span-5">
            <div className="p-2.5 bg-[#EEF2F6] rounded-[16px] border border-border space-y-3">
              {/* Top Instrument Header Bar */}
              <div className="px-2 pt-0.5 flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-primary-900">
                  Dokumentasi Pemeriksaan Lapangan
                </span>
                <span className="text-primary-700 font-semibold">
                  {activeFocus.tabLabel}
                </span>
              </div>

              {/* Field Photo Stage */}
              <div className="relative aspect-[4/3] w-full rounded-[12px] overflow-hidden bg-slate-200">
                <Image
                  key={activeFocus.imageSrc}
                  src={activeFocus.imageSrc}
                  alt={activeFocus.imageAlt}
                  fill
                  priority
                  className="object-cover object-center transition-opacity duration-200"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>

              {/* Technical Caption & Thumbnail Switcher Strip */}
              <div className="px-2 pb-1 space-y-3">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-primary-900">
                    {activeFocus.technicalNote}
                  </p>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {activeFocus.imageCaption}
                  </p>
                </div>

                {/* Quick Thumbnail Lens Switcher */}
                <div className="pt-2.5 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-text-muted">
                    Tampilan Foto:
                  </span>
                  <div className="flex items-center gap-1.5">
                    {[
                      { id: 'kulkas' as HeroFocusId, label: 'Kulkas' },
                      { id: 'mesin-cuci' as HeroFocusId, label: 'Mesin Cuci' },
                      { id: 'jual-beli' as HeroFocusId, label: 'Unit Seken' },
                    ].map((lens) => {
                      const isCurrent = lens.id === activeFocus.id;
                      return (
                        <button
                          key={lens.id}
                          type="button"
                          onClick={() => setActiveId(lens.id)}
                          aria-pressed={isCurrent}
                          aria-label={`Lihat dokumentasi ${lens.label}`}
                          className={`min-h-[44px] px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                            isCurrent
                              ? 'bg-primary-900 text-white'
                              : 'bg-white text-text-muted border border-border hover:text-primary-900'
                          }`}
                        >
                          {lens.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Architectural Specification Ledger Strip */}
        <dl className="pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <dt className="text-xs font-bold text-primary-700">
              Basis Workshop Resmi
            </dt>
            <dd className="text-sm font-bold text-primary-900">
              Pondok Gede, Kota Bekasi
            </dd>
            <dd className="text-xs text-text-muted">
              Jln. Antara no 371 (Menerima panggilan &amp; antar-jemput unit)
            </dd>
          </div>

          <div className="space-y-1 sm:border-l sm:border-border sm:pl-6">
            <dt className="text-xs font-bold text-primary-700">
              Wilayah Operasional
            </dt>
            <dd className="text-sm font-bold text-primary-900">
              Bekasi, Jaktim, Jaksel &amp; Depok
            </dd>
            <dd className="text-xs text-text-muted">
              {businessInfo.operatingHours}
            </dd>
          </div>

          <div className="space-y-1 lg:border-l lg:border-border lg:pl-6">
            <dt className="text-xs font-bold text-primary-700">
              Transparansi Pengerjaan
            </dt>
            <dd className="text-sm font-bold text-primary-900">
              Cek Fisik di Hadapan Anda
            </dd>
            <dd className="text-xs text-text-muted">
              Rincian biaya disepakati bersama sebelum penggantian komponen
            </dd>
          </div>

          <div className="space-y-1 sm:border-l sm:border-border sm:pl-6">
            <dt className="text-xs font-bold text-emerald-800">
              Peralatan &amp; Standar Kerja
            </dt>
            <dd className="text-sm font-bold text-primary-900">
              Alat Ukur Teknis Standar
            </dd>
            <dd className="text-xs text-text-muted">
              Pengecekan manifold, tang ampere, dan alat uji langsung di tempat
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
