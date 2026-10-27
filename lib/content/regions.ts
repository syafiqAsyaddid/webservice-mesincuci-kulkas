import { RegionArea } from '@/types';

export const regionsData: RegionArea[] = [
  {
    slug: 'bekasi',
    name: 'Kota & Kab. Bekasi',
    type: 'kota',
    province: 'Jawa Barat',
    isCovered: true,
    coverageNote:
      'Pusat workshop utama kami berlokasi di Pondok Gede, Kota Bekasi. Berada di posisi strategis perbatasan Bekasi dan Jakarta, melayani seluruh area Kota dan Kabupaten Bekasi secara cepat dan fleksibel.',
    subDistricts: [
      'Pondok Gede & Jatiwaringin',
      'Jatiasih & Jatisampurna',
      'Bekasi Barat (Kranji, Kota Bintang)',
      'Bekasi Selatan (Galaxy, Pekayon)',
      'Bekasi Timur & Rawalumbu',
      'Bekasi Utara & Summarecon Bekasi',
      'Tambun & Cibitung',
      'Mustika Jaya & Bantar Gebang',
    ],
    localOperationalNote:
      'Pusat workshop teknisi kami. Kunjungan di area Bekasi dapat dijadwalkan lebih cepat dengan ketersediaan suku cadang terlengkap langsung dari bengkel.',
  },
  {
    slug: 'jakarta-timur',
    name: 'Jakarta Timur',
    type: 'kota',
    province: 'DKI Jakarta',
    isCovered: true,
    coverageNote:
      'Melayani panggilan service teknisi ke seluruh perumahan dan tempat usaha di wilayah Jakarta Timur dengan akses rute langsung dari koridor Kalimalang & BKT.',
    subDistricts: [
      'Duren Sawit & Pondok Kelapa',
      'Jatinegara & Rawamangun',
      'Pulogadung & Kayu Putih',
      'Cakung & Penggilingan',
      'Kramat Jati & Cililitan',
      'Ciracas & Cipayung',
      'Pasar Rebo & Kampung Rambutan',
      'Matraman & Utan Kayu',
      'Makasar & Halim Perdanakusuma',
    ],
    localOperationalNote:
      'Rute kunjungan rutin harian teknisi. Konfirmasi alamat lengkap via WhatsApp untuk disesuaikan dengan rute terdekat teknisi mobile kami.',
  },
  {
    slug: 'jakarta-selatan',
    name: 'Jakarta Selatan',
    type: 'kota',
    province: 'DKI Jakarta',
    isCovered: true,
    coverageNote:
      'Melayani perumahan, kluster, apartemen, kos, dan tempat usaha di seluruh area Jakarta Selatan dengan standar pengecekan transparan.',
    subDistricts: [
      'Tebet & Manggarai',
      'Pancoran & Kalibata',
      'Pasar Minggu & Pejaten',
      'Mampang Prapatan & Kemang',
      'Kebayoran Baru & Senopati',
      'Kebayoran Lama & Gandaria',
      'Cilandak & Fatmawati',
      'Jagakarsa & Lenteng Agung',
      'Pesanggrahan & Bintaro Jaksel',
      'Setiabudi & Kuningan',
    ],
    localOperationalNote:
      'Teknisi kami terbiasa melayani prosedur izin kunjungan teknisi di gedung apartemen, perumahan kluster, maupun rumah tinggal di area Jaksel.',
  },
  {
    slug: 'depok',
    name: 'Kota Depok',
    type: 'kota',
    province: 'Jawa Barat',
    isCovered: true,
    coverageNote:
      'Melayani panggilan perbaikan kulkas dan mesin cuci untuk area perumahan kluster, kos mahasiswa, ruko, dan tempat usaha di Kota Depok.',
    subDistricts: [
      'Beji & Margonda Raya',
      'Cimanggis & Harjamukti',
      'Sukmajaya & Grand Depok City (GDC)',
      'Pancoran Mas & Sawangan',
      'Cinere & Limo',
      'Tapos & Cilodong',
      'Bojongsari & Bedahan',
    ],
    localOperationalNote:
      'Jadwal panggilan melayani hunian kos, ruko laundry, serta perumahan. Disarankan mengonfirmasi jadwal 1 hari sebelumnya untuk slot akhir pekan.',
  },
];
