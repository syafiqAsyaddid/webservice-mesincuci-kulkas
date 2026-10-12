# Design System & UI/UX Specification
## Website Jasa Service Kulkas dan Mesin Cuci Jabodetabek

**Dokumen:** `design.md`  
**Versi:** 1.0  
**Tanggal:** 12 Oktober 2026  
**Status:** Panduan desain untuk implementasi  
**Teknologi target:** Next.js + TypeScript  
**Brand:** Belum ditentukan; gunakan placeholder sampai nama resmi diputuskan

---

## 1. Tujuan Dokumen

Dokumen ini menjadi acuan visual dan perilaku antarmuka untuk website layanan perbaikan kulkas dan mesin cuci di Jabodetabek. Dokumen ditujukan untuk desainer dan developer agar halaman konsisten, responsif, mudah digunakan, dan berorientasi pada kontak pelanggan melalui WhatsApp.

Desain harus terasa seperti bisnis jasa lokal yang nyata dan tepercaya—bukan template generik yang hanya mengganti warna dan teks.

### Prinsip utama
1. **Jelas sebelum dekoratif.** Pengunjung harus cepat memahami layanan, area cakupan, dan cara menghubungi bisnis.
2. **Terpercaya tanpa klaim kosong.** Kepercayaan dibangun dari informasi konkret, proses yang jelas, foto berlisensi, harga yang dijelaskan, dan testimoni asli jika tersedia.
3. **Mobile-first.** Pengguna kemungkinan mencari jasa dari ponsel ketika alat rumah tangga bermasalah.
4. **Konversi yang tidak memaksa.** WhatsApp mudah ditemukan, tetapi tidak menutupi konten atau mengganggu navigasi.
5. **Konsisten.** Warna, tipografi, tombol, kartu, formulir, jarak, dan gaya gambar menggunakan aturan bersama.
6. **Ringan dan mudah dipelihara.** Hindari animasi berat, dependensi berlebihan, dan komponen yang tidak menambah manfaat.

## 2. Identitas Visual

### 2.1 Arah desain

**Modern, bersih, profesional, dan ramah.** Gunakan warna biru dan putih sebagai fondasi, teks gelap yang kontras, bidang abu-abu kebiruan yang lembut, serta aksen warna seperlunya.

Website tidak perlu terlihat seperti perusahaan teknologi besar. Ini adalah layanan praktis yang membantu orang mengatasi masalah kulkas dan mesin cuci.

### 2.2 Hal yang harus dihindari

- Layout yang tampak seperti template SaaS atau landing page AI.
- Gradien biru-ungu yang digunakan di hampir semua bagian.
- Glassmorphism, glow, bayangan besar, efek neon, dan kartu yang semuanya berbentuk pil.
- Terlalu banyak kartu identik dengan ikon dekoratif.
- Emoji sebagai ikon utama antarmuka.
- Foto stok yang terlalu staged, tidak relevan, atau terlihat tidak sesuai dengan layanan rumah tangga Indonesia.
- Testimoni, jumlah pelanggan, rating, logo partner, sertifikasi, klaim “terbaik/termurah”, atau garansi yang dibuat-buat.
- Countdown palsu, pop-up yang menghalangi, dan urgensi palsu.
- Animasi saat scroll yang membuat konten lambat atau sulit dibaca.
- Semua section memiliki background, border, dan bentuk yang sama sehingga halaman terasa monoton.

## 3. Design Tokens

Token berikut merupakan titik awal. Warna dan ukuran boleh disesuaikan setelah diuji pada prototipe, tetapi perubahan harus diterapkan secara konsisten.

### 3.1 Palet warna

| Token | Nilai | Penggunaan |
|---|---|---|
| `color-primary-900` | `#12345A` | Header teks penting, footer, judul kuat |
| `color-primary-800` | `#174A7E` | Hover tombol utama dan elemen aktif |
| `color-primary-700` | `#1D5F99` | Link utama dan aksen |
| `color-primary-600` | `#2677B8` | Tombol utama |
| `color-primary-100` | `#EAF3FB` | Latar highlight yang lembut |
| `color-primary-50` | `#F5F9FD` | Latar section alternatif |
| `color-text` | `#172B3A` | Teks utama |
| `color-text-muted` | `#526574` | Teks sekunder |
| `color-border` | `#D8E2EA` | Border, divider, input |
| `color-surface` | `#FFFFFF` | Permukaan utama |
| `color-surface-muted` | `#F5F7F9` | Background alternatif |
| `color-success` | `#18794E` | Status sukses yang terverifikasi |
| `color-warning` | `#8A5700` | Peringatan |
| `color-danger` | `#B42318` | Error atau validasi |
| `color-focus` | `#0B76B7` | Focus ring |

