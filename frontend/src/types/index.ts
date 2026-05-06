export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  images: string[];
  available: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  propertyId: string;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
}

export interface ChatMessage {
  id: string;
  userId: string;
  text: string;
  intent?: string;
  response: string;
  createdAt: Date;
}
