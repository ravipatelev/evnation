import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const menuMarginContext = createContext();

const Layout = ({ children }) => {
  const [menuMargin, setMenuMargin] = useState(true);

  return (
    <div id="app">
      <menuMarginContext.Provider value={[menuMargin, setMenuMargin]}>
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
      </menuMarginContext.Provider>
    </div>
  );
};

export default Layout;
