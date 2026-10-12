# Product Requirements Document (PRD)
## Website Jasa Service Kulkas dan Mesin Cuci Jabodetabek

**Versi:** 1.0  
**Tanggal:** 12 Oktober 2026  
**Status:** Draft untuk validasi  
**Jenis proyek:** Website pemasaran dan pengumpulan calon pelanggan (lead generation)

---

## 1. Ringkasan Proyek

Proyek ini membangun website baru untuk layanan perbaikan/service kulkas dan mesin cuci di wilayah Jabodetabek. Website memakai identitas merek, domain, desain, struktur halaman, dan hosting sendiri. Website terinspirasi oleh pola informasi dari website referensi, tetapi tidak menyalin identitas merek, teks, foto, atau aset pihak lain tanpa izin.

Tujuan utamanya adalah membantu calon pelanggan memahami layanan, jenis kerusakan, area layanan, dan perkiraan biaya, lalu menghubungi penyedia jasa melalui WhatsApp.

Promosi direncanakan melalui:
1. **SEO (Search Engine Optimization):** agar halaman berpeluang ditemukan melalui hasil pencarian organik.
2. **Google Ads:** iklan berbayar untuk menjangkau orang yang mencari jasa service kulkas maupun mesin cuci.

**Catatan istilah:** kebutuhan proyek adalah mengiklankan website di Google, sehingga layanan yang relevan adalah Google Ads—bukan Google AdSense. AdSense digunakan untuk menampilkan iklan pihak lain di dalam website dan tidak termasuk dalam ruang lingkup proyek ini.

## 2. Latar Belakang dan Masalah

Calon pelanggan yang kulkas atau mesin cucinya bermasalah biasanya ingin segera mengetahui:
- Apakah penyedia jasa melayani wilayah mereka?
- Apakah jenis kerusakan kulkas atau mesin cuci mereka dapat ditangani?
- Bagaimana cara menghubungi teknisi?
- Berapa kisaran biaya dan apakah ada biaya pemeriksaan?
- Apa yang membuat layanan ini dapat dipercaya?

Website harus menjawab pertanyaan tersebut dengan jelas, tanpa membuat klaim layanan, harga, garansi, atau ketersediaan teknisi yang belum dikonfirmasi.

## 3. Tujuan Produk

### 3.1 Tujuan utama
- Menghasilkan pertanyaan dan prospek pelanggan melalui WhatsApp.
- Menjelaskan jenis layanan, cakupan wilayah, dan alur pemesanan secara transparan.
- Menyediakan estimasi biaya berdasarkan aturan harga yang telah disetujui pemilik usaha.
- Menjadi fondasi pemasaran organik dan iklan Google Ads.

### 3.2 Indikator keberhasilan (KPI)
KPI yang akan dipantau:
- Jumlah klik tombol WhatsApp.
- Jumlah pertanyaan yang relevan/qualified leads.
- Rasio pengunjung yang menghubungi WhatsApp.
- Biaya per prospek dari Google Ads.
- Klik, impresi, CTR, dan CPC iklan.
- Trafik organik dan halaman yang paling banyak mendatangkan prospek.
- Kinerja halaman, terutama Core Web Vitals.

Target angka ditentukan setelah tersedia data awal, anggaran iklan, dan kapasitas operasional. Klik WhatsApp tidak otomatis berarti prospek berkualitas atau transaksi.

## 4. Target Pengguna

### 4.1 Pengguna utama
Pemilik rumah, penghuni kos/apartemen, keluarga, atau pelaku usaha kecil yang membutuhkan layanan perbaikan kulkas atau mesin cuci di Jabodetabek.

### 4.2 Kebutuhan pengguna
- Menemukan layanan dengan cepat melalui ponsel.
- Memastikan wilayahnya dilayani.
- Memahami jenis kerusakan yang dapat ditangani.
- Mendapat gambaran biaya sebelum menghubungi teknisi.
- Menghubungi bisnis melalui WhatsApp tanpa mengisi formulir panjang.

## 5. Ruang Lingkup

### 5.1 Termasuk dalam MVP
- Website responsif dengan identitas merek baru.
- Halaman utama dan ringkasan layanan.
- Daftar layanan dan jenis kerusakan kulkas serta mesin cuci.
- Halaman detail untuk jenis kerusakan prioritas kedua perangkat.
- Halaman area layanan.
- Tombol WhatsApp dengan pesan awal yang relevan.
- Kalkulator/estimasi biaya sederhana berdasarkan aturan harga yang sudah disetujui.
- FAQ.
- Testimoni asli yang penggunaannya telah mendapat izin.
- Informasi tentang bisnis, kontak, kebijakan privasi, dan ketentuan.
- SEO teknis dasar.
- Analytics untuk mengukur interaksi dan konversi.
- Kesiapan teknis untuk pemasangan Google Ads dan pelacakan konversi.

