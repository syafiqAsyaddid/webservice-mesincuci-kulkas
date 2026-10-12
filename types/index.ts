export type ApplianceCategory = 'kulkas' | 'mesin-cuci';

export interface BusinessConfig {
  name: string;
  tagline: string;
  whatsappNumber: string;
  displayPhone: string;
  operatingHours: string;
  coverageSummary: string;
  addressPlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  category: ApplianceCategory;
  name: string;
  shortDescription: string;
  symptoms: string[];
  ctaText: string;
}

export interface IssueDetail {
  slug: string;
  category: ApplianceCategory;
  title: string;
  symptomSummary: string;
  remoteDiagnosisLimits: string;
  availableAssistance: string[];
  serviceAreaSummary: string;
  relatedFaqIds: string[];
}

export interface RegionArea {
  slug: string;
  name: string;
  type: 'kota' | 'kabupaten';
  province: string;
  isCovered: boolean;
  coverageNote: string;
  subDistricts: string[];
  localOperationalNote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'kulkas' | 'mesin-cuci' | 'biaya' | 'wilayah';
}

export interface TestimonialItem {
  id: string;
  customerInitials: string;
  location: string;
  appliance: 'Kulkas' | 'Mesin Cuci';
  problemSolved: string;
  reviewText: string;
  date: string;
  hasConsent: boolean;
}

export interface CostRule {
  id: string;
  category: ApplianceCategory;
  issueName: string;
  minPrice: number;
  maxPrice: number;
  unit: string;
  isInspectionDependent: boolean;
  note: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
}
