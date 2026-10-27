import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { businessInfo } from '@/lib/content/business';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { buildPageMetadata, buildFaqJsonLd } from '@/lib/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServiceTabSwitcher } from '@/components/sections/ServiceTabSwitcher';
import { TradeInSection } from '@/components/sections/TradeInSection';
import { CommonIssuesChips } from '@/components/sections/CommonIssuesChips';
import { JabodetabekMapSection } from '@/components/sections/JabodetabekMapSection';

export const metadata: Metadata = buildPageMetadata({
  title: `${businessInfo.name} | Jasa Service Kulkas & Mesin Cuci Panggilan Bekasi, Jaktim, Jaksel & Depok`,
  description:
    "D'cool technical service melayani service dan perbaikan panggilan serta tukar tambah baru dan bekas untuk kulkas (1 pintu, 2 pintu, side by side, freezer, showcase, chiller) dan mesin cuci segala jenis di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.",
  path: '/',
  ogImage: '/images/kulkas-manifold-kompresor.jpg',
});

export default function HomePage() {
  return (
    <div>
      <JsonLd data={buildFaqJsonLd(faqData)} />
      {/* 1. Interactive Hero Section & Field Documentation Stage */}
      <HeroSection />

      {/* 2. Seksi Layanan Spesialis (Asymmetric Header + Interactive Filmstrip inside ServiceTabSwitcher) */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTabSwitcher services={servicesData} />
        </div>
      </section>

      {/* 2.5 Seksi Menerima Tukar Tambah Baru & Bekas */}
      <section id="jual-beli-tukar-tambah" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <TradeInSection variant="compact" />
        </div>
      </section>

      {/* 3. Alur Kunjungan Teknisi (Asymmetric Editorial Process + Field Evidence) */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-y border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
                Alur Layanan Kunjungan Teknisi
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
                Urutan kerja terbuka dari kontak awal hingga unit kembali beroperasi normal di rumah Anda.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right text-xs text-text-muted">
              <span>Seluruh tindakan perbaikan wajib melalui persetujuan rincian biaya di lokasi.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* 3 Sequential Steps */}
            <div className="lg:col-span-7 divide-y divide-border border-y border-border bg-white px-6 sm:px-8 rounded-card border">
              <div className="py-6 flex items-start gap-4 sm:gap-5">
                <span className="w-8 h-8 rounded-full bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-primary-900">
                    Hubungi Teknisi &amp; Kirim Lokasi via WhatsApp
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Sampaikan merek perangkat, keluhan yang dialami (misalnya kulkas tidak dingin atau mesin cuci macet), serta alamat Anda di wilayah operasional kami (Bekasi, Jakarta Timur, Jakarta Selatan, atau Depok).
                  </p>
                </div>
              </div>

              <div className="py-6 flex items-start gap-4 sm:gap-5">
                <span className="w-8 h-8 rounded-full bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-primary-900">
                    Konfirmasi Rute &amp; Jadwal Kedatangan
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Teknisi mengonfirmasi jam kedatangan dan ketersediaan slot kunjungan sebelum berangkat menuju alamat Anda.
                  </p>
                </div>
              </div>

              <div className="py-6 flex items-start gap-4 sm:gap-5">
                <span className="w-8 h-8 rounded-full bg-primary-900 text-white text-xs font-bold tabular-nums flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-primary-900">
                    Pengecekan Fisik & Pengerjaan di Tempat
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Pengukuran komponen dilakukan langsung di hadapan Anda. Perbaikan maupun penggantian suku cadang dikerjakan setelah rincian biaya disepakati.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Visual Proof Column */}
            <div className="lg:col-span-5 flex flex-col justify-between p-2 bg-[#EEF2F6] rounded-card border border-border">
              <div className="relative aspect-[4/3] w-full h-full min-h-[260px] rounded-[10px] overflow-hidden bg-slate-200">
                <Image
                  src="/images/kulkas-cek-jalur-belakang.jpg"
                  alt="Teknisi melakukan pemeriksaan langsung komponen belakang kulkas di rumah pelanggan"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 460px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/75 to-transparent pt-12 pb-4 px-5 text-white space-y-1">
                  <p className="text-sm font-bold">
                    Pemeriksaan Langsung Tanpa Angkut Unit
                  </p>
                  <p className="text-xs text-white/85 leading-relaxed">
                    Pengecekan kompresor, pengisian freon, hingga penggantian komponen mesin cuci diselesaikan langsung di lokasi Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Gejala Kerusakan yang Sering Ditangani (Interactive Diagnostic Workbench) */}
      <section className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Kerusakan yang Sering Ditangani
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Pilih kategori perangkat dan gejala kendala di bawah ini untuk melihat dokumentasi komponen serta tahapan pemeriksaan fisik teknisi kami.
            </p>
          </div>

          <CommonIssuesChips issues={priorityIssues} />
        </div>
      </section>

      {/* 5. Cakupan Wilayah Operasional */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-y border-border">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <JabodetabekMapSection regions={regionsData} />
        </div>
      </section>

      {/* 6. Tanya Jawab (FAQ) */}
      <section id="faq" className="py-20 sm:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm sm:text-base text-text-muted leading-relaxed">
              Informasi transparan mengenai biaya pemeriksaan, jadwal panggilan, dan alur kerja teknisi kami.
            </p>
          </div>

          <Accordion
            items={faqData.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
            }))}
          />
        </div>
      </section>

      {/* 7. Kontak & Jadwal Kunjungan (Deep Navy Focus Block) */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="bg-[#0E2A47] text-white rounded-lg p-8 sm:p-14 border border-primary-900">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Jadwalkan Kunjungan Teknisi ke Lokasi Anda
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Tim teknisi <strong className="text-white font-semibold">{businessInfo.name}</strong> siap melayani area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok. Kirimkan pesan sekarang untuk mengatur waktu pemeriksaan yang nyaman.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl()}
                isExternal
                data-inpage-whatsapp
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>Chat Teknisi di WhatsApp</span>
              </Button>

              <a
                href={`tel:${businessInfo.whatsappNumber}`}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/90 hover:text-white px-5 py-2.5 rounded border border-white/20 hover:border-white/40 transition-colors w-full sm:w-auto"
              >
                <span>Telepon: {businessInfo.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