### 5.2 Tidak termasuk dalam MVP
- Aplikasi Android/iOS.
- Login akun pelanggan atau riwayat pesanan.
- Pembayaran online.
- Kalender pemesanan atau penjadwalan teknisi otomatis.
- Marketplace teknisi.
- Dashboard/admin CMS.
- Database pelanggan.
- Penayangan iklan pihak ketiga menggunakan Google AdSense.

## 6. Sitemap dan Struktur URL

Struktur awal yang disarankan:

- `/` — Beranda
- `/layanan/` — Ringkasan layanan
- `/kerusakan/kulkas-tidak-dingin/` — Kulkas tidak dingin
- `/kerusakan/kulkas-mati-total/` — Kulkas mati total
- `/kerusakan/kulkas-bocor/` — Kulkas bocor, jika layanan tersedia
- `/kerusakan/kulkas-berisik/` — Kulkas berisik, jika layanan tersedia
- `/layanan/mesin-cuci/` — Layanan service mesin cuci
- `/kerusakan/mesin-cuci-tidak-berputar/` — Mesin cuci tidak berputar, jika layanan tersedia
- `/kerusakan/mesin-cuci-tidak-membuang-air/` — Mesin cuci tidak membuang air, jika layanan tersedia
- `/kerusakan/mesin-cuci-tidak-menyala/` — Mesin cuci tidak menyala, jika layanan tersedia
- `/kerusakan/mesin-cuci-bocor/` — Mesin cuci bocor, jika layanan tersedia
- `/estimasi-biaya/` — Estimasi biaya
- `/wilayah/jakarta/` — Area Jakarta
- `/wilayah/bogor/` — Area Bogor
- `/wilayah/depok/` — Area Depok
- `/wilayah/tangerang/` — Area Tangerang
- `/wilayah/bekasi/` — Area Bekasi
- `/tentang-kami/` — Tentang bisnis
- `/kontak/` — Kontak
- `/kebijakan-privasi/` — Kebijakan privasi
- `/ketentuan/` — Ketentuan layanan

**Catatan:** Halaman kota/kabupaten hanya boleh dipublikasikan jika bisnis benar-benar melayani area tersebut dan kontennya memberi informasi lokal yang berguna. Hindari membuat banyak halaman hampir identik hanya untuk mengejar kata kunci.

## 7. User Stories

| ID | User story | Prioritas |
|---|---|---|
| US01 | Sebagai calon pelanggan, saya ingin memahami layanan dari halaman utama agar tahu apakah bisnis ini sesuai kebutuhan saya. | Must |
| US02 | Saya ingin mencari jenis kerusakan kulkas atau mesin cuci agar cepat menemukan informasi yang relevan. | Must |
| US03 | Saya ingin melihat area layanan agar tahu apakah teknisi dapat datang ke lokasi saya. | Must |
| US04 | Saya ingin menekan tombol WhatsApp dengan pesan awal yang sudah disiapkan agar mudah bertanya. | Must |
| US05 | Saya ingin melihat estimasi biaya berdasarkan informasi yang jelas agar memiliki gambaran awal. | Should |
| US06 | Saya ingin membaca FAQ agar pertanyaan umum terjawab tanpa harus menghubungi bisnis. | Should |
| US07 | Saya ingin melihat testimoni yang autentik agar dapat menilai kepercayaan terhadap layanan. | Should |
| US08 | Pemilik bisnis ingin mengukur klik WhatsApp dan performa iklan agar dapat mengevaluasi pemasaran. | Must |
| US09 | Pengunjung ingin menggunakan website dengan nyaman di ponsel. | Must |
| US10 | Mesin pencari perlu memahami halaman dan struktur website. | Must |

## 8. Persyaratan Fungsional

### FR-01 — Halaman utama
Menampilkan identitas bisnis, layanan inti, area layanan, alasan memilih layanan yang dapat dibuktikan, dan CTA utama ke WhatsApp.

### FR-02 — Pencarian jenis kerusakan
Pengunjung dapat mencari atau memilih jenis kerusakan dari daftar yang tersedia. Hasil pencarian mengarah ke halaman atau bagian yang relevan.

