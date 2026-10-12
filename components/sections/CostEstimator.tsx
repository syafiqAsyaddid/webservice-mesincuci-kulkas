'use client';

import React, { useState } from 'react';
import {
  Calculator,
  AlertCircle,
  CheckCircle2,
  MessageSquare,
  HelpCircle,
  RotateCcw,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import {
  applianceSubtypes,
  detailedCostRules,
  DetailedCostRule,
} from '@/lib/content/cost-rules';
import { ApplianceCategory } from '@/types';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

export const CostEstimator: React.FC = () => {
  const [category, setCategory] = useState<ApplianceCategory | null>(null);
  const [subtype, setSubtype] = useState<string>('');
  const [selectedRuleId, setSelectedRuleId] = useState<string>('');
  const [isOtherIssue, setIsOtherIssue] = useState<boolean>(false);

  // Filter rules by category and subtype
  const availableRules = detailedCostRules.filter((rule) => {
    if (!category) return false;
    if (rule.category !== category) return false;
    if (subtype && rule.applianceSubtype !== subtype) return false;
    return true;
  });

  const selectedRule: DetailedCostRule | undefined = detailedCostRules.find(
    (rule) => rule.id === selectedRuleId
  );

  const handleCategoryChange = (cat: ApplianceCategory) => {
    setCategory(cat);
    setSubtype(applianceSubtypes[cat][0] || '');
    setSelectedRuleId('');
    setIsOtherIssue(false);
    trackEvent('cost_estimator_start', { category: cat });
  };

  const handleSubtypeChange = (sub: string) => {
    setSubtype(sub);
    setSelectedRuleId('');
    setIsOtherIssue(false);
  };

  const handleRuleChange = (ruleId: string) => {
    setSelectedRuleId(ruleId);
    setIsOtherIssue(false);
    if (ruleId) {
      trackEvent('cost_estimator_complete', {
        category,
        subtype,
        ruleId,
      });
    }
  };

  const handleSelectOther = () => {
    setIsOtherIssue(true);
    setSelectedRuleId('');
    trackEvent('cost_estimator_complete', {
      category,
      subtype,
      ruleId: 'other_custom_issue',
    });
  };

  const handleReset = () => {
    setCategory(null);
    setSubtype('');
    setSelectedRuleId('');
    setIsOtherIssue(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Kolom Kiri: Form Interaktif Kalkulator */}
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-surface rounded-card p-6 sm:p-8 border border-border shadow-card space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
                <Calculator className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-primary-900">
                  Simulasi Estimasi Biaya
                </h2>
                <p className="text-xs text-text-muted">
                  Sesuaikan dengan jenis perangkat dan kendala Anda
                </p>
              </div>
            </div>

            {category && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1 text-xs text-text-muted hover:text-primary-800 focus-visible:ring-1 focus-visible:ring-focus rounded-sm py-1 transition-colors"
                aria-label="Ulangi simulasi kalkulator dari awal"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Langkah 1: Pilih Kategori Perangkat */}
          <fieldset className="space-y-3">
            <legend className="text-sm font-semibold text-primary-900">
              1. Pilih Perangkat yang Bermasalah:
            </legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleCategoryChange('kulkas')}
                className={`p-4 rounded-button text-left border transition-all min-h-[56px] focus-visible:ring-2 focus-visible:ring-focus ${
                  category === 'kulkas'
                    ? 'border-primary-600 bg-primary-50/70 text-primary-900 font-semibold ring-1 ring-primary-600'
                    : 'border-border bg-surface text-text hover:bg-surface-muted'
                }`}
              >
                <span className="block text-base">Kulkas / Lemari Es</span>
                <span className="block text-xs text-text-muted mt-0.5">
                  1 pintu, 2 pintu, atau inverter
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleCategoryChange('mesin-cuci')}
                className={`p-4 rounded-button text-left border transition-all min-h-[56px] focus-visible:ring-2 focus-visible:ring-focus ${
                  category === 'mesin-cuci'
                    ? 'border-primary-600 bg-primary-50/70 text-primary-900 font-semibold ring-1 ring-primary-600'
                    : 'border-border bg-surface text-text hover:bg-surface-muted'
                }`}
              >
                <span className="block text-base">Mesin Cuci</span>
                <span className="block text-xs text-text-muted mt-0.5">
                  Top loading, front loading, 2 tabung
                </span>
              </button>
            </div>
          </fieldset>

          {/* Langkah 2: Pilih Sub-tipe Perangkat */}
          {category && (
            <fieldset className="space-y-3 pt-2">
              <legend className="text-sm font-semibold text-primary-900">
                2. Pilih Model / Tipe Perangkat:
              </legend>
              <div className="flex flex-wrap gap-2">
                {applianceSubtypes[category].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => handleSubtypeChange(item)}
                    className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-button border transition-colors min-h-[44px] focus-visible:ring-2 focus-visible:ring-focus ${
                      subtype === item
                        ? 'border-primary-600 bg-primary-100 text-primary-900 font-semibold'
                        : 'border-border bg-white text-text-muted hover:text-text'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* Langkah 3: Pilih Kerusakan / Pekerjaan */}
          {category && subtype && (
            <div className="space-y-3 pt-2">
              <label
                htmlFor="issue-select"
                className="block text-sm font-semibold text-primary-900"
              >
                3. Pilih Jenis Kerusakan atau Pekerjaan yang Dibutuhkan:
              </label>

              <div className="space-y-2">
                {availableRules.map((rule) => {
                  const isChecked = selectedRuleId === rule.id;
                  return (
                    <label
                      key={rule.id}
                      className={`flex items-start gap-3 p-3.5 rounded-button border cursor-pointer transition-colors ${
                        isChecked
                          ? 'border-primary-600 bg-primary-50/50'
                          : 'border-border bg-surface hover:bg-surface-muted'
                      }`}
                    >
                      <input
                        type="radio"
                        name="issue-option"
                        value={rule.id}
                        checked={isChecked}
                        onChange={() => handleRuleChange(rule.id)}
                        className="mt-1 w-4 h-4 text-primary-600 border-border focus:ring-primary-600"
                      />
                      <div className="text-sm">
                        <span className="font-medium text-text block">
                          {rule.issueName}
                        </span>
                        <span className="text-xs text-text-muted block mt-0.5">
                          {rule.includedDescription}
                        </span>
                      </div>
                    </label>
                  );
                })}

                {/* Option for custom / other issue */}
                <label
                  className={`flex items-start gap-3 p-3.5 rounded-button border cursor-pointer transition-colors ${
                    isOtherIssue
                      ? 'border-primary-600 bg-primary-50/50'
                      : 'border-border bg-surface hover:bg-surface-muted'
                  }`}
                >
                  <input
                    type="radio"
                    name="issue-option"
                    value="other"
                    checked={isOtherIssue}
                    onChange={handleSelectOther}
                    className="mt-1 w-4 h-4 text-primary-600 border-border focus:ring-primary-600"
                  />
                  <div className="text-sm">
                    <span className="font-medium text-text block">
                      Kendala Lain / Belum Yakin dengan Penyebabnya
                    </span>
                    <span className="text-xs text-text-muted block mt-0.5">
                      Konsultasikan langsung agar teknisi mendengarkan gejala spesifik Anda.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Kolom Kanan: Tampilan Hasil State Estimasi */}
      <div className="lg:col-span-5 space-y-6">
        {/* State 1: Default (Belum ada pilihan) */}
        {!category && (
          <Card className="space-y-4">
            <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700">
              <HelpCircle className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-primary-900">
              Petunjuk Estimasi Biaya
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Silakan pilih jenis perangkat kulkas atau mesin cuci di sebelah kiri untuk melihat kisaran biaya perbaikan standar.
            </p>
            <div className="p-4 rounded-button bg-surface-muted border border-border text-xs text-text-muted space-y-1.5">
              <p className="font-semibold text-text">Ketentuan Estimasi:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Angka merupakan kisaran acuan pekerjaan umum.</li>
                <li>Biaya final dipastikan setelah pemeriksaan fisik unit di lokasi.</li>
                <li>Tidak ada biaya tersembunyi yang ditagihkan tanpa persetujuan Anda.</li>
              </ul>
            </div>
          </Card>
        )}

        {/* State 2: Incomplete (Pilih perangkat tapi belum pilih masalah) */}
        {category && !selectedRule && !isOtherIssue && (
          <Card className="space-y-4">
            <Badge variant="default">Langkah Terakhir</Badge>
            <h3 className="text-lg font-bold text-primary-900">
              Pilih Gejala atau Masalah
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Tentukan salah satu jenis pekerjaan di Langkah 3 untuk memunculkan rincian estimasi biaya dan komponen yang termasuk.
            </p>
          </Card>
        )}

        {/* State 3: Result (Aturan harga cocok & terverifikasi) */}
        {category && selectedRule && (
          <div className="bg-surface rounded-card p-6 sm:p-8 border-2 border-primary-600 shadow-card space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="success">Estimasi Terhitung</Badge>
              <span className="text-xs text-text-muted">
                {selectedRule.applianceSubtype}
              </span>
            </div>

            <div>
              <p className="text-xs text-text-muted uppercase tracking-wider font-semibold">
                Pekerjaan:
              </p>
              <h3 className="text-lg font-bold text-primary-900 mt-0.5">
                {selectedRule.issueName}
              </h3>
            </div>

            {/* Price Range Box */}
            <div className="bg-primary-50 rounded-button p-4 border border-primary-100 text-center space-y-1">
              <span className="text-xs text-primary-800 font-semibold block">
                Perkiraan Kisaran Biaya:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-primary-900">
                Rp {selectedRule.minPrice.toLocaleString('id-ID')}
                <span className="text-lg font-normal text-text-muted mx-1.5">-</span>
                Rp {selectedRule.maxPrice.toLocaleString('id-ID')}
              </div>
              <span className="text-xs text-text-muted block mt-1">
                ({selectedRule.unit})
              </span>
            </div>

            {/* Scope of Work */}
            <div className="space-y-3 text-xs text-text">
              <div className="space-y-1">
                <span className="font-semibold text-primary-900 block">
                  Rincian pekerjaan & komponen:
                </span>
                <p className="text-text-muted leading-relaxed">
                  {selectedRule.includedDescription}
                </p>
              </div>

              {selectedRule.note && (
                <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-button space-y-1 text-amber-950">
                  <div className="flex items-center gap-1 font-semibold text-amber-900">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                    <span>Catatan Pemeriksaan Lapangan</span>
                  </div>
                  <p className="leading-relaxed">{selectedRule.note}</p>
                </div>
              )}
            </div>

            {/* WhatsApp Direct Action with summary */}
            <div className="pt-2">
              <Button
                variant="whatsapp"
                size="lg"
                href={generateWhatsAppUrl({
                  category,
                  issue: `${selectedRule.issueName} (Estimasi Rp ${selectedRule.minPrice.toLocaleString('id-ID')} - Rp ${selectedRule.maxPrice.toLocaleString('id-ID')})`,
                })}
                isExternal
                onClick={() => {
                  trackEvent('whatsapp_click', {
                    source: 'cost_estimator_result',
                    category,
                    ruleId: selectedRule.id,
                  });
                }}
                className="w-full gap-2"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                <span>Konfirmasi Estimasi Ini via WhatsApp</span>
              </Button>
            </div>

            <p className="text-xs text-text-muted text-center leading-normal">
              Biaya definitif disepakati di lokasi sebelum perbaikan dilakukan.
            </p>
          </div>
        )}

        {/* State 4: Unavailable (Kendala lain / belum ada harga resmi) */}
        {category && isOtherIssue && (
          <div className="bg-surface rounded-card p-6 border border-border shadow-card space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-primary-900 font-semibold">
              <AlertCircle className="w-5 h-5 text-primary-700 flex-shrink-0" />
              <span>Memerlukan Konsultasi Diagnosa</span>
            </div>

            <p className="text-sm text-text-muted leading-relaxed">
              Untuk kendala yang belum spesifik atau melibatkan kerusakan komponen majemuk, kami tidak mencantumkan estimasi perkiraan sembarangan demi transparansi.
            </p>

            <div className="p-4 bg-primary-50 rounded-button border border-primary-100 text-xs text-text space-y-2">
              <p className="font-semibold text-primary-900">Yang dapat Anda lakukan:</p>
              <ul className="space-y-1.5 text-text-muted">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <span>Kirimkan foto atau rekaman video suara kendala ke WhatsApp.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <span>Sebutkan merek, model, dan lama kerusakan terjadi.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <span>Teknisi kami akan memberikan saran pemeriksaan dan biaya cek.</span>
                </li>
              </ul>
            </div>

            <Button
              variant="whatsapp"
              size="lg"
              href={generateWhatsAppUrl({
                category,
                issue: `Kendala khusus pada ${subtype || category}`,
              })}
              isExternal
              onClick={() => {
                trackEvent('whatsapp_click', {
                  source: 'cost_estimator_unavailable_state',
                  category,
                });
              }}
              className="w-full gap-2"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              <span>Konsultasikan via WhatsApp</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
