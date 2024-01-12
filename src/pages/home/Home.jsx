import React from 'react';
// import Navbar from '/src/components/navbar/Navbar';
// import Footer from '/src/components/footer/Footer';
// import Slider from '/src/components/slider/Slider';
// import Fontview from '/src/components/frontview/fontview';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Fontview from '../../components/frontview/fontview';
import Slider from '../../components/slider/Slider';
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