### FR-03 — Detail kerusakan
Halaman detail menjelaskan gejala umum, batasan informasi diagnosis jarak jauh, jenis bantuan yang tersedia, dan CTA untuk konsultasi. Kategori kulkas dan mesin cuci harus dibedakan dengan jelas, baik pada navigasi maupun halaman detail. Hindari memberi diagnosis pasti hanya berdasarkan gejala singkat.

### FR-04 — Area layanan
Website menampilkan wilayah yang benar-benar dilayani. Informasi harus mudah dipahami dan diperbarui melalui kode/config.

### FR-05 — WhatsApp
Tombol WhatsApp membuka nomor resmi bisnis dengan pesan awal yang sesuai konteks, misalnya jenis kerusakan dan wilayah pengguna. Nomor dan isi pesan harus diuji di perangkat seluler dan desktop.

### FR-06 — Estimasi biaya
Kalkulator memberikan kisaran biaya hanya berdasarkan aturan yang telah disetujui bisnis. Jika harga bergantung pada pemeriksaan, tampilkan penjelasan bahwa angka tersebut merupakan estimasi, bukan penawaran final. Jangan mengarang harga.

### FR-07 — FAQ dan testimoni
FAQ dapat dibuka/tutup dan dapat digunakan dengan keyboard. Testimoni harus asli, digunakan dengan izin, dan tidak boleh dibuat-buat.

### FR-08 — Analytics dan pelacakan
Sistem mencatat peristiwa penting, misalnya:
- `whatsapp_click`
- `phone_click` jika nomor telepon ditampilkan
- `cost_estimator_start`
- `cost_estimator_complete`
- `service_area_view` jika diperlukan

Konversi Google Ads harus dikonfigurasi dan diuji sebelum kampanye dinilai berdasarkan konversi.

## 9. Persyaratan Nonfungsional

- **Responsif:** nyaman digunakan di ponsel, tablet, dan desktop.
- **Performa:** optimalkan ukuran gambar, font, dan JavaScript.
- **SEO:** URL mudah dibaca, judul/meta unik, sitemap XML, robots.txt, canonical yang tepat, dan internal linking.
- **Keamanan:** HTTPS, validasi input jika ada, tidak mengekspos rahasia/API key di frontend, dan pembaruan dependensi.
- **Aksesibilitas:** kontras memadai, label kontrol jelas, navigasi keyboard, alt text yang relevan.
- **Kompatibilitas:** uji browser modern dan perangkat Android umum.
- **Privasi:** jelaskan penggunaan analytics dan data yang dikumpulkan; patuhi aturan yang relevan.
- **Pemeliharaan:** konten statis dikelola melalui file konfigurasi/data yang terstruktur.
- **Keandalan:** tautan, formulir/CTA, dan halaman penting tidak boleh rusak.

Target Core Web Vitals pada persentil ke-75, bila data lapangan sudah tersedia:
- LCP ≤ 2,5 detik
- INP ≤ 200 milidetik
- CLS ≤ 0,1

Target tersebut merupakan sasaran optimasi, bukan jaminan pada setiap perangkat atau jaringan.

## 10. Strategi SEO

### 10.1 Kelompok kata kunci
Riset dan prioritaskan kata kunci sesuai layanan nyata, misalnya:
- service kulkas
- service kulkas terdekat
- service kulkas [kota/area yang benar-benar dilayani]
- kulkas tidak dingin
- kulkas mati total
- biaya service kulkas
- service mesin cuci
- service mesin cuci terdekat
- service mesin cuci [kota/area yang benar-benar dilayani]
- mesin cuci tidak berputar
- mesin cuci tidak membuang air
- biaya service mesin cuci

Kata kunci final harus ditentukan lewat riset dan disesuaikan dengan cakupan layanan.

### 10.2 SEO teknis dan konten
- Gunakan judul halaman dan meta description yang unik.
- Buat sitemap XML dan robots.txt.
- Pasang canonical yang benar.
- Hubungkan website ke Google Search Console.
- Gunakan structured data `LocalBusiness` hanya jika informasinya sesuai dan dapat diverifikasi.
- Tambahkan foto asli dengan izin dan alt text yang menjelaskan gambar.
- Pastikan konten menjawab kebutuhan pelanggan, bukan sekadar mengulang kata kunci.
- Jangan menjanjikan posisi tertentu di hasil pencarian.

## 11. Strategi Google Ads

Tujuan Google Ads adalah mendatangkan calon pelanggan yang sedang mencari jasa service kulkas maupun mesin cuci.

