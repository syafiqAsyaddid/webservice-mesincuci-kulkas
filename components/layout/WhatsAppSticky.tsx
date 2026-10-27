'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();
  const [isInPageVisible, setIsInPageVisible] = React.useState(false);

  React.useEffect(() => {
    const targets = document.querySelectorAll('[data-inpage-whatsapp]');
    if (!targets.length) {
      setIsInPageVisible(false);
      return;
    }

    const visibilityMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target, entry.isIntersecting);
        });
        const anyVisible = Array.from(visibilityMap.values()).some(Boolean);
        setIsInPageVisible(anyVisible);
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, [pathname]);

  const handleClick = () => {
    trackEvent('click_whatsapp', {
      cta_location: 'sticky_bar_mobile',
      category: category ?? 'general',
      issue: issue ?? 'none',
      region: region ?? 'none',
    });
  };

  const url = generateWhatsAppUrl({ category, issue, region });

  return (
    <div
      data-sticky-whatsapp="true"
      className={`fixed bottom-0 left-0 right-0 z-30 p-3 bg-white border-t border-slate-200 shadow-lg md:hidden transition-all duration-300 ease-in-out ${
        isInPageVisible
          ? 'translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-0 opacity-100 pointer-events-auto'
      }`}
      aria-hidden={isInPageVisible}
    >
      <div className="max-w-md mx-auto">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          data-custom-track="true"
          onClick={handleClick}
          className="flex items-center justify-center gap-2 w-full min-h-[48px] px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-button text-base focus-visible:ring-2 focus-visible:ring-focus transition-colors"
          aria-label="Chat teknisi langsung via WhatsApp"
        >
          <MessageSquare className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Chat Teknisi via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
