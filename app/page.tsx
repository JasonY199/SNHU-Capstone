import React from 'react';
import Header from './(components)/Header';
import Footer from './(components)/Footer';
import Hero from "./(components)/Hero";
import Highlights from './(components)/Highlights';
import TravelTips from './(components)/TravelTips';
import Testimonials from './(components)/Testimonials';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto max-w-screen-lg px-4">
          <Hero />
          <Highlights />
          <TravelTips />
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
