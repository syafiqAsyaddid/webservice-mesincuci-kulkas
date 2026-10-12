import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Wrench,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  HelpCircle,
  ShieldCheck,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
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
      {/* 1. Hero Section: Bersih, Dominan, Modern, & Humanis */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-br from-white via-[#FCFDFE] to-[#F1F6FA] border-b border-border/50">
        {/* Subtle Ambient Orbs untuk Depth (Abstract Depth) */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Pola Grid Geometris Tipis (Opacity 3%) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#12345a08_1px,transparent_1px),linear-gradient(to_bottom,#12345a08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Kolom Kiri: Teks & CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Soft Tinted Badge */}
              <Badge
                variant="default"
                icon={<MapPin className="w-3.5 h-3.5 text-primary-700" />}
              >
                Panggilan area Bekasi, Tambun, & seluruh Jabodetabek
              </Badge>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.15]">
                Butuh Bantuan Memperbaiki Kulkas atau Mesin Cuci?
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                <strong className="text-text font-semibold">{businessInfo.name}</strong> siap datang ke rumah atau tempat usaha Anda untuk memeriksa kendala kulkas 1 & 2 pintu serta mesin cuci. Pengecekan jelas, suku cadang bergaransi, dan jadwal kunjungan terkonfirmasi langsung via WhatsApp.
              </p>

              {/* Action Buttons: WhatsApp Primary + Ghost Secondary with Arrow */}
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

              {/* Trust Points Ringkas */}
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

            {/* Kolom Kanan: Foto Teknisi Bersih & Dominan (Tanpa Over-Badging) */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Frame Foto Bersih */}
                <div className="relative aspect-[4/3] sm:aspect-[14/11] rounded-card overflow-hidden shadow-card border border-border/50 bg-white">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Teknisi profesional D'cool technical service sedang melakukan pemeriksaan komponen listrik peralatan rumah tangga"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

                  {/* Satu Solid Reputation Badge di Bawah Frame */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs p-3 rounded-button bg-primary-900/85 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">Garansi resmi pekerjaan 14–30 hari</span>
                    </div>
                    <span className="text-[11px] text-primary-100/90 font-medium hidden sm:inline">Pengerjaan di tempat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section Layanan: Tab Switcher Asimetris dengan 1 CTA Utama */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="default">
            Layanan Spesialis
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Layanan Perbaikan yang Kami Sediakan
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Fokus penanganan spesifik pada dua perangkat elektronik rumah tangga utama agar diagnosa akurat dan hasil servis bertahan lama.
          </p>
        </div>

        <ServiceTabSwitcher services={servicesData} />
      </section>

      {/* 3. Section Cara Kerja: Horizontal Timeline dengan Connector Line */}
      <section className="bg-[#F8FAFC] border-y border-border/60 py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
              Alur Layanan Panggilan Teknisi
            </h2>
            <p className="text-sm sm:text-base text-text-muted">
              Tiga langkah praktis dari konsultasi hingga perangkat normal kembali.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connector Line (Dashed Line) */}
            <div
              className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-primary-600/30 -z-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1: Chat WA */}
              <div className="bg-white rounded-card p-6 border border-border/60 shadow-soft text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-button bg-[#EBF3FC] text-primary-700 flex items-center justify-center font-bold text-lg shadow-xs">
                  <MessageSquare className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-primary-700 uppercase tracking-wider block">Langkah 1</span>
                  <h3 className="text-lg font-bold text-primary-900">Konsultasi Kendala via WhatsApp</h3>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Ceritakan merek, jenis perangkat, dan kendala yang dialami serta lokasi Anda di wilayah Jabodetabek.
                </p>
              </div>

              {/* Step 2: Konfirmasi Jadwal */}
              <div className="bg-white rounded-card p-6 border border-border/60 shadow-soft text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-button bg-[#FEF3C7] text-amber-800 flex items-center justify-center font-bold text-lg shadow-xs">
                  <Clock className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Langkah 2</span>
                  <h3 className="text-lg font-bold text-primary-900">Konfirmasi Jadwal & Perkiraan Biaya</h3>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Tim teknisi memastikan ketersediaan rute terdekat dan memberikan informasi biaya jasa pengecekan.
                </p>
              </div>

              {/* Step 3: Pemeriksaan di Tempat */}
              <div className="bg-white rounded-card p-6 border border-border/60 shadow-soft text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-button bg-[#F0FDF4] text-emerald-700 flex items-center justify-center font-bold text-lg shadow-xs">
                  <Wrench className="w-6 h-6" aria-hidden="true" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Langkah 3</span>
                  <h3 className="text-lg font-bold text-primary-900">Pemeriksaan & Perbaikan di Tempat</h3>
                </div>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Teknisi tiba sesuai jadwal, melakukan diagnosa fisik, dan mulai memperbaiki setelah disetujui Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section Kerusakan yang Sering Ditangani: Interactive Chip/Pills */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <Badge variant="neutral">
            Diagnosa Cepat
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-900 tracking-tight">
            Kerusakan yang Sering Ditangani
          </h2>
          <p className="text-sm sm:text-base text-text-muted">
            Klik gejala kerusakan di bawah ini untuk melihat perkiraan tindakan pemeriksaan teknisi kami di lokasi.
          </p>
        </div>

        <CommonIssuesChips issues={priorityIssues} />
      </section>

      {/* 5. Section Cakupan Wilayah: Peta Visual Terintegrasi (Tanpa Blok Biru Tua Pekat) */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <JabodetabekMapSection regions={regionsData} />
      </section>

      {/* 6. Section FAQ: Tanya Jawab */}
      <section id="faq" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="default" icon={<HelpCircle className="w-3.5 h-3.5 text-primary-700" />}>
              Pusat Informasi
            </Badge>
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

      {/* 7. Bottom CTA: Card Kontak dengan Balon Percakapan Humanis */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-br from-white to-[#F8FAFC] border border-border/80 rounded-card p-8 sm:p-12 shadow-soft">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            {/* Balon Percakapan Ramah */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EBF3FC] text-primary-900 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Bingung dengan kendala kulkas atau mesin cuci Anda? Konsultasikan gratis sekarang</span>
            </div>

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
