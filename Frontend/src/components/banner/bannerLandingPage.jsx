import React from "react";

const bannerLandingPage = ({ children }) => {
  return (
    <div className="flex justify-between items-center bg-[#ECF0F1] w-full h-[500px] mt-[80px] px-[80px]">
      <div>
        <h3 className="mt-5 font-bold text-3xl text-gray-800">
          Belanja persediaan stok lebih mudah dan effiesen!
        </h3>
        <p className="w-[910px] text-2xl mt-5">
          Grosirfy hadir untuk kemudahan pengadaan stok toko Anda. Dapatkan
          layanan antar-jemput, pembayaran angsuran, dan harga transparan.
          Temukan distributor terpercaya, kapan saja dan di mana saja. Stok
          selalu tersedia dengan Grosirfy.
        </p>
        <button className="w-[140px] h-[45px] mt-5 items-center gap-2 bg-[#2c3e50] text-white rounded-[5px] hover:bg-[#1f2c3d]">
          Beli sekarang
        </button>
      </div>
      <img
        className="w-[30%]"
        src="/assets/bannerProduk.svg"
        alt="Banner Produk"
      />
    </div>
  );
};

export default bannerLandingPage;
