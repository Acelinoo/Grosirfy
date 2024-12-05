import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = ({ lowStockOrExpiredProducts }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-4 bg-transparent mb-5">
      {/* Search Bar */}
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Cari sesuatu..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <RiSearch2Line className="ml-2 text-gray-500" />
      </div>

      {/* Notification Button */}
      <div className="relative">
        <button
          onClick={() => setIsNotificationOpen(true)}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-white ${
            lowStockOrExpiredProducts.length > 0 ? "bg-red-500" : "bg-[#1ABC9C]"
          } hover:bg-[#16A085]`}
        >
          <IoIosNotificationsOutline size={20} />
        </button>
      </div>

      {/* Notification Modal */}
      {isNotificationOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              Notifikasi Produk
            </h2>
            <ul className="text-gray-700">
              {lowStockOrExpiredProducts.length > 0 ? (
                lowStockOrExpiredProducts.map((product, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{product.name}</span>:{" "}
                    {product.quantity} unit tersisa{" "}
                    <span
                      className={`ml-2 ${
                        new Date(product.expirationDate) <= new Date()
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      Kadaluarsa pada {new Date(product.expirationDate).toLocaleDateString()}
                    </span>
                  </li>
                ))
              ) : (
                <li className="text-green-500">Semua produk aman!</li>
              )}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsNotificationOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
