import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            🏠 Property Assistant
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Home</Link>
            <Link to="/search" className="hover:text-blue-200 transition">Search</Link>
            <Link to="/bookings" className="hover:text-blue-200 transition">Bookings</Link>
            <Link to="/chat" className="hover:text-blue-200 transition">Chat</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
