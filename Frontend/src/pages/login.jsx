import React from "react";
import BannerGrosirfy from "../components/banner/bannerGrosirfy";
import FormLogin from "../components/form/formLogin/formLogin";
const Login = () => {
  return (
    <>
      <div className="flex h-screen ">
        < BannerGrosirfy />
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
