'use client';

import React, { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, ChevronDown, MessageSquare, X } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { IssueDetail, ServiceItem } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceListFilterProps {
  services: ServiceItem[];
  issues: IssueDetail[];
}

export const ServiceListFilter: React.FC<ServiceListFilterProps> = ({
  services,
  issues,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'kulkas' | 'mesin-cuci'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSlug, setExpandedSlug] = useState<string | null>('kulkas-bocor');

  const allTabRef = useRef<HTMLButtonElement>(null);
  const kulkasTabRef = useRef<HTMLButtonElement>(null);
  const mesinCuciTabRef = useRef<HTMLButtonElement>(null);

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    const tabs: ('all' | 'kulkas' | 'mesin-cuci')[] = ['all', 'kulkas', 'mesin-cuci'];
    const currentIndex = tabs.indexOf(selectedCategory);

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % tabs.length;
      const nextTab = tabs[nextIndex];
      setSelectedCategory(nextTab);
      if (nextTab === 'all') allTabRef.current?.focus();
      if (nextTab === 'kulkas') kulkasTabRef.current?.focus();
      if (nextTab === 'mesin-cuci') mesinCuciTabRef.current?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
      const prevTab = tabs[prevIndex];
      setSelectedCategory(prevTab);
      if (prevTab === 'all') allTabRef.current?.focus();
      if (prevTab === 'kulkas') kulkasTabRef.current?.focus();
      if (prevTab === 'mesin-cuci') mesinCuciTabRef.current?.focus();
    }
  };

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchCategory =
        selectedCategory === 'all' || issue.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchTitle = issue.title.toLowerCase().includes(query);
      const matchSummary = issue.symptomSummary.toLowerCase().includes(query);
      const matchFocus = issue.componentFocus?.toLowerCase().includes(query);
      const matchAssistance = issue.availableAssistance.some((item) =>
        item.toLowerCase().includes(query)
      );

      return matchCategory && (matchTitle || matchSummary || matchFocus || matchAssistance);
    });
  }, [issues, selectedCategory, searchQuery]);

  const isSearching = searchQuery.trim().length > 0;
  const featuredIssues = !isSearching ? filteredIssues.slice(0, 2) : [];
  const ledgerIssues = !isSearching ? filteredIssues.slice(2) : filteredIssues;

  const toggleLedgerRow = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <div className="space-y-12">
      {/* 1. Interactive Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
        <div
          role="tablist"
          aria-label="Pilih kategori perangkat"
          onKeyDown={handleTabKeyDown}
          className="inline-flex flex-wrap gap-1 p-1 bg-[#EEF2F6] rounded-button border border-border self-start"
        >
          {(
            [
              { id: 'all', label: 'Semua Perangkat', ref: allTabRef },
              { id: 'kulkas', label: 'Service Kulkas', ref: kulkasTabRef },
              { id: 'mesin-cuci', label: 'Service Mesin Cuci', ref: mesinCuciTabRef },
            ] as const
          ).map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                ref={tab.ref}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                onClick={() => setSelectedCategory(tab.id)}
                className={`min-h-[44px] px-4 sm:px-5 py-2 text-sm font-semibold rounded-[8px] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                  isActive
                    ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                    : 'text-text-muted hover:text-text border border-transparent'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input with WCAG AA Placeholder Contrast */}
        <div className="relative w-full md:w-80">
          <label htmlFor="search-issue" className="sr-only">
            Cari jenis kerusakan atau gejala
          </label>
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-muted">
            <Search className="w-4 h-4" aria-hidden="true" />
          </div>
          <input
            id="search-issue"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari keluhan (mis. freon, bocor, spin)..."
            className="w-full min-h-[44px] pl-10 pr-9 py-2 text-sm bg-white border border-border rounded-button text-text placeholder:text-[#526574] focus-visible:outline-2 focus-visible:outline-focus focus:border-primary-900 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Hapus pencarian"
              className="min-w-[44px] min-h-[44px] absolute inset-y-0 right-0 flex items-center justify-center text-text-muted hover:text-text cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Visual Specialist Showcase */}
      {!isSearching && (
        <div className="space-y-6">
          {selectedCategory === 'all' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {services.map((svc, idx) => (
                <div
                  key={svc.id}
                  className={`${
                    idx === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
                  } bg-white rounded-card border border-border overflow-hidden flex flex-col justify-between`}
                >
                  <div>
                    {svc.imagePath && (
                      <div className="p-2 bg-[#EEF2F6] border-b border-border">
                        <div
                          className={`relative ${
                            idx === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'
                          } rounded-[10px] overflow-hidden bg-slate-200`}
                        >
                          <Image
                            src={svc.imagePath}
                            alt={svc.name}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 1024px) 100vw, 600px"
                          />
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/90 via-[#0E2A47]/50 to-transparent pt-8 pb-3 px-4 flex items-center justify-between text-white">
                            <span className="text-xs font-semibold">
                              {svc.category === 'kulkas'
                                ? 'Unit Kulkas 1 & 2 Pintu, Inverter, Side-by-Side'
                                : 'Mesin Cuci Front Loading, Top Loading & 2 Tabung'}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                        <Link
                          href={`/layanan/${svc.slug}`}
                          className="hover:text-primary-700 transition-colors"
                        >
                          {svc.name}
                        </Link>
                      </h2>
                      <p className="text-sm text-text-muted leading-relaxed">
                        {svc.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-[#F8FAFC] border-t border-border flex flex-wrap items-center justify-between gap-3">
                    <Link
                      href={`/layanan/${svc.slug}`}
                      className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
                    >
                      <span>Buka halaman {svc.name.toLowerCase()}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={generateWhatsAppUrl({ category: svc.category })}
                      isExternal
                      data-inpage-whatsapp
                      className="text-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Hubungi Teknisi</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Expanded Specialist Showcase with Field Photo Filmstrip when 1 Category is Selected */
            services
              .filter((s) => s.category === selectedCategory)
              .map((svc) => (
                <div
                  key={svc.id}
                  className="bg-white rounded-card border border-border p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-5 space-y-3">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900">
                      {svc.name}
                    </h2>
                    <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                      {svc.shortDescription}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-3">
                      <Button
                        variant="whatsapp"
                        size="md"
                        href={generateWhatsAppUrl({ category: svc.category })}
                        isExternal
                        data-inpage-whatsapp
                      >
                        <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{svc.ctaText}</span>
                      </Button>

                      <Button
                        variant="secondary"
                        size="md"
                        href={`/layanan/${svc.slug}`}
                        showArrow
                      >
                        <span>Halaman Khusus {svc.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'}</span>
                      </Button>
                    </div>
                  </div>

                  {/* Field Photo Strip for Selected Category */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {(svc.galleryImages || []).slice(0, 3).map((photo, idx) => (
                      <div
                        key={photo.src}
                        className="p-1.5 bg-[#EEF2F6] rounded-[12px] border border-border space-y-2"
                      >
                        <div className="relative aspect-[4/3] rounded-[8px] overflow-hidden bg-slate-200">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover object-center"
                            sizes="(max-width: 640px) 100vw, 220px"
                          />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0E2A47]/85 text-white text-[11px] font-semibold tabular-nums">
                            0{idx + 1}
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-snug px-1 pb-1 line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          )}
        </div>
      )}

      {/* 3. Asymmetric Featured Cases + Interactive Expandable Ledger */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
              {isSearching
                ? `Hasil Pencarian Gejala (${filteredIssues.length})`
                : `Katalog Gejala & Pemeriksaan Teknis (${filteredIssues.length})`}
            </h2>
            <p className="text-sm text-text-muted">
              Klik pada salah satu baris gejala untuk melihat prosedur pemeriksaan teknisi atau buka halaman spesifikasi lengkapnya.
            </p>
          </div>
          {isSearching && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="min-h-[44px] inline-flex items-center px-3 py-1 text-xs text-primary-700 hover:text-primary-900 font-semibold cursor-pointer self-start sm:self-auto"
            >
              Reset pencarian
            </button>
          )}
        </div>

        {filteredIssues.length === 0 ? (
          <div className="bg-white rounded-card p-8 sm:p-12 border border-border text-center space-y-4">
            <p className="text-base text-text font-bold">
              Tidak ditemukan jenis kerusakan untuk &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              Gejala yang Anda alami mungkin merupakan kombinasi beberapa faktor komponen. Uraikan langsung kendala tersebut kepada teknisi kami melalui WhatsApp.
            </p>
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="md"
                href={generateWhatsAppUrl({
                  issue: searchQuery ? `Kendala: ${searchQuery}` : undefined,
                })}
                isExternal
                data-inpage-whatsapp
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Hubungi Teknisi via WhatsApp</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {/* A. Asymmetric Featured Pair (7 Columns + 5 Columns) */}
            {featuredIssues.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {featuredIssues.map((issue, idx) => {
                  const isPrimary = idx === 0;
                  return (
                    <article
                      key={issue.slug}
                      className={`${
                        isPrimary ? 'lg:col-span-7' : 'lg:col-span-5'
                      } bg-white rounded-card border border-border overflow-hidden flex flex-col justify-between`}
                    >
                      <div className="space-y-5 p-6 sm:p-7">
                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                          {issue.imagePath && (
                            <Link
                              href={`/kerusakan/${issue.slug}`}
                              className={`${
                                isPrimary ? 'sm:col-span-5' : 'sm:col-span-12'
                              } block p-1.5 bg-[#EEF2F6] rounded-[10px] border border-border group overflow-hidden`}
                            >
                              <div className="relative aspect-[16/10] rounded-[7px] overflow-hidden bg-slate-200">
                                <Image
                                  src={issue.imagePath}
                                  alt={issue.title}
                                  fill
                                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                  sizes="(max-width: 768px) 100vw, 320px"
                                />
                              </div>
                            </Link>
                          )}

                          <div
                            className={`${
                              issue.imagePath && isPrimary
                                ? 'sm:col-span-7'
                                : 'sm:col-span-12'
                            } space-y-2`}
                          >
                            <div className="flex items-center gap-2 text-xs text-text-muted">
                              <span className="font-bold tabular-nums text-primary-700">
                                Kasus Prioritas 0{idx + 1}
                              </span>
                              <span>•</span>
                              <span>
                                {issue.category === 'kulkas' ? 'Unit Kulkas' : 'Unit Mesin Cuci'}
                              </span>
                            </div>

                            <h3 className="text-xl font-extrabold text-primary-900 leading-snug">
                              <Link
                                href={`/kerusakan/${issue.slug}`}
                                className="hover:text-primary-700 transition-colors"
                              >
                                {issue.title}
                              </Link>
                            </h3>

                            <p className="text-sm text-text-muted leading-relaxed">
                              {issue.symptomSummary}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 py-4 bg-[#F8FAFC] border-t border-border flex flex-wrap items-center justify-between gap-3">
                        <Link
                          href={`/kerusakan/${issue.slug}`}
                          className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-900 hover:text-primary-700 group"
                        >
                          <span>Pelajari spesifikasi &amp; solusi</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>

                        <Button
                          variant="whatsapp"
                          size="sm"
                          href={generateWhatsAppUrl({
                            category: issue.category,
                            issue: issue.title,
                          })}
                          isExternal
                          data-inpage-whatsapp
                          className="text-xs"
                        >
                          <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>Hubungi Teknisi</span>
                        </Button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* B. Interactive Expandable Diagnostic Ledger */}
            {ledgerIssues.length > 0 && (
              <div className="space-y-3">
                {!isSearching && (
                  <div className="flex items-center justify-between px-1 text-xs text-text-muted">
                    <span className="font-semibold text-primary-900">
                      Daftar Gejala &amp; Tindakan Pemeriksaan Lainnya
                    </span>
                    <span>Klik baris untuk membuka detail</span>
                  </div>
                )}

                <div className="bg-white rounded-card border border-border divide-y divide-border overflow-hidden">
                  {ledgerIssues.map((issue, idx) => {
                    const displayIdx = !isSearching ? idx + 3 : idx + 1;
                    const isExpanded = expandedSlug === issue.slug;

                    return (
                      <div key={issue.slug} className="transition-colors">
                        <button
                          type="button"
                          aria-expanded={isExpanded}
                          onClick={() => toggleLedgerRow(issue.slug)}
                          className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-focus ${
                            isExpanded ? 'bg-[#F8FAFC]' : 'hover:bg-[#F8FAFC]/60'
                          }`}
                        >
                          <div className="flex items-center gap-3.5 sm:gap-5 min-w-0">
                            <span className="text-xs font-bold tabular-nums text-primary-700 w-6 flex-shrink-0">
                              0{displayIdx}
                            </span>

                            {issue.imagePath && (
                              <div className="relative w-14 h-11 sm:w-20 sm:h-14 rounded-[6px] overflow-hidden border border-border bg-slate-100 flex-shrink-0">
                                <Image
                                  src={issue.imagePath}
                                  alt={issue.title}
                                  fill
                                  className="object-cover object-center"
                                  sizes="80px"
                                />
                              </div>
                            )}

                            <div className="min-w-0 space-y-0.5">
                              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                                <h3 className="text-base sm:text-lg font-bold text-primary-900 truncate">
                                  {issue.title}
                                </h3>
                                <span className="text-xs text-text-muted">
                                  ({issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'})
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-text-muted line-clamp-1">
                                {issue.componentFocus
                                  ? `Komponen terkait: ${issue.componentFocus}`
                                  : issue.symptomSummary}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-xs font-semibold text-primary-700 hidden md:inline">
                              {isExpanded ? 'Tutup rincian' : 'Lihat pemeriksaan'}
                            </span>
                            <div
                              className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-transform duration-200 ${
                                isExpanded
                                  ? 'bg-primary-900 text-white border-primary-900 rotate-180'
                                  : 'bg-white text-primary-900'
                              }`}
                            >
                              <ChevronDown className="w-4 h-4" aria-hidden="true" />
                            </div>
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="px-4 sm:px-6 pb-6 pt-2 bg-[#F8FAFC] border-t border-border/60 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            {/* Left: Symptom & Remote Diagnosis Reality */}
                            <div className="lg:col-span-5 space-y-3">
                              <div className="space-y-1">
                                <h4 className="text-xs font-bold text-primary-900">
                                  Gejala pada Unit
                                </h4>
                                <p className="text-sm text-text leading-relaxed">
                                  {issue.symptomSummary}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-xs font-bold text-primary-900">
                                  Catatan Diagnosa Teknis
                                </h4>
                                <p className="text-xs text-text-muted leading-relaxed">
                                  {issue.remoteDiagnosisLimits}
                                </p>
                              </div>
                            </div>

                            {/* Right: Numbered Inspection Steps & Direct Actions */}
                            <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-border">
                              <div className="space-y-2">
                                <h4 className="text-xs font-bold text-primary-900">
                                  Langkah Pemeriksaan Teknisi di Lokasi:
                                </h4>
                                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-text">
                                  {issue.availableAssistance.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-baseline gap-2">
                                      <span className="font-bold tabular-nums text-primary-700 select-none">
                                        {itemIdx + 1}.
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              <div className="pt-3 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <Link
                                  href={`/kerusakan/${issue.slug}`}
                                  className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
                                >
                                  <span>Buka Halaman Spesifikasi Masalah Ini</span>
                                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                                </Link>

                                <Button
                                  variant="whatsapp"
                                  size="sm"
                                  href={generateWhatsAppUrl({
                                    category: issue.category,
                                    issue: issue.title,
                                  })}
                                  isExternal
                                  data-inpage-whatsapp
                                  className="text-xs"
                                >
                                  <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
                                  <span>Pesan Perbaikan {issue.title}</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
