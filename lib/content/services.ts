import { ServiceItem, IssueDetail } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-kulkas',
    slug: 'service-kulkas',
    category: 'kulkas',
    name: 'Service Kulkas, Freezer & Showcase',
    shortDescription:
      'Penanganan perbaikan dan perawatan kulkas 1 pintu, 2 pintu, side-by-side, freezer box/standing, showcase pendingin minuman, dan chiller komersial maupun rumah tangga.',
    symptoms: [
      'Kulkas, freezer, atau showcase tidak dingin sama sekali',
      'Bagian freezer beku tetapi chiller bawah tidak dingin',
      'Kulkas mati total atau korslet saat dinyalakan',
      'Kebocoran air di bawah atau di dalam kabinet pendingin',
      'Kompresor berdengung keras, panas abnormal, atau sering mati-hidup',
    ],
    ctaText: 'Pesan Teknisi Pendingin',
    imagePath: '/images/kulkas-manifold-kompresor.jpg',
    galleryImages: [
      {
        src: '/images/kulkas-manifold-kompresor.jpg',
        alt: 'Pengukuran tekanan freon pada kompresor kulkas menggunakan manifold gauge',
        caption: 'Pengukuran tekanan kerja kompresor & sirkuit freon dengan manifold gauge',
      },
      {
        src: '/images/kulkas-vakum-kompresor.jpg',
        alt: 'Teknisi memeriksa kompresor belakang kulkas dan pompa vakum',
        caption: 'Pengecekan unit kompresor belakang & proses pemvakuman jalur pendingin',
      },
      {
        src: '/images/kulkas-cek-kabinet-dalam.jpg',
        alt: 'Pemeriksaan jalur udara evaporator di ruang dalam kulkas dua pintu',
        caption: 'Inspeksi sirkulasi udara dingin & sensor suhu di dalam kabinet kulkas',
      },
      {
        src: '/images/kulkas-cek-jalur-belakang.jpg',
        alt: 'Pemeriksaan kelistrikan dan pipa kondensor di bagian bawah belakang kulkas',
        caption: 'Pengecekan jalur kelistrikan relay, overload, dan bak penampung belakang',
      },
    ],
  },
  {
    id: 'srv-mesin-cuci',
    slug: 'service-mesin-cuci',
    category: 'mesin-cuci',
    name: 'Service Mesin Cuci Segala Jenis',
    shortDescription:
      'Perbaikan segala jenis mesin cuci: bukaan depan (front loading), bukaan atas (top loading 1 tabung), 2 tabung (twin tub), mesin pengering (dryer), serta mesin cuci komersial/laundry.',
    symptoms: [
      'Tabung tidak mau berputar atau putaran lemah saat mencuci/memeras',
      'Air tidak mau keluar saat proses pengeringan (drain error)',
      'Mesin mati total atau lampu display indikator berkedip error',
      'Air terus mengalir masuk ke tabung tanpa henti',
      'Getaran keras atau bunyi berisik kasar saat proses peras (spin)',
    ],
    ctaText: 'Pesan Teknisi Mesin Cuci',
    imagePath: '/images/mesincuci-bongkar-unit.jpg',
    galleryImages: [
      {
        src: '/images/mesincuci-bongkar-unit.jpg',
        alt: 'Teknisi membongkar bodi mesin cuci front loading di lokasi pelanggan',
        caption: 'Pembongkaran unit mesin cuci langsung di rumah pelanggan untuk cek fisik',
      },
      {
        src: '/images/mesincuci-lepas-casing.jpg',
        alt: 'Pelepasan panel depan mesin cuci bukaan depan untuk akses drum dan karet pintu',
        caption: 'Akses langsung ke tabung dalam, seal karet pintu, dan pompa pembuangan',
      },
      {
        src: '/images/service-mesincuci.jpg',
        alt: 'Pemeriksaan komponen mesin cuci bukaan depan oleh teknisi',
        caption: 'Pengujian putaran motor penggerak dan keseimbangan tabung pencuci',
      },
    ],
  },
];

export interface TradeInServiceInfo {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  supportedAppliances: string[];
}

export const tradeInInfo: TradeInServiceInfo = {
  title: 'Menerima Tukar Tambah Baru & Bekas Kulkas & Mesin Cuci',
  subtitle: 'Terima unit bekas segala kondisi, tukar tambah unit baru & seken siap pakai',
  description:
    'Kami menerima tukar tambah baru dan bekas serta melayani jual beli kulkas (1 pintu, 2 pintu, side-by-side, freezer, showcase, chiller) dan mesin cuci segala jenis. Seluruh unit siap pakai telah melalui uji kelayakan fungsi menyeluruh oleh teknisi kami.',
  benefits: [
    'Menerima tukar tambah unit baru maupun bekas dengan penaksiran terbuka',
    'Tersedia unit baru & seken siap pakai berkualitas yang telah lulus uji teknisi',
    'Pengantaran dan pengambilan unit langsung ke lokasi Anda di Bekasi, Jaktim, Jaksel, dan Depok',
    'Pengecekan dan tes langsung fungsi unit di tempat saat serah terima',
  ],
  supportedAppliances: [
    'Kulkas 1 Pintu & 2 Pintu',
    'Kulkas Side by Side & Inverter',
    'Freezer Box & Freezer Rak',
    'Showcase Minuman & Chiller Ruko',
    'Mesin Cuci Front Loading & Top Loading',
    'Mesin Cuci 2 Tabung & Mesin Pengering (Dryer)',
  ],
};

