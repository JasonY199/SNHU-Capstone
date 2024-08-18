"use client";

import { useState } from 'react';
import Searchbar from './Search';
import Countries from './countries';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  return (
    <div>
      <Searchbar onSearch={setSearchQuery} onSortChange={setSortOption} />
      <Countries searchQuery={searchQuery} sortOption={sortOption} />
    </div>
  );
};

export default App;
