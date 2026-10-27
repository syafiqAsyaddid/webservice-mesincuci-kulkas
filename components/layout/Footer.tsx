import React from 'react';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import { businessInfo } from '@/lib/content/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-14 pb-24 md:pb-14 border-t border-primary-800">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Kolom 1: Profil Layanan & Alamat */}
          <div className="md:col-span-1 space-y-3">
            <p className="text-lg font-bold text-white">{businessInfo.name}</p>
            <p className="text-sm text-primary-100/90 leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="pt-2 space-y-2 text-xs text-primary-100/80">
              <div className="flex items-start gap-2">
                <MapPin
                  className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone
                  className="w-4 h-4 text-accent-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${businessInfo.whatsappNumber}`}
                  className="hover:text-white underline-offset-2 hover:underline py-1"
                >
                  {businessInfo.displayPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2: Layanan Utama */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">
              Layanan Spesialis
            </p>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/layanan/service-kulkas"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Service Kulkas, Freezer &amp; Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/service-mesin-cuci"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Service Mesin Cuci Segala Jenis
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Katalog Gejala &amp; Kerusakan
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan#jual-beli-tukar-tambah"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Tukar Tambah Baru &amp; Bekas
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Cakupan Wilayah */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">
              Area Panggilan
            </p>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/wilayah/bekasi"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Kota &amp; Kab. Bekasi (Pusat Workshop)
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/jakarta-timur"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Jakarta Timur
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/jakarta-selatan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Jakarta Selatan
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/depok"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Kota Depok
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Informasi & Legal */}
          <div>
            <p className="text-sm font-semibold text-white mb-3">
              Informasi &amp; Legal
            </p>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Tentang Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Kontak &amp; Jadwal Teknisi
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/ketentuan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm py-0.5 inline-block"
                >
                  Ketentuan Layanan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-800 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-100/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {businessInfo.name}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Layanan service panggilan mandiri, tidak berafiliasi resmi dengan merek produsen mana pun.
          </p>
        </div>
      </div>
    </footer>
  );
};
