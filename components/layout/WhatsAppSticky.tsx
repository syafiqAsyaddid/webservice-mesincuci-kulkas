'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

interface WhatsAppStickyProps {
  category?: 'kulkas' | 'mesin-cuci';
  issue?: string;
  region?: string;
}

export const WhatsAppSticky: React.FC<WhatsAppStickyProps> = ({
  category,
  issue,
  region,
}) => {
  const handleClick = () => {
    trackEvent('whatsapp_click', {
      source: 'sticky_bar_mobile',
      category: category ?? 'general',
      issue: issue ?? 'none',
      region: region ?? 'none',
    });
  };

  const url = generateWhatsAppUrl({ category, issue, region });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 bg-surface/95 backdrop-blur-sm border-t border-border shadow-lg md:hidden">
      <div className="max-w-md mx-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center justify-center gap-2 w-full min-h-[48px] px-4 py-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold rounded-button text-base shadow-sm focus-visible:ring-2 focus-visible:ring-focus transition-colors"
          aria-label="Konsultasi kerusakan langsung via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Konsultasi Cepat via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
