import { businessInfo } from '@/lib/content/business';

export interface WhatsAppMessageParams {
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

  const parts: string[] = [
    `Halo ${businessInfo.name},`,
    '',
    'Silahkan kirim alamat lengkap disini:',
    'Nama: ',
    `Alamat: ${params.region || ''}`,
    `Keluhan: ${params.issue || (params.category ? `Service ${params.category === 'kulkas' ? 'Kulkas' : 'Mesin Cuci'}` : '')}`,
  ];

  const message = parts.join('\n');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
