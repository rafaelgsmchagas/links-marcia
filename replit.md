# Replit.md - Full Stack TypeScript Application

## Overview

This is a full-stack TypeScript application built with React frontend and Express backend. The application appears to be a Linktree-style landing page with a modern design system using shadcn/ui components. The architecture follows a monorepo structure with shared schemas and type definitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: React Router for client-side navigation
- **Build Tool**: Vite for fast development and optimized builds
- **Design System**: Uses "new-york" style from shadcn/ui with extensive component library

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL configured with Neon Database serverless
- **ORM**: Drizzle ORM for database operations
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot reload with tsx for development server

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Auto-generated migrations in `/migrations` directory
- **Validation**: Zod schemas for runtime type validation

### API Layer
- **Structure**: RESTful API with `/api` prefix
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Error Handling**: Centralized error handling middleware
- **Logging**: Request/response logging with timing

### Frontend Components
- **UI Components**: Comprehensive shadcn/ui component library
- **Custom Components**: Specialized components for Linktree functionality
- **Animation**: Framer Motion for smooth animations
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

1. **Frontend to Backend**: React components use TanStack Query to make API calls
2. **Backend Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Storage interface abstracts database operations using Drizzle ORM
4. **Response Flow**: Data flows back through the same layers with proper error handling

## External Dependencies

### Production Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Components**: Radix UI primitives for accessibility
- **Animation**: Framer Motion for smooth animations
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite for frontend, esbuild for backend
- **TypeScript**: Full TypeScript support with strict configuration
- **Development Server**: tsx for backend hot reload
- **Code Quality**: ESLint and Prettier configuration (implied by project structure)

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `/dist/public`
2. **Backend Build**: esbuild bundles server code to `/dist/index.js`
3. **Static Assets**: Frontend assets served from `/dist/public`

### Environment Configuration
- **Database**: Configured via `DATABASE_URL` environment variable
- **Development**: Uses NODE_ENV for environment-specific behavior
- **Production**: Server runs bundled code with static file serving

### Database Management
- **Schema Push**: `npm run db:push` for development schema updates
- **Migrations**: Drizzle generates and manages database migrations
- **Connection**: Uses connection pooling with Neon Database

## Notable Architectural Decisions

1. **Monorepo Structure**: Shared types and schemas between frontend and backend reduce duplication
2. **Storage Abstraction**: IStorage interface allows for easy testing and database switching
3. **Component Library**: shadcn/ui provides consistent, accessible components
4. **Type Safety**: End-to-end TypeScript with Zod validation ensures runtime safety
5. **Modern Tooling**: Vite and esbuild provide fast development and builds
6. **Responsive Design**: Mobile-first approach with elegant animations for modern user experience

The application is designed for scalability with clean separation of concerns and modern development practices.

## Recent Changes

- **July 10, 2025**: Successfully migrated from Lovable to Replit environment
  - Fixed routing system from React Router to wouter for Replit compatibility
  - Updated all external asset references to use local imports
  - Replaced MemStorage with DatabaseStorage using PostgreSQL
  - Created database connection layer using Drizzle ORM with Neon serverless
  - Applied database schema migrations with `npm run db:push`
  - Database is now fully functional and ready for use
  - Added Netlify configuration (note: Netlify incompatible with full-stack - use Vercel/Railway for production)
  - Created deployment guide explaining options for production deployment