import React from 'react';
import Link from 'next/link';
import {
  Wrench,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Accordion } from '@/components/ui/Accordion';
import { businessInfo } from '@/lib/content/business';
import { servicesData, priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary-100 text-primary-900 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary-700" aria-hidden="true" />
              <span>Jabodetabek & Sekitarnya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 tracking-tight leading-tight">
              Butuh Bantuan Memperbaiki Kulkas atau Mesin Cuci?
            </h1>

            <p className="text-lg text-text-muted leading-relaxed">
              Teknisi siap datang ke lokasi rumah atau tempat usaha Anda untuk memeriksa kendala kulkas 1 & 2 pintu serta mesin cuci. Konsultasikan gejala kerusakan dan jadwal kunjungan langsung via WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl()}
                isExternal
                className="gap-2"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Konsultasi via WhatsApp</span>
              </Button>

              <Button variant="secondary" size="lg" href="/layanan">
                <span>Lihat Daftar Layanan</span>
              </Button>
            </div>

            <div className="pt-4 border-t border-border grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
                <span>Teknisi Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
                <span>Jadwal Terkonfirmasi</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-primary-700 flex-shrink-0" aria-hidden="true" />
                <span>Garansi Komponen</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-primary-50 border border-primary-100 rounded-card p-6 sm:p-8 space-y-4">
              <h2 className="text-lg font-semibold text-primary-900">
                Panggilan Teknisi Cepat & Transparan
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Kami mengutamakan pengecekan langsung di lokasi agar estimasi biaya dan suku cadang jelas sebelum pekerjaan perbaikan dimulai.
              </p>
              <ul className="space-y-3 text-sm text-text">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                  <span>Penjelasan kerusakan disampaikan sebelum pengerjaan.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                  <span>Suku cadang diganti hanya atas persetujuan pemilik.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-700 mt-2 flex-shrink-0" />
                  <span>Biaya pengecekan terkonfirmasi sejak awal di WhatsApp.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  href="/estimasi-biaya"
                  className="w-full text-center"
                >
                  Cek Kisaran Biaya Perbaikan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pilihan Dua Layanan Utama */}
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-3">
            Layanan Perbaikan yang Kami Sediakan
          </h2>
          <p className="text-text-muted">
            Fokus penanganan spesifik pada dua perangkat elektronik rumah tangga utama agar hasil perbaikan optimal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <Card key={service.id} className="flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                  <Wrench className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-primary-900">{service.name}</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {service.shortDescription}
                </p>
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold text-primary-800 uppercase tracking-wider">
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
                  className="gap-2 flex-1"
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
      <section className="bg-primary-50/60 border-y border-border py-12 sm:py-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-3">
              Cara Kerja Layanan Panggilan
            </h2>
            <p className="text-text-muted">
              Alur pemesanan mudah dan langsung tanpa perlu mengisi formulir rumit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface rounded-card p-6 border border-border space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 font-bold text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="text-lg font-semibold text-primary-900">Ceritakan Kendala via WhatsApp</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Kirim pesan berisi merek, gejala kerusakan, serta lokasi tempat tinggal Anda di wilayah Jabodetabek.
              </p>
            </div>

            <div className="bg-surface rounded-card p-6 border border-border space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 font-bold text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="text-lg font-semibold text-primary-900">Konfirmasi Jadwal & Perkiraan Biaya</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Tim kami mengonfirmasi ketersediaan rute teknisi terdekat dan memberikan informasi estimasi biaya awal.
              </p>
            </div>

            <div className="bg-surface rounded-card p-6 border border-border space-y-3">
              <span className="w-8 h-8 rounded-full bg-primary-100 text-primary-900 font-bold text-sm flex items-center justify-center">
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
            <p className="text-text-muted">
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
          {priorityIssues.map((issue) => (
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
        <div className="bg-primary-900 text-white rounded-card p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Cakupan Wilayah Layanan Jabodetabek
            </h2>
            <p className="text-primary-100 text-sm sm:text-base leading-relaxed">
              Kami melayani kunjungan service di berbagai titik kota dan kabupaten berikut. Jadwal kedatangan disesuaikan dengan rute teknisi di hari yang sama.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {regionsData.map((region) => (
              <div
                key={region.slug}
                className="bg-primary-800/80 rounded-lg p-4 border border-primary-700"
              >
                <div className="flex items-center gap-2 font-semibold text-white mb-1">
                  <MapPin className="w-4 h-4 text-primary-100" aria-hidden="true" />
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
      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary-50 border border-primary-100 rounded-card p-8 sm:p-12 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-900">
            Perlu Jadwalkan Kunjungan Teknisi Hari Ini?
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Hubungi kami sekarang untuk konsultasi awal mengenai kendala kulkas atau mesin cuci Anda tanpa komitmen berlebih.
          </p>
          <div className="pt-2">
            <Button
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppUrl()}
              isExternal
              className="gap-2"
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
