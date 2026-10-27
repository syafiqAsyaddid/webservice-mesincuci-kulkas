'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

type TransactionMode = 'tukar-tambah' | 'jual-unit' | 'beli-unit';

interface ModeDetail {
  id: TransactionMode;
  label: string;
  headline: string;
  summary: string;
  steps: {
    title: string;
    detail: string;
  }[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
  waIssueText: string;
  ctaLabel: string;
}

const TRANSACTION_MODES: ModeDetail[] = [
  {
    id: 'tukar-tambah',
    label: 'Tukar Tambah Baru & Bekas',
    headline: 'Menerima Tukar Tambah Unit Baru dan Bekas Siap Pakai',
    summary:
      'Solusi praktis apabila biaya perbaikan unit lama sudah tidak ekonomis atau Anda ingin mengganti perangkat dengan unit baru maupun seken berkualitas di rumah dan tempat usaha.',
    steps: [
      {
        title: 'Kirim Foto & Info Kondisi Unit Lama',
        detail:
          'Informasikan merek, jenis perangkat, serta kondisi terkini melalui WhatsApp untuk mendapatkan penawaran nilai tukar awal.',
      },
      {
        title: 'Pilih Unit Pengganti yang Siap Pakai',
        detail:
          'Tim kami mengirimkan daftar stok kulkas, freezer, showcase, atau mesin cuci seken berkualitas yang telah lulus uji fungsi.',
      },
      {
        title: 'Serah Terima & Uji Fungsi di Lokasi Anda',
        detail:
          'Unit pengganti diantar sekaligus menjemput unit lama Anda di Bekasi, Jakarta Timur, Jakarta Selatan, atau Depok.',
      },
    ],
    imageSrc: '/images/kulkas-cek-kabinet-dalam.jpg',
    imageAlt:
      'Pemeriksaan ruang kabinet dalam dan sirkulasi dingin pada unit kulkas oleh teknisi',
    imageCaption:
      'Setiap unit tukar tambah melalui pengecekan suhu ruang dalam, kelistrikan, dan tekanan kompresor sebelum diserahkan.',
    waIssueText: 'Tukar Tambah Baru dan Bekas Kulkas / Mesin Cuci',
    ctaLabel: 'Ajukan Tukar Tambah via WhatsApp',
  },
  {
    id: 'jual-unit',
    label: 'Jual Unit Lama / Rusak',
    headline: 'Kami Terima Beli Unit Bekas Segala Kondisi dengan Taksiran Wajar',
    summary:
      'Punya kulkas, freezer, showcase, atau mesin cuci tidak terpakai maupun rusak di rumah? Kami siap membeli dan menjemput langsung ke alamat Anda tanpa biaya angkut.',
    steps: [
      {
        title: 'Kirim Foto Fisik & Lokasi Penjemputan',
        detail:
          'Cukup kirimkan foto bodi luar/dalam unit beserta lokasi kecamatan Anda melalui chat WhatsApp resmi kami.',
      },
      {
        title: 'Penaksiran Harga Terbuka & Transparan',
        detail:
          'Nilai beli dihitung berdasarkan jenis unit, kelengkapan komponen utama, serta kondisi fisik kabinet secara jujur.',
      },
      {
        title: 'Jemput ke Lokasi & Pembayaran Langsung',
        detail:
          'Tim kami datang mengangkut unit dari rumah atau ruko Anda dan melakukan pembayaran tunai/transfer di tempat.',
      },
    ],
    imageSrc: '/images/mesincuci-bongkar-unit.jpg',
    imageAlt:
      'Pengecekan fisik komponen mesin cuci untuk penaksiran nilai unit oleh teknisi',
    imageCaption:
      'Penaksiran nilai unit dilakukan secara objektif dengan kemudahan penjemputan armada langsung ke lokasi Anda.',
    waIssueText: 'Jual Unit Kulkas / Mesin Cuci Bekas',
    ctaLabel: 'Tawarkan Unit Anda via WhatsApp',
  },
  {
    id: 'beli-unit',
    label: 'Beli Unit Seken Siap Pakai',
    headline: 'Tersedia Unit Seken Berkualitas yang Lulus Uji Teknis',
    summary:
      'Seluruh unit seken yang kami sediakan bukan sekadar dibersihkan luarnya, melainkan telah diuji siklus pendinginan dan pencuciannya secara menyeluruh di workshop Pondok Gede.',
    steps: [
      {
        title: 'Tanyakan Ketersediaan Stok Sesuai Kebutuhan',
        detail:
          'Sampaikan kapasitas dan jenis unit yang dicari (misalnya kulkas 2 pintu, showcase minuman, atau mesin cuci front loading).',
      },
      {
        title: 'Dokumentasi Video Tes Fungsi Sebelum Kirim',
        detail:
          'Kami mengirimkan foto detail dan rekaman pengujian suhu atau putaran mesin sebelum unit dikirim ke tempat Anda.',
      },
      {
        title: 'Pengiriman & Instalasi di Lokasi',
        detail:
          'Unit diantar ke alamat Anda dan dipasang hingga beroperasi normal di tempat.',
      },
    ],
    imageSrc: '/images/kulkas-manifold-kompresor.jpg',
    imageAlt:
      'Pengujian tekanan kerja kompresor menggunakan manifold gauge untuk memastikan kesiapan unit',
    imageCaption:
      'Pengujian tekanan kerja kompresor dan arus listrik menggunakan alat ukur standar sebelum unit dinyatakan layak jual.',
    waIssueText: 'Tanya Stok Beli Unit Seken Siap Pakai',
    ctaLabel: 'Cek Ketersediaan Stok via WhatsApp',
  },
];

const SUPPORTED_SPEC_GROUPS = [
  {
    groupName: 'Kategori Pendingin (Rumah & Usaha)',
    items: [
      { name: 'Kulkas 1 Pintu & 2 Pintu', spec: 'Standar & Inverter' },
      { name: 'Kulkas Side by Side / Multidoor', spec: 'Kapasitas Besar' },
      { name: 'Freezer Box & Freezer Standing Rak', spec: 'Pembeku Daging / ASI' },
      { name: 'Showcase Minuman & Chiller Ruko', spec: 'Unit Komersial & Toko' },
    ],
  },
  {
    groupName: 'Kategori Pencuci & Pengering',
    items: [
      { name: 'Mesin Cuci Front Loading', spec: 'Bukaan Depan Otomatis' },
      { name: 'Mesin Cuci Top Loading 1 Tabung', spec: 'Bukaan Atas Otomatis' },
      { name: 'Mesin Cuci 2 Tabung (Twin Tub)', spec: 'Segala Merek & Ukuran' },
      { name: 'Mesin Pengering (Dryer) & Laundry', spec: 'Rumah Tangga & Usaha' },
    ],
  },
];

interface TradeInSectionProps {
  variant?: 'default' | 'compact';
}

export const TradeInSection: React.FC<TradeInSectionProps> = ({
  variant = 'default',
}) => {
  const [activeModeId, setActiveModeId] = useState<TransactionMode>('tukar-tambah');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = TRANSACTION_MODES.findIndex((m) => m.id === activeModeId);
  const activeMode = TRANSACTION_MODES[activeIndex] || TRANSACTION_MODES[0];

  const tabIdPrefix = variant === 'compact' ? 'home-tradein' : 'layanan-tradein';

  const handleTabKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const total = TRANSACTION_MODES.length;
    const nextIdx =
      e.key === 'ArrowRight'
        ? (activeIndex + 1) % total
        : (activeIndex - 1 + total) % total;
    const nextMode = TRANSACTION_MODES[nextIdx];
    setActiveModeId(nextMode.id);
    tabRefs.current[nextIdx]?.focus();
  };