**WhatsApp:** gunakan hijau WhatsApp pada ikon atau tombol khusus WhatsApp bila membantu pengenalan, tetapi jangan jadikan hijau sebagai warna dominan seluruh website. Tombol utama dan tombol WhatsApp harus memiliki kontras teks yang memadai.

### 3.2 Tipografi

Gunakan font sans-serif yang mudah dibaca. Rekomendasi: `Inter` atau font sistem yang serupa. Jika memuat font eksternal, batasi weight yang digunakan dan optimalkan pemuatan.

| Elemen | Desktop | Mobile | Berat |
|---|---:|---:|---|
| H1 | 44–52 px | 34–40 px | 700 |
| H2 | 32–38 px | 27–32 px | 700 |
| H3 | 22–26 px | 20–23 px | 600–700 |
| H4 | 18–20 px | 18–20 px | 600 |
| Body besar | 18 px | 17–18 px | 400 |
| Body standar | 16 px | 16 px | 400 |
| Caption/label | 13–14 px | 13–14 px | 400–500 |
| Tombol | 15–16 px | 15–16 px | 600 |

Aturan tipografi:
- Gunakan line-height sekitar 1,5–1,7 untuk paragraf.
- H1 sebaiknya tidak terlalu panjang; batasi lebar baris agar mudah dipindai.
- Hindari seluruh judul ditulis kapital.
- Gunakan maksimal 2–3 ukuran heading utama per section.
- Jangan gunakan teks abu-abu yang terlalu pucat untuk informasi penting.
- Jangan mengecilkan teks body demi memuat lebih banyak konten.

### 3.3 Spacing

Gunakan skala dasar 4 px.

| Token | Ukuran | Penggunaan umum |
|---|---:|---|
| `space-1` | 4 px | Jarak kecil ikon/teks |
| `space-2` | 8 px | Jarak komponen rapat |
| `space-3` | 12 px | Jarak label dan input |
| `space-4` | 16 px | Jarak elemen standar |
| `space-5` | 20 px | Jarak isi kartu |
| `space-6` | 24 px | Jarak antarblok |
| `space-8` | 32 px | Jarak antargrup |
| `space-10` | 40 px | Jarak section internal |
| `space-12` | 48 px | Jarak antarbagian |
| `space-16` | 64 px | Padding section desktop |
| `space-20` | 80 px | Jarak section besar desktop |

Padding section:
- Desktop: 64–88 px vertikal.
- Tablet: 48–64 px vertikal.
- Mobile: 36–52 px vertikal.

### 3.4 Grid dan lebar konten

- Lebar konten maksimum: 1120–1200 px.
- Padding horizontal desktop: 32 px.
- Tablet: 24 px.
- Mobile: 20 px; minimum 16 px untuk layar sempit.
- Gunakan grid 12 kolom untuk layout desktop jika dibutuhkan.
- Teks panjang sebaiknya dibatasi pada lebar 65–75 karakter per baris.
- Hindari section yang terlalu lebar tanpa alignment yang jelas.

### 3.5 Border, radius, dan shadow

- Input dan tombol: radius 8–12 px.
- Kartu konten: radius 12–16 px.
- Gambar besar: radius 12–16 px.
- Badge: radius penuh hanya untuk status kecil.
- Border tipis dan shadow halus hanya jika membantu pemisahan layer.
- Jangan membuat setiap elemen mengambang dengan shadow yang sama.

## 4. Layout Responsif

Gunakan pendekatan mobile-first.

| Breakpoint | Lebar acuan | Perilaku |
|---|---:|---|
| Mobile kecil | `< 480 px` | Satu kolom, navigasi ringkas, CTA mudah dijangkau |
| Mobile besar | `480–767 px` | Satu kolom, kartu dapat menjadi dua kolom bila cukup |
| Tablet | `768–1023 px` | Dua kolom untuk bagian yang sesuai |
| Desktop | `1024–1279 px` | Layout penuh, navigasi desktop |
| Desktop lebar | `≥ 1280 px` | Konten tetap dibatasi max-width |

Ketentuan:
- Hindari horizontal scrolling.
- Jangan mengandalkan hover untuk menampilkan informasi penting.
- Tap target idealnya sekitar 44 × 44 px atau lebih.
- Pastikan CTA sticky tidak menutupi tombol, form, footer, atau pesan cookie jika kelak digunakan.
- Pada mobile, gunakan layout satu kolom untuk formulir dan kalkulator.
- Gambar tidak boleh membuat layout bergeser drastis saat dimuat; tetapkan aspect ratio/dimensi.

## 5. Struktur Navigasi

