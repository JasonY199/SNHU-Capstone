"use client";
import React, { useState } from 'react';
import Header from '../(components)/Header';
import Footer from '../(components)/Footer';
import Countries from '../(components)/countries';
import TitleDesc from '../(components)/DestinationDesc';
import Searchbar from '../(components)/Search';

const Destinations: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="max-w-screen-lg mx-auto px-4">
          <TitleDesc />
          <Searchbar onSearch={setSearchQuery} onSortChange={setSortOption} />
          <Countries searchQuery={searchQuery} sortOption={sortOption} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Destinations;