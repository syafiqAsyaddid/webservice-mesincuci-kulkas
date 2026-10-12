import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Wrench,
  HelpCircle,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Accordion } from '@/components/ui/Accordion';
import { priorityIssues } from '@/lib/content/services';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';

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

  return {
    title: `${issue.title} - Penyebab & Solusi Service Panggilan`,
    description: `${issue.symptomSummary} Ketahui batasan diagnosa mandiri dan hubungi teknisi panggilan terpercaya di Jabodetabek.`,
  };
}

export default async function IssueDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const issue = priorityIssues.find((i) => i.slug === slug);

  if (!issue) {
    notFound();
  }

  // Get related FAQs
  const relatedFaqs = faqData.filter(
    (faq) =>
      issue.relatedFaqIds.includes(faq.id) ||
      faq.category === issue.category ||
      faq.category === 'umum'
  );

  // Get other issues in the same category
  const otherIssues = priorityIssues
    .filter((i) => i.category === issue.category && i.slug !== issue.slug)
    .slice(0, 3);

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
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
          <li className="text-text font-medium" aria-current="page">
            {issue.title}
          </li>
        </ol>
      </nav>

      {/* Main Issue Header */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant={issue.category === 'kulkas' ? 'default' : 'info'}>
          {issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'}
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight leading-tight">
          {issue.title}
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          {issue.symptomSummary}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Detail Content */}
        <div className="lg:col-span-8 space-y-10">
          {/* Batasan Diagnosis Jarak Jauh per FR-03 & antislop */}
          <section className="bg-amber-50/70 border border-amber-200 rounded-card p-6 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-900 font-semibold text-base">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0" aria-hidden="true" />
              <span>Penting: Batasan Diagnosis Jarak Jauh</span>
            </div>
            <p className="text-sm text-amber-950/90 leading-relaxed">
              {issue.remoteDiagnosisLimits}
            </p>
            <p className="text-xs text-amber-900/80 italic">
              Catatan: Membongkar sendiri komponen bertegangan tinggi atau sirkuit freon tanpa perlengkapan memadai berisiko korsleting dan merusak unit lebih lanjut.
            </p>
          </section>

          {/* Tindakan Pemeriksaan & Bantuan Teknisi */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary-700" aria-hidden="true" />
              <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
                Langkah Pemeriksaan & Penanganan Teknisi di Lokasi
              </h2>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              Saat tiba di rumah atau tempat usaha Anda, teknisi akan melakukan serangkaian pengujian terstandar sebelum menawarkan solusi penggantian suku cadang:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {issue.availableAssistance.map((assistance, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-card p-4 border border-border flex items-start gap-3 shadow-card"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm font-medium text-text">{assistance}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cakupan Wilayah & Estimasi Biaya Info */}
          <section className="bg-primary-50 border border-primary-100 rounded-card p-6 space-y-3">
            <div className="flex items-center gap-2 font-semibold text-primary-900 text-base">
              <MapPin className="w-5 h-5 text-primary-700" aria-hidden="true" />
              <span>Cakupan Kunjungan Teknisi</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              {issue.serviceAreaSummary}
            </p>
            <div className="pt-1">
              <Link
                href="/wilayah"
                className="text-xs font-semibold text-primary-700 hover:text-primary-900 underline"
              >
                Lihat daftar kecamatan & wilayah yang dilayani &rarr;
              </Link>
            </div>
          </section>

          {/* Pertanyaan yang Sering Diajukan */}
          {relatedFaqs.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary-700" aria-hidden="true" />
                <h2 className="text-xl sm:text-2xl font-bold text-primary-900">
                  Pertanyaan Terkait Kerusakan Ini
                </h2>
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

        {/* Right Column: Sticky Consultation Box */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
          <Card highlighted className="space-y-4">
            <h3 className="text-lg font-bold text-primary-900">
              Konsultasi Kendala {issue.title}
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Jelaskan merek perangkat Anda dan jadwalkan kunjungan teknisi ke lokasi Anda hari ini.
            </p>

            <div className="space-y-3 pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({
                  category: issue.category,
                  issue: issue.title,
                })}
                isExternal
                className="w-full gap-2"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Chat Teknisi Sekarang</span>
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/estimasi-biaya"
                className="w-full text-sm"
              >
                Cek Estimasi Biaya
              </Button>
            </div>

            <div className="pt-3 border-t border-border/80 text-xs text-text-muted space-y-1.5">
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Pengecekan jelas sebelum tindakan</span>
              </p>
              <p className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Garansi suku cadang terpasang</span>
              </p>
            </div>
          </Card>

          {/* Other Issues in Category */}
          {otherIssues.length > 0 && (
            <div className="bg-surface rounded-card p-5 border border-border space-y-3">
              <h4 className="text-sm font-bold text-primary-900 uppercase tracking-wide">
                Kerusakan {issue.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'} Lainnya
              </h4>
              <ul className="space-y-2 text-sm">
                {otherIssues.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/kerusakan/${other.slug}`}
                      className="text-primary-700 hover:text-primary-900 font-medium flex items-center justify-between group py-1"
                    >
                      <span className="group-hover:underline">{other.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
