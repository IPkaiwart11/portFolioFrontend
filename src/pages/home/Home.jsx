import React from 'react';
import Navbar from '/src/components/navbar/Navbar';
import Footer from '/src/components/footer/Footer';
import Slider from '/src/components/slider/Slider';
import Fontview from '/src/components/frontview/fontview';

function Home() {
  return (
    <>
      <Navbar />
      <Fontview />
      <Slider />
      <Footer />
    </>
  );
}

export default Home;
