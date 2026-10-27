'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { ApplianceCategory, IssueDetail } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface CommonIssuesChipsProps {
  issues: IssueDetail[];
}

const CATEGORIES: { id: ApplianceCategory; label: string }[] = [
  { id: 'kulkas', label: 'Masalah Kulkas' },
  { id: 'mesin-cuci', label: 'Masalah Mesin Cuci' },
];

export const CommonIssuesChips: React.FC<CommonIssuesChipsProps> = ({ issues }) => {
  const [activeCategory, setActiveCategory] = useState<ApplianceCategory>('kulkas');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const categoryIssues = issues.filter((item) => item.category === activeCategory);

  const [selectedSlug, setSelectedSlug] = useState<string>(
    issues.find((i) => i.category === 'kulkas')?.slug || issues[0]?.slug || 'kulkas-tidak-dingin'
  );

  const handleCategoryChange = (category: ApplianceCategory) => {
    setActiveCategory(category);
    const firstInCategory = issues.find((i) => i.category === category);
    if (firstInCategory) {
      setSelectedSlug(firstInCategory.slug);
    }
  };

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const currentIdx = CATEGORIES.findIndex((c) => c.id === activeCategory);
    const nextIdx =
      e.key === 'ArrowRight'
        ? (currentIdx + 1) % CATEGORIES.length
        : (currentIdx - 1 + CATEGORIES.length) % CATEGORIES.length;
    const nextCat = CATEGORIES[nextIdx].id;
    handleCategoryChange(nextCat);
    tabRefs.current[nextIdx]?.focus();
  };

  const selectedIssue =
    issues.find((i) => i.slug === selectedSlug) || categoryIssues[0] || issues[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      {/* Left Column: Appliance Switcher & Interactive Symptom Index */}
      <div className="lg:col-span-5 space-y-5">
        {/* Segmented Appliance Control */}
        <div
          role="tablist"
          aria-label="Pilih kategori perangkat"
          onKeyDown={handleTabKeyDown}
          className="grid grid-cols-2 gap-1 p-1 bg-[#EEF2F6] rounded-button border border-border"
        >
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                id={`issue-cat-tab-${cat.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => handleCategoryChange(cat.id)}
                className={`min-h-[44px] px-4 py-2 text-sm font-semibold rounded-[8px] transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                    : 'text-text-muted hover:text-text border border-transparent'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Vertical Symptom Selector List */}
        <div
          role="listbox"
          aria-label="Daftar gejala kerusakan"
          className="divide-y divide-border border-y border-border"
        >
          {categoryIssues.map((issue, idx) => {
            const isSelected = issue.slug === selectedIssue?.slug;
            return (
              <button
                key={issue.slug}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => setSelectedSlug(issue.slug)}
                className={`w-full text-left py-4 px-4 transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-focus ${
                  isSelected ? 'bg-[#F1F5F9]' : 'hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-baseline gap-3.5 min-w-0">
                    <span
                      className={`text-xs font-semibold tabular-nums select-none transition-colors ${
                        isSelected ? 'text-primary-700' : 'text-text-muted'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <span
                        className={`block text-base font-bold transition-colors ${
                          isSelected
                            ? 'text-primary-900'
                            : 'text-text group-hover:text-primary-800'
                        }`}
                      >
                        {issue.title}
                      </span>
                      {issue.componentFocus && (
                        <span className="block text-xs text-text-muted truncate">
                          Fokus cek: {issue.componentFocus}
                        </span>
                      )}
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 mt-1 flex-shrink-0 transition-transform duration-200 ${
                      isSelected
                        ? 'text-primary-900 translate-x-0.5'
                        : 'text-text-muted/50 group-hover:text-text-muted group-hover:translate-x-0.5'
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-xs text-text-muted leading-relaxed px-1">
          Pilih salah satu kendala di atas untuk melihat dokumentasi komponen serta urutan pemeriksaan fisik teknisi kami di lokasi.
        </p>
      </div>

      {/* Right Column: Live Diagnostic Dossier with Field Photo */}
      <div className="lg:col-span-7">
        {selectedIssue && (
          <div className="bg-white rounded-card border border-border overflow-hidden">
            {/* Tactile Field Photo Header */}
            {selectedIssue.imagePath && (
              <div className="p-2 bg-[#F1F5F9] border-b border-border">
                <div className="relative aspect-[16/9] rounded-[10px] overflow-hidden bg-slate-200">
                  <Image
                    src={selectedIssue.imagePath}
                    alt={selectedIssue.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 640px"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/70 to-transparent pt-10 pb-3.5 px-4 sm:px-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                    <p className="text-xs text-white/95 font-medium leading-snug">
                      {selectedIssue.imageCaption || selectedIssue.componentFocus}
                    </p>
                    <span className="text-[11px] font-semibold text-emerald-300 whitespace-nowrap">
                      Pemeriksaan di Lokasi
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Dossier Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-border">
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                  {selectedIssue.title}
                </h3>
                <Link
                  href={`/kerusakan/${selectedIssue.slug}`}
                  className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 text-xs font-semibold text-primary-700 hover:text-primary-900 group py-1"
                >
                  <span>Baca rincian teknis lengkap</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* Symptom & Mechanical Reality */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-primary-900">
                  Gejala Fisik &amp; Indikasi Kerusakan
                </h4>
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  {selectedIssue.symptomSummary}
                </p>
              </div>

              {/* Technical Inspection Steps */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary-900">
                  Tahapan Pengecekan Teknisi di Lokasi:
                </h4>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-text">
                  {selectedIssue.availableAssistance.map((step, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded bg-[#F8FAFC] border border-border/80 flex items-baseline gap-2"
                    >
                      <span className="font-bold tabular-nums text-primary-700 select-none">
                        0{idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Direct Action Footer */}
              <div className="pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-text-muted leading-relaxed">
                  <span>Tindakan perbaikan baru dikerjakan setelah biaya disetujui di tempat.</span>
                </div>
                <Button
                  variant="whatsapp"
                  size="md"
                  href={generateWhatsAppUrl({
                    category: selectedIssue.category,
                    issue: selectedIssue.title,
                  })}
                  isExternal
                  data-inpage-whatsapp
                  className="w-full sm:w-auto flex-shrink-0"
                >
                  <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Pesan Perbaikan {selectedIssue.title}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
