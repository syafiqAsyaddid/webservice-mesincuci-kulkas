import { ApplianceCategory } from '@/types';

export interface DetailedCostRule {
  id: string;
  category: ApplianceCategory;
  applianceSubtype: string; // e.g. "Semua Tipe", "1 Pintu", "2 Pintu", "Inverter", "Top Loading", "Front Loading"
  issueName: string;
  minPrice: number;
  maxPrice: number;
  unit: string;
  isInspectionDependent: boolean;
  includedDescription: string;
  note: string;
}

export const applianceSubtypes = {
  kulkas: ['Kulkas 1 Pintu', 'Kulkas 2 Pintu', 'Kulkas Inverter / Side-by-Side'],
  'mesin-cuci': ['Mesin Cuci 2 Tabung', 'Mesin Cuci Top Loading (1 Tabung)', 'Mesin Cuci Front Loading'],
};

export const detailedCostRules: DetailedCostRule[] = [
  // Kulkas
  {
    id: 'kulkas-tambah-freon-1p',
    category: 'kulkas',
    applianceSubtype: 'Kulkas 1 Pintu',
    issueName: 'Pengisian / Tambah Freon (R134a)',
    minPrice: 180000,
    maxPrice: 280000,
    unit: 'termasuk jasa pengisian',
    isInspectionDependent: true,
    includedDescription: 'Jasa pengisian freon standar R134a dan pengetesan dingin pipa evaporator.',
    note: 'Belum termasuk biaya perbaikan jika ditemukan titik las pipa bocor atau mampet.',
  },
  {
    id: 'kulkas-tambah-freon-2p',
    category: 'kulkas',
    applianceSubtype: 'Kulkas 2 Pintu',
    issueName: 'Pengisian Freon & Vakum Sistem (R134a / R600a)',
    minPrice: 250000,
    maxPrice: 380000,
    unit: 'termasuk vakum & filter dryer',
    isInspectionDependent: true,
    includedDescription: 'Flushing sirkulasi, penggantian filter dryer baru, pemvakuman, dan pengisian freon.',
    note: 'Kulkas dengan freon R600a memerlukan prosedur keamanan khusus pada kompresor.',
  },
  {
    id: 'kulkas-sensor-defrost',
    category: 'kulkas',
    applianceSubtype: 'Kulkas 2 Pintu',
    issueName: 'Penggantian Sensor Bimetal / Fuse Defrost / Timer',
    minPrice: 150000,
    maxPrice: 280000,
    unit: 'per unit suku cadang + jasa',
    isInspectionDependent: true,
    includedDescription: 'Pemeriksaan jalur heater, penggantian bimetal/fuse, dan pengetesan siklus cair es.',
    note: 'Gejala umum: freezer membeku normal namun ruangan bawah tidak dingin.',
  },
  {
    id: 'kulkas-kipas-fan',
    category: 'kulkas',
    applianceSubtype: 'Kulkas 2 Pintu',
    issueName: 'Perbaikan / Penggantian Dinamo Kipas (Fan Motor)',
    minPrice: 180000,
    maxPrice: 320000,
    unit: 'termasuk motor fan baru',
    isInspectionDependent: true,
    includedDescription: 'Pemasangan dinamo kipas evaporator baru dan perapihan jalur kabel peniup udara dingin.',
    note: 'Penyebab umum suara dengung kasar di dalam kabinet freezer.',
  },
  {
    id: 'kulkas-kompresor-standar',
    category: 'kulkas',
    applianceSubtype: 'Kulkas 1 Pintu',
    issueName: 'Ganti Kompresor Baru / Rekondisi Bergaransi',
    minPrice: 750000,
    maxPrice: 1200000,
    unit: 'tergantung kapasitas kompresor',
    isInspectionDependent: true,
    includedDescription: 'Kompresor, pengelasan pipa, oli kompresor baru, filter dryer, dan freon lengkap.',
    note: 'Pemeriksaan fisik ampere dan resistensi gulungan wajib dilakukan terlebih dahulu.',
  },
  {
    id: 'kulkas-modul-inverter',
    category: 'kulkas',
    applianceSubtype: 'Kulkas Inverter / Side-by-Side',
    issueName: 'Perbaikan Modul Inverter PCB',
    minPrice: 400000,
    maxPrice: 850000,
    unit: 'tergantung tingkat kerusakan komponen PCB',
    isInspectionDependent: true,
    includedDescription: 'Analisis kode error kedipan LED inverter, penggantian transistor IPM/kapasitor regulator.',
    note: 'Modul inverter memerlukan tes sinyal komunikasi data dengan kompresor.',
  },

  // Mesin Cuci
  {
    id: 'mc-vbelt-2tabung',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci 2 Tabung',
    issueName: 'Penggantian Tali Kipas / V-Belt Dinamo',
    minPrice: 120000,
    maxPrice: 190000,
    unit: 'termasuk v-belt baru & pasang',
    isInspectionDependent: true,
    includedDescription: 'Pemasangan sabuk transmisi ukuran presisi dan penyetelan ketegangan puli dinamo.',
    note: 'Solusi untuk tabung pencuci yang mendengung namun tidak mau berputar membawa pakaian.',
  },
  {
    id: 'mc-kapasitor-motor',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci 2 Tabung',
    issueName: 'Penggantian Kapasitor Starter Dinamo',
    minPrice: 140000,
    maxPrice: 240000,
    unit: 'kapasitor ganda original',
    isInspectionDependent: true,
    includedDescription: 'Pengukuran nilai mikrofarad dan pemasangan kapasitor baru tahan panas.',
    note: 'Mengatasi putaran mesin cuci yang lambat atau harus dibantu putar dengan tangan.',
  },
  {
    id: 'mc-drain-valve-top',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci Top Loading (1 Tabung)',
    issueName: 'Perbaikan Katup / Saluran Pembuangan Air (Drain Valve)',
    minPrice: 160000,
    maxPrice: 280000,
    unit: 'pembersihan & seal katup baru',
    isInspectionDependent: true,
    includedDescription: 'Pembongkaran sumbatan kotoran/koin dan penggantian seal karet pegas pembuangan.',
    note: 'Mengatasi air yang terus keluar saat diisi atau air tidak mau terbuang saat siklus peras.',
  },
  {
    id: 'mc-water-inlet-top',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci Top Loading (1 Tabung)',
    issueName: 'Penggantian Water Inlet Valve Solenoid',
    minPrice: 180000,
    maxPrice: 320000,
    unit: 'termasuk solenoid valve baru',
    isInspectionDependent: true,
    includedDescription: 'Pemasangan katup buka-tutup air otomatis dan pengujian sensor level ketinggian air.',
    note: 'Untuk masalah air kran tidak mau masuk ke tabung meskipun air toren mengalir deras.',
  },
  {
    id: 'mc-drain-pump-front',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci Front Loading',
    issueName: 'Penggantian Motor Pompa Pembuangan (Drain Pump)',
    minPrice: 280000,
    maxPrice: 480000,
    unit: 'unit pompa drain baru',
    isInspectionDependent: true,
    includedDescription: 'Penggantian motor pompa elektrik dan pembersihan ruang saringan serat (lint filter).',
    note: 'Mengatasi kode error drain (OE/E20/E03) pada mesin cuci bukaan depan.',
  },
  {
    id: 'mc-door-lock-front',
    category: 'mesin-cuci',
    applianceSubtype: 'Mesin Cuci Front Loading',
    issueName: 'Penggantian Kunci Pintu Otomatis (Door Lock Switch)',
    minPrice: 220000,
    maxPrice: 380000,
    unit: 'saklar switch pengunci baru',
    isInspectionDependent: true,
    includedDescription: 'Pemasangan sensor door lock elektrik dan pengujian siklus kunci pengaman sebelum start.',
    note: 'Untuk pintu mesin cuci yang tidak mau mengunci sehingga program cuci tidak mau berputar.',
  },
];