### 5.1 Header desktop
Urutan yang disarankan:
1. Placeholder logo/nama brand.
2. Menu Layanan.
3. Menu Area Layanan.
4. Estimasi Biaya.
5. FAQ.
6. Tombol WhatsApp.

Gunakan header putih atau warna sangat terang, border bawah tipis, dan tinggi sekitar 72–84 px. Sticky header diperbolehkan bila tidak menghabiskan banyak ruang.

### 5.2 Header mobile
- Logo/nama brand di kiri.
- Tombol menu di kanan.
- Navigasi terbuka dalam panel sederhana yang mudah ditutup.
- Jangan menampilkan terlalu banyak link sekaligus.
- Tombol WhatsApp dapat berada di header, tetapi tetap beri ruang untuk konten utama.

### 5.3 Footer
Footer berisi:
- Nama brand dan ringkasan layanan.
- Tautan layanan kulkas dan mesin cuci.
- Area layanan yang sudah dikonfirmasi.
- Kontak/WhatsApp resmi.
- Tentang, kebijakan privasi, dan ketentuan.
- Copyright tahun berjalan.

Jangan menampilkan alamat kantor, jam layanan, akun sosial, atau nomor telepon yang belum dikonfirmasi.

## 6. Spesifikasi Halaman

## 6.1 Beranda `/`

Tujuan: dalam beberapa detik pengunjung memahami layanan, wilayah, dan cara menghubungi bisnis.

### Urutan section
1. Header.
2. Hero utama.
3. Pilihan dua layanan: kulkas dan mesin cuci.
4. Cara kerja layanan.
5. Jenis masalah yang ditangani.
6. Area layanan.
7. Penjelasan biaya atau tautan ke estimasi.
8. FAQ ringkas.
9. Testimoni jika tersedia dan valid.
10. CTA akhir.
11. Footer.

### Hero
Gunakan layout dua kolom di desktop:
- Kiri: eyebrow opsional, H1, deskripsi singkat, CTA WhatsApp, CTA sekunder untuk melihat layanan.
- Kanan: satu foto stok yang relevan dan realistis, misalnya teknisi sedang memeriksa peralatan rumah tangga. Jangan gunakan kolase berlebihan.

Di mobile, tampilkan teks dan CTA sebelum gambar jika itu membantu pengguna segera mengambil tindakan.

Contoh copy sementara:
- H1: **“Butuh Bantuan Memperbaiki Kulkas atau Mesin Cuci?”**
- Deskripsi: “Lihat layanan dan area cakupan kami, lalu konsultasikan masalah perangkat Anda melalui WhatsApp.”
- CTA utama: **“Konsultasi via WhatsApp”**
- CTA sekunder: **“Lihat Layanan”**

Copy di atas adalah draft dan harus disesuaikan dengan identitas bisnis. Jangan menyatakan layanan 24 jam, teknisi datang pada hari yang sama, gratis pemeriksaan, atau garansi sebelum dikonfirmasi.

### Kartu layanan
Tampilkan dua kartu utama:
- **Service Kulkas**
- **Service Mesin Cuci**

Setiap kartu berisi foto/ilustrasi yang relevan, ringkasan satu atau dua kalimat, 3–4 contoh gejala yang memang ditangani, dan link ke halaman layanan. Jangan memaksa semua kartu memakai layout yang identik jika kontennya berbeda.

### Cara kerja
Gunakan 3 langkah sederhana, misalnya:
1. Ceritakan gejala dan lokasi melalui WhatsApp.
2. Tim mengonfirmasi cakupan, kemungkinan penanganan, dan informasi biaya.
3. Jadwal serta kunjungan disepakati jika layanan tersedia.

Langkah ini harus disesuaikan dengan proses operasional bisnis sebenarnya.

### Jenis kerusakan
Tampilkan beberapa masalah sebagai daftar/link, bukan grid besar berisi banyak ikon dekoratif. Contoh awal:
- Kulkas tidak dingin.
- Kulkas tidak menyala.
- Mesin cuci tidak berputar.
- Mesin cuci tidak membuang air.

Daftar akhir harus berdasarkan jenis pekerjaan yang benar-benar ditangani.

## 6.2 Layanan dan kerusakan `/layanan/` serta halaman detail

Buat pemisahan yang jelas antara kategori perangkat dan gejala.

### Halaman ringkasan layanan
- Pilih perangkat: kulkas atau mesin cuci.
- Daftar jenis masalah.
- Ringkasan alur layanan.
- Informasi area layanan.
- CTA WhatsApp.

