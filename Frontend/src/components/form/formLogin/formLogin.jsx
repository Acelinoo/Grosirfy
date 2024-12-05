import { FcGoogle } from "react-icons/fc";
const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-[url('/assets/bg.svg')] bg-center bg-cover">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-md w-full justify-center">
        <h1 className="text-2xl font-bold mb-4 text-center">Grosirfy</h1>
        <p className="mx-auto text-center mb-6 w-60">
          Selamat datang kembali! login ke akun Anda di bawah ini
        </p>

        <form className="space-y-4">
          <div className="mt-6 text-center">
            <button className="mt-2 flex items-center justify-center w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
              <FcGoogle className="mr-2 text-lg" /> Lanjutkan dengan Google
            </button>
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="masukkan email..."
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring focus:ring-teal-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Kata Sandi</label>
            <input
              type="password"
              placeholder="masukkan kata sandi..."
              className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:ring focus:ring-teal-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 rounded-lg text-white font-bold hover:bg-teal-600 transition"
          >
            Masuk
          </button>
        </form>

        <p className="mt-4 text-center text-gray-400">
          Tidak punya akun?{" "}
          <a href="/daftar" className="text-teal-500 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