  return (
    <div className="space-y-8">
      {/* Asymmetric Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
        <div className="lg:col-span-7 space-y-2.5">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-primary-900 tracking-tight leading-[1.15]">
            Menerima Tukar Tambah<br />
            <span className="text-primary-700">Baru dan Bekas.</span>
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
            Selain perbaikan di tempat, workshop kami menerima tukar tambah unit baru dan bekas, pembelian unit lama segala kondisi, serta penyediaan unit siap pakai dengan layanan antar-jemput langsung ke lokasi Anda.
          </p>
        </div>

        {/* Interactive Mode Switcher Tabs */}
        <div className="lg:col-span-5 flex lg:justify-end">
          <div
            role="tablist"
            aria-label="Pilih layanan transaksi unit"
            onKeyDown={handleTabKeyDown}
            className="inline-flex flex-wrap sm:flex-nowrap p-1 bg-[#EEF2F6] rounded-button border border-border w-full sm:w-auto gap-1"
          >
            {TRANSACTION_MODES.map((mode, idx) => {
              const isSelected = mode.id === activeMode.id;
              return (
                <button
                  key={mode.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${tabIdPrefix}-tab-${mode.id}`}
                  aria-selected={isSelected}
                  aria-controls={`${tabIdPrefix}-panel-${mode.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveModeId(mode.id)}
                  className={`flex-1 sm:flex-initial min-h-[44px] px-3.5 py-2 text-xs font-bold rounded-[8px] transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-white text-primary-900 border border-border/80 shadow-2xs'
                      : 'text-text-muted hover:text-text border border-transparent'
                  }`}
                >
                  <span>{mode.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Unified Architectural Workbench Surface */}
      <div className="bg-white rounded-card border border-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Left 7 Columns: Active Transaction Mode Details & Field Photo */}
        <div
          id={`${tabIdPrefix}-panel-${activeMode.id}`}
          role="tabpanel"
          aria-labelledby={`${tabIdPrefix}-tab-${activeMode.id}`}
          className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
        >
          <div className="space-y-7">
            {/* Mode Headline & Summary */}
            <div className="space-y-2.5 pb-6 border-b border-border">
              <h3 className="text-xl sm:text-2xl font-extrabold text-primary-900 leading-snug">
                {activeMode.headline}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {activeMode.summary}
              </p>
            </div>

            {/* Split Content: Ordered Process Steps + Double-Bezel Field Photo */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
              {/* Clean Ordered Steps */}
              <ol className="sm:col-span-7 space-y-4">
                {activeMode.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-primary-900">
                        {step.title}
                      </h4>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Double-Bezel Field Inspection Photo */}
              <div className="sm:col-span-5 p-1.5 bg-[#EEF2F6] rounded-[14px] border border-border">
                <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-200">
                  <Image
                    src={activeMode.imageSrc}
                    alt={activeMode.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>
                <p className="text-[11px] text-text-muted leading-relaxed px-2 pt-2.5 pb-1">
                  {activeMode.imageCaption}
                </p>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-text-muted">
                <span className="font-semibold text-primary-900">Area Jemput &amp; Antar: </span>
                <span>Bekasi, Jakarta Timur, Jakarta Selatan &amp; Depok</span>
              </div>

              <Button
                variant="whatsapp"
                size="md"
                href={generateWhatsAppUrl({ issue: activeMode.waIssueText })}
                isExternal
                data-inpage-whatsapp
                className="w-full sm:w-auto gap-2 flex-shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0" />
                <span>{activeMode.ctaLabel}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Architectural Unit Specification Ledger */}
        <div className="lg:col-span-5 bg-[#F8FAFC] flex flex-col justify-between divide-y divide-border">
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-primary-900">
                Spesifikasi Unit yang Diterima &amp; Tersedia
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Menerima berbagai merek perangkat rumah tangga maupun komersial dalam kondisi normal, setengah pakai, maupun rusak.
              </p>
            </div>

            <div className="space-y-6">
              {SUPPORTED_SPEC_GROUPS.map((group) => (
                <div key={group.groupName} className="space-y-2.5">
                  <h4 className="text-xs font-bold text-primary-700 border-b border-border pb-1.5">
                    {group.groupName}
                  </h4>
                  <dl className="divide-y divide-border/70 text-xs">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="py-2 flex items-baseline justify-between gap-3"
                      >
                        <dt className="font-semibold text-primary-900">
                          {item.name}
                        </dt>
                        <dd className="text-text-muted text-right flex-shrink-0">
                          {item.spec}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Verification Note */}
          <div className="p-6 sm:px-8 sm:py-5 bg-[#EEF2F6]/60 space-y-1.5 text-xs">
            <p className="font-bold text-primary-900">
              Standar Kelayakan Unit Seken D&apos;cool
            </p>
            <p className="text-text-muted leading-relaxed">
              Setiap unit yang keluar dari workshop Jln. Antara no 371 (Pondok Gede) telah diuji fungsi pendinginan dan pencucian secara menyeluruh sebelum diserahkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
