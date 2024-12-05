// File: components/sideBar/sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#2F3A4B] text-white shadow-md z-50">
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Grosirfy</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="block hover:text-[#1ABC9C]">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#1ABC9C]">
              Produk
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#1ABC9C]">
              Laporan
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-[#1ABC9C]">
              Pengaturan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
