import { RegionArea } from '@/types';

export const regionsData: RegionArea[] = [
  {
    slug: 'jakarta',
    name: 'DKI Jakarta',
    type: 'kota',
    province: 'DKI Jakarta',
    isCovered: true,
    coverageNote:
      'Melayani seluruh wilayah kotamadya Jakarta Selatan, Jakarta Timur, Jakarta Barat, Jakarta Pusat, dan Jakarta Utara.',
    subDistricts: [
      'Jakarta Selatan (Kebayoran, Cilandak, Tebet, Pasar Minggu, Jagakarsa, Pancoran)',
      'Jakarta Timur (Duren Sawit, Jatinegara, Pulogadung, Cakung, Kramat Jati)',
      'Jakarta Barat (Kebon Jeruk, Kembangan, Palmerah, Grogol, Cengkareng)',
      'Jakarta Pusat (Menteng, Tanah Abang, Cempaka Putih, Johar Baru, Kemayoran)',
      'Jakarta Utara (Kelapa Gading, Sunter, Tanjung Priok, Koja)',
    ],
    localOperationalNote:
      'Untuk area Jakarta, teknisi kami beroperasi setiap hari kerja dengan beberapa tim mobile yang terbagi per wilayah kotamadya sehingga waktu respons kedatangan relatif lebih fleksibel.',
  },
  {
    slug: 'depok',
    name: 'Kota Depok',
    type: 'kota',
    province: 'Jawa Barat',
    isCovered: true,
    coverageNote:
      'Melayani perumahan, kos, dan ruko di area Margonda, Beji, Cimanggis, Sukmajaya, Pancoran Mas, Cinere, hingga Sawangan.',
    subDistricts: [
      'Beji & Margonda Raya',
      'Cimanggis & Harjamukti',
      'Sukmajaya & Grand Depok City (GDC)',
      'Pancoran Mas & Sawangan',
      'Cinere & Limo',
      'Tapos & Cilodong',
    ],
    localOperationalNote:
      'Banyak melayani hunian kos mahasiswa serta perumahan kluster. Kunjungan pada akhir pekan disarankan membuat janji temu 1 hari sebelumnya.',
  },
  {
    slug: 'tangerang',
    name: 'Tangerang & Tangsel',
    type: 'kota',
    province: 'Banten',
    isCovered: true,
    coverageNote:
      'Mencakup Kota Tangerang, Tangerang Selatan (BSD City, Bintaro Jaya, Ciputat, Pamulang, Serpong), serta Karawaci.',
    subDistricts: [
      'Tangerang Selatan (BSD, Serpong, Serpong Utara)',
      'Bintaro, Pondok Aren & Ciputat',
      'Pamulang & Ciputat Timur',
      'Kota Tangerang (Cipondoh, Ciledug, Karang Tengah, Pinang)',
      'Karawaci & Kelapa Dua',
    ],
    localOperationalNote:
      'Rute teknisi melayani area perumahan kluster dan apartemen di Tangsel dan Tangerang Kota. Teknisi terbiasa dengan prosedur izin kerja teknisi di lingkungan perumahan bertingkat / apartemen.',
  },
  {
    slug: 'bekasi',
    name: 'Kota & Kab. Bekasi',
    type: 'kota',
    province: 'Jawa Barat',
    isCovered: true,
    coverageNote:
      'Melayani Kota Bekasi (Barat, Timur, Selatan, Utara, Pondok Gede, Jatiasih) serta sebagian wilayah Tambun dan Cibitung sesuai rute harian.',
    subDistricts: [
      'Bekasi Barat (Kranji, Kota Bintang)',
      'Bekasi Selatan (Galaxy, Pekayon)',
      'Bekasi Timur & Rawalumbu',
      'Bekasi Utara & Summarecon Bekasi',
      'Pondok Gede & Jatiasih',
      'Tambun Selatan (dengan konfirmasi rute)',
    ],
    localOperationalNote:
      'Khusus area Bekasi pinggiran atau Kabupaten (seperti Tambun/Cikarang), konfirmasi alamat spesifik di awal chat WhatsApp agar jadwal kunjungan disinkronkan dengan rute hari yang sama.',
  },
  {
    slug: 'bogor',
    name: 'Kota Bogor & Sekitarnya',
    type: 'kota',
    province: 'Jawa Barat',
    isCovered: true,
    coverageNote:
      'Melayani area Kota Bogor serta wilayah penyangga seperti Cibinong, Bojong Gede, dan Cilebut.',
    subDistricts: [
      'Bogor Kota (Bogor Tengah, Bogor Timur, Bogor Barat, Bogor Selatan)',
      'Cibinong & Karadenan',
      'Bojong Gede & Cilebut',
      'Sukaraja & Tanah Sareal',
    ],
    localOperationalNote:
      'Kunjungan di area Bogor dan Cibinong diatur dengan slot waktu tertentu pada pagi atau siang hari untuk mengantisipasi kondisi cuaca hujan lokal pada sore hari.',
  },
];
