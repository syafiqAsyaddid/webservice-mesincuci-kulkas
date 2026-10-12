import { FAQItem } from '@/types';

export const faqData: FAQItem[] = [
  {
    id: 'faq-cara-pesan',
    question: 'Bagaimana alur pemesanan jasa service panggilan?',
    answer: 'Cukup klik tombol WhatsApp, lalu jelaskan jenis perangkat (kulkas atau mesin cuci), kendala yang dialami, dan alamat lengkap Anda. Tim kami akan mengonfirmasi estimasi jadwal kedatangan teknisi.',
    category: 'umum',
  },
  {
    id: 'faq-biaya-cek',
    question: 'Apakah ada biaya pengecekan jika batal diperbaiki?',
    answer: 'Jika teknisi telah tiba dan melakukan pembongkaran pemeriksaan namun perbaikan dibatalkan oleh pelanggan, hanya dikenakan biaya transportasi dan pengecekan standar (dikonfirmasi di awal chat sebelum kunjungan).',
    category: 'biaya',
  },
  {
    id: 'faq-garansi',
    question: 'Apakah perbaikan mendapatkan garansi?',
    answer: 'Garansi diberikan untuk perbaikan atau penggantian suku cadang tertentu dengan masa garansi 14 hingga 30 hari tergantung jenis komponen yang diganti. Syarat garansi dijelaskan saat nota pekerjaan diberikan.',
    category: 'umum',
  },
  {
    id: 'faq-merek',
    question: 'Merek apa saja yang dapat ditangani?',
    answer: 'Kami menangani sebagian besar merek umum di Indonesia seperti Sharp, Panasonic, LG, Samsung, Polytron, Aqua, Electrolux, Toshiba, dan Sanken, baik model standar maupun inverter.',
    category: 'kulkas',
  },
  {
    id: 'faq-area',
    question: 'Wilayah mana saja yang dilayani?',
    answer: 'Area utama mencakup Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Ketersediaan teknisi pada hari yang sama bergantung pada rute jadwal harian di masing-masing kota.',
    category: 'wilayah',
  },
];
