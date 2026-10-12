import { businessInfo } from '@/lib/content/business';

interface WhatsAppMessageParams {
  category?: 'kulkas' | 'mesin-cuci';
  issue?: string;
  region?: string;
  customText?: string;
}

export function generateWhatsAppUrl(params: WhatsAppMessageParams = {}): string {
  const phone = businessInfo.whatsappNumber;

  if (params.customText) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(params.customText)}`;
  }

  const parts: string[] = ['Halo, saya ingin konsultasi mengenai service peralatan rumah tangga.'];

  if (params.category) {
    const categoryName = params.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci';
    parts.push(`Perangkat: ${categoryName}`);
  }

  if (params.issue) {
    parts.push(`Kendala: ${params.issue}`);
  }

  if (params.region) {
    parts.push(`Lokasi: ${params.region}`);
  }

  parts.push('Apakah teknisi bisa memeriksa ke lokasi saya?');

  const message = parts.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