### 11.1 Pendekatan awal
- Mulai dari kampanye **Search** dengan kata kunci berintensi tinggi.
- Batasi lokasi ke wilayah yang benar-benar dapat dilayani.
- Arahkan iklan ke halaman relevan, bukan selalu ke beranda.
- Gunakan CTA yang jelas, misalnya “Hubungi via WhatsApp”.
- Siapkan kata kunci negatif untuk mengurangi pencarian yang tidak relevan, misalnya pencarian lowongan, tutorial perbaikan mandiri, atau pembelian kulkas/mesin cuci bekas jika tidak relevan dengan layanan.
- Pantau istilah penelusuran dan kualitas prospek secara rutin.
- Jangan menganggap klik sebagai transaksi. Evaluasi kualitas chat dan pekerjaan yang benar-benar didapat.

### 11.2 Pengukuran
Ukur impresi, klik, CTR, CPC, klik WhatsApp, jumlah prospek yang relevan, dan biaya per prospek. Pastikan event konversi diuji terlebih dahulu. Hindari mengoptimalkan kampanye hanya berdasarkan jumlah klik.

### 11.3 Batasan
- Google Ads tidak menjamin jumlah klik, prospek, posisi iklan, atau transaksi.
- Biaya aktual tergantung persaingan, lokasi, kata kunci, kualitas iklan/halaman, dan pengaturan kampanye.
- Kelayakan produk iklan lokal tertentu tidak diasumsikan; MVP menggunakan Search Ads sebagai rencana dasar.

## 12. Arahan Desain UI/UX

Karakter desain:
- Modern, rapi, profesional, ramah, dan terasa seperti bisnis jasa nyata.
- Mobile-first.
- CTA WhatsApp mudah ditemukan tanpa menutupi konten.
- Tampilkan area layanan, proses layanan, dan informasi harga secara transparan.
- Gunakan foto teknisi, alat, atau pekerjaan yang autentik jika tersedia dan ada izin.
- Hindari layout template generik, gradien berlebihan, efek glassmorphism, bayangan berlebihan, animasi yang tidak perlu, dan ikon/foto dekoratif yang tidak membantu.
- Gunakan satu CTA utama yang konsisten.
- Jangan menampilkan klaim seperti “teknisi terbaik”, “termurah”, “garansi seumur hidup”, atau “pasti selesai” tanpa bukti dan persetujuan bisnis.

## 13. Rekomendasi Teknologi

### Rekomendasi awal: Astro + TypeScript
Cocok untuk website pemasaran statis yang mengutamakan performa dan SEO dengan JavaScript seminimal mungkin.

Alternatif:
- **Next.js:** jika tim lebih familiar dengan React atau kemungkinan kebutuhan interaktif lebih besar.
- **WordPress:** jika pemilik bisnis harus mengedit konten sendiri melalui dashboard sejak awal.
- **Laravel:** dapat digunakan jika tim sudah menguasainya, tetapi mungkin berlebihan untuk MVP statis tanpa login, admin, atau database.

Pilihan akhir mempertimbangkan keahlian pengembang, kemudahan deploy, dan biaya hosting.

## 14. Model Data

MVP tidak memerlukan database. Data dapat disimpan di file JSON, TypeScript, atau Markdown.

Entitas konseptual:
- `ApplianceCategory`: kategori perangkat, misalnya kulkas atau mesin cuci.
- `Business`: nama, nomor WhatsApp, jam operasional, informasi kontak.
- `Service`: nama layanan, slug, gejala, deskripsi, CTA.
- `Region`: nama wilayah, status cakupan, catatan layanan.
- `FAQ`: pertanyaan dan jawaban.
- `Testimonial`: isi, sumber/izin, tanggal, media opsional.
- `CostRule`: kategori pekerjaan, rentang biaya, syarat, catatan estimasi.
- `SEOConfig`: title, description, canonical, social preview.

Database baru dipertimbangkan jika dibutuhkan dashboard admin, banyak editor, sistem pemesanan, atau pengelolaan lead terstruktur.

## 15. Acceptance Criteria

