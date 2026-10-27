'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { ApplianceCategory, RegionArea } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface IssueRouteExplorerProps {
  regions: RegionArea[];
  issueTitle: string;
  category: ApplianceCategory;
}

export const IssueRouteExplorer: React.FC<IssueRouteExplorerProps> = ({
  regions,
  issueTitle,
  category,
}) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    regions[0]?.slug || 'bekasi'
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = regions.findIndex((r) => r.slug === selectedSlug);
  const activeRegion = regions[activeIndex] || regions[0];

  if (!activeRegion) return null;

  const handleSelectRegion = (slug: string) => {
    setSelectedSlug(slug);
    trackEvent('service_area_click', {
      region_slug: slug,
      context: `issue_${category}`,
    });
  };

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const total = regions.length;
    const nextIdx =
      e.key === 'ArrowRight'
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    const nextRegion = regions[nextIdx];
    handleSelectRegion(nextRegion.slug);
    tabRefs.current[nextIdx]?.focus();
  };

  return (
    <section className="bg-white rounded-card border border-border overflow-hidden">
      {/* Header & Interactive City Route Selector */}
      <div className="p-6 sm:p-7 border-b border-border space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
              Rute Kunjungan &amp; Cakupan Wilayah Teknisi
            </h2>
            <p className="text-xs sm:text-sm text-text-muted">
              Pilih kota atau kabupaten tempat tinggal Anda untuk melihat cakupan kecamatan dan menjadwalkan pemeriksaan {issueTitle.toLowerCase()}.
            </p>
          </div>
        </div>

        {/* City Tabs with WAI-ARIA Keyboard Navigation */}
        <div
          role="tablist"
          aria-label="Pilih wilayah kunjungan teknisi"
          onKeyDown={handleTabKeyDown}
          className="flex flex-wrap gap-1.5 p-1 bg-[#EEF2F6] rounded-button border border-border"
        >
          {regions.map((region, idx) => {
            const isSelected = region.slug === activeRegion.slug;
            return (
              <button
                key={region.slug}
                ref={(el) => {
                  tabRefs.current[idx] = el;
                }}
                type="button"
                role="tab"
                id={`route-tab-${region.slug}`}
                aria-selected={isSelected}
                aria-controls={`route-panel-${region.slug}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleSelectRegion(region.slug)}
                className={`min-h-[44px] px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-[8px] transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                    : 'text-text-muted hover:text-text border border-transparent'
                }`}
              >
                <span>{region.name}</span>
                {region.slug === 'bekasi' && (
                  <span className="text-[10px] font-bold text-emerald-700 hidden sm:inline">
                    • Pusat
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Region Detail Body */}
      <div
        id={`route-panel-${activeRegion.slug}`}
        role="tabpanel"
        aria-labelledby={`route-tab-${activeRegion.slug}`}
        className="p-6 sm:p-7 bg-[#F8FAFC] space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Left: Coverage Description & Schedule Note */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-bold text-primary-900">
                Layanan Panggilan {activeRegion.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-text leading-relaxed">
              {activeRegion.coverageNote}
            </p>

            {activeRegion.localOperationalNote && (
              <p className="text-xs text-text-muted leading-relaxed pt-2 border-t border-border">
                <strong className="text-primary-900 font-semibold">
                  Catatan Rute:{' '}
                </strong>
                {activeRegion.localOperationalNote}
              </p>
            )}
          </div>

          {/* Right: Covered Sub-Districts */}
          <div className="md:col-span-6 md:border-l md:border-border md:pl-6 space-y-3">
            <h4 className="text-xs font-bold text-primary-900">
              Kecamatan &amp; Area yang Rutin Dikunjungi ({activeRegion.subDistricts.length} Area):
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {activeRegion.subDistricts.map((sub) => (
                <span
                  key={sub}
                  className="px-2.5 py-1 rounded bg-white border border-border text-xs font-medium text-text"
                >
                  {sub}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action Row */}
        <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <Link
            href={`/wilayah/${activeRegion.slug}`}
            className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 hover:text-primary-900 group"
          >
            <span>Lihat informasi lengkap area {activeRegion.name}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Button
            variant="whatsapp"
            size="sm"
            href={generateWhatsAppUrl({
              category,
              issue: issueTitle,
              region: activeRegion.name,
            })}
            isExternal
            data-inpage-whatsapp
            className="text-xs w-full sm:w-auto"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 flex-shrink-0" />
            <span>Panggil Teknisi ke {activeRegion.name}</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
