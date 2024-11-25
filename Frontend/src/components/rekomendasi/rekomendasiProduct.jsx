import React, { useEffect, useRef } from "react";
import { FaBagShopping } from "react-icons/fa6";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";

// Data dummy produk
const products = [
  {
    id: 1,
    name: "Minyak Fortume ",
    price: "Rp 50.000",
    description: "Deskripsi produk A",
  },
  {
    id: 2,
    name: "Produk B",
    price: "Rp 60.000",
    description: "Deskripsi produk B",
  },
  {
    id: 3,
    name: "Produk C",
    price: "Rp 70.000",
    description: "Deskripsi produk C",
  },
  {
    id: 4,
    name: "Produk D",
    price: "Rp 80.000",
    description: "Deskripsi produk D",
  },
  {
    id: 5,
    name: "Produk E",
    price: "Rp 90.000",
    description: "Deskripsi produk E",
  },
  {
    id: 6,
    name: "Produk F",
    price: "Rp 100.000",
    description: "Deskripsi produk F",
  },
  {
    id: 7,
    name: "Produk G",
    price: "Rp 110.000",
    description: "Deskripsi produk G",
  },
  {
    id: 8,
    name: "Produk H",
    price: "Rp 120.000",
    description: "Deskripsi produk H",
  },
  {
    id: 9,
    name: "Produk I",
    price: "Rp 130.000",
    description: "Deskripsi produk I",
  },
  {
    id: 10,
    name: "Produk J",
    price: "Rp 140.000",
    description: "Deskripsi produk J",
  },
];

const Rekomendasi = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const element = document.getElementById("rekomendasi-header");
    const blinkEffect = setInterval(() => {
      const opacity = element.style.opacity === "0" ? "1" : "0";
      element.style.opacity = opacity;
    }, 1000);
    return () => clearInterval(blinkEffect);
  }, []);

  const handleClick = () => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="flex flex-col mt-[100px] font-medium">
      <div
        id="rekomendasi-header"
        className="cursor-pointer bg-[#2c3e50] rounded-[30px] flex items-center justify-center w-[300px] ml-[160px] text-center h-[45px] py-2"
        style={{
          opacity: 1,
          transition: "opacity 0.5s ease-in-out",
        }}
        onClick={handleClick}
      >
        <h1 className="text-xl text-white flex items-center gap-2">
          Rekomendasi untuk anda
          <FaArrowCircleDown className="text-xl hover:text-white transition-all" />
        </h1>
      </div>

      {/* Row pertama (5 produk pertama) */}
      <div className="flex flex-wrap justify-center gap-8 mt-[100px]">
        {products.slice(0, 5).map((product, index) => (
          <motion.div
            key={product.id}
            className="flex flex-col justify-between bg-[#ECF0F1] w-[250px] h-[380px] p-4 rounded-lg shadow-lg mb-[100px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: false, amount: 0.2 }} // amount controls the visibility trigger point
          >
            <div className="flex justify-center mb-4 bg-[#ffffff] w-[200px] h-[200px] rounded-lg overflow-hidden">
              <img
                src="/assets/bannerProduk.svg"
                alt={`Banner Produk ${product.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left flex flex-col items-start">
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>

            <button className="mt-4 w-full bg-[#2c3e50] text-white py-2 px-4 rounded-xl hover:bg-[#1f2c3d] flex items-center justify-center gap-2 transition-transform duration-200 transform active:scale-95">
              <FaBagShopping />
              <span className="text-sm font-bold">Tambah ke keranjang</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Row kedua (5 produk berikutnya) */}
      <div className="flex flex-wrap justify-center gap-8 mt-[50px]">
        {products.slice(5, 10).map((product, index) => (
          <motion.div
            key={product.id}
            className="flex flex-col justify-between bg-[#ECF0F1] w-[250px] h-[380px] p-4 rounded-lg shadow-lg mb-[100px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            viewport={{ once: false, amount: 0.2 }} // amount controls the visibility trigger point
          >
            <div className="flex justify-center mb-4 bg-[#ffffff] w-[200px] h-[200px] rounded-lg overflow-hidden">
              <img
                src="/assets/bannerProduk.svg"
                alt={`Banner Produk ${product.name}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left flex flex-col items-start">
              <p className="font-semibold text-lg">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>

            <button className="mt-4 w-full bg-[#2c3e50] text-white py-2 px-4 rounded-xl hover:bg-[#1f2c3d] flex items-center justify-center gap-2 transition-transform duration-200 transform active:scale-95">
              <FaBagShopping />
              <span className="text-sm font-bold">Keranjang</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rekomendasi;
