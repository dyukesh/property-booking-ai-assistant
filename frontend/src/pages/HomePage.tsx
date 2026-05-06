import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Property Booking AI Assistant
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find your perfect property with AI-powered search and booking assistance
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/search"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Search Properties
          </Link>
          <Link
            to="/chat"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Ask AI Assistant
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🔍 Smart Search</h3>
          <p className="text-gray-600">Find properties using advanced filters and AI suggestions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">📅 Easy Booking</h3>
          <p className="text-gray-600">Book properties in just a few clicks with instant confirmation</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">💬 AI Support</h3>
          <p className="text-gray-600">Get instant answers to all your property questions</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
