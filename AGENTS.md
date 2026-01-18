# AGENTS.md - Prismcure Portfolio Website

## Commands
- **Frontend dev**: `cd frontend && npm run dev` (Vite on :5173)
- **Backend dev**: `cd backend && npm run dev` (Express on :3000)
- **Lint frontend**: `cd frontend && npm run lint`
- **Build frontend**: `cd frontend && npm run build`
- **Docker**: `docker-compose up --build` (runs both services)

## Architecture
- **frontend/**: React 19 + Vite 7 SPA, deployed to GitHub Pages
- **backend/**: Express 5 REST API with JSON file storage (`backend/data/`)
- API endpoints: `GET /`, `GET /api/about`, `GET /api/projects`
- Frontend fetches from `http://localhost:3000` in dev mode

## Code Style
- ES Modules (`"type": "module"`) in both frontend and backend
- React: functional components with hooks (useState, useEffect)
- JSX in `.jsx` files, standard `.js` for backend
- ESLint with react-hooks and react-refresh plugins
- Double quotes for JSX attributes, CSS in separate `.css` files
- Components defined as functions, exported default at file end
- Async/await for data fetching with try/catch error handling
- No TypeScript - pure JavaScript (ES6+)
