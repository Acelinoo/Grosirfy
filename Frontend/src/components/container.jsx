import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-6xl font-bold text-gray-800">Grosirfy</h1>
      <h3 className="mt-5  font-bold text-3xl text-gray-800">
        Harga teman, cepat sampai!
      </h3>
      <p className="w-[530px] text-1xl mt-5">
        Grosirfy: Solusi e-commerce bagi pedagang toko kecil untuk stok mudah
        dan hemat biaya, dengan layanan antar-jemput dan pembayaran angsuran
        fleksibel.
      </p>
      <button className=" w-[530px] h-[36px] mt-5 items-center gap-2 bg-[#2c3e50] text-white  rounded-[5px] hover:bg-[#1f2c3d]">
        Bergabunglah dengan kami
      </button>
    </div>
  );
};

export default Container;
