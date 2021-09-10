import React from "react";

import Header from "../partials/Header";
import AboutIntro from "../partials/AboutIntro";
import FeaturesWorld from "../partials/FeaturesWorld";
import News from "../partials/News";
import Cta from "../partials/Cta";
import Footer from "../partials/Footer";

function About() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className='flex-grow'>
        {/*  Page sections */}
        <AboutIntro />
      </main>

      {/*  Site footer */}
    </div>
  );
}

export default About;
