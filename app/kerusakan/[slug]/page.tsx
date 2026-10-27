import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Button, WhatsAppIcon } from '@/components/ui/Button';
import { Accordion } from '@/components/ui/Accordion';
import { IssueRouteExplorer } from '@/components/sections/IssueRouteExplorer';
import { JsonLd } from '@/components/seo/JsonLd';
import { priorityIssues } from '@/lib/content/services';
import { regionsData } from '@/lib/content/regions';
import { faqData } from '@/lib/content/faq';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return priorityIssues.map((issue) => ({
    slug: issue.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const issue = priorityIssues.find((i) => i.slug === slug);

  if (!issue) {
    return {
      title: 'Kerusakan Tidak Ditemukan',
    };
  }

  return buildPageMetadata({
    title: `${issue.title} - Penyebab & Solusi Service Panggilan`,
    description: `${issue.symptomSummary} Ketahui batasan diagnosa mandiri dan hubungi teknisi panggilan terpercaya di area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.`,
    path: `/kerusakan/${issue.slug}`,
    ogImage: issue.imagePath,
  });
}

export default async function IssueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const issue = priorityIssues.find((i) => i.slug === slug);

  if (!issue) {
    notFound();
  }

  const relatedFaqs = faqData.filter(
    (faq) =>
      issue.relatedFaqIds.includes(faq.id) ||
      faq.category === issue.category ||
      faq.category === 'umum'
  );

  const otherIssues = priorityIssues.filter(
    (i) => i.category === issue.category && i.slug !== issue.slug
  );

  const parentServicePath =
    issue.category === 'kulkas'
      ? '/layanan/service-kulkas'
      : '/layanan/service-mesin-cuci';
  const parentServiceName =
    issue.category === 'kulkas'
      ? 'Service Kulkas'
      : 'Service Mesin Cuci';

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'Layanan', path: '/layanan' },
    { name: parentServiceName, path: parentServicePath },
    { name: issue.title, path: `/kerusakan/${issue.slug}` },
  ]);

  const serviceJsonLd = buildServiceJsonLd({
    name: `Perbaikan ${issue.title} Panggilan`,
    description: `${issue.symptomSummary} ${issue.remoteDiagnosisLimits}`,
    path: `/kerusakan/${issue.slug}`,
    serviceType: `Jasa Perbaikan ${issue.title}`,
  });

  const faqJsonLd = buildFaqJsonLd(relatedFaqs);

  return (
    <div className="py-10 sm:py-14 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={[breadcrumbJsonLd, serviceJsonLd, faqJsonLd]} />
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
        <ol className="flex items-center space-x-2 flex-wrap">
          <li>
            <Link
              href="/"
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              Beranda
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li>
            <Link
              href="/layanan"
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              Layanan
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li>
            <Link
              href={parentServicePath}
              className="hover:text-primary-800 transition-colors focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-0.5"
            >
              {parentServiceName}
            </Link>
          </li>
          <li className="flex items-center text-text-muted/60">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </li>
          <li className="text-text font-medium" aria-current="page">
            {issue.title}
          </li>
        </ol>
      </nav>

      {/* 1. Split Case-Study Hero Header with Authentic Field Photo */}
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-10 border-b border-border">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-primary-900 tracking-tight leading-[1.12]">
              {issue.title}
            </h1>
            <p className="text-base sm:text-lg text-text-muted leading-relaxed">
              {issue.symptomSummary}
            </p>
          </div>

          {/* Technical Specification Strip */}
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-border text-xs sm:text-sm">
            <div>
              <dt className="text-xs text-text-muted">Kategori Perangkat</dt>
              <dd className="font-bold text-primary-900 mt-0.5">
                {issue.category === 'kulkas'
                  ? 'Kulkas 1 & 2 Pintu / Inverter'
                  : 'Mesin Cuci Front & Top Load'}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-text-muted">Fokus Komponen Utama</dt>
              <dd className="font-bold text-primary-900 mt-0.5">
                {issue.componentFocus || 'Komponen Kelistrikan & Mekanis'}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-text-muted">Metode Tindakan</dt>
              <dd className="font-bold text-emerald-800 mt-0.5">
                Pemeriksaan Fisik di Lokasi
              </dd>
            </div>
          </dl>
        </div>

        {/* Right: Double-Bezel Field Inspection Photo */}
        <div className="lg:col-span-5">
          {issue.imagePath && (
            <div className="p-2 bg-[#EEF2F6] rounded-card border border-border">
              <div className="relative aspect-[16/10] rounded-[10px] overflow-hidden bg-slate-200">
                <Image
                  src={issue.imagePath}
                  alt={issue.title}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2A47]/95 via-[#0E2A47]/70 to-transparent pt-10 pb-3.5 px-4">
                  <p className="text-xs text-white/95 font-medium leading-snug">
                    {issue.imageCaption ||
                      `Pemeriksaan fisik komponen ${issue.title.toLowerCase()} di lokasi pelanggan`}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 2. Main Asymmetric Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Technical Dossier */}
        <div className="lg:col-span-8 space-y-12">
          {/* A. Two-Column Technical Analysis Sheet (Replaces AI Warning Callout) */}
          <section className="bg-white rounded-card border border-border overflow-hidden">
            <div className="bg-[#0E2A47] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-base sm:text-lg font-bold text-white">
                Mengapa Gejala Ini Memerlukan Pengukuran Fisik di Lokasi?
              </h2>
              <span className="text-xs text-emerald-300 font-semibold">
                Standar Diagnosa Alat Ukur
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="p-6 space-y-2.5">
                <h3 className="text-sm font-bold text-primary-900">
                  Kemungkinan Penyebab Komponen Internal
                </h3>
                <p className="text-sm text-text leading-relaxed">
                  {issue.remoteDiagnosisLimits}
                </p>
              </div>

              <div className="p-6 bg-[#F8FAFC] space-y-2.5">
                <h3 className="text-sm font-bold text-primary-900">
                  Risiko Bongkar Mandiri Tanpa Alat Ukur
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Membongkar sendiri jalur bertegangan tinggi, modul PCB, atau sistem pipa freon tanpa multimeter dan manifold gauge berisiko memicu korsleting serta memperbesar biaya perbaikan. Teknisi kami melakukan pengujian terbuka di hadapan Anda sebelum menentukan tindakan.
                </p>
              </div>
            </div>
          </section>

          {/* B. Connected Sequential Inspection Blueprint (Replaces 4 Plain Boxes) */}
          <section className="space-y-5">
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                Tahapan Pemeriksaan &amp; Penanganan Teknisi di Tempat
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                Urutan pengecekan terstandar yang dikerjakan teknisi saat tiba di rumah atau tempat usaha Anda:
              </p>
            </div>

            <ol className="bg-white rounded-card border border-border divide-y divide-border overflow-hidden">
              {issue.availableAssistance.map((assistance, idx) => (
                <li
                  key={idx}
                  className="p-5 sm:p-6 flex items-start gap-4 sm:gap-5 hover:bg-[#F8FAFC] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#EEF2F6] border border-border text-primary-900 text-xs font-extrabold tabular-nums flex items-center justify-center flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-primary-900 leading-snug">
                      {assistance}
                    </h3>
                    <p className="text-xs text-text-muted">
                      {idx === 0
                        ? 'Langkah awal untuk memastikan sumber kendala utama secara akurat.'
                        : idx === issue.availableAssistance.length - 1
                        ? 'Pengujian akhir untuk memastikan komponen bekerja stabil sesuai spesifikasi.'
                        : 'Pemeriksaan lanjutan menggunakan alat ukur standar teknisi.'}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* C. Interactive Service Route & Sub-District Explorer (Replaces Plain Coverage Box) */}
          <IssueRouteExplorer
            regions={regionsData}
            issueTitle={issue.title}
            category={issue.category}
          />

          {/* D. Contextual FAQ Section */}
          {relatedFaqs.length > 0 && (
            <section className="space-y-5">
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-extrabold text-primary-900">
                  Pertanyaan Terkait {issue.title}
                </h2>
                <p className="text-sm text-text-muted">
                  Penjelasan mengenai alur pengecekan, persetujuan biaya, dan konfirmasi jadwal.
                </p>
              </div>
              <Accordion
                items={relatedFaqs.map((f) => ({
                  id: f.id,
                  title: f.question,
                  content: f.answer,
                }))}
              />
            </section>
          )}
        </div>

        {/* Right Column: Sticky Dispatch & Related Issues Ledger */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          {/* Primary Consultation Dispatch Box */}
          <div className="bg-white rounded-card border-2 border-primary-900 overflow-hidden">
            <div className="bg-[#0E2A47] text-white px-6 py-4">
              <h3 className="text-base font-bold text-white">
                Jadwalkan Pengecekan {issue.title}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Workshop Pusat: Pondok Gede, Bekasi
              </p>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-text-muted leading-relaxed">
                Sampaikan merek perangkat dan keluhan yang Anda alami. Teknisi kami siap mengonfirmasi jadwal kedatangan via WhatsApp.
              </p>

              <div className="space-y-2.5">
                <Button
                  variant="whatsapp"
                  size="lg"
                  href={generateWhatsAppUrl({
                    category: issue.category,
                    issue: issue.title,
                  })}
                  isExternal
                  data-inpage-whatsapp
                  className="w-full gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Chat Teknisi Sekarang</span>
                </Button>

                <Button
                  variant="secondary"
                  size="md"
                  href="/kontak"
                  className="w-full text-sm"
                >
                  Format Pemesanan Cepat
                </Button>
              </div>

              <div className="pt-4 border-t border-border space-y-2 text-xs text-text-muted">
                <div className="flex items-center justify-between">
                  <span>Telepon Langsung:</span>
                  <a
                    href={`tel:${businessInfo.whatsappNumber}`}
                    className="font-bold text-primary-900 hover:underline inline-flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>{businessInfo.displayPhone}</span>
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pengerjaan:</span>
                  <span className="font-semibold text-text">Langsung di Tempat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Issues with Visual Thumbnails */}
          {otherIssues.length > 0 && (
            <div className="bg-white rounded-card border border-border overflow-hidden">
              <div className="px-5 py-4 border-b border-border bg-[#F8FAFC]">
                <h4 className="text-sm font-bold text-primary-900">
                  Gejala {issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'} Lainnya
                </h4>
              </div>
              <ul className="divide-y divide-border">
                {otherIssues.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/kerusakan/${other.slug}`}
                      className="p-4 flex items-center justify-between gap-3 hover:bg-[#F8FAFC] transition-colors group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {other.imagePath && (
                          <div className="relative w-12 h-9 rounded-[5px] overflow-hidden border border-border bg-slate-100 flex-shrink-0">
                            <Image
                              src={other.imagePath}
                              alt={other.title}
                              fill
                              className="object-cover object-center"
                              sizes="48px"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <span className="block text-sm font-bold text-primary-900 group-hover:text-primary-700 truncate">
                            {other.title}
                          </span>
                          {other.componentFocus && (
                            <span className="block text-[11px] text-text-muted truncate">
                              {other.componentFocus}
                            </span>
                          )}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary-900 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
