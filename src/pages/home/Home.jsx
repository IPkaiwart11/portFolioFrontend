// import React from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import Footer from '../../components/footer/Footer';
// import Fontview from '../../components/frontview/fontview';
// import Slider from '../../components/slider/Slider';

// Update import statements using the '@' alias
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import Slider from '@/components/slider/Slider';
import Fontview from '@/components/frontview/Fontview';

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
