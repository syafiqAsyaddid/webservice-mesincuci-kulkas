'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { captureCampaignAttribution, trackEvent } from '@/lib/analytics';

function inferCategoryFromHref(href: string): string {
  const decoded = decodeURIComponent(href).toLowerCase();
  if (decoded.includes('tukar tambah') || decoded.includes('seken') || decoded.includes('jual')) {
    return 'tukar-tambah';
  }
  if (decoded.includes('mesin cuci')) {
    return 'mesin-cuci';
  }
  if (decoded.includes('kulkas') || decoded.includes('freezer') || decoded.includes('showcase')) {
    return 'kulkas';
  }
  return 'general';
}

export const AnalyticsProvider: React.FC = () => {
  const pathname = usePathname();

  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  const primaryGtagId = ga4Id || googleAdsId;

  // Capture UTM/click-ID attribution and record page_view on route change
  useEffect(() => {
    captureCampaignAttribution();
    trackEvent('page_view', {
      page_path: pathname,
    });
  }, [pathname]);

  // Global delegated click tracking for all WhatsApp and Phone links across all pages
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href) return;

      // Skip if the anchor explicitly handles its own custom tracking event
      if (anchor.hasAttribute('data-custom-track')) return;

      const ctaLabel = (anchor.textContent || '').trim().slice(0, 80);
      const isSticky = Boolean(anchor.closest('[data-sticky-whatsapp]'));
      const isHeader = Boolean(anchor.closest('header'));
      const isFooter = Boolean(anchor.closest('footer'));

      const ctaLocation = isSticky
        ? 'sticky_bar_mobile'
        : isHeader
        ? 'header_nav'
        : isFooter
        ? 'footer'
        : 'in_page_cta';

      if (href.includes('wa.me/') || href.includes('api.whatsapp.com')) {
        trackEvent('click_whatsapp', {
          cta_location: ctaLocation,
          cta_label: ctaLabel || 'WhatsApp CTA',
          category: inferCategoryFromHref(href),
        });
      } else if (href.startsWith('tel:')) {
        trackEvent('click_phone', {
          cta_location: ctaLocation,
          cta_label: ctaLabel || 'Phone CTA',
        });
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return (
    <>
      {/* Google Tag Manager (loaded only when NEXT_PUBLIC_GTM_ID is set) */}
      {gtmId && (
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* GA4 / Google Ads gtag.js (loaded only when NEXT_PUBLIC_GA4_MEASUREMENT_ID or NEXT_PUBLIC_GOOGLE_ADS_ID is set) */}
      {primaryGtagId && (
        <>
          <Script
            id="gtag-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${primaryGtagId}`}
            strategy="afterInteractive"
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                ${ga4Id ? `gtag('config', '${ga4Id}', { send_page_view: false });` : ''}
                ${googleAdsId ? `gtag('config', '${googleAdsId}');` : ''}
              `,
            }}
          />
        </>
      )}

      {/* Meta Pixel (loaded only when NEXT_PUBLIC_META_PIXEL_ID is set) */}
      {metaPixelId && (
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
      )}
    </>
  );
};
