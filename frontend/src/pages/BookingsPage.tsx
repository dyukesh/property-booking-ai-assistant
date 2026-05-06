import React, { useState, useEffect } from 'react';

const BookingsPage: React.FC = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/bookings`);
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
        <div className="bg-white p-8 rounded-lg shadow text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow text-center text-gray-500">
          <p>📭 You haven't made any bookings yet.</p>
          <a
            href="/search"
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Start Searching
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold">{booking.property}</h3>
              <p className="text-gray-600">Check-in: {booking.checkIn}</p>
              <p className="text-gray-600">Check-out: {booking.checkOut}</p>
              <p className="text-lg font-semibold mt-2">${booking.totalPrice}</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-white text-sm ${
                booking.status === 'confirmed' ? 'bg-green-600' : 
                booking.status === 'pending' ? 'bg-yellow-600' : 
                'bg-red-600'
              }`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
