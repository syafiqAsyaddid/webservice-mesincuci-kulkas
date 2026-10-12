import { ServiceItem, IssueDetail } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'srv-kulkas',
    slug: 'service-kulkas',
    category: 'kulkas',
    name: 'Service Kulkas',
    shortDescription:
      'Penanganan perbaikan kulkas 1 pintu, 2 pintu, side-by-side, dan inverter untuk kebutuhan rumah maupun usaha.',
    symptoms: [
      'Kulkas tidak dingin sama sekali',
      'Bagian freezer beku tetapi chiller bawah tidak dingin',
      'Kulkas mati total atau korslet saat dinyalakan',
      'Kebocoran air di bawah atau di dalam kabinet',
      'Kompresor berdengung keras atau sering mati hidup',
    ],
    ctaText: 'Konsultasi Kerusakan Kulkas',
    imagePath: '/images/service-kulkas.jpg',
  },
  {
    id: 'srv-mesin-cuci',
    slug: 'service-mesin-cuci',
    category: 'mesin-cuci',
    name: 'Service Mesin Cuci',
    shortDescription:
      'Perbaikan mesin cuci bukaan atas (top loading), bukaan depan (front loading), dan 2 tabung oleh teknisi panggilan.',
    symptoms: [
      'Tabung tidak mau berputar atau putaran lemah saat mencuci/memeras',
      'Air tidak mau keluar saat proses pengeringan (drain error)',
      'Mesin mati total atau lampu display berkedip error',
      'Air terus masuk ke tabung tanpa henti',
      'Getaran atau bunyi berisik keras saat proses peras (spin)',
    ],
    ctaText: 'Konsultasi Kerusakan Mesin Cuci',
    imagePath: '/images/service-mesincuci.jpg',
  },
];

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
      'Tersedia panggilan teknisi untuk area Jakarta, Bogor, Depok, Tangerang, dan Bekasi sesuai konfirmasi jadwal.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan', 'faq-garansi'],
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
      'Layanan panggilan langsung ke rumah atau tempat usaha Anda di Jabodetabek.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
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
      'Melayani seluruh wilayah Jabodetabek terkonfirmasi.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
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
      'Kunjungan teknisi panggilan wilayah Jabodetabek.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
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
      'Tersedia untuk area Jakarta, Bogor, Depok, Tangerang, dan Bekasi.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan', 'faq-garansi'],
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
      'Melayani perbaikan di tempat di seluruh Jabodetabek terkonfirmasi.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
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
      'Teknisi siap datang ke lokasi dengan janji temu.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
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
      'Panggilan teknisi ke rumah atau tempat laundry di Jabodetabek.',
    relatedFaqIds: ['faq-biaya-cek', 'faq-cara-pesan'],
  },
];
