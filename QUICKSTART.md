# Property Booking AI Assistant - Quick Start Guide

## Prerequisites
- Docker & Docker Compose installed
- Node.js 18+ (for local development)
- AWS Account (for Bedrock integration)

## Setup with Docker (Recommended)

### 1. Clone and Configure
```bash
git clone https://github.com/dyukesh/property-booking-ai-assistant.git
cd property-booking-ai-assistant
cp .env.example .env
```

### 2. Update Environment Variables
Edit `.env` and add:
```
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
BEDROCK_MODEL_ID=anthropic.claude-v2
BEDROCK_KB_ID=your_kb_id
JWT_SECRET=your_secret_key
```

### 3. Start Services
```bash
docker-compose up -d
```

### 4. Run Migrations
```bash
docker-compose exec backend npm run migrate
```

### 5. Access Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Health Check: http://localhost:5000/api/health

## Local Development

### Backend
```bash
cd backend
npm install
cp ../.env.example .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Implementing Missing Features

### 1. Authentication Controller
Create `backend/src/controllers/auth.controller.ts`:
- Register: Hash password with bcrypt, store user
- Login: Verify credentials, return JWT token
- GetUser: Validate JWT token from request

### 2. Intent Detection Service
Create `backend/src/services/intent.service.ts`:
- Analyze message keywords
- Classify intent (PROPERTY_SEARCH, BOOKING_REQUEST, etc.)
- Call Bedrock if needed

### 3. Bedrock Integration
Create `backend/src/services/bedrock.service.ts`:
```typescript
const bedrockClient = new AWS.Bedrock();
const response = await bedrockClient.invokeModel({
  modelId: process.env.BEDROCK_MODEL_ID,
  body: JSON.stringify({ prompt: userMessage }),
}).promise();
```

### 4. Database Models
Create models in `backend/src/models/`:
- User.ts
- Property.ts
- Booking.ts

## Project Structure
```
property-booking-ai-assistant/
├── frontend/              # React app
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── types/        # TypeScript types
│   └── Dockerfile
├── backend/               # Node.js API
│   ├── src/
│   │   ├── config/       # Database config
│   │   ├── controllers/  # Request handlers
│   │   ├── services/     # Business logic
│   │   ├── models/       # Database models
│   │   ├── routes/       # API routes
│   │   └── middleware/   # Express middleware
│   ├── migrations/        # Database migrations
│   └── Dockerfile
├── docker-compose.yml    # Container orchestration
├── nginx.conf            # Reverse proxy config
├── .env.example          # Environment template
└── README.md             # Full documentation
```

## API Endpoints

### Health Check
- `GET /api/health` - System health status

### Authentication
- `POST /api/auth/register` - Create new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Properties
- `GET /api/properties` - List properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create property (admin)

### Bookings
- `GET /api/bookings` - Get user bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/:id` - Get booking details
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Cancel booking

### Chat/AI
- `POST /api/chat` - Send chat message
- `POST /api/chat/intent` - Detect user intent

## Database

### Tables
- **users**: User accounts with email/password
- **properties**: Property listings with details
- **bookings**: User bookings with dates and pricing

### Indexes
- `idx_bookings_user_id` - Fast user booking lookups
- `idx_bookings_property_id` - Fast property booking lookups
- `idx_properties_location` - Fast location searches
- `idx_users_email` - Fast email lookups

## Troubleshooting

### Database Connection Issues
```bash
docker-compose logs db
docker-compose ps
```

### Backend Not Starting
```bash
docker-compose logs backend
# Check if port 5000 is in use
lsof -i :5000
```

### Frontend Can't Connect to Backend
- Verify `REACT_APP_API_URL` in `.env`
- Check CORS_ORIGIN matches frontend URL
- Ensure backend is running and healthy

### AWS Bedrock Errors
- Verify AWS credentials are correct
- Check Bedrock access in AWS Console
- Ensure model ID and region are correct

## Useful Commands

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f backend
docker-compose logs -f frontend

# Access database
docker-compose exec db psql -U property_user -d property_db

# Run migrations
docker-compose exec backend npm run migrate

# Build images
docker-compose build

# Remove everything
docker-compose down -v
```

## Next Steps

1. **Implement Authentication**
   - JWT token generation and validation
   - Password hashing with bcrypt
   - Middleware for protected routes

2. **Complete Database Models**
   - User, Property, Booking models
   - Relationships and validations
   - Indexes for performance

3. **Implement Bedrock Integration**
   - Intent detection from user messages
   - Knowledge base retrieval
   - Response generation

4. **Add Features**
   - Property filtering and search
   - Booking management
   - Chat interface with AI
   - User profile management

5. **Deploy**
   - Push Docker images to registry
   - Deploy to cloud (AWS, GCP, Azure)
   - Setup CI/CD pipeline

## Support

For issues or questions:
1. Check troubleshooting section
2. Review API documentation
3. Check GitHub issues
4. Create new issue with details

---

**Happy Building! 🚀**
