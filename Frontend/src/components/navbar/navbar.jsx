import React from "react";
import { FaBagShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="bg-white-100 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-gray-800">Grosirfy</h1>
        </div>

        {/* Search Bar */}
        <div className=" ml-64 flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 w-[600px]">
          <input
            type="text"
            placeholder="cari sesuatu..."
            className="focus:outline-none flex-grow"
          />
          <RiSearch2Line className="text-gray-500" />
        </div>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Keranjang Button */}
          <button className=" mr-1 flex items-center gap-2 bg-[#2c3e50] text-white px-3 py-2 rounded-xl hover:bg-[#1f2c3d]">
            <FaBagShopping />

            <span className="text-sm font-medium">Keranjang</span>
          </button>

          {/* Daftar Button */}
          <button className="flex items-center gap-2 border-2 border-gray-500 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-200">
            <MdAccountCircle size={20} />
            <span className="text-sm font-medium">daftar</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
