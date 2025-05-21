# Project Guide

## Overview

This is a fullstack web application built with React, TypeScript, Express, and Drizzle ORM. The application serves as a landing page for the "Digital Interaction Intelligence Playbook" by Everest Group, which allows users to learn about DII and download a playbook. The application follows a client-server architecture with a React frontend and Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Technology**: React with TypeScript
- **Routing**: Uses Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query for API data fetching and caching
- **Structure**: Component-based architecture with pages, components, and UI elements

### Backend

- **Technology**: Express.js with TypeScript
- **API Structure**: RESTful API endpoints prefixed with `/api`
- **Database**: Drizzle ORM with a PostgreSQL adapter (though PostgreSQL integration is currently minimal)
- **Authentication**: Basic user authentication system planned (schema defined but not fully implemented)

### Database

- **ORM**: Drizzle ORM
- **Schema**: Currently only has a users table with id, username, and password fields
- **Storage**: Currently using in-memory storage (MemStorage class), but configured to use PostgreSQL in production

## Key Components

### Frontend Components

1. **Pages**:
   - `Home.tsx`: Main landing page with multiple sections
   - `NotFound.tsx`: 404 error page

2. **Layout Components**:
   - `Header.tsx`: Navigation header
   - `Footer.tsx`: Page footer
   - `HeroSection.tsx`: Main marketing section
   - `Testimonials.tsx`: User testimonials
   - `FeaturesSection.tsx`: Product features
   - `CTASection.tsx`: Call-to-action section

3. **UI Components**:
   - Extensive library of shadcn/ui components (buttons, cards, inputs, etc.)
   - Custom icon components

### Backend Components

1. **API Routes**: Set up in `server/routes.ts` (currently minimal)
2. **Storage Interface**: Defined in `server/storage.ts` with CRUD operations
3. **Database Schema**: Defined in `shared/schema.ts`

## Data Flow

1. **Frontend to Backend**:
   - React Query for data fetching from API endpoints
   - Form submissions for user actions

2. **Backend to Database**:
   - Express routes handle API requests
   - Storage interface provides database operations
   - Drizzle ORM executes database queries

3. **Authentication Flow**:
   - Schema for users is defined but authentication flow is not yet implemented

## External Dependencies

### Frontend Dependencies
- React for UI
- Wouter for routing
- Tailwind CSS for styling
- shadcn/ui component library
- React Query for data fetching
- Various Radix UI components for accessible UI elements
- Lucide for icons

### Backend Dependencies
- Express.js for the server
- Drizzle ORM for database operations
- Zod for schema validation

## Deployment Strategy

The application is set up to be deployed on Replit with:

1. **Development Mode**:
   - Run with `npm run dev` which uses `tsx` to execute the server
   - Vite handles hot module replacement for the frontend

2. **Production Mode**:
   - Build process: `npm run build`
     - Vite builds the frontend
     - esbuild bundles the server
   - Start with `npm run start` which runs the built server

3. **Database**:
   - Configured to use PostgreSQL in production
   - Database URL expected in environment variables

4. **Environment Configuration**:
   - Development vs production modes handled through NODE_ENV
   - Database connection managed through DATABASE_URL environment variable

## Next Steps

1. **Authentication Implementation**:
   - Complete the user authentication flow using the defined schema
   - Add register/login endpoints and frontend forms

2. **Database Integration**:
   - Switch from in-memory storage to PostgreSQL using Drizzle ORM
   - Run migrations with `npm run db:push`

3. **API Development**:
   - Implement additional API endpoints in server/routes.ts
   - Connect frontend to these endpoints using React Query

4. **Feature Completion**:
   - Implement downloadable playbook functionality
   - Add form capture for lead generation