### Halaman detail kerusakan
Contoh slug:
- `/layanan/service-kulkas/`
- `/layanan/service-mesin-cuci/`
- `/kerusakan/kulkas-tidak-dingin/`
- `/kerusakan/kulkas-mati-total/`
- `/kerusakan/mesin-cuci-tidak-berputar/`
- `/kerusakan/mesin-cuci-tidak-membuang-air/`

Struktur konten:
1. Breadcrumb.
2. Judul yang spesifik.
3. Penjelasan gejala yang umum.
4. Informasi bahwa gejala tidak selalu menunjukkan penyebab yang sama.
5. Jenis bantuan yang tersedia (sesuai konfirmasi bisnis).
6. Area layanan.
7. FAQ terkait.
8. CTA konsultasi.

Jangan memberikan diagnosis pasti atau menyarankan pembongkaran perangkat berisiko kepada pengguna. Hindari membuat halaman tipis yang hanya mengganti nama kota atau gejala.

## 6.3 Estimasi biaya `/estimasi-biaya/`

Tujuan: memberi gambaran awal, bukan menjanjikan harga final.

### Komponen
- Penjelasan singkat tentang cara estimasi bekerja.
- Pilihan perangkat: kulkas / mesin cuci.
- Pilihan jenis masalah yang tersedia.
- Pertanyaan tambahan hanya jika diperlukan.
- Hasil estimasi jika aturan harga telah disetujui.
- Penjelasan komponen yang termasuk/tidak termasuk.
- CTA WhatsApp dengan ringkasan pilihan pengguna.

### State
- **Default:** belum ada pilihan.
- **Incomplete:** pengguna belum melengkapi pertanyaan wajib.
- **Result:** menampilkan kisaran biaya berdasarkan data yang disetujui.
- **Unavailable:** tidak ada aturan harga yang cocok; arahkan untuk konsultasi tanpa menampilkan angka rekaan.
- **Error:** terjadi kesalahan input atau kalkulasi.

Aturan penting:
- Jangan tampilkan nominal placeholder seolah-olah harga nyata.
- Jangan menambahkan biaya pemeriksaan, transportasi, suku cadang, atau garansi tanpa data resmi.
- Labeli hasil sebagai estimasi dan jelaskan bahwa biaya akhir dapat bergantung pada pemeriksaan, jika itu memang kebijakan bisnis.

## 6.4 Area layanan `/wilayah/` dan halaman wilayah

- Tampilkan area yang benar-benar dilayani, dikelompokkan dengan jelas.
- Jangan menampilkan peta jika datanya belum akurat.
- Jangan mengklaim seluruh Jabodetabek dilayani sebelum cakupan dikonfirmasi.
- Gunakan daftar area yang mudah dipindai.
- Jika membuat halaman per kota, sertakan informasi lokal yang berguna dan benar-benar berbeda.
- CTA mengajak pengunjung mengonfirmasi alamat atau area melalui WhatsApp.

Contoh halaman kota: `/wilayah/bekasi/`, `/wilayah/bogor/`, `/wilayah/depok/`, `/wilayah/jakarta/`, `/wilayah/tangerang/`. Gunakan hanya jika wilayah tersebut memang dilayani.

## 6.5 FAQ dan testimoni

### FAQ
- Gunakan accordion sederhana.
- Pertanyaan dan jawaban ditulis jelas, tanpa klaim yang belum dikonfirmasi.
- Satu pertanyaan dapat dibuka/ditutup dengan mouse, sentuhan, dan keyboard.
- Jangan menaruh seluruh FAQ dalam carousel.

Contoh topik:
- Area mana saja yang dilayani?
- Bagaimana cara meminta layanan?
- Apakah biaya dapat diketahui sebelum kunjungan?
- Apakah semua merek/model ditangani?
- Apakah tersedia garansi?

Jawaban untuk contoh pertanyaan tersebut harus disusun oleh pemilik bisnis.

### Testimoni
- Tampilkan hanya testimoni asli dan berizin.
- Sertakan konteks secukupnya tanpa membuka data pribadi yang tidak diperlukan.
- Jangan membuat rating agregat atau jumlah pelanggan jika tidak ada sumber yang sah.
- Jika belum ada testimoni, sembunyikan section atau gunakan bagian “Proses layanan” sebagai pengganti. Jangan membuat testimoni contoh seolah nyata.

## 6.6 Tentang dan kontak

### Tentang
- Ceritakan latar belakang dan cara kerja bisnis berdasarkan fakta.
- Gunakan foto bisnis/teknisi asli bila tersedia.
- Jangan membuat cerita pendirian, lama pengalaman, atau sertifikasi tanpa konfirmasi.

