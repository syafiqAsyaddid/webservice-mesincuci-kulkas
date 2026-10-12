'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ServiceItem } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

interface ServiceTabSwitcherProps {
  services: ServiceItem[];
}

export const ServiceTabSwitcher: React.FC<ServiceTabSwitcherProps> = ({ services }) => {
  const [activeTab, setActiveTab] = useState<'kulkas' | 'mesin-cuci'>('kulkas');

  const currentService =
    services.find((s) => s.category === activeTab) || services[0];

  return (
    <div className="space-y-8">
      {/* Tab Switcher Buttons */}
      <div className="flex justify-center">
        <div
          role="tablist"
          aria-label="Pilih layanan perbaikan"
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
              e.preventDefault();
              setActiveTab(activeTab === 'kulkas' ? 'mesin-cuci' : 'kulkas');
            }
          }}
          className="inline-flex p-1.5 bg-[#F1F5F9] rounded-card shadow-inner"
        >
          <button
            type="button"
            role="tab"
            id="tab-kulkas"
            aria-controls="panel-service"
            aria-selected={activeTab === 'kulkas'}
            onClick={() => setActiveTab('kulkas')}
            className={`px-6 py-2.5 text-sm font-semibold rounded-button transition-all duration-200 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
              activeTab === 'kulkas'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            Service Kulkas
          </button>
          <button
            type="button"
            role="tab"
            id="tab-mesin-cuci"
            aria-controls="panel-service"
            aria-selected={activeTab === 'mesin-cuci'}
            onClick={() => setActiveTab('mesin-cuci')}
            className={`px-6 py-2.5 text-sm font-semibold rounded-button transition-all duration-200 focus-visible:outline-2 focus-visible:outline-focus cursor-pointer ${
              activeTab === 'mesin-cuci'
                ? 'bg-white text-primary-900 shadow-sm'
                : 'text-text-muted hover:text-text'
            }`}
          >
            Service Mesin Cuci
          </button>
        </div>
      </div>

      {/* Tab Panel Content (Asymmetric Split Layout) */}
      <div
        id="panel-service"
        role="tabpanel"
        aria-labelledby={activeTab === 'kulkas' ? 'tab-kulkas' : 'tab-mesin-cuci'}
        className="bg-surface rounded-card p-6 sm:p-10 border border-border/60 shadow-soft"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Sisi Kiri: Foto Besar Beresolusi Tinggi */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] rounded-card overflow-hidden shadow-card border border-border/40">
              {currentService.imagePath && (
                <Image
                  src={currentService.imagePath}
                  alt={currentService.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
              )}
              <div className="absolute top-4 left-4">
                <Badge variant={activeTab === 'kulkas' ? 'default' : 'info'}>
                  {activeTab === 'kulkas' ? 'Spesialis pendingin' : 'Spesialis pencuci'}
                </Badge>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Deskripsi & Daftar Masalah & 1 CTA Utama */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
                {currentService.name}
              </h3>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                {currentService.shortDescription}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold text-text block">
                Gejala kerusakan yang ditangani di lokasi:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-text">
                {currentService.symptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Single Focused CTA Button */}
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({ category: activeTab })}
                isExternal
                className="gap-2.5 w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>{currentService.ctaText}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
