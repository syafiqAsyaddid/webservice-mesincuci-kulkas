declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: Record<string, unknown>[];
    fbq?: (
      command: 'init' | 'track' | 'trackCustom',
      eventName: string,
      params?: Record<string, unknown>,
      options?: { eventID?: string }
    ) => void;
  }
}

export type AnalyticsEventName =
  | 'page_view'
  | 'click_whatsapp'
  | 'whatsapp_click'
  | 'click_phone'
  | 'phone_click'
  | 'form_start'
  | 'generate_lead'
  | 'service_area_click'
  | 'faq_open';

export interface CampaignAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  landing_page?: string;
  initial_referrer?: string;
}

const ATTRIBUTION_STORAGE_KEY = 'dcool_campaign_attribution_v1';

const TRACKED_QUERY_KEYS: (keyof CampaignAttribution)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'fbclid',
  'msclkid',
];

export function captureCampaignAttribution(): CampaignAttribution {
  if (typeof window === 'undefined') return {};

  try {
    const existingRaw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    const existing: CampaignAttribution = existingRaw
      ? JSON.parse(existingRaw)
      : {};

    const searchParams = new URLSearchParams(window.location.search);
    const updated: CampaignAttribution = { ...existing };

    let hasNewParam = false;
    for (const key of TRACKED_QUERY_KEYS) {
      const val = searchParams.get(key);
      if (val && val.trim().length > 0) {
        updated[key] = val.trim().slice(0, 120);
        hasNewParam = true;
      }
    }

    if (!updated.landing_page) {
      updated.landing_page = window.location.pathname;
      hasNewParam = true;
    }

    if (!updated.initial_referrer && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.hostname !== window.location.hostname) {
          updated.initial_referrer = refUrl.hostname;
          hasNewParam = true;
        }
      } catch {
        // Ignore malformed referrer
      }
    }

    if (hasNewParam) {
      window.sessionStorage.setItem(
        ATTRIBUTION_STORAGE_KEY,
        JSON.stringify(updated)
      );
    }

    return updated;
  } catch {
    return {};
  }
}

export function getStoredAttribution(): CampaignAttribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function createEventId(prefix: string): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

// Normalize legacy event aliases to canonical GA4 / Master Prompt event names
function normalizeEventName(eventName: AnalyticsEventName): string {
  if (eventName === 'whatsapp_click') return 'click_whatsapp';
  if (eventName === 'phone_click') return 'click_phone';
  return eventName;
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === 'undefined') return;

  const canonicalEvent = normalizeEventName(eventName);
  const attribution = getStoredAttribution();
  const eventId = createEventId(canonicalEvent);

  const enrichedParams: Record<string, unknown> = {
    page_path: window.location.pathname,
    ...attribution,
    ...params,
    event_id: eventId,
  };

  // 1. Push to GTM dataLayer if present
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: canonicalEvent,
      ...enrichedParams,
    });
  }

  // 2. Send to GA4 / Google Tag (gtag)
  if (typeof window.gtag === 'function') {
    window.gtag('event', canonicalEvent, enrichedParams);

    // Optional Google Ads conversion dispatch when configured via env vars
    const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const waLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_WA_CONVERSION_LABEL;
    const phoneLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CONVERSION_LABEL;

    if (
      googleAdsId &&
      waLabel &&
      (canonicalEvent === 'click_whatsapp' || canonicalEvent === 'generate_lead')
    ) {
      window.gtag('event', 'conversion', {
        send_to: `${googleAdsId}/${waLabel}`,
        transaction_id: eventId,
      });
    } else if (googleAdsId && phoneLabel && canonicalEvent === 'click_phone') {
      window.gtag('event', 'conversion', {
        send_to: `${googleAdsId}/${phoneLabel}`,
        transaction_id: eventId,
      });
    }
  }

  // 3. Send to Meta Pixel (fbq) with eventID for CAPI deduplication readiness
  if (typeof window.fbq === 'function') {
    if (canonicalEvent === 'click_whatsapp' || canonicalEvent === 'click_phone') {
      window.fbq(
        'track',
        'Contact',
        {
          content_name: String(params.cta_location || params.source || canonicalEvent),
          content_category: String(params.category || 'general'),
          page_path: window.location.pathname,
        },
        { eventID: eventId }
      );
    } else if (canonicalEvent === 'generate_lead') {
      window.fbq(
        'track',
        'Lead',
        {
          content_name: 'whatsapp_composer_lead',
          content_category: String(params.category || 'general'),
          region: String(params.region || ''),
          page_path: window.location.pathname,
        },
        { eventID: eventId }
      );
    }
  }

  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics] ${canonicalEvent}:`, enrichedParams);
  }
}
