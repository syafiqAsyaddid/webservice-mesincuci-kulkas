'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { businessInfo } from '@/lib/content/business';
import { generateWhatsAppUrl } from '@/lib/whatsapp';
import { trackEvent } from '@/lib/analytics';

const navLinks = [
  { href: '/layanan', label: 'Layanan' },
  { href: '/layanan/service-kulkas', label: 'Service Kulkas' },
  { href: '/layanan/service-mesin-cuci', label: 'Service Mesin Cuci' },
  { href: '/wilayah', label: 'Area Layanan' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontak', label: 'Kontak' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleWhatsAppClick = (source: string) => {
    trackEvent('click_whatsapp', { cta_location: source });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-col focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-1 flex-shrink-0"
        >
          <span className="text-lg sm:text-xl font-extrabold text-primary-900 tracking-tight">
            {businessInfo.name}
          </span>
          <span className="text-xs text-text-muted hidden sm:inline">
            Service &amp; Perbaikan Kulkas &amp; Mesin Cuci Panggilan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-5" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-[44px] inline-flex items-center text-sm font-medium text-text hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-focus rounded-sm px-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Direct Phone */}
        <div className="hidden md:flex items-center space-x-2.5 flex-shrink-0">
          <a
            href={`tel:${businessInfo.whatsappNumber}`}
            data-custom-track="true"
            onClick={() => trackEvent('click_phone', { cta_location: 'header_desktop' })}
            className="min-h-[44px] text-xs font-semibold text-text hover:text-primary-800 inline-flex items-center gap-1.5 px-3 py-2 rounded-button border border-border bg-surface-muted/60 transition-colors"
            title="Telepon langsung teknisi"
          >
            <Phone className="w-3.5 h-3.5 text-primary-700" aria-hidden="true" />
            <span>{businessInfo.displayPhone}</span>
          </a>

          <Button
            variant="whatsapp"
            size="sm"
            href={generateWhatsAppUrl()}
            isExternal
            data-custom-track="true"
            onClick={() => handleWhatsAppClick('header_desktop')}
            className="gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Chat WhatsApp</span>
          </Button>
        </div>

        {/* Mobile / Tablet Menu Toggle */}
        <div className="flex lg:hidden items-center space-x-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-button text-text hover:bg-primary-50 focus-visible:ring-2 focus-visible:ring-focus cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
            <span className="text-xs font-semibold">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface px-4 pt-3 pb-5 space-y-3">
          <div className="px-3 py-1.5 bg-surface-muted rounded-button text-xs text-text-muted flex items-center justify-between">
            <span>Telepon Langsung:</span>
            <a
              href={`tel:${businessInfo.whatsappNumber}`}
              data-custom-track="true"
              onClick={() => trackEvent('click_phone', { cta_location: 'header_mobile_menu' })}
              className="min-h-[44px] inline-flex items-center gap-1.5 font-bold text-primary-900"
            >
              <Phone className="w-3.5 h-3.5 text-primary-700" aria-hidden="true" />
              <span>{businessInfo.displayPhone}</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Navigasi Seluler">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center px-3 py-2.5 rounded-button text-base font-medium text-text hover:bg-primary-50 hover:text-primary-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-border">
            <Button
              variant="whatsapp"
              size="md"
              href={generateWhatsAppUrl()}
              isExternal
              data-custom-track="true"
              onClick={() => {
                handleWhatsAppClick('header_mobile_menu');
                setMobileMenuOpen(false);
              }}
              className="w-full gap-2 shadow-sm"
            >
              <MessageSquare className="w-5 h-5" aria-hidden="true" />
              <span>Hubungi via WhatsApp</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
