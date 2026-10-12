import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { businessInfo } from '@/lib/content/business';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white pt-14 pb-24 md:pb-14 border-t border-primary-800">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Kolom 1: Profil Layanan & Alamat */}
          <div className="md:col-span-1 space-y-3">
            <h2 className="text-lg font-bold text-white">{businessInfo.name}</h2>
            <p className="text-sm text-primary-100/90 leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="pt-2 space-y-2 text-xs text-primary-100/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-500 flex-shrink-0" aria-hidden="true" />
                <span>{businessInfo.displayPhone}</span>
              </div>
            </div>
          </div>

          {/* Kolom 2: Layanan Utama */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Layanan Perbaikan
            </h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Service Kulkas 1 & 2 Pintu
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Service Mesin Cuci Top & Front Loading
                </Link>
              </li>
              <li>
                <Link
                  href="/estimasi-biaya"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Kalkulator Estimasi Biaya
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Cakupan Wilayah */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Area Panggilan
            </h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/wilayah/bekasi"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Tambun, Cibitung & Bekasi
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/jakarta"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  DKI Jakarta (Selatan, Timur, Pusat, dll.)
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/depok"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Kota Depok & Sekitarnya
                </Link>
              </li>
              <li>
                <Link
                  href="/wilayah/tangerang"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Tangerang & Tangsel (BSD, Bintaro)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Informasi & Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Informasi & Legal
            </h3>
            <ul className="space-y-2 text-sm text-primary-100">
              <li>
                <Link
                  href="/tentang-kami"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Tentang Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/ketentuan"
                  className="hover:text-white transition-colors focus-visible:ring-1 focus-visible:ring-white rounded-sm"
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
