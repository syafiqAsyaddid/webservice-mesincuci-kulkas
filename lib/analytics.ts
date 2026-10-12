declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'set' | 'js',
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'phone_click'
  | 'cost_estimator_start'
  | 'cost_estimator_complete'
  | 'service_area_click'
  | 'faq_open';

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === 'undefined') return;

  // Safe invocation of Google Analytics / Google Ads gtag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }

  // Developer mode logging
  if (process.env.NODE_ENV === 'development') {
    console.debug(`[Analytics Event] ${eventName}:`, params);
  }
}
