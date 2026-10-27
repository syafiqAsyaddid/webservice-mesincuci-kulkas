import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, HelpCircle, MessageSquare } from 'lucide-react';
import { Accordion } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqData } from '@/lib/content/faq';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import {
  buildPageMetadata,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
} from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Tanya Jawab (FAQ) Layanan Service Kulkas & Mesin Cuci',
  description:
    'Pertanyaan yang sering diajukan mengenai biaya pengecekan, wilayah panggilan (Bekasi, Jakarta Timur, Jakarta Selatan, Depok), dan alur perbaikan kulkas & mesin cuci.',
  path: '/faq',
});

export default function FaqPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Beranda', path: '/' },
    { name: 'FAQ', path: '/faq' },
  ]);

  const faqJsonLd = buildFaqJsonLd(faqData);

  return (
    <div className="py-8 sm:py-12 space-y-12 max-w-container mx-auto px-4 sm:px-6 lg:px-8">
      <JsonLd data={[breadcrumbJsonLd, faqJsonLd]} />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
        <ol className="flex items-center space-x-2">
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
          <li className="text-text font-medium" aria-current="page">
            FAQ
          </li>
        </ol>
      </nav>

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 text-primary-700 text-sm font-semibold">
          <HelpCircle className="w-4 h-4" aria-hidden="true" />
          <span>Bantuan & Jawaban Praktis</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
          Pertanyaan yang Sering Diajukan
        </h1>
        <p className="text-base sm:text-lg text-text-muted leading-relaxed">
          Temukan jawaban seputar pemesanan teknisi panggilan, sistem biaya pengecekan, pengerjaan di tempat, dan ketersediaan layanan di wilayah Anda.
        </p>
      </div>

      {/* Accordion FAQ */}
      <div className="max-w-3xl">
        <Accordion
          items={faqData.map((f) => ({
            id: f.id,
            title: f.question,
            content: f.answer,
          }))}
        />
      </div>

      {/* WhatsApp Help CTA */}
      <div className="bg-primary-50 border border-primary-100 rounded-card p-6 sm:p-10 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-bold text-primary-900">
            Punya Pertanyaan Lain yang Belum Terjawab?
          </h2>
          <p className="text-sm text-text-muted">
            Sampaikan kendala atau pertanyaan Anda langsung kepada tim teknisi kami.
          </p>
        </div>
        <Button
          variant="whatsapp"
          size="md"
          href={generateWhatsAppUrl()}
          isExternal
          data-inpage-whatsapp
          className="gap-2 flex-shrink-0"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          <span>Chat via WhatsApp</span>
        </Button>
      </div>
    </div>
  );
}
