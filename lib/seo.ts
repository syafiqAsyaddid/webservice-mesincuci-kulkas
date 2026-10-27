import type { Metadata } from 'next';
import { businessInfo } from '@/lib/content/business';
import { regionsData } from '@/lib/content/regions';
import { FAQItem } from '@/types';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://servicekulkas-mesincuci.id'
).replace(/\/+$/, '');

export const DEFAULT_OG_IMAGE = '/images/kulkas-manifold-kompresor.jpg';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = `${businessInfo.name} - Service Kulkas dan Mesin Cuci Panggilan`,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${businessInfo.name}`,
      description,
      url: canonicalUrl,
      siteName: businessInfo.name,
      locale: 'id_ID',
      type: 'website',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 900,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${businessInfo.name}`,
      description,
      images: [ogImageUrl],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: businessInfo.name,
    description:
      'Layanan teknisi panggilan untuk pemeriksaan dan perbaikan kulkas (1 pintu, 2 pintu, side-by-side, freezer, showcase, chiller) serta mesin cuci (front loading, top loading, 2 tabung, dryer), termasuk tukar tambah unit baru dan bekas di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    url: SITE_URL,
    telephone: `+${businessInfo.whatsappNumber}`,
    image: [
      `${SITE_URL}/images/kulkas-manifold-kompresor.jpg`,
      `${SITE_URL}/images/mesincuci-bongkar-unit.jpg`,
      `${SITE_URL}/images/kulkas-cek-jalur-belakang.jpg`,
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jln. Antara no 371, Pondok Gede',
      addressLocality: 'Kota Bekasi',
      addressRegion: 'Jawa Barat',
      addressCountry: 'ID',
    },
    areaServed: regionsData.map((r) => ({
      '@type': 'AdministrativeArea',
      name: r.name,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: `+${businessInfo.whatsappNumber}`,
        contactType: 'customer service',
        areaServed: 'ID',
        availableLanguage: ['Indonesian'],
      },
    ],
  };
}

export interface BreadcrumbSchemaItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbSchemaItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => {
      const cleanPath = item.path.startsWith('/') ? item.path : `/${item.path}`;
      const itemUrl = cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`;
      return {
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

interface ServiceJsonLdOptions {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaNames?: string[];
  image?: string;
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType,
  areaNames,
  image = DEFAULT_OG_IMAGE,
}: ServiceJsonLdOptions) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const serviceUrl = cleanPath === '/' ? SITE_URL : `${SITE_URL}${cleanPath}`;
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: serviceUrl,
    serviceType,
    image: imageUrl,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      '@id': `${SITE_URL}/#localbusiness`,
      name: businessInfo.name,
      telephone: `+${businessInfo.whatsappNumber}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jln. Antara no 371, Pondok Gede',
        addressLocality: 'Kota Bekasi',
        addressRegion: 'Jawa Barat',
        addressCountry: 'ID',
      },
    },
    areaServed: (areaNames || regionsData.map((r) => r.name)).map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
  };
}

export function buildFaqJsonLd(faqs: Pick<FAQItem, 'question' | 'answer'>[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
