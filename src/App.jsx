import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import EvCalculator from "./components/EvCalculator/EvCalculator";
import Models from "./components/Models/Models";
import BookFreeTestRide from "./components/BookFreeTestRide/BookFreeTestRide";
import ModelsDetails from "./components/Models/ModelsDetails";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Faqs from "./components/Faqs/Faqs";
import Blogs from "./components/Blogs/Blogs";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TnC from "./components/TnC/TnC";
import Feedback from "./components/Feedback/Feedback";
import Four04 from "./components/Four04/Four04";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Four04 />,
  },
  {
    path: "ev-calculator",
    element: <EvCalculator />,
  },
  {
    path: "models",
    element: <Models />,
  },
  {
    path: "book-free-test-ride",
    element: <BookFreeTestRide />,
  },
  {
    path: "models/okhi-90",
    element: <ModelsDetails />,
  },
  {
    path: "models/praise-pro",
    element: <ModelsDetails />,
  },
  {
    path: "models/i-praise-plus",
    element: <ModelsDetails />,
  },
  {
    path: "models/ridge-plus-gps",
    element: <ModelsDetails />,
  },
  {
    path: "models/ridge-plus",
    element: <ModelsDetails />,
  },
  {
    path: "models/r30",
    element: <ModelsDetails />,
  },
  {
    path: "models/lite",
    element: <ModelsDetails />,
  },
  {
    path: "models/dual-55ah",
    element: <ModelsDetails />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "faqs",
    element: <Faqs />,
  },
  {
    path: "blogs",
    element: <Blogs />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "tnc",
    element: <TnC />,
  },
  {
    path: "feedback",
    element: <Feedback />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
