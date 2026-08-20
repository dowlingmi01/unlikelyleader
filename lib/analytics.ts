export type AnalyticsEvent =
  | 'email_subscribe'
  | 'contact_submit'
  | 'lap_start'
  | 'book_click'
  | 'keynote_cta'
  | 'email_click';

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, string | number | boolean> }
    ) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/** Fire a conversion / engagement event to Plausible and/or GA4 when configured. */
export function trackEvent(
  name: AnalyticsEvent,
  props?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  try {
    window.plausible?.(name, props ? { props } : undefined);
  } catch {
    // ignore analytics errors
  }

  try {
    window.gtag?.('event', name, props);
  } catch {
    // ignore analytics errors
  }
}
