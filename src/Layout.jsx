import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const Layout = ({ children }) => {

  return (
    <div id="app">
        <ScrollToTop>
          <div className="myHeader bg-dark headerMargin">
            <Header />
          </div>
          {children}
          <a
            href="https://wa.me/918233024290"
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
          >
            <i className="bi bi-whatsapp fs-4"></i>
          </a>
          <div className="bg-dark myFooter">
            <Footer />
          </div>
        </ScrollToTop>
    </div>
  );
};

export default Layout;
