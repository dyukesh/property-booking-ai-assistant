import React, { useState } from 'react';

const SearchPage: React.FC = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('any');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/properties?location=${location}&price=${priceRange}&bedrooms=${bedrooms}`
      );
      const data = await response.json();
      console.log('Search results:', data);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Search Properties</h1>

      <form onSubmit={handleSearch} className="bg-white p-8 rounded-lg shadow mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Prices</option>
              <option value="0-500">$0 - $500</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-2000">$1000 - $2000</option>
              <option value="2000+">$2000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bedrooms</label>
            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="any">Any</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-2 rounded-lg font-semibold transition"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="bg-white p-8 rounded-lg shadow text-center text-gray-500">
        <p>📍 Search results will appear here</p>
        <p className="text-sm mt-2">Sample properties available once you search</p>
      </div>
    </div>
  );
};

export default SearchPage;
