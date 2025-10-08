import React from "react";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import Footer from "../../components/Footer";

export default function Root() {
  return (
    <div data-theme="light" className=" max-w-[1400px] mx-auto shadow-sm">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
