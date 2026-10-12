'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Snowflake,
  Droplets,
  RotateCw,
  PowerOff,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
} from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { IssueDetail } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface CommonIssuesChipsProps {
  issues: IssueDetail[];
}

export const CommonIssuesChips: React.FC<CommonIssuesChipsProps> = ({ issues }) => {
  const [selectedSlug, setSelectedSlug] = useState<string>(
    issues[0]?.slug || 'kulkas-tidak-dingin'
  );

  const selectedIssue =
    issues.find((i) => i.slug === selectedSlug) || issues[0];

  const getIssueIcon = (slug: string) => {
    if (slug.includes('tidak-dingin')) {
      return <Snowflake className="w-4 h-4 text-sky-600" aria-hidden="true" />;
    }
    if (slug.includes('bocor') || slug.includes('tidak-membuang-air')) {
      return <Droplets className="w-4 h-4 text-blue-600" aria-hidden="true" />;
    }
    if (slug.includes('tidak-berputar') || slug.includes('berisik')) {
      return <RotateCw className="w-4 h-4 text-emerald-600" aria-hidden="true" />;
    }
    return <PowerOff className="w-4 h-4 text-amber-600" aria-hidden="true" />;
  };

  return (
    <div className="space-y-6">
      {/* Interactive Chip List */}
      <div className="flex flex-wrap gap-2.5 justify-center">
        {issues.map((issue) => {
          const isSelected = issue.slug === selectedSlug;
          return (
            <button
              key={issue.slug}
              type="button"
              onClick={() => setSelectedSlug(issue.slug)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-button text-xs sm:text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
                isSelected
                  ? 'bg-primary-900 text-white shadow-md -translate-y-0.5'
                  : 'bg-[#F1F5F9] text-text hover:bg-[#E2E8F0]'
              }`}
            >
              {getIssueIcon(issue.slug)}
              <span>{issue.title}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Issue Detail Card */}
      {selectedIssue && (
        <div className="bg-surface rounded-card p-6 sm:p-8 border border-border/60 shadow-soft max-w-3xl mx-auto space-y-6 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
            <div>
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider block">
                {selectedIssue.category === 'kulkas' ? 'Kerusakan kulkas' : 'Kerusakan mesin cuci'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-primary-900 mt-0.5">
                {selectedIssue.title}
              </h3>
            </div>
            <Link
              href={`/kerusakan/${selectedIssue.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-900 group"
            >
              <span>Pelajari teknis selengkapnya</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-bold text-text uppercase tracking-wide">Gejala yang terjadi:</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              {selectedIssue.symptomSummary}
            </p>
          </div>

          <div className="p-4 rounded-button bg-[#F8FAFC] border border-border/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-primary-900">
              <AlertCircle className="w-4 h-4 text-primary-700" />
              <span>Langkah pemeriksaan fisik teknisi di lokasi:</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-muted">
              {selectedIssue.availableAssistance.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-text-muted">
              Ingin konfirmasi pemeriksaan untuk kendala ini?
            </span>
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl({
                category: selectedIssue.category,
                issue: selectedIssue.title,
              })}
              isExternal
              className="w-full sm:w-auto"
            >
              <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
              <span>Konsultasikan Masalah Ini</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