### Kontak
- Nomor WhatsApp resmi.
- Jam operasional jika telah dikonfirmasi.
- Area layanan.
- Tombol WhatsApp dan nomor telepon jika tersedia.
- Hindari menampilkan alamat fisik jika bisnis tidak menerima kunjungan di lokasi tersebut.

## 6.7 Kebijakan privasi dan ketentuan

Halaman ini menggunakan layout sederhana yang mengutamakan keterbacaan:
- Lebar teks terbatas.
- Heading terstruktur.
- Daftar isi opsional untuk halaman panjang.
- Tautan internal yang jelas.

Konten hukum harus disesuaikan dengan praktik pengumpulan data sebenarnya dan ditinjau oleh pihak yang kompeten. Jangan menganggap template umum otomatis sesuai untuk bisnis.

## 6.8 Landing page khusus Google Ads

Landing page harus sangat relevan dengan kata kunci iklan dan memudahkan kontak.

Struktur:
1. Headline sesuai layanan yang dicari.
2. Penjelasan singkat.
3. Area layanan yang relevan.
4. Gejala/jenis masalah yang ditangani.
5. Proses layanan dan informasi biaya yang benar.
6. Bukti kepercayaan yang nyata, jika tersedia.
7. FAQ penting.
8. CTA WhatsApp.

Aturan:
- Jangan menambahkan navigasi yang terlalu ramai.
- Jangan membuat klaim yang tidak bisa dibuktikan.
- Pastikan headline, deskripsi, dan isi halaman konsisten dengan iklan.
- Buat halaman terpisah untuk service kulkas dan service mesin cuci bila konten serta kata kunci memang berbeda.
- Jangan membuat banyak landing page yang hanya berbeda nama kota tanpa manfaat lokal nyata.

## 7. Komponen UI

## 7.1 Tombol

### Primary button
- Background biru utama.
- Teks putih.
- Radius 8–12 px.
- Tinggi minimum 48 px.
- Padding horizontal 18–24 px.
- Hover: biru lebih gelap.
- Focus: outline yang jelas.
- Disabled: kontras tetap cukup, tidak hanya dibedakan melalui warna.

### Secondary button
- Background putih atau transparan.
- Border biru/abu-abu.
- Teks gelap.
- Gunakan untuk aksi sekunder seperti “Lihat Layanan”.

### WhatsApp button
- Label jelas: “Konsultasi via WhatsApp” atau “Hubungi via WhatsApp”.
- Ikon WhatsApp boleh digunakan bersama teks.
- Buka nomor resmi dengan pesan awal yang relevan.
- Pesan awal dapat menyertakan konteks halaman atau jenis layanan, tetapi tidak boleh mengisi data yang tidak diberikan pengguna.
- Jangan menjanjikan respons instan kecuali memang tersedia.

### Link
- Warna biru yang terlihat jelas.
- Harus memiliki hover dan focus state.
- Jangan mengandalkan perubahan warna saja untuk menandai state.

## 7.2 WhatsApp sticky/floating

Permintaan desain: gunakan tombol kontekstual di dalam konten **dan** tombol sticky/floating pada perangkat mobile bila tidak mengganggu.

Aturan:
- Tampilkan tombol inline di hero dan setelah bagian penting.
- Tombol floating dapat muncul setelah pengguna melewati hero; jangan menumpuk terlalu banyak CTA di layar pertama.
- Pada layar kecil, pertimbangkan bar bawah yang memiliki label dan area sentuh cukup.
- Sisakan padding bawah halaman agar konten/footer tidak tertutup.
- Jangan menutupi input, hasil kalkulator, cookie notice, atau elemen navigasi.
- Sediakan label aksesibel untuk tombol ikon.
- Uji pada iOS/Android, browser dengan bottom bar, dan layar sempit.
- Hindari dua tombol WhatsApp yang saling bertumpuk (floating plus sticky bar) pada viewport yang sama.

## 7.3 Kartu

Kartu digunakan untuk layanan, gejala, atau konten terkait—bukan untuk setiap blok teks.

Ketentuan:
- Padding 20–24 px.
- Border tipis atau background yang membedakan.
- Radius 12–16 px.
- Hover hanya jika kartu memang clickable.
- Jangan memberi hover lift/scale berlebihan.
- Seluruh kartu tidak harus sama tinggi jika itu merusak ritme konten.
- Jika kartu bisa diklik, gunakan elemen link semantik.

## 7.4 Input dan select

- Label selalu terlihat; jangan hanya mengandalkan placeholder.
- Tinggi input sekitar 48 px.
- Border kontras cukup.
- Error muncul dekat kontrol terkait dan menjelaskan cara memperbaiki.
- Tampilkan state focus yang jelas.
- Jangan menghapus nilai pengguna saat validasi gagal.
- Select harus memiliki pilihan awal yang informatif, bukan pilihan ambigu.

