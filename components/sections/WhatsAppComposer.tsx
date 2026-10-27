'use client';

import React, { useState, useRef } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { businessInfo } from '@/lib/content/business';
import { trackEvent } from '@/lib/analytics';

const REGION_OPTIONS = [
  'Bekasi',
  'Jakarta Timur',
  'Jakarta Selatan',
  'Depok',
];

const TOPIC_OPTIONS = [
  { id: 'kulkas', label: 'Service Kulkas / Pendingin', defaultText: 'Service Kulkas (1/2 Pintu, Showcase, Freezer)' },
  { id: 'mesin-cuci', label: 'Service Mesin Cuci', defaultText: 'Service Mesin Cuci' },
  { id: 'tukar-tambah', label: 'Jual / Beli / Tukar Tambah', defaultText: 'Jual / Beli / Tukar Tambah Unit' },
];

export const WhatsAppComposer: React.FC = () => {
  const [senderName, setSenderName] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('Bekasi');
  const [addressDetail, setAddressDetail] = useState<string>('');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('kulkas');
  const [issueDetail, setIssueDetail] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);

  const notifyFormStart = () => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      trackEvent('form_start', {
        form_name: 'whatsapp_composer',
      });
    }
  };

  const activeTopic =
    TOPIC_OPTIONS.find((t) => t.id === selectedTopicId) || TOPIC_OPTIONS[0];

  const composedAddress = [addressDetail.trim(), selectedRegion]
    .filter(Boolean)
    .join(', ');

  const composedIssue = issueDetail.trim()
    ? `${activeTopic.label} (${issueDetail.trim()})`
    : activeTopic.defaultText;

  const fullMessageText = [
    `Halo ${businessInfo.name},`,
    '',
    'Silahkan kirim alamat lengkap disini:',
    `Nama: ${senderName.trim()}`,
    `Alamat: ${composedAddress}`,
    `Keluhan: ${composedIssue}`,
  ].join('\n');

  const whatsappHref = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodeURIComponent(
    fullMessageText
  )}`;

  const handleCopy = async () => {
    notifyFormStart();
    try {
      await navigator.clipboard.writeText(fullMessageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard permission denied
    }
  };

  const handleSendToWhatsApp = () => {
    // Do NOT send personal user input (senderName / addressDetail) to analytics
    trackEvent('generate_lead', {
      lead_method: 'whatsapp_composer',
      category: selectedTopicId,
      region: selectedRegion,
      has_issue_detail: Boolean(issueDetail.trim()),
    });
    trackEvent('click_whatsapp', {
      cta_location: 'whatsapp_composer_submit',
      category: selectedTopicId,
      region: selectedRegion,
    });
  };

  return (
    <div className="bg-white rounded-card border border-border overflow-hidden divide-y divide-border">
      {/* Header */}
      <div className="p-6 sm:p-7 bg-[#F8FAFC] space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-extrabold text-primary-900">
            Lembar Pengantar Pesan WhatsApp
          </h2>
          <span className="text-xs font-semibold text-emerald-800">
            Format Otomatis Siap Kirim
          </span>
        </div>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          Pilih wilayah dan kebutuhan Anda di bawah ini, atau langsung tekan tombol kirim untuk membuka chat WhatsApp dengan format standar kami.
        </p>
      </div>

      {/* Interactive Inputs */}
      <div className="p-6 sm:p-7 space-y-5">
        {/* 1. Pilih Kebutuhan Layanan */}
        <div className="space-y-2">
          <span id="composer-topic-label" className="block text-xs font-bold text-primary-900">
            1. Pilih Kebutuhan Layanan
          </span>
          <div
            role="radiogroup"
            aria-labelledby="composer-topic-label"
            className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-[#EEF2F6] rounded-button border border-border"
          >
            {TOPIC_OPTIONS.map((topic) => {
              const isSelected = topic.id === selectedTopicId;
              return (
                <button
                  key={topic.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    notifyFormStart();
                    setSelectedTopicId(topic.id);
                  }}
                  className={`min-h-[44px] px-3 py-2 text-xs font-bold rounded-[8px] transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                      : 'text-text-muted hover:text-text border border-transparent'
                  }`}
                >
                  <span>{topic.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Pilih Wilayah Operasional */}
        <div className="space-y-2">
          <span id="composer-region-label" className="block text-xs font-bold text-primary-900">
            2. Pilih Kota / Wilayah Anda
          </span>
          <div
            role="radiogroup"
            aria-labelledby="composer-region-label"
            className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#EEF2F6] rounded-button border border-border"
          >
            {REGION_OPTIONS.map((reg) => {
              const isSelected = reg === selectedRegion;
              return (
                <button
                  key={reg}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => {
                    notifyFormStart();
                    setSelectedRegion(reg);
                  }}
                  className={`min-h-[44px] px-2.5 py-2 text-xs font-bold rounded-[8px] transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                      : 'text-text-muted hover:text-text border border-transparent'
                  }`}
                >
                  <span>{reg}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Optional Quick Inputs (Nama, Alamat, Detail Keluhan) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
          <div className="space-y-1.5">
            <label
              htmlFor="wa-input-name"
              className="block text-xs font-bold text-primary-900"
            >
              Nama Anda <span className="font-normal text-text-muted">(Opsional)</span>
            </label>
            <input
              id="wa-input-name"
              type="text"
              value={senderName}
              onFocus={notifyFormStart}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Ketik nama panggilan..."
              className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] border border-border rounded-button text-xs sm:text-sm text-text placeholder:text-[#526574] focus:bg-white focus:outline-none focus:ring-2 focus:ring-focus"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="wa-input-address"
              className="block text-xs font-bold text-primary-900"
            >
              Kecamatan / Nama Jalan <span className="font-normal text-text-muted">(Opsional)</span>
            </label>
            <input
              id="wa-input-address"
              type="text"
              value={addressDetail}
              onFocus={notifyFormStart}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="Contoh: Pondok Gede / Tebet..."
              className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] border border-border rounded-button text-xs sm:text-sm text-text placeholder:text-[#526574] focus:bg-white focus:outline-none focus:ring-2 focus:ring-focus"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="wa-input-issue"
            className="block text-xs font-bold text-primary-900"
          >
            Catatan Gejala / Merek Unit <span className="font-normal text-text-muted">(Opsional)</span>
          </label>
          <input
            id="wa-input-issue"
            type="text"
            value={issueDetail}
            onFocus={notifyFormStart}
            onChange={(e) => setIssueDetail(e.target.value)}
            placeholder="Contoh: Kulkas 2 pintu tidak dingin / Mesin cuci bocor..."
            className="w-full min-h-[44px] px-3.5 py-2 bg-[#F8FAFC] border border-border rounded-button text-xs sm:text-sm text-text placeholder:text-[#526574] focus:bg-white focus:outline-none focus:ring-2 focus:ring-focus"
          />
        </div>
      </div>

      {/* Live Preview Slip & Submit Action */}
      <div className="p-6 sm:p-7 bg-[#F8FAFC] space-y-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-primary-900">
            Pratinjau Pesan Otomatis:
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="min-h-[44px] px-3 py-1.5 rounded text-xs font-semibold text-primary-700 hover:text-primary-900 inline-flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-emerald-800">Format Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Teks</span>
              </>
            )}
          </button>
        </div>

        {/* Clean Editorial Message Slip */}
        <dl className="divide-y divide-border border-y border-border text-xs sm:text-sm">
          <div className="py-2 flex items-baseline justify-between gap-4">
            <dt className="text-text-muted font-medium">Pengantar</dt>
            <dd className="font-semibold text-primary-900 text-right">
              Silahkan kirim alamat lengkap disini:
            </dd>
          </div>
          <div className="py-2 flex items-baseline justify-between gap-4">
            <dt className="text-text-muted font-medium">Nama</dt>
            <dd className="font-bold text-primary-900 text-right">
              {senderName.trim() || '(Diisi di WhatsApp)'}
            </dd>
          </div>
          <div className="py-2 flex items-baseline justify-between gap-4">
            <dt className="text-text-muted font-medium">Alamat</dt>
            <dd className="font-bold text-primary-900 text-right">
              {composedAddress}
            </dd>
          </div>
          <div className="py-2 flex items-baseline justify-between gap-4">
            <dt className="text-text-muted font-medium">Keluhan</dt>
            <dd className="font-bold text-primary-900 text-right">
              {composedIssue}
            </dd>
          </div>
        </dl>

        <Button
          variant="whatsapp"
          size="lg"
          href={whatsappHref}
          isExternal
          data-inpage-whatsapp
          data-custom-track="true"
          onClick={handleSendToWhatsApp}
          className="w-full gap-2.5"
        >
          <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
          <span>Kirim Pesan Ini ke WhatsApp</span>
        </Button>
      </div>
    </div>
  );
};
