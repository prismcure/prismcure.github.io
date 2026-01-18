# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PRISMCURE is a personal portfolio website built as a full-stack learning project, demonstrating modern web development practices. The project consists of a React frontend served via Vite and a Node.js/Express backend API, designed for deployment to GitHub Pages.

**Key Characteristics:**
- Monorepo structure with separate `frontend/` and `backend/` directories
- Frontend is a static single-page application (SPA) that can run standalone
- Backend provides API endpoints for dynamic data (projects, about info)
- Frontend is deployed to GitHub Pages; backend runs locally or in Docker

## Architecture

### Frontend (`frontend/`)
- **Framework**: React 19 with functional components and hooks
- **Build Tool**: Vite 7 (modern replacement for Create React App)
- **Structure**: Component-based architecture with all components in `App.jsx`
- **State Management**: React hooks (`useState`, `useEffect`) - no external state management
- **Styling**: CSS3 with theming support (dark/light mode via CSS variables)
- **API Integration**: Fetches data from backend API at `http://localhost:3000/api/projects`

**Key Components:**
- Single-page app with tab-based navigation (Home, Publications, Blog, CV, Teaching, Technical Skills, Outreach)
- Theme toggle functionality with localStorage persistence
- Dynamic data fetching for publications/projects from backend API

### Backend (`backend/`)
- **Framework**: Express 5 (minimal web framework)
- **Runtime**: Node.js 25 with ES modules (`"type": "module"` in package.json)
- **API Pattern**: RESTful JSON API
- **Data Storage**: File-based JSON storage in `backend/data/projects.json`
- **CORS**: Enabled to allow frontend (port 5173) to connect

**API Endpoints:**
- `GET /` - API information and endpoint list
- `GET /api/about` - Personal information
- `GET /api/projects` - List of research projects/applications

### Deployment
- **GitHub Pages**: Automated deployment via GitHub Actions (`.github/workflows/deploy.yml`)
- **Workflow**: Triggers on push to `main` or manual dispatch
- **Build Process**: Frontend is built and deployed; backend is not deployed (static site only)
- **Base Path**: Currently set to `/` for organization repo (`prismcure.github.io`)

## Development Commands

### Frontend Development
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start with nodemon (auto-restart on changes)
npm start            # Start server (http://localhost:3000)
```

### Docker Development
```bash
docker-compose build        # Build images
docker-compose up           # Start containers (frontend + backend)
docker-compose up -d        # Start in background
docker-compose down         # Stop containers
docker-compose logs backend # View backend logs
docker-compose logs frontend # View frontend logs
docker-compose up --build   # Rebuild and start
```

**Docker Architecture:**
- Two services: `backend` and `frontend`
- Volume mounting for hot-reloading during development
- Frontend depends on backend (`depends_on: backend`)
- Custom network: `prismcure-network`

## Important Configuration Files

### `frontend/vite.config.js`
- Controls base path for deployment
- Current setting: `base: '/'` (for organization repo)
- Change to `base: '/prismcure/'` if using user repo (`username.github.io/prismcure`)

### `docker-compose.yml`
- Port mappings: frontend (5173), backend (3000)
- Volume mounts exclude `node_modules` to avoid conflicts
- Environment: `NODE_ENV=development`

### `.github/workflows/deploy.yml`
- Builds frontend with Node 20 (not Node 25 - GitHub Actions compatibility)
- Deploys only `frontend/dist` to GitHub Pages
- Requires GitHub Pages source set to "GitHub Actions" in repo settings

## Development Workflow

1. **Local Development (without Docker):**
   - Run backend first: `cd backend && npm run dev`
   - Run frontend separately: `cd frontend && npm run dev`
   - Frontend will connect to backend on `localhost:3000`

2. **Local Development (with Docker):**
   - `docker-compose up` starts both services
   - Access frontend at `http://localhost:5173`
   - Access backend API at `http://localhost:3000`

3. **Deployment:**
   - Push to `main` branch triggers automatic GitHub Pages deployment
   - Only frontend is deployed (static build)
   - Backend API calls will fail in production unless backend is deployed separately

## Key Architectural Patterns

### Frontend Patterns
- **Component Organization**: All components defined in single `App.jsx` file (not split into separate files)
- **Tab Navigation**: Conditional rendering based on `activeTab` state
- **Theme System**: Uses CSS custom properties with `data-theme` attribute on `<html>`
- **Data Fetching**: `useEffect` hook with async/await pattern
- **Error Handling**: Loading and error states for API calls

### Backend Patterns
- **ES Modules**: Uses `import`/`export` syntax (not CommonJS `require`)
- **Async Route Handlers**: File I/O operations use `async/await` with error handling
- **CORS Middleware**: Allows all origins (suitable for development)
- **JSON File Storage**: Projects data stored in `backend/data/projects.json`

## Production Considerations

**Current Limitation**: The frontend in production (GitHub Pages) cannot connect to the backend API since:
1. Backend is not deployed to any hosting service
2. Frontend hardcodes `http://localhost:3000` for API calls
3. GitHub Pages only serves static files (the built frontend)

**For full production deployment**, you would need to:
1. Deploy backend to a cloud service (e.g., Vercel, Railway, Render)
2. Update frontend API calls to use production backend URL
3. Configure environment variables for different environments

## GitHub Pages Setup

The repository is configured for deployment as an **organization repository** (`prismcure.github.io`):
- GitHub Pages source: **GitHub Actions** (not "Deploy from a branch")
- Base path: `/` (root of domain)
- Deployment URL: `https://prismcure.github.io`

If repository structure changes (e.g., becomes `username.github.io/prismcure`), update `base` in `vite.config.js` accordingly.

## Special Notes

- **No Test Suite**: Project does not currently include tests (Jest, React Testing Library, etc.)
- **No TypeScript**: Uses plain JavaScript (ES6+) throughout
- **No Build Tools for Backend**: Backend uses plain Node.js without transpilation
- **Educational Purpose**: Built as a learning project to demonstrate full-stack development skills
- **File-Based Data**: Backend uses JSON files instead of a database