## 7.5 Accordion

- Gunakan untuk FAQ.
- Judul pertanyaan jelas.
- Tampilkan indikator buka/tutup yang konsisten.
- Mendukung keyboard dan pembaca layar.
- Hindari animasi tinggi konten yang terlalu panjang atau lambat.

## 7.6 Badge dan label

Gunakan secara terbatas untuk informasi seperti “Estimasi” atau “Area layanan”. Jangan menggunakan badge sebagai dekorasi pada hampir semua kartu.

## 7.7 Breadcrumb

Gunakan pada halaman detail layanan/kerusakan dan halaman area. Pastikan urutannya benar dan setiap item sebelumnya dapat diklik.

## 8. Gambar dan Aset Stok

Pilihan aset: **foto stok berlisensi**, dipilih secara selektif.

### 8.1 Arahan foto
Cari foto yang:
- Menampilkan kulkas/mesin cuci yang realistis dan relevan.
- Menampilkan teknisi bekerja secara natural, bukan pose promosi yang berlebihan.
- Terasa sesuai dengan konteks rumah tangga lokal.
- Memiliki pencahayaan yang baik dan komposisi yang menyisakan ruang untuk crop.
- Tidak memperlihatkan merek atau logo pihak ketiga secara menyesatkan.
- Memiliki lisensi yang mengizinkan penggunaan komersial.

### 8.2 Penggunaan gambar
- Hero: satu gambar utama, tidak perlu kolase.
- Kartu layanan: satu gambar berbeda untuk kulkas dan mesin cuci.
- Bagian proses: gunakan ikon sederhana atau foto nyata jika tersedia.
- Testimoni: jangan memakai foto stok seolah-olah pelanggan sungguhan.
- Hindari menggunakan gambar yang sama di setiap section.

### 8.3 Optimasi
- Gunakan `next/image` atau mekanisme optimasi yang sesuai.
- Tetapkan dimensi/aspect ratio.
- Gunakan format modern seperti WebP/AVIF jika workflow mendukung.
- Lazy-load gambar di bawah fold.
- Jangan lazy-load gambar utama yang menjadi Largest Contentful Paint jika menyebabkan keterlambatan.
- Tulis alt text yang bermakna; gambar dekoratif gunakan alt kosong.
- Catat sumber/lisensi aset di dokumentasi proyek.

## 9. Ikon dan Ilustrasi

- Gunakan satu set ikon konsisten (misalnya Lucide).
- Gunakan ikon untuk membantu pemahaman, bukan menggantikan label.
- Stroke dan ukuran ikon harus konsisten.
- Jangan campur ikon outline, 3D, emoji, dan ikon berwarna penuh tanpa alasan.
- Hindari ilustrasi abstrak yang tidak menjelaskan layanan.

## 10. Motion dan Interaksi

Motion harus ringan dan fungsional.

Diizinkan:
- Transisi warna tombol sekitar 120–180 ms.
- Accordion yang membuka dengan cepat.
- Menu mobile dengan transisi singkat.
- Perubahan state kalkulator yang tidak mengejutkan.

Hindari:
- Parallax.
- Animasi masuk pada setiap elemen saat scroll.
- Carousel otomatis.
- Video background otomatis.
- Efek cursor custom.
- Animasi besar yang menunda CTA atau teks.

Hormati preferensi `prefers-reduced-motion`.

## 11. State dan Feedback

Setiap komponen interaktif perlu memiliki state yang jelas:
- Default.
- Hover (untuk pointer yang mendukung).
- Focus-visible.
- Active/pressed.
- Disabled bila relevan.
- Loading jika tindakan memang menunggu proses.
- Success/error bila ada hasil tindakan.

Jangan tampilkan notifikasi “pesan berhasil terkirim” jika website hanya membuka WhatsApp. Setelah pengguna menekan tombol WhatsApp, browser berpindah ke WhatsApp; website tidak otomatis mengetahui apakah pesan dikirim.

## 12. Aksesibilitas

Target desain mengacu pada prinsip WCAG 2.2 AA sejauh dapat diterapkan.

Checklist:
- Kontras teks dan background memadai.
- Semua fungsi dapat diakses dengan keyboard.
- Focus indicator terlihat.
- Heading tersusun secara hierarkis.
- Tombol dan link memiliki nama yang jelas.
- Input memiliki label dan instruksi.
- Error tidak hanya ditandai dengan warna.
- Gambar informatif memiliki alt text.
- Target sentuh cukup besar dan tidak terlalu berdekatan.
- Menu dan accordion dapat digunakan dengan pembaca layar.
- Sticky CTA tidak menutupi konten.
- Informasi penting tidak hanya tersedia melalui hover.
- Uji zoom browser dan ukuran font besar.

