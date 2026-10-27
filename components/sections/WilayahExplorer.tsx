'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { RegionArea } from '@/types';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface WilayahExplorerProps {
  regions: RegionArea[];
}

export const WilayahExplorer: React.FC<WilayahExplorerProps> = ({
  regions,
}) => {
  const [selectedRegionSlug, setSelectedRegionSlug] = useState<string>('semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedSlug, setExpandedSlug] = useState<string>('bekasi');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredRegions = useMemo(() => {
    return regions
      .filter((r) =>
        selectedRegionSlug === 'semua' ? true : r.slug === selectedRegionSlug
      )
      .map((r) => {
        if (!searchQuery.trim()) {
          return { ...r, matchedSubDistricts: r.subDistricts };
        }
        const q = searchQuery.toLowerCase();
        const regionMatches =
          r.name.toLowerCase().includes(q) ||
          r.coverageNote.toLowerCase().includes(q);
        const matchedSubs = r.subDistricts.filter((sub) =>
          sub.toLowerCase().includes(q)
        );
        return {
          ...r,
          matchedSubDistricts:
            regionMatches && matchedSubs.length === 0
              ? r.subDistricts
              : matchedSubs,
          isMatch: regionMatches || matchedSubs.length > 0,
        };
      })
      .filter((r) =>
        !searchQuery.trim() ? true : (r as { isMatch?: boolean }).isMatch
      );
  }, [regions, selectedRegionSlug, searchQuery]);

  const regionTabs = [
    { slug: 'semua', label: 'Semua Area (4 Wilayah)' },
    ...regions.map((r) => ({
      slug: r.slug,
      label: r.slug === 'bekasi' ? 'Bekasi (Pusat)' : r.name,
    })),
  ];

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const currentIdx = regionTabs.findIndex((t) => t.slug === selectedRegionSlug);
    const total = regionTabs.length;
    const nextIdx =
      e.key === 'ArrowRight'
        ? (currentIdx + 1) % total
        : (currentIdx - 1 + total) % total;
    const nextTab = regionTabs[nextIdx];
    setSelectedRegionSlug(nextTab.slug);
    if (nextTab.slug !== 'semua') {
      setExpandedSlug(nextTab.slug);
    }
    tabRefs.current[nextIdx]?.focus();
  };

  return (
    <div className="space-y-14">
      {/* 1. Flagship Workshop Hub Spotlight */}
      <div className="bg-white rounded-card border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Basis Operasional Utama &amp; Workshop Fisik
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight leading-snug">
              Berpusat di Pondok Gede, Bekasi.<br />
              <span className="text-primary-700">Armada Teknisi Terjadwal Setiap Hari.</span>
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Seluruh pemberangkatan teknisi panggilan maupun pengantaran unit jual-beli dan tukar tambah dikoordinasikan langsung dari workshop resmi kami di <strong className="text-text font-semibold">{businessInfo.address}</strong>.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-border text-xs">
            <div className="space-y-1">
              <dt className="text-text-muted font-medium">Jam Operasional Rute</dt>
              <dd className="font-bold text-primary-900">{businessInfo.operatingHours}</dd>
            </div>
            <div className="space-y-1 sm:border-l sm:border-border sm:pl-4">
              <dt className="text-text-muted font-medium">Cakupan Layanan</dt>
              <dd className="font-bold text-primary-900">Service di Tempat &amp; Tukar Tambah</dd>
            </div>
            <div className="space-y-1 sm:border-l sm:border-border sm:pl-4">
              <dt className="text-text-muted font-medium">Wilayah Jangkauan</dt>
              <dd className="font-bold text-primary-900">Bekasi, Jaktim, Jaksel &amp; Depok</dd>
            </div>
          </dl>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <Link
              href="/wilayah/bekasi"
              className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
            >
              <span>Lihat rincian rute Kota &amp; Kab. Bekasi</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({ region: 'Bekasi' })}
              isExternal
              data-inpage-whatsapp
              className="w-full sm:w-auto gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Hubungi Workshop Utama</span>
            </Button>
          </div>
        </div>

        {/* Right 5 Columns: Double-Bezel Field Photo */}
        <div className="lg:col-span-5 bg-[#F8FAFC] p-5 sm:p-7 flex flex-col justify-between">
          <div className="p-2 bg-[#EEF2F6] rounded-[14px] border border-border space-y-2.5">
            <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-200">
              <Image
                src="/images/kulkas-vakum-kompresor.jpg"
                alt="Peralatan kerja teknisi D'cool Technical Service saat melakukan pemvakuman dan pengecekan kompresor"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 440px"
              />
            </div>
            <div className="px-2 pb-1 space-y-1">
              <p className="text-xs font-bold text-primary-900">
                Peralatan Ukur &amp; Suku Cadang Lengkap di Kendaraan Teknisi
              </p>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Setiap teknisi dibekali manifold gauge, pompa vakum, las pipa, multimeter digital, serta suku cadang umum agar pengerjaan selesai dalam satu kali kunjungan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Filter & Kecamatan Live Search Bar */}
      <div className="space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Direktori Rute &amp; Kecamatan yang Dilayani
            </h2>
            <p className="text-sm text-text-muted">
              Cari nama kecamatan Anda atau pilih wilayah kota untuk melihat titik jangkauan teknisi dan memesan kunjungan.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <label htmlFor="wilayah-search" className="sr-only">
              Cari nama kecamatan atau area
            </label>
            <Search
              className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="wilayah-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kecamatan (misal: Tebet, Pondok Gede, Cinere)..."
              className="w-full min-h-[44px] pl-10 pr-9 py-2 bg-white border border-border rounded-button text-xs sm:text-sm text-text placeholder:text-[#526574] focus:outline-none focus:ring-2 focus:ring-focus"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Hapus pencarian kecamatan"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 text-text-muted hover:text-primary-900 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Region Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter berdasarkan kota atau wilayah"
          onKeyDown={handleTabKeyDown}
          className="flex flex-wrap gap-1.5 p-1 bg-[#EEF2F6] rounded-button border border-border"
        >
          {regionTabs.map((tab, idx) => {
            const isSelected = selectedRegionSlug === tab.slug;
            return (
              <button
                key={tab.slug}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => {
                  setSelectedRegionSlug(tab.slug);
                  if (tab.slug !== 'semua') {
                    setExpandedSlug(tab.slug);
                    trackEvent('service_area_click', {
                      region_slug: tab.slug,
                      context: 'wilayah_explorer_tab',
                    });
                  }
                }}
                className={`min-h-[44px] px-4 py-2 text-xs font-bold rounded-[8px] transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                    : 'text-text-muted hover:text-text border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. Interactive Regional Route Ledger */}
        {filteredRegions.length === 0 ? (
          <div className="bg-white rounded-card border border-border p-8 sm:p-12 text-center space-y-4">
            <p className="text-base font-bold text-primary-900">
              Kecamatan &ldquo;{searchQuery}&rdquo; belum tercantum di daftar ringkas kami
            </p>
            <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              Selama lokasi Anda berada di area Bekasi, Jakarta Timur, Jakarta Selatan, atau Depok, teknisi kami tetap dapat menjangkau alamat Anda.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRegionSlug('semua');
                }}
              >
                Reset Pencarian
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                href={generateWhatsAppUrl({ region: searchQuery })}
                isExternal
                data-inpage-whatsapp
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <span>Tanyakan Rute ke &ldquo;{searchQuery}&rdquo;</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-card border border-border divide-y divide-border overflow-hidden">
            {filteredRegions.map((region) => {
              const isExpanded =
                expandedSlug === region.slug ||
                selectedRegionSlug !== 'semua' ||
                Boolean(searchQuery.trim());

              return (
                <div key={region.slug} className="transition-colors">
                  {/* Ledger Row Header */}
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedSlug(
                        isExpanded && selectedRegionSlug === 'semua'
                          ? ''
                          : region.slug
                      )
                    }
                    className="w-full text-left p-5 sm:p-7 hover:bg-[#F8FAFC] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-focus"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-extrabold text-primary-900">
                          {region.name}
                        </h3>
                        <span className="text-xs font-semibold text-primary-700">
                          • Provinsi {region.province}
                        </span>
                        {region.slug === 'bekasi' && (
                          <span className="text-xs font-bold text-emerald-800">
                            • Pusat Workshop
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                        {region.coverageNote}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-4 pt-2 md:pt-0 border-t md:border-t-0 border-border/60 flex-shrink-0">
                      <span className="text-xs font-bold text-primary-900">
                        {region.matchedSubDistricts.length} Area Kecamatan
                      </span>
                      <span
                        className={`w-9 h-9 rounded-[8px] border border-border bg-[#F8FAFC] flex items-center justify-center text-primary-900 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 bg-primary-900 text-white' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </button>

                  {/* Expandable Kecamatan & Operational Matrix */}
                  {isExpanded && (
                    <div className="bg-[#F8FAFC] border-t border-border p-5 sm:p-7 space-y-6">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Left: Kecamatan Interactive Ledger List */}
                        <div className="lg:col-span-8 space-y-3">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-border">
                            <h4 className="text-xs font-bold text-primary-900">
                              Daftar Kecamatan &amp; Koridor Rutin di {region.name}:
                            </h4>
                            <span className="text-[11px] text-text-muted">
                              Pilih kecamatan untuk jadwalkan via WhatsApp
                            </span>
                          </div>

                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y divide-border/70 text-xs">
                            {region.matchedSubDistricts.map((sub) => (
                              <li key={sub}>
                                <a
                                  href={generateWhatsAppUrl({
                                    region: `${sub}, ${region.name}`,
                                  })}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  data-inpage-whatsapp
                                  className="min-h-[44px] py-2.5 flex items-center justify-between gap-2 text-primary-900 hover:text-primary-700 font-semibold group transition-colors"
                                >
                                  <span className="group-hover:underline">{sub}</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary-700 transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right: Local Operational Note & Direct Actions */}
                        <div className="lg:col-span-4 lg:border-l lg:border-border lg:pl-6 space-y-4">
                          {region.localOperationalNote && (
                            <div className="space-y-1.5">
                              <h4 className="text-xs font-bold text-primary-900">
                                Catatan Rute Operasional {region.name}
                              </h4>
                              <p className="text-xs text-text-muted leading-relaxed">
                                {region.localOperationalNote}
                              </p>
                            </div>
                          )}

                          <div className="pt-3 border-t border-border space-y-2.5">
                            <Button
                              variant="whatsapp"
                              size="sm"
                              href={generateWhatsAppUrl({ region: region.name })}
                              isExternal
                              data-inpage-whatsapp
                              className="w-full gap-2 text-xs"
                            >
                              <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                              <span>Panggil Teknisi ke {region.name}</span>
                            </Button>

                            <Link
                              href={`/wilayah/${region.slug}`}
                              className="min-h-[44px] w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-button border border-border bg-white hover:bg-slate-50 text-xs font-bold text-primary-900 transition-colors group"
                            >
                              <span>Buka Halaman Detail {region.name}</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
