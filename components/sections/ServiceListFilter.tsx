'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, MessageSquare, Wrench, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      const matchCategory =
        selectedCategory === 'all' || issue.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchCategory;

      const matchTitle = issue.title.toLowerCase().includes(query);
      const matchSummary = issue.symptomSummary.toLowerCase().includes(query);
      const matchAssistance = issue.availableAssistance.some((item) =>
        item.toLowerCase().includes(query)
      );

      return matchCategory && (matchTitle || matchSummary || matchAssistance);
    });
  }, [issues, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Category Toggle & Search */}
      <div className="bg-surface rounded-card p-4 sm:p-6 border border-border shadow-card space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div
            role="tablist"
            aria-label="Pilih kategori perangkat"
            className="inline-flex p-1 bg-surface-muted rounded-button border border-border"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'all'}
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-button transition-colors focus-visible:ring-2 focus-visible:ring-focus ${
                selectedCategory === 'all'
                  ? 'bg-white text-primary-900 shadow-sm font-semibold'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Semua Perangkat
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'kulkas'}
              onClick={() => setSelectedCategory('kulkas')}
              className={`px-4 py-2 text-sm font-medium rounded-button transition-colors focus-visible:ring-2 focus-visible:ring-focus ${
                selectedCategory === 'kulkas'
                  ? 'bg-white text-primary-900 shadow-sm font-semibold'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Service Kulkas
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedCategory === 'mesin-cuci'}
              onClick={() => setSelectedCategory('mesin-cuci')}
              className={`px-4 py-2 text-sm font-medium rounded-button transition-colors focus-visible:ring-2 focus-visible:ring-focus ${
                selectedCategory === 'mesin-cuci'
                  ? 'bg-white text-primary-900 shadow-sm font-semibold'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              Service Mesin Cuci
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <label htmlFor="search-issue" className="sr-only">
              Cari jenis kerusakan atau gejala
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              id="search-issue"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari gejala kerusakan..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-border rounded-button text-text placeholder:text-text-muted/60 focus-visible:ring-2 focus-visible:ring-focus focus:border-primary-600 outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Overview Card with Photo when Category Selected */}
      {selectedCategory !== 'all' && (
        <div>
          {services
            .filter((s) => s.category === selectedCategory)
            .map((svc) => (
              <div
                key={svc.id}
                className="bg-surface rounded-card p-6 border border-border shadow-card grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {svc.imagePath && (
                  <div className="md:col-span-4 relative aspect-[16/10] rounded-lg overflow-hidden border border-border/80">
                    <Image
                      src={svc.imagePath}
                      alt={svc.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>
                )}
                <div className={svc.imagePath ? 'md:col-span-8 space-y-3' : 'md:col-span-12 space-y-3'}>
                  <div className="flex items-center gap-2">
                    <Badge variant="accent">
                      {svc.category === 'kulkas' ? 'Spesialis Pendingin' : 'Spesialis Pencuci'}
                    </Badge>
                    <h2 className="text-xl font-bold text-primary-900">{svc.name}</h2>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {svc.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-xs text-text-muted">
                    {svc.symptoms.slice(0, 3).map((sym, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-muted border border-border">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{sym}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}

      {/* Filtered Damage Detail Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary-900">
            Daftar Kerusakan & Gejala ({filteredIssues.length})
          </h2>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs text-primary-700 hover:underline font-medium"
            >
              Reset pencarian
            </button>
          )}
        </div>

        {filteredIssues.length === 0 ? (
          /* Empty State per antislop R-27 */
          <div className="bg-surface rounded-card p-8 sm:p-12 border border-border text-center space-y-4">
            <p className="text-base text-text font-semibold">
              Tidak ditemukan jenis kerusakan untuk &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">
              Gejala yang Anda alami mungkin merupakan kombinasi beberapa faktor. Anda dapat menguraikan kendala tersebut langsung kepada teknisi kami melalui WhatsApp.
            </p>
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="md"
                href={generateWhatsAppUrl({
                  issue: searchQuery ? `Kendala: ${searchQuery}` : undefined,
                })}
                isExternal
                className="gap-2"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Konsultasikan Langsung via WhatsApp</span>
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredIssues.map((issue) => (
              <Card key={issue.slug} className="flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant={issue.category === 'kulkas' ? 'default' : 'info'}>
                      {issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-primary-900">
                    <Link
                      href={`/kerusakan/${issue.slug}`}
                      className="hover:text-primary-700 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm"
                    >
                      {issue.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-text-muted leading-relaxed">
                    {issue.symptomSummary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <p className="text-xs font-semibold text-primary-900 uppercase tracking-wide">
                      Tindakan pemeriksaan awal:
                    </p>
                    <ul className="text-xs text-text-muted space-y-1">
                      {issue.availableAssistance.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <Link
                    href={`/kerusakan/${issue.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-900 focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-1"
                  >
                    <span>Baca Solusi Lengkap</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  <Button
                    variant="whatsapp"
                    size="sm"
                    href={generateWhatsAppUrl({
                      category: issue.category,
                      issue: issue.title,
                    })}
                    isExternal
                    className="gap-1.5 text-xs shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Tanya Kerusakan Ini</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
