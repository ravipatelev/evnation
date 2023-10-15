import React, { createContext, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import EvCalculator from "./components/EvCalculator/EvCalculator";
import Models from "./components/Models/Models";
import BookFreeTestRide from "./components/BookFreeTestRide/BookFreeTestRide";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModelsDetails from "./components/Models/ModelsDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import Four04 from "./components/Four04/Four04";
import Faqs from "./components/Faqs/Faqs";
import Blogs from "./components/Blogs/Blogs";
import ContactUs from "./components/ContactUs/ContactUs";
import TnC from "./components/TnC/TnC";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Feedback from "./components/Feedback/Feedback";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export const menuMarginContext = createContext();

const App = () => {
  const [menuMargin, setMenuMargin] = useState(true);

  useEffect(() => {
    const initializeGoogleAnalytics = () => {
      if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_MEASUREMENT_ID}`;
        script.async = true;

        script.onload = () => {
          window.dataLayer = window.dataLayer || [];
          window.gtag = function () {
            window.dataLayer.push(arguments);
          };

          window.gtag("js", new Date());
          window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID);
        };

        document.head.appendChild(script);
      }
    };

    initializeGoogleAnalytics();
  }, []);

  return (
    <div id="app">
      {console.log("Welcome to EVnation")}
      <menuMarginContext.Provider value={[menuMargin, setMenuMargin]}>
        <Router>
          <ScrollToTop>
            <div className="myHeader bg-dark headerMargin">
              <Header />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/ev-calculator" component={EvCalculator} />
              <Route exact path="/models" component={Models} />
              <Route
                exact
                path="/book-free-test-ride"
                component={BookFreeTestRide}
              />
              <Route exact path="/models/okhi-90" component={ModelsDetails} />
              <Route
                exact
                path="/models/praise-pro"
                component={ModelsDetails}
              />
              <Route
                exact
                path="/models/i-praise-plus"
                component={ModelsDetails}
              />
              <Route
                exact
                path="/models/ridge-plus-gps"
                component={ModelsDetails}
              />
              <Route
                exact
                path="/models/ridge-plus"
                component={ModelsDetails}
              />
              <Route exact path="/models/r30" component={ModelsDetails} />
              <Route exact path="/models/lite" component={ModelsDetails} />
              <Route exact path="/models/dual-55ah" component={ModelsDetails} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/faqs" component={Faqs} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/tnc" component={TnC} />
              <Route exact path="/feedback" component={Feedback} />
              <Route path="*" component={Four04} />
            </Switch>
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
        </Router>
      </menuMarginContext.Provider>
    </div>
  );
};

export default App;
