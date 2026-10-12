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
  { href: '/wilayah', label: 'Area Layanan' },
  { href: '/estimasi-biaya', label: 'Estimasi Biaya' },
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

  const handleWhatsAppClick = () => {
    trackEvent('whatsapp_click', { source: 'header_nav' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-surface/95 backdrop-blur-sm border-b border-border shadow-xs">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex flex-col focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-1"
        >
          <span className="text-lg sm:text-xl font-extrabold text-primary-900 tracking-tight">
            {businessInfo.name}
          </span>
          <span className="text-xs text-text-muted hidden sm:inline">
            Service Kulkas & Mesin Cuci Panggilan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-focus rounded-sm py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Direct Phone */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href={`tel:${businessInfo.whatsappNumber}`}
            onClick={() => trackEvent('phone_click', { source: 'header' })}
            className="text-xs font-semibold text-text hover:text-primary-800 flex items-center gap-1.5 px-3 py-2 rounded-button border border-border bg-surface-muted/60 transition-colors"
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
            onClick={handleWhatsAppClick}
            className="gap-2 shadow-xs"
          >
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>Chat WhatsApp</span>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center space-x-2">
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
        <div className="md:hidden border-b border-border bg-surface px-4 pt-3 pb-5 space-y-3 shadow-card animate-in fade-in duration-150">
          <div className="p-2.5 bg-surface-muted rounded-button text-xs text-text-muted flex items-center justify-between">
            <span>Telepon Langsung:</span>
            <a
              href={`tel:${businessInfo.whatsappNumber}`}
              className="font-bold text-primary-900"
            >
              {businessInfo.displayPhone}
            </a>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Navigasi Seluler">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-button text-base font-medium text-text hover:bg-primary-50 hover:text-primary-800 transition-colors"
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
              onClick={() => {
                handleWhatsAppClick();
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