- **AC01:** Halaman utama menampilkan identitas baru dan CTA yang berfungsi.
- **AC02:** Semua URL yang disepakati dapat dibuka dan tidak menghasilkan error.
- **AC03:** Website berfungsi pada ukuran layar ponsel dan desktop.
- **AC04:** Pencarian jenis kerusakan menghasilkan hasil yang relevan.
- **AC05:** Tombol WhatsApp membuka nomor yang benar dengan teks awal yang benar.
- **AC06:** Kalkulator hanya menggunakan data harga yang disetujui dan menampilkan batasan estimasi.
- **AC07:** Area layanan akurat dan disetujui pemilik bisnis.
- **AC08:** FAQ dapat digunakan dengan mouse, sentuhan, dan keyboard.
- **AC09:** Testimoni autentik dan memiliki izin penggunaan.
- **AC10:** Metadata SEO, sitemap, robots.txt, dan canonical diperiksa.
- **AC11:** Website dapat dihubungkan ke Search Console dan analytics.
- **AC12:** Event klik WhatsApp dan konversi yang direncanakan telah diuji.
- **AC13:** HTTPS aktif dan tidak ada rahasia/API key yang terekspos.
- **AC14:** Kebijakan privasi dan ketentuan tersedia serta ditinjau.
- **AC15:** Gambar dioptimalkan, tautan diuji, dan pemeriksaan performa dilakukan sebelum peluncuran.

## 16. Prioritas MVP

### P0 — Wajib sebelum peluncuran
- Identitas merek, domain, hosting.
- Halaman utama, layanan, kontak, dan area layanan.
- WhatsApp CTA.
- Informasi bisnis yang benar.
- SEO teknis dasar.
- HTTPS, mobile responsiveness, dan QA.

### P1 — Penting setelah inti siap
- Pencarian kerusakan.
- Halaman detail kerusakan.
- Estimasi biaya.
- FAQ dan testimoni.
- Analytics dan pelacakan konversi Google Ads.

### P2 — Pengembangan berikutnya
- Dashboard admin/CMS.
- Pengelolaan lead.
- Booking/penjadwalan.
- Integrasi CRM atau otomasi WhatsApp.

## 17. Asumsi dan Pertanyaan yang Belum Diputuskan

Hal berikut perlu dikonfirmasi sebelum implementasi:
1. Nama merek dan ketersediaan domain.
2. Nomor WhatsApp resmi dan jam layanan.
3. Daftar area yang benar-benar dilayani di Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
4. Jenis kerusakan yang ditangani.
5. Harga pemeriksaan, kisaran biaya, biaya transportasi, dan ketentuan pembayaran.
6. Garansi layanan/suku cadang jika memang tersedia.
7. Foto, logo, testimoni, dan izin penggunaannya.
8. Pilihan teknologi serta paket hosting.
9. Anggaran Google Ads dan periode uji coba.
10. Penanggung jawab yang memeriksa keakuratan konten.
11. Tenggat waktu peluncuran.

## 18. Risiko dan Mitigasi

| Risiko | Mitigasi |
|---|---|
| Harga atau area layanan tidak akurat | Minta persetujuan pemilik bisnis sebelum publikasi |
| Desain terasa generik | Gunakan konten, foto, dan detail operasional yang autentik |
| Klik iklan tidak menghasilkan pelanggan | Pantau istilah pencarian, kualitas chat, dan prospek berkualitas |
| Domain baru belum memiliki otoritas SEO | Bangun konten berguna secara konsisten dan ukur hasil jangka panjang |
| Penggunaan aset pihak lain tanpa izin | Gunakan aset sendiri atau aset dengan lisensi yang sesuai |
| Ruang lingkup membesar | Kunci fitur MVP dan tunda fitur P2 |

## 19. Tahapan Implementasi

1. **Discovery:** finalisasi merek, kontak, area, layanan, harga, dan garansi.
2. **Struktur konten:** tetapkan sitemap, kata kunci, dan isi setiap halaman.
3. **UI/UX:** buat wireframe mobile-first dan validasi sebelum coding.
4. **Development:** implementasikan halaman, data statis, CTA, SEO, dan analytics.
5. **QA:** uji perangkat, tautan, WhatsApp, estimasi, aksesibilitas, keamanan, dan performa.
6. **Deployment:** hubungkan domain, HTTPS, Search Console, dan analytics.
7. **Pemasaran:** mulai SEO dan kampanye Google Ads beranggaran terbatas.
8. **Evaluasi:** tinjau kualitas prospek dan biaya per prospek; ubah kampanye berdasarkan data.

## 20. Kesimpulan

MVP paling efisien adalah website statis yang cepat, responsif, mudah dirawat, dan berfokus pada konversi WhatsApp. Database dan dashboard belum diperlukan selama konten dikelola melalui kode. Prioritas sebelum coding adalah memastikan merek, area layanan, nomor WhatsApp, jenis kerusakan yang ditangani untuk kulkas dan mesin cuci, serta informasi biaya benar. Google Ads sebaiknya dimulai sebagai uji coba kecil setelah halaman dan pengukuran konversi siap.