export const priorityIssues: IssueDetail[] = [
  {
    slug: 'kulkas-tidak-dingin',
    category: 'kulkas',
    title: 'Kulkas Tidak Dingin',
    symptomSummary:
      'Lampu ruang kulkas tetap menyala normal, namun suhu pendingin tidak kunjung turun atau hanya bagian freezer yang membeku.',
    remoteDiagnosisLimits:
      'Gejala kulkas tidak dingin dapat dipicu oleh berkurangnya tekanan freon, kebocoran pipa kapiler, sensor defrost mati, kipas evaporator macet, atau kompresor melemah. Pengecekan fisik secara langsung dengan alat ukur manifold dan multimeter diperlukan sebelum kesimpulan diambil.',
    availableAssistance: [
      'Pengukuran tekanan dan pengujian kebocoran freon',
      'Pemeriksaan bimetal, timer, fuse, dan heater defrost',
      'Pengecekan kipas sirkulasi udara (evaporator fan)',
      'Pemeriksaan relay, overload, dan kondisi ampere kompresor',
    ],
    serviceAreaSummary:
      'Tersedia panggilan teknisi untuk area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok sesuai konfirmasi jadwal.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/kulkas-manifold-kompresor.jpg',
    imageCaption: 'Pengujian tekanan sirkuit refrigeran pada kompresor menggunakan manifold gauge',
    componentFocus: 'Kompresor, Sirkuit Freon & Sistem Defrost',
  },
  {
    slug: 'kulkas-mati-total',
    category: 'kulkas',
    title: 'Kulkas Mati Total',
    symptomSummary:
      'Lampu kabinet tidak menyala dan kompresor tidak mengeluarkan suara getaran kerja sama sekali saat dicolokkan ke sumber listrik.',
    remoteDiagnosisLimits:
      'Masalah mati total bisa bersumber dari instalasi stop kontak rumah, kabel power terputus, fuse termal putus, kerusakan modul PCB utama (pada tipe inverter), atau macetnya kompresor.',
    availableAssistance: [
      'Pengecekan tegangan arus masuk dan sekring pengaman',
      'Pemeriksaan komponen starter PTC relay dan overload protector',
      'Pemeriksaan jalur sirkuit daya pada modul digital PCB',
    ],
    serviceAreaSummary:
      'Layanan panggilan langsung ke rumah atau tempat usaha Anda di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/kulkas-vakum-kompresor.jpg',
    imageCaption: 'Pemeriksaan fisik blok kelistrikan kompresor, relay starter, dan jalur daya utama',
    componentFocus: 'PTC Relay, Overload Protector & Modul PCB',
  },
  {
    slug: 'kulkas-bocor',
    category: 'kulkas',
    title: 'Kulkas Bocor Air',
    symptomSummary:
      'Genangan air terlihat di bagian bawah laci sayur, di bawah pintu kulkas, atau meluap dari wadah penampung belakang kompresor.',
    remoteDiagnosisLimits:
      'Kebocoran air umumnya disebabkan oleh saluran pembuangan defrost (drain tube) yang tersumbat lendir atau bunga es, penampung air belakang yang retak, atau karet pintu yang sudah getas.',
    availableAssistance: [
      'Pembersihan dan pelancaran pipa pembuangan air pemanas (drain line)',
      'Pengecekan dan penggantian karet magnet pintu (gasket)',
      'Pemeriksaan bak penampungan air kondensasi di atas kompresor',
    ],
    serviceAreaSummary:
      'Melayani wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok terkonfirmasi.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/kulkas-cek-jalur-belakang.jpg',
    imageCaption: 'Inspeksi saluran pembuangan air kondensasi dan bak penampung di belakang bawah unit',
    componentFocus: 'Saluran Drain Defrost, Bak Penampung & Gasket Pintu',
  },
  {
    slug: 'kulkas-berisik',
    category: 'kulkas',
    title: 'Kulkas Mengeluarkan Suara Berisik',
    symptomSummary:
      'Terdengar suara dengung keras, getaran bodi, atau suara gesekan bilah kipas yang mengganggu di bagian freezer atau belakang unit.',
    remoteDiagnosisLimits:
      'Bunyi kasar bisa bersumber dari daun kipas evaporator yang bergesekan dengan bunga es tebal, bantalan motor kipas aus, atau karet peredam kompresor yang sudah longgar.',
    availableAssistance: [
      'Pemeriksaan posisi dan bantalan karet kompresor',
      'Pengecekan motor kipas pendingin evaporator dan kondensor',
      'Penataan ulang pipa pendingin agar tidak beradu dengan bodi kulkas',
    ],
    serviceAreaSummary:
      'Kunjungan teknisi panggilan wilayah Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/kulkas-cek-kabinet-dalam.jpg',
    imageCaption: 'Pemeriksaan rumah kipas evaporator di ruang dalam serta dudukan kompresor belakang',
    componentFocus: 'Motor Kipas Evaporator & Dudukan Karet Kompresor',
  },
  {
    slug: 'mesin-cuci-tidak-berputar',
    category: 'mesin-cuci',
    title: 'Mesin Cuci Tidak Berputar',
    symptomSummary:
      'Mesin terdengar mendengung atau waktu pencucian berkurang di display, namun tabung pencuci atau pengering tidak berputar.',
    remoteDiagnosisLimits:
      'Penyebab umum meliputi v-belt putus atau licin, nilai kapasitor motor menurun, switch pengaman pintu tidak terhubung, gigi gearbox aus, atau dinamo terbakar.',
    availableAssistance: [
      'Pemeriksaan tegangan belt pemutar dan puli transmisi',
      'Pengukuran mikrofarad kapasitor motor dinamo',
      'Pengecekan gearbox dan as pemutar tabung',
      'Pemeriksaan sensor door lock switch',
    ],
    serviceAreaSummary:
      'Tersedia untuk area Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/mesincuci-bongkar-unit.jpg',
    imageCaption: 'Pembongkaran kabinet mesin cuci di lokasi untuk memeriksa mekanisme penggerak tabung',
    componentFocus: 'Dinamo Motor, Kapasitor, V-Belt & Gearbox',
  },
  {
    slug: 'mesin-cuci-tidak-membuang-air',
    category: 'mesin-cuci',
    title: 'Mesin Cuci Tidak Membuang Air',
    symptomSummary:
      'Air cucian tertahan di dalam tabung, proses pembilasan terhenti, dan muncul indikator peringatan buang air (kode drain error).',
    remoteDiagnosisLimits:
      'Dapat disebabkan oleh koin atau benda asing yang menyumbat filter koin, tali katup pembuangan putus, atau motor drain pump listrik yang terbakar.',
    availableAssistance: [
      'Pembongkaran dan pembersihan filter katup pembuangan air',
      'Pengujian kumparan dan daya dorong motor pompa buang (drain pump)',
      'Pemeriksaan kabel sinyal pengendali katup dari modul utama',
    ],
    serviceAreaSummary:
      'Melayani perbaikan di tempat di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/mesincuci-lepas-casing.jpg',
    imageCaption: 'Pelepasan panel depan untuk membersihkan sumbatan katup dan menguji pompa pembuangan',
    componentFocus: 'Drain Pump, Filter Koin & Katup Pembuangan',
  },
  {
    slug: 'mesin-cuci-tidak-menyala',
    category: 'mesin-cuci',
    title: 'Mesin Cuci Mati / Tidak Menyala',
    symptomSummary:
      'Tombol power ditekan namun tidak ada indikator lampu atau respon suara dari panel kontrol mesin cuci.',
    remoteDiagnosisLimits:
      'Bisa disebabkan oleh kabel listrik putus akibat gigitan hewan pengerat, noise filter rusak, atau modul PCB elektronik utama mengalami kerusakan komponen regulator.',
    availableAssistance: [
      'Pengecekan jalur suplai daya dan filter frekuensi listrik',
      'Pemeriksaan tegangan keluaran trafo dan regulator modul',
      'Perbaikan atau penggantian komponen modul kontrol',
    ],
    serviceAreaSummary:
      'Teknisi siap datang ke lokasi Anda di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/mesincuci-bongkar-unit.jpg',
    imageCaption: 'Pemeriksaan jalur kabel daya dan blok modul kontrol elektronik pada bagian atas unit',
    componentFocus: 'Modul Kontrol PCB, Noise Filter & Jalur Daya',
  },
  {
    slug: 'mesin-cuci-bocor',
    category: 'mesin-cuci',
    title: 'Mesin Cuci Bocor Air',
    symptomSummary:
      'Air merembes atau mengalir keluar dari bagian bawah mesin cuci selama siklus pengisian atau pencucian berlangsung.',
    remoteDiagnosisLimits:
      'Kebocoran dapat berasal dari selang inlet robek, seal tabung bawah bocor, katup pembuangan tidak menutup rapat akibat kotoran, atau tabung luar pecah.',
    availableAssistance: [
      'Pemeriksaan selang pasokan air (inlet) dan selang pembuangan (outlet)',
      'Pengecekan seal karet poros gearbox dan bellow pintu',
      'Pembersihan katup klep penutup air kotor',
    ],
    serviceAreaSummary:
      'Panggilan teknisi ke rumah atau tempat laundry di Bekasi, Jakarta Timur, Jakarta Selatan, dan Depok.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
    imagePath: '/images/mesincuci-lepas-casing.jpg',
    imageCaption: 'Pemeriksaan karet pintu (bellow seal) dan sambungan selang bawah mesin cuci',
    componentFocus: 'Karet Bellow Pintu, Seal Poros & Selang Pembuangan',
  },
];
