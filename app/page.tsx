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
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';
import { businessInfo } from '@/lib/content/business';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section dengan Background Gradasi Halus, Grid Tipis, & Foto Realistis */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-20 bg-gradient-to-br from-white via-[#FCFDFE] to-[#F1F6FA] border-b border-border/60">
        {/* Subtle Ambient Orbs untuk Depth (Abstract Depth) */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 -right-20 w-80 h-80 bg-accent-100/30 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Pola Grid Geometris Tipis (Opacity 3-4%) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#12345a0a_1px,transparent_1px),linear-gradient(to_bottom,#12345a0a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Kolom Kiri: Teks & CTA */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge Wilayah dengan Aksen Hangat */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent-50 border border-accent-600/25 text-accent-700 text-xs sm:text-sm font-semibold shadow-xs">
                <MapPin className="w-4 h-4 text-accent-600 flex-shrink-0" aria-hidden="true" />
                <span>Panggilan Area Bekasi, Tambun, & Seluruh Jabodetabek</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 tracking-tight leading-tight">
                Butuh Bantuan Memperbaiki Kulkas atau Mesin Cuci?
              </h1>

              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                <strong className="text-text font-semibold">{businessInfo.name}</strong> siap datang ke rumah atau tempat usaha Anda untuk memeriksa kendala kulkas 1 & 2 pintu serta mesin cuci. Pengecekan jelas, suku cadang bergaransi, dan jadwal kunjungan terkonfirmasi langsung via WhatsApp.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={generateWhatsAppUrl()}
                  isExternal
                  className="gap-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <MessageSquare className="w-5 h-5" aria-hidden="true" />
                  <span>Konsultasi via WhatsApp</span>
                </Button>

                <Button variant="secondary" size="lg" href="/layanan">
                  <span>Lihat Daftar Layanan</span>
                </Button>
              </div>

              {/* Nilai Utama & Poin Garansi dengan Aksen Hangat */}
              <div className="pt-4 border-t border-border/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-text">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/80 border border-border/60 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Teknisi Berpengalaman</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/80 border border-border/60 shadow-xs">
                  <Clock className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Jadwal Terkonfirmasi</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface/80 border border-border/60 shadow-xs col-span-2 sm:col-span-1">
                  <ShieldCheck className="w-4 h-4 text-accent-600 flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium">Garansi Komponen</span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Foto Teknisi Profesional & Floating Reputation Badges */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Frame Foto Utama Teknisi */}
                <div className="relative rounded-card overflow-hidden border border-border shadow-hover bg-surface">
                  <div className="relative aspect-[4/3] sm:aspect-[14/11] w-full">
                    <Image
                      src="/images/hero-technician.jpg"
                      alt="Teknisi profesional D'cool technical service sedang melakukan pemeriksaan komponen listrik peralatan rumah tangga"
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 450px"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs p-2.5 rounded-lg bg-primary-900/80 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-accent-500 flex-shrink-0" />
                        <span className="font-medium">Spesialis Perbaikan Panggilan</span>
                      </div>
                      <span className="text-[11px] text-primary-100 font-semibold">Pengerjaan di Lokasi</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Garansi Servis (Kanan Atas) */}
                <div className="absolute -top-4 -right-2 sm:-right-4 bg-surface rounded-card p-3 shadow-card border border-border flex items-center gap-2.5 animate-in fade-in duration-300">
                  <div className="w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-primary-900">Garansi 14-30 Hari</span>
                    <span className="block text-[11px] text-text-muted">Untuk suku cadang baru</span>
                  </div>
                </div>

                {/* Floating Badge 2: Pengecekan Jelas (Kiri Bawah) */}
                <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-surface rounded-card p-3 shadow-card border border-border flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-primary-900">Pengecekan Transparan</span>
                    <span className="block text-[11px] text-text-muted">Biaya disepakati di awal</span>
                  </div>
                </div>
              </div>

              {/* Alamat Workshop / Operasional */}
              <div className="mt-7 p-3.5 rounded-card bg-surface/90 border border-border/80 shadow-xs text-xs text-text-muted flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent-600 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-text font-semibold">Workshop Utama:</strong> {businessInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pilihan Dua Layanan Utama dengan Foto Visual Realistis */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="accent" className="mb-2">
            Layanan Spesialis
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-3">
            Layanan Perbaikan yang Kami Sediakan
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            Fokus penanganan spesifik pada kulkas dan mesin cuci agar diagnosa akurat dan hasil servis bertahan lama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                {/* Foto Visual Nyata Perangkat */}
                {service.imagePath && (
                  <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-border/60">
                    <Image
                      src={service.imagePath}
                      alt={service.name}
                      fill
                      className="object-cover object-center hover:scale-103 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant={service.category === 'kulkas' ? 'default' : 'info'}>
                        {service.category === 'kulkas' ? 'Pendingin' : 'Pencuci'}
                      </Badge>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary-900">{service.name}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-border/60">
                  <p className="text-xs font-semibold text-primary-900 uppercase tracking-wider">
                    Kendala yang sering ditangani:
                  </p>
                  <ul className="space-y-1.5 text-sm text-text">
                    {service.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-border flex flex-col sm:flex-row gap-3">
                <Button
                  variant="whatsapp"
                  size="sm"
                  href={generateWhatsAppUrl({ category: service.category })}
                  isExternal
                  className="gap-2 flex-1 shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>{service.ctaText}</span>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  href="/layanan"
                  className="flex-1"
                >
                  Detail Layanan
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 3. Cara Kerja Layanan */}
      <section className="bg-primary-50/70 border-y border-border/80 py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-3">
              Cara Kerja Layanan Panggilan
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              Alur pemesanan mudah dan langsung tanpa perlu mengisi formulir berbelit-belit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-card p-6 border border-border shadow-card space-y-3">
              <span className="w-9 h-9 rounded-full bg-accent-100 text-accent-700 font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="text-lg font-semibold text-primary-900">Ceritakan Kendala via WhatsApp</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Kirim pesan berisi merek, gejala kerusakan, serta alamat Anda di wilayah Bekasi atau kota lain di Jabodetabek.
              </p>
            </div>

            <div className="bg-surface rounded-card p-6 border border-border shadow-card space-y-3">
              <span className="w-9 h-9 rounded-full bg-primary-100 text-primary-900 font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="text-lg font-semibold text-primary-900">Konfirmasi Jadwal & Perkiraan Biaya</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Tim teknisi mengonfirmasi rute kedatangan dan memberikan informasi acuan biaya jasa pengecekan.
              </p>
            </div>

            <div className="bg-surface rounded-card p-6 border border-border shadow-card space-y-3">
              <span className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-800 font-bold text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="text-lg font-semibold text-primary-900">Pemeriksaan & Perbaikan di Tempat</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Teknisi tiba sesuai jadwal, melakukan diagnosa fisik, dan mengerjakan perbaikan setelah mendapat persetujuan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Masalah Prioritas yang Ditangani */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-2">
              Kerusakan yang Sering Ditangani
            </h2>
            <p className="text-text-muted text-sm sm:text-base">
              Pilih masalah perangkat Anda untuk membaca penjelasan teknis dan solusinya.
            </p>
          </div>
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-900 focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-1"
          >
            <span>Semua Jenis Kerusakan</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {priorityIssues.slice(0, 4).map((issue) => (
            <Card key={issue.slug} className="flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                  {issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'}
                </span>
                <h3 className="text-base font-bold text-primary-900">{issue.title}</h3>
                <p className="text-xs text-text-muted line-clamp-3 leading-relaxed">
                  {issue.symptomSummary}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  href={generateWhatsAppUrl({
                    category: issue.category,
                    issue: issue.title,
                  })}
                  isExternal
                  className="w-full text-xs"
                >
                  Konsultasikan Kendala Ini
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 5. Cakupan Wilayah Layanan */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-900 text-white rounded-card p-6 sm:p-10 shadow-card">
          <div className="max-w-2xl mb-8">
            <Badge variant="accent" className="mb-2">
              Area Panggilan
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Cakupan Wilayah Layanan Jabodetabek
            </h2>
            <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
              Workshop kami berpusat di Tambun Utara, Kabupaten Bekasi, dengan teknisi mobile yang menjangkau kota dan kabupaten sekitar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {regionsData.map((region) => (
              <div
                key={region.slug}
                className="bg-primary-800/80 rounded-lg p-4 border border-primary-700/80 shadow-xs"
              >
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <MapPin className="w-4 h-4 text-accent-500" aria-hidden="true" />
                  <span>{region.name}</span>
                </div>
                <p className="text-xs text-primary-100/90 leading-relaxed">
                  {region.coverageNote}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-primary-800 text-sm">
            <span className="text-primary-100 text-xs sm:text-sm">
              Lokasi Anda belum tercantum? Tanyakan langsung ketersediaan teknisi ke customer care kami.
            </span>
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl()}
              isExternal
              className="gap-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              <span>Tanyakan Area Anda</span>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. FAQ Ringkas */}
      <section id="faq" className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-primary-700 text-sm font-semibold mb-2">
              <HelpCircle className="w-4 h-4" aria-hidden="true" />
              <span>Pertanyaan yang Sering Diajukan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">
              Informasi Umum Mengenai Layanan
            </h2>
          </div>

          <Accordion
            items={faqData.map((f) => ({
              id: f.id,
              title: f.question,
              content: f.answer,
            }))}
          />

          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted mb-3">
              Punya pertanyaan lain mengenai kerusakan perangkat Anda?
            </p>
            <Button
              variant="secondary"
              size="sm"
              href={generateWhatsAppUrl()}
              isExternal
            >
              Tanyakan Langsung di WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Bawah */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-primary-50/80 border border-primary-100 rounded-card p-8 sm:p-12 text-center space-y-4 shadow-card">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">
            Perlu Jadwalkan Kunjungan Teknisi Hari Ini?
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Hubungi <strong className="text-text font-semibold">{businessInfo.name}</strong> sekarang untuk konsultasi awal mengenai kendala kulkas atau mesin cuci Anda di nomor {businessInfo.displayPhone}.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppUrl()}
              isExternal
              className="gap-2 shadow-md hover:shadow-lg transition-shadow"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              <span>Hubungi Kami via WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