## 13. Performa dan Implementasi Next.js

### 13.1 Struktur implementasi
Gunakan Next.js App Router dan TypeScript sesuai pilihan proyek. Pisahkan layout global, halaman, data konten, dan komponen UI agar mudah dirawat.

Contoh struktur konseptual:

```text
app/
  layout.tsx
  page.tsx
  layanan/
    page.tsx
    service-kulkas/
      page.tsx
    service-mesin-cuci/
      page.tsx
  kerusakan/
    kulkas-tidak-dingin/
      page.tsx
    mesin-cuci-tidak-berputar/
      page.tsx
  estimasi-biaya/
    page.tsx
  wilayah/
    page.tsx
  tentang-kami/
    page.tsx
  kontak/
    page.tsx
  faq/
    page.tsx
  kebijakan-privasi/
    page.tsx
  ketentuan/
    page.tsx
  landing/
    service-kulkas/
      page.tsx
    service-mesin-cuci/
      page.tsx
components/
  layout/
  ui/
  sections/
  forms/
lib/
  content/
  whatsapp.ts
  analytics.ts
public/
  images/
```

Struktur ini contoh, bukan keharusan mutlak. Sesuaikan URL dengan sitemap final di PRD dan hindari membuat route duplikat.

### 13.2 Server/client components
- Utamakan Server Components untuk konten statis.
- Gunakan Client Components hanya untuk fitur interaktif seperti pencarian, kalkulator, menu mobile, atau accordion jika diperlukan.
- Hindari mengubah seluruh halaman menjadi Client Component tanpa alasan.
- Jangan menaruh token rahasia di kode frontend.

### 13.3 SEO teknis
- Tetapkan metadata unik pada setiap halaman.
- Gunakan canonical yang benar.
- Sediakan sitemap dan robots.txt.
- Siapkan Open Graph image yang sesuai.
- Gunakan heading semantik dan link internal.
- Terapkan structured data hanya jika data bisnis akurat.
- Hubungkan Search Console setelah domain aktif.

Next.js menyediakan Metadata API serta konvensi file untuk favicon, Open Graph, `robots.txt`, dan `sitemap.xml`. Implementasi perlu mengikuti dokumentasi resmi Next.js yang sesuai dengan versi proyek: https://nextjs.org/docs/app/getting-started/metadata-and-og-images

### 13.4 Target performa
Sasaran optimasi:
- LCP ≤ 2,5 detik.
- INP ≤ 200 ms.
- CLS ≤ 0,1.

Target ini perlu diuji pada perangkat dan jaringan nyata; tidak dijamin otomatis hanya karena menggunakan Next.js.

Praktik:
- Batasi JavaScript client.
- Optimalkan gambar dan font.
- Hindari video/slider berat pada hero.
- Hindari library UI besar jika hanya menggunakan beberapa komponen.
- Uji halaman utama dan landing page iklan secara khusus.

## 14. Copywriting dan Konten

Tone of voice:
- Bahasa Indonesia yang jelas, sopan, natural, dan langsung.
- Tidak terlalu formal seperti dokumen korporat.
- Tidak berlebihan atau menakut-nakuti.
- Jelaskan langkah selanjutnya.
- Gunakan istilah teknis hanya bila membantu pelanggan.

### Contoh yang disarankan
- “Ceritakan masalah kulkas atau mesin cuci Anda melalui WhatsApp.”
- “Periksa area layanan sebelum membuat permintaan.”
- “Estimasi awal akan ditampilkan jika informasi harga tersedia.”
- “Ketersediaan layanan dan biaya akan dikonfirmasi sebelum pekerjaan disepakati.”

### Contoh yang harus dihindari tanpa bukti
- “Teknisi nomor satu di Jabodetabek.”
- “Paling murah dan paling cepat.”
- “Pasti selesai dalam 30 menit.”
- “Gratis semua biaya.”
- “Ribuan pelanggan puas.”
- “Garansi seumur hidup.”

## 15. Konversi dan Analytics

Event yang perlu dipertimbangkan:
- `whatsapp_click` dengan parameter halaman dan jenis layanan.
- `phone_click` jika nomor telepon tersedia.
- `cost_estimator_start`.
- `cost_estimator_complete`.
- `service_area_click`.
- `faq_open` jika analisis FAQ diperlukan.

Jangan mengirimkan isi pesan pribadi, nomor pelanggan, atau informasi sensitif ke analytics. Pastikan pengaturan consent dan privasi sesuai kebutuhan serta aturan yang berlaku.

