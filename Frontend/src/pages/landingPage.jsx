import React, { useState, useEffect } from "react";
import { PiPencilLineBold } from "react-icons/pi";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sideBar/sidebar";

// Main Component
const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: 0,
    entryDate: "",
    expirationDate: "",
  });
  const [products, setProducts] = useState([
    {
      name: "Produk A",
      price: "Rp50.000",
      entryDate: "2024-11-30",
      quantity: 3,
      expirationDate: "2024-11-29",
    },
    {
      name: "Produk B",
      price: "Rp30.000",
      entryDate: "2024-12-01",
      quantity: 6,
      expirationDate: "2024-12-10",
    },
  ]);

  // State for real-time date
  const [currentDate, setCurrentDate] = useState("");

  // Update date every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("id-ID", {
        weekday: "long", // full weekday name (e.g., "Senin")
        day: "numeric", // day of the month (e.g., "2")
        month: "long", // full month name (e.g., "Desember")
        year: "numeric", // full year (e.g., "2024")
      });
      setCurrentDate(formattedDate);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      price: "",
      quantity: 0,
      entryDate: "",
      expirationDate: "",
    });
    setIsAddProductModalOpen(false);
  };

  const handleEditProduct = () => {
    const updatedProducts = [...products];
    updatedProducts[currentProduct.index] = currentProduct;
    setProducts(updatedProducts);
    setIsEditModalOpen(false);
  };

  const handleEditClick = (index) => {
    setCurrentProduct({ ...products[index], index });
    setIsEditModalOpen(true);
  };

  return (
    <div className="">
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <div>
        <div
          className={`p-6 bg-gray-100 min-h-screen ml-0 sm:ml-64 transition-all duration-300`}
        >
          <Navbar
            toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            lowStockOrExpiredProducts={products.filter(
              (product) =>
                product.quantity <= 5 ||
                new Date(product.expirationDate) <= new Date()
            )}
          />
          <div className="bg-white shadow rounded-md p-4 flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold mb-2">Daftar Produk</h1>
              {currentDate}
            </div>
            {/* Real-time date/time display */}

            <button
              onClick={() => setIsAddProductModalOpen(true)}
              className="bg-[#1ABC9C] text-white px-4 py-2 rounded-md hover:bg-[#16A085]"
            >
              Tambah Produk
            </button>
          </div>
          <table className="table-auto w-full text-sm text-left text-gray-500 mt-4">
            <thead className="text-xs text-white uppercase bg-[#2F3A4B]">
              <tr>
                <th className="px-6 py-3">Nama Produk</th>
                <th className="px-6 py-3">Harga Barang</th>
                <th className="px-6 py-3">Stok Barang</th>
                <th className="px-6 py-3">Tanggal Masuk</th>
                <th className="px-6 py-3">Tanggal Kadaluarsa</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.price}</td>
                  <td
                    className={`px-6 py-4 ${
                      product.quantity <= 5 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4">{product.entryDate}</td>
                  <td className="px-6 py-4">{product.expirationDate}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditClick(index)}
                      className="text-[#1ABC9C] hover:text-[#16A085]"
                    >
                      <PiPencilLineBold size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal Add Product */}
          {isAddProductModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Tambah Produk</h2>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="Nama Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="text"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="Harga Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="number"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleInputChange}
                  placeholder="Jumlah Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="date"
                  name="entryDate"
                  value={newProduct.entryDate}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="date"
                  name="expirationDate"
                  value={newProduct.expirationDate}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleAddProduct}
                    className="bg-[#1ABC9C] text-white px-4 py-2 rounded-md hover:bg-[#16A085]"
                  >
                    Tambah Produk
                  </button>
                  <button
                    onClick={() => setIsAddProductModalOpen(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal Edit Product */}
          {isEditModalOpen && currentProduct && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg w-96">
                <h2 className="text-xl font-semibold mb-4">Edit Produk</h2>
                <input
                  type="text"
                  value={currentProduct.name}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      name: e.target.value,
                    })
                  }
                  placeholder="Nama Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="text"
                  value={currentProduct.price}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      price: e.target.value,
                    })
                  }
                  placeholder="Harga Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="number"
                  value={currentProduct.quantity}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      quantity: e.target.value,
                    })
                  }
                  placeholder="Jumlah Produk"
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="date"
                  value={currentProduct.entryDate}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      entryDate: e.target.value,
                    })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <input
                  type="date"
                  value={currentProduct.expirationDate}
                  onChange={(e) =>
                    setCurrentProduct({
                      ...currentProduct,
                      expirationDate: e.target.value,
                    })
                  }
                  className="w-full p-2 mb-4 border rounded-md"
                />
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handleEditProduct}
                    className="bg-[#1ABC9C] text-white px-4 py-2 rounded-md hover:bg-[#16A085]"
                  >
                    Simpan Perubahan
                  </button>
                  <button
                    onClick={() => setIsEditModalOpen(false)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
