"use client";

import { useState } from 'react';

interface SearchbarProps {
  onSearch: (query: string) => void;
  onSortChange: (sortOption: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch, onSortChange }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // Call the parent function to filter results
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onSortChange(value); // Call the parent function to sort results
  };

  return (
    <div className="max-w-2xl mx-auto mt-4">
      <form className="flex items-center justify-between">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full mr-4">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-white border border-gray-300 text-font-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm text-font-secondary whitespace-nowrap">Sort by:</label>
          <select
            id="sort"
            className="bg-white border border-gray-300 text-font-primary text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            onChange={handleSortChange}
          >
            <option value="price-asc">Price (Ascending)</option>
            <option value="price-desc">Price (Descending)</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
