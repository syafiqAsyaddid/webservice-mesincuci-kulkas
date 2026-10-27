'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    const isOpening = !openIds.includes(id);
    if (isOpening) {
      trackEvent('faq_open', { faq_id: id });
    }
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-border border-y border-border ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              className="w-full min-h-[44px] flex items-center justify-between text-left font-semibold text-text hover:text-primary-900 focus-visible:outline-2 focus-visible:outline-focus rounded py-2.5 transition-colors cursor-pointer"
            >
              <span className="text-base sm:text-lg pr-4">{item.title}</span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 text-text-muted transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-primary-700' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`accordion-content-${item.id}`}
                className="pt-3 pb-1 text-sm sm:text-base text-text-muted leading-relaxed"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
