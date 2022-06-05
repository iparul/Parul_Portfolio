import React from "react";
import Body from "../body/index";
import Header from "../header/index";
import Footer from "../footer/index";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
