# Property Booking AI Assistant

An intelligent web application that helps users search for properties, make bookings, and get information using AI-powered chat. The system integrates structured databases with unstructured knowledge retrieval through AWS Bedrock.

## 🏗️ System Architecture

```
User → Frontend (React) → Backend (Node.js/Express) → Multiple Data Sources
                                ↓
                    ┌─────────────┼─────────────┐
                    ↓             ↓             ↓
              Property DB    Booking DB    Bedrock KB
                    └─────────────┼─────────────┘
                                ↓
                         AI Model Response
                                ↓
                         Response to User
```

## 🎯 Features

- 🔍 **Property Search** - Search and filter properties from database
- 📅 **Booking Management** - Create, view, and manage property bookings
- 💬 **AI Chat Assistant** - Natural language queries with intent detection
- 📚 **Knowledge Base** - AWS Bedrock integration for unstructured information
- 🔐 **Authentication** - User authentication and authorization
- 📱 **Responsive UI** - Modern, mobile-friendly interface
- 🐳 **Docker Support** - Complete containerization for easy deployment

## 🚀 Quick Start

### Using Docker Compose

```bash
git clone https://github.com/dyukesh/property-booking-ai-assistant.git
cd property-booking-ai-assistant
cp .env.example .env
docker-compose up -d
docker-compose exec backend npm run migrate
```

Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000/api

## 📋 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, PostgreSQL, Sequelize
- **AI**: AWS Bedrock
- **Infrastructure**: Docker, Docker Compose

## 📖 Documentation

Full documentation available in the project.
