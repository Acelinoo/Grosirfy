import React from "react";
import BannerGrosirfy from "../components/banner/bannerGrosirfy";
import FormDaftar from "../components//form/formDaftar/formDaftar";

const DaftarPage = () => {
  return (
    <div className="flex h-screen ">
      <BannerGrosirfy />
      <FormDaftar />
    </div>
  );
};

export default DaftarPage;
