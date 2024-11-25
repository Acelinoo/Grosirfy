import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-16">
      <div className="flex flex-col items-center justify-center text-center container mx-auto px-4 mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Grosirfy. Solusi Pengadaan Stok Pedagang Toko Kecil
        </h1>

        <p className="text-gray-300 text-lg max-w-4xl">
          Grosirfy hadir untuk membantu pedagang toko kecil di seluruh Indonesia
          agar lebih mudah, efisien, dan hemat waktu dalam pengadaan stok.
          Dengan layanan antar jemput, opsi pembayaran angsuran, dan
          transparansi harga, kami menjadi mitra terpercaya untuk memastikan
          ketersediaan barang dagangan Anda setiap saat. Temukan distributor dan
          supplier pilihan dengan lebih praktis, kapan saja dan di mana saja.
        </p>
        <button className="w-[140px] h-[45px] mt-[50px] items-center gap-2 bg-[#f5f5f54c] font-bold text-white rounded-[5px] hover:bg-[#d8d8d810]">
          About Us
        </button>
      </div>

      {/* Bottom Bar */}
      <div className=" container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-slate-600 pt-8">
        {/* Logo */}
        <div className="text-4xl font-bold mb-4 md:mb-0">Grosirfy</div>

        {/* Copyright */}
        <div className="text-gray-400 mb-4 md:mb-0 ml-[70px]">
          <p>© 2024 Grosirfy. All Rights Reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <span className="sr-only">Facebook</span>
            <FaFacebook className="w-5 h-5 text-white" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-5 h-5 text-white" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="w-5 h-5 text-white" />
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-slate-600 transition-colors"
          >
            <span className="sr-only">Twitter</span>
            <FaTwitter className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
