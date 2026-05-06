-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  full_name VARCHAR(255),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Properties Table
CREATE TABLE IF NOT EXISTS properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  location VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  bedrooms INT DEFAULT 1,
  bathrooms INT DEFAULT 1,
  amenities JSONB,
  images TEXT[],
  available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  property_id UUID NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_property_id ON bookings(property_id);
CREATE INDEX IF NOT EXISTS idx_properties_location ON properties(location);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Insert sample properties
INSERT INTO properties (title, description, location, price, bedrooms, bathrooms, amenities, available)
VALUES 
  ('Modern Downtown Apartment', 'Beautiful 2-bed apartment in downtown', 'New York, NY', 2500.00, 2, 2, '["WiFi", "Parking", "Gym"]'::jsonb, true),
  ('Cozy Beach House', 'Lovely beachfront property', 'Miami, FL', 3500.00, 3, 2, '["Ocean View", "Pool", "BBQ Grill"]'::jsonb, true),
  ('Suburban Family Home', 'Spacious family home with garden', 'Austin, TX', 1800.00, 4, 3, '["Garden", "Garage", "School Nearby"]'::jsonb, true),
  ('Luxury Penthouse', 'High-end penthouse with city views', 'Los Angeles, CA', 5000.00, 3, 3, '["Rooftop", "Concierge", "Spa"]'::jsonb, true),
  ('Studio Apartment', 'Compact studio in trendy neighborhood', 'San Francisco, CA', 2000.00, 1, 1, '["WiFi", "Public Transit"]'::jsonb, true);
