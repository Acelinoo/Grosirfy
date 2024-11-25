import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landingPage";
import Daftar from "./pages/daftar";
import Login from "./pages/login";
import AOS from "aos";
import "aos/dist/aos.css"; // import style AOS
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/daftar" element={<Daftar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;
AOS.init({
  duration: 1000, // durasi animasi dalam milidetik
  once: true, // animasi hanya dijalankan sekali
});
