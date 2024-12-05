import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <HomePage /> */}
      {/* <AboutUs />
      /* <Services />
      <Contact /> */}
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
