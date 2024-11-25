import React from "react";
import Navbars from "../components/navbar/navbar";
import BannerLandingPage from "../components/banner/bannerLandingPage";
import Rekomendasi from "../components/rekomendasi/rekomendasiProduct";
import Footer from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Navbars />
      <BannerLandingPage />
      <Rekomendasi />
      <Footer />
    </>
  );
};

export default Home;