Untuk Google Ads:
- Gunakan landing page yang cocok dengan iklan.
- Pastikan klik WhatsApp diukur sebagai interaksi; bedakan dari prospek yang benar-benar valid jika proses bisnis memungkinkan.
- Jangan menyatakan konversi berhasil hanya karena pengguna mengeklik tautan WhatsApp.
- Uji event sebelum kampanye berjalan.

## 16. Isi Konten yang Harus Dikonfirmasi

Sebelum desain dianggap final, pemilik bisnis harus mengonfirmasi:
- Nama brand dan logo.
- Nomor WhatsApp resmi.
- Jam operasional.
- Area layanan aktual.
- Merek/model yang ditangani.
- Jenis kerusakan yang dilayani.
- Proses kunjungan dan jadwal.
- Kisaran harga dan komponen biaya.
- Garansi jika ada.
- Testimoni dan izin penggunaan.
- Foto stok dan lisensinya.
- Kebijakan privasi serta ketentuan layanan.

Gunakan placeholder yang jelas selama data belum tersedia, misalnya `[NAMA BRAND]`, `[NOMOR WHATSAPP]`, atau `[DAFTAR AREA LAYANAN]`. Jangan menerbitkan placeholder ke produksi.

## 17. Checklist Review Desain

### Visual
- [ ] Warna biru dan putih digunakan secara konsisten.
- [ ] Tidak ada dekorasi yang tidak membantu pemahaman.
- [ ] Layout memiliki ritme; tidak semua section terlihat sama.
- [ ] Foto stok relevan, berlisensi, dan tidak menyesatkan.
- [ ] Tipografi mudah dibaca dan hierarki jelas.

### UX
- [ ] Pengunjung dapat membedakan layanan kulkas dan mesin cuci.
- [ ] CTA WhatsApp jelas tetapi tidak mendominasi semua elemen.
- [ ] CTA sticky/floating tidak menutupi konten.
- [ ] Estimasi biaya tidak menampilkan angka yang belum disetujui.
- [ ] Area layanan mudah ditemukan.
- [ ] FAQ dan navigasi dapat digunakan dengan keyboard.

### Responsif dan aksesibilitas
- [ ] Tidak ada horizontal overflow pada mobile.
- [ ] Tap target cukup besar.
- [ ] Focus ring terlihat.
- [ ] Kontras teks cukup.
- [ ] Gambar tidak menyebabkan layout shift.
- [ ] Konten tetap dapat digunakan tanpa hover.

### Teknis
- [ ] Metadata unik per halaman.
- [ ] Link dan tombol telah diuji.
- [ ] Tautan WhatsApp memakai nomor yang benar.
- [ ] Event analytics diuji.
- [ ] Gambar dioptimalkan.
- [ ] Tidak ada klaim atau testimoni palsu.
- [ ] Tidak ada error console yang kritis.
- [ ] Halaman penting diuji di ponsel dan desktop.

## 18. Kriteria Penerimaan Desain

Desain siap diteruskan ke implementasi jika:
1. Beranda, halaman layanan, halaman estimasi, area layanan, kontak, FAQ/testimoni, halaman legal, dan landing page iklan memiliki struktur yang jelas.
2. Sistem warna, tipografi, spacing, tombol, input, kartu, dan state komponen terdokumentasi.
3. Layout mobile dan desktop telah dipertimbangkan untuk semua halaman utama.
4. Tombol WhatsApp, CTA sticky, dan navigasi tidak menutupi konten.
5. Foto stok memiliki sumber dan hak penggunaan yang sesuai.
6. Konten belum terverifikasi ditandai sebagai placeholder dan tidak ditampilkan sebagai fakta.
7. Desain tidak bergantung pada animasi berat atau dekorasi generik.
8. Implementasi mendukung SEO teknis dan performa sesuai PRD.

---

## 19. Keputusan Desain Ringkas

- **Gaya:** modern, bersih, profesional, ramah.
- **Target:** seluruh calon pelanggan yang membutuhkan service kulkas atau mesin cuci di area yang benar-benar dilayani.
- **Warna:** biru + putih, dengan warna teks gelap dan aksen terbatas.
- **Layout:** seimbang; cukup informatif tanpa menjadi padat.
- **CTA:** WhatsApp inline dan sticky/floating mobile yang tidak mengganggu.
- **Aset:** foto stok berlisensi, natural, dan relevan.
- **Framework:** Next.js + TypeScript.
- **Database:** tidak diasumsikan diperlukan untuk MVP; sesuaikan dengan PRD.
- **Prinsip anti-AI-slop:** gunakan konten konkret, variasi layout yang disengaja, foto relevan, sedikit efek, dan jangan mengarang klaim bisnis.
