import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage";
import Login from "./pages/login";
import DaftarPage from "./pages/daftar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<DaftarPage />} />{" "}
        {/* Ganti Registerform dengan Daftar */}
      </Routes>
    </Router>
  );
};

export default App;
