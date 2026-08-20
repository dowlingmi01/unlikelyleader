import type { ReactNode } from 'react';
import { trackEvent } from '../lib/analytics';
import { CONTACT_EMAIL, mailtoUrl } from '../lib/site';

type EmailLinkProps = {
  subject?: string;
  body?: string;
  location: string;
  className?: string;
  children?: ReactNode;
  /** When true, show the raw email address as the label. */
  showAddress?: boolean;
};

export default function EmailLink({
  subject,
  body,
  location,
  className = '',
  children,
  showAddress = false,
}: EmailLinkProps) {
  return (
    <a
      href={mailtoUrl({ subject, body })}
      className={className}
      onClick={() => trackEvent('email_click', { location })}
    >
      {children ?? (showAddress ? CONTACT_EMAIL : 'Email Michael')}
    </a>
  );
}
