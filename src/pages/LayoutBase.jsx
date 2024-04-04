/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const LayoutBase = ({ children }) => {
  return (
    <>
      <Header />
      <Outlet />
      {children}
      <Footer />
    </>
  );
};

export default LayoutBase;
