# Backend Service Models

Backend models should be created in `backend/src/models/` directory using Sequelize ORM.

## User Model
```typescript
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: DataTypes.STRING,
  phone: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
});

export default User;
```

## Property Model
```typescript
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';

class Property extends Model {}

Property.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  location: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  bedrooms: DataTypes.INTEGER,
  bathrooms: DataTypes.INTEGER,
  amenities: DataTypes.JSONB,
  images: DataTypes.ARRAY(DataTypes.TEXT),
  available: DataTypes.BOOLEAN,
}, {
  sequelize,
  modelName: 'Property',
});

export default Property;
```

## Booking Model
```typescript
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database';
import User from './User';
import Property from './Property';

class Booking extends Model {}

Booking.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  userId: DataTypes.UUID,
  propertyId: DataTypes.UUID,
  checkIn: DataTypes.DATEONLY,
  checkOut: DataTypes.DATEONLY,
  totalPrice: DataTypes.DECIMAL,
  status: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Booking',
});

Booking.belongsTo(User);
Booking.belongsTo(Property);

export default Booking;
```
