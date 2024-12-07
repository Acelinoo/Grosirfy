import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sideBar/sidebar";
import Footer from "../components/footer/footer";

const RiwayatPengisianStock = ({ historyData }) => {
  return (
    <>
      <div className=" bg-[#2F3A4B]">
        <Navbar />
      </div>
      <div className="p-4 bg-gray-100 min-h-screen">
        <Sidebar />
        <div className="bg-white shadow-md ml-0 sm:ml-64 rounded-lg p-6 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Riwayat Pengisian
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md ml-0 sm:ml-64 rounded-lg overflow-x-auto">
          <table className="table-auto w-full text-sm text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Tanggal</th>
                <th className="px-4 py-2">Nama Barang</th>
                <th className="px-4 py-2">Harga Barang</th>
                <th className="px-4 py-2">Jumlah Barang</th>
                <th className="px-4 py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="px-4 py-2">{entry.date}</td>
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">Rp {entry.price}</td>
                  <td className="px-4 py-2">{entry.quantity}</td>
                  <td className="px-4 py-2">Rp {entry.subtotal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RiwayatPengisianStock;
