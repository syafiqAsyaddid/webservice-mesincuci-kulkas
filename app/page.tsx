import React from 'react';
import Image from 'next/image';
import {
  Wrench,
  CheckCircle2,
  Clock,
  MessageSquare,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { businessInfo } from '@/lib/content/business';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { ServiceTabSwitcher } from '@/components/sections/ServiceTabSwitcher';
import { CommonIssuesChips } from '@/components/sections/CommonIssuesChips';
import { JabodetabekMapSection } from '@/components/sections/JabodetabekMapSection';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-br from-white via-[#FCFDFE] to-[#F1F6FA] border-b border-border/50">
        {/* Pattern 1: Geometric Technical Blueprint Grid (3.5% Opacity) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#12345A_1px,transparent_1px),linear-gradient(to_bottom,#12345A_1px,transparent_1px)] [background-size:36px_36px]"
          aria-hidden="true"
        />

        {/* Pattern 2: Precision Drafting Crosshairs (+) */}
        <div className="absolute top-4 left-6 text-primary-900/20 font-mono text-xs select-none pointer-events-none" aria-hidden="true">
          +
        </div>
        <div className="absolute top-4 right-8 text-primary-900/20 font-mono text-xs select-none pointer-events-none" aria-hidden="true">
          +
        </div>
        <div className="absolute bottom-4 left-1/3 text-primary-900/15 font-mono text-xs select-none pointer-events-none" aria-hidden="true">
          +
        </div>

        {/* Pattern 3: Technical Blueprint Schematic Guide Overlay */}
        <svg
          className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 pointer-events-none opacity-[0.04] text-primary-900"
          viewBox="0 0 384 384"
          fill="none"
          aria-hidden="true"
        >
          <line x1="0" y1="0" x2="384" y2="384" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="192" cy="192" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="192" cy="192" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        </svg>

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.15]">
                Butuh Bantuan Memperbaiki Kulkas atau Mesin Cuci?
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                <strong className="text-text font-semibold">{businessInfo.name}</strong> siap datang ke rumah atau tempat usaha Anda untuk memeriksa kendala kulkas 1 & 2 pintu serta mesin cuci di wilayah Bekasi, Tambun, dan seluruh Jabodetabek. Pengecekan jelas, suku cadang bergaransi, dan jadwal kunjungan terkonfirmasi langsung via WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={generateWhatsAppUrl()}
                  isExternal
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Konsultasi via WhatsApp</span>
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="/layanan"
                  showArrow
                >
                  Lihat daftar layanan
                </Button>
              </div>

              <div className="pt-4 border-t border-border/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-text">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Teknisi berpengalaman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Jadwal terkonfirmasi</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Garansi suku cadang</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-card overflow-hidden shadow-card border border-border/50 bg-white">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Teknisi profesional D'cool technical service sedang melakukan pemeriksaan komponen listrik peralatan rumah tangga"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-button bg-primary-900/85 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">Garansi resmi pekerjaan 14 - 30 hari</span>
                    </div>
                    <span className="text-[11px] text-primary-100/90 font-medium hidden sm:inline">Pengerjaan di tempat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seksi Layanan Spesialis */}
      <section className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Varied Geometric Diagonal Hatch Pattern Behind Section (3% Opacity) */}
        <div
          className="absolute inset-x-4 -inset-y-6 pointer-events-none -z-10 rounded-card opacity-[0.03] bg-[repeating-linear-gradient(-45deg,#12345A_0,#12345A_1px,transparent_0,transparent_16px)]"
          aria-hidden="true"
        />

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Layanan Perbaikan yang Kami Sediakan
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Fokus penanganan spesifik pada dua perangkat elektronik rumah tangga utama agar diagnosa akurat dan hasil servis bertahan lama.
          </p>
        </div>

        <ServiceTabSwitcher services={servicesData} />
      </section>

      {/* Alur Kunjungan Teknisi */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F3F7FA] to-[#F8FAFC] border-y border-border/60 py-12 sm:py-16">
        {/* Varied Geometric Circuit / Flow Matrix Pattern (4% Opacity) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#12345A_1.5px,transparent_1.5px),linear-gradient(to_right,#12345A_1px,transparent_1px)] [background-size:28px_28px,112px_28px]"
          aria-hidden="true"
        />

        {/* Decorative Technical Line Across Top */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-600/30 to-transparent"
          aria-hidden="true"
        />

        {/* Precision Crosshair Corner Accents */}
        <div className="absolute top-3 left-6 text-primary-900/15 font-mono text-xs select-none pointer-events-none" aria-hidden="true">+</div>
        <div className="absolute top-3 right-6 text-primary-900/15 font-mono text-xs select-none pointer-events-none" aria-hidden="true">+</div>

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Alur Layanan Panggilan Teknisi
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Tiga tahap praktis dari konsultasi awal hingga perangkat kembali berfungsi normal.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Track between Step Nodes */}
            <div
              className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary-600/30 z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white rounded-card p-6 border border-border/80 shadow-soft text-left space-y-4 relative group hover:border-primary-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-primary-900 tracking-tight">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-button bg-primary-50 text-primary-700 flex items-center justify-center font-bold shadow-xs">
                    <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-primary-900">
                    Konsultasi Kendala via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Ceritakan merek, jenis perangkat, dan kendala yang dialami serta lokasi Anda di wilayah Jabodetabek.
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-primary-600/60 rounded-full" aria-hidden="true" />
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-card p-6 border border-border/80 shadow-soft text-left space-y-4 relative group hover:border-amber-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-amber-900 tracking-tight">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-button bg-amber-50 text-amber-800 flex items-center justify-center font-bold shadow-xs">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-primary-900">
                    Konfirmasi Jadwal & Perkiraan Biaya
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Tim teknisi memastikan ketersediaan rute terdekat dan memberikan informasi biaya jasa pengecekan.
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-amber-600/60 rounded-full" aria-hidden="true" />
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-card p-6 border border-border/80 shadow-soft text-left space-y-4 relative group hover:border-emerald-400 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-emerald-900 tracking-tight">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-button bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shadow-xs">
                    <Wrench className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-primary-900">
                    Pemeriksaan & Perbaikan di Tempat
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    Teknisi tiba sesuai jadwal, melakukan diagnosa fisik, dan mulai memperbaiki setelah disetujui Anda.
                  </p>
                </div>

                <div className="w-8 h-0.5 bg-emerald-600/60 rounded-full" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gejala Kerusakan yang Sering Ditangani */}
      <section className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Varied Geometric Micro-Matrix Pattern (3.5% Opacity) */}
        <div
          className="absolute inset-x-4 -inset-y-6 pointer-events-none -z-10 rounded-card opacity-[0.035] bg-[radial-gradient(#12345A_1.2px,transparent_1.2px)] [background-size:20px_20px]"
          aria-hidden="true"
        />

        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Kerusakan yang Sering Ditangani
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Pilih gejala kerusakan di bawah ini untuk melihat perkiraan tindakan pemeriksaan teknisi kami di lokasi.
          </p>
        </div>

        <CommonIssuesChips issues={priorityIssues} />
      </section>

      {/* Cakupan Wilayah Operasional */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <JabodetabekMapSection regions={regionsData} />
      </section>

      {/* Tanya Jawab (FAQ) */}
      <section id="faq" className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Varied Geometric Modular Grid Pattern Behind FAQ (3% Opacity) */}
        <div
          className="absolute inset-x-8 -inset-y-6 pointer-events-none -z-10 rounded-card opacity-[0.03] bg-[linear-gradient(to_right,#12345A_1px,transparent_1px),linear-gradient(to_bottom,#12345A_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Informasi transparan mengenai biaya pemeriksaan, jadwal panggilan, dan garansi layanan.
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

      {/* Kontak & Jadwal Kunjungan */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#FCFDFE] to-[#F8FAFC] border border-border/80 rounded-card p-8 sm:p-12 shadow-soft">
          {/* Varied Geometric Concentric Arcs & Angle Lines (3.5% Opacity) */}
          <div
            className="absolute -right-16 -top-16 w-80 h-80 rounded-full border border-primary-900/10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -right-6 -top-6 w-60 h-60 rounded-full border border-dashed border-primary-900/10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full border border-primary-900/10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(45deg,#12345A_0,#12345A_1px,transparent_0,transparent_20px)]"
            aria-hidden="true"
          />
          <div className="absolute top-4 left-6 text-primary-900/15 font-mono text-xs select-none pointer-events-none" aria-hidden="true">+</div>
          <div className="absolute bottom-4 right-6 text-primary-900/15 font-mono text-xs select-none pointer-events-none" aria-hidden="true">+</div>

          <div className="relative max-w-2xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
                Jadwalkan Kunjungan Teknisi ke Lokasi Anda
              </h2>
              <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                Tim teknisi <strong className="text-text font-semibold">{businessInfo.name}</strong> siap melayani area Bekasi dan sekitarnya. Kirimkan pesan sekarang untuk mengatur jadwal yang nyaman.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl()}
                isExternal
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                <span>Chat Teknisi di WhatsApp</span>
              </Button>

              <a
                href={`tel:${businessInfo.whatsappNumber}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-primary-800 px-4 py-3 rounded-button hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-700" />
                <span>Telepon: {businessInfo.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
