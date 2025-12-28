# Prismcure.org - Personal Portfolio Website

A modern full-stack web application built to learn industry-standard technologies for software development roles.

## 🚀 Live Demo

- **Website**: https://[your-username].github.io/prismcure/ (after deployment)
- **Local Frontend**: http://localhost:5173/
- **Local Backend API**: http://localhost:3000/api/projects

## 🛠️ Tech Stack

### Frontend
- **React 19** - Component-based UI library
- **Vite 7** - Lightning-fast build tool
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Responsive styling with Grid and Flexbox

### Backend
- **Node.js 25** - JavaScript runtime
- **Express 5** - Minimal web framework
- **REST API** - RESTful API architecture
- **JSON** - Data storage (file-based)

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control

## 📁 Project Structure

```
prismcure/
├── frontend/                 # React application
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── App.css          # Component styles
│   │   └── main.jsx         # React entry point
│   ├── Dockerfile           # Frontend container config
│   └── package.json         # Frontend dependencies
├── backend/                  # Express API
│   ├── data/
│   │   └── projects.json    # Project data
│   ├── server.js            # Express server
│   ├── Dockerfile           # Backend container config
│   └── package.json         # Backend dependencies
├── docker-compose.yml       # Multi-container orchestration
└── README.md               # This file
```

## 🎯 Features

- **Component-Based Architecture** - Reusable React components
- **Props & State Management** - Dynamic data handling with React hooks
- **RESTful API** - Backend API endpoints for data retrieval
- **Async/Await** - Modern asynchronous JavaScript
- **Error Handling** - Comprehensive error states and loading indicators
- **Responsive Design** - Mobile-friendly layout
- **Containerization** - Docker for consistent environments
- **Hot Module Replacement** - Instant updates during development

## 🚀 Getting Started

### Prerequisites

- Node.js 25+ installed
- Docker Desktop installed and running
- Git (for version control)

### Option 1: Run with Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd prismcure
   ```

2. **Build Docker images**
   ```bash
   docker-compose build
   ```

3. **Start containers**
   ```bash
   docker-compose up
   ```

4. **Access the application**
   - Frontend: http://localhost:5173/
   - Backend API: http://localhost:3000/

5. **Stop containers**
   ```bash
   docker-compose down
   ```

### Option 2: Run Locally (Development)

**Backend:**
```bash
cd backend
npm install
npm run dev
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/api/about` | Personal information |
| GET | `/api/projects` | List of projects |

## 🧩 Key Concepts Learned

### React Concepts
- **Components** - Reusable UI building blocks
- **JSX** - JavaScript XML syntax
- **Props** - Passing data to components
- **useState** - Managing component state
- **useEffect** - Side effects and data fetching
- **Conditional Rendering** - Dynamic UI based on state
- **Array.map()** - Rendering lists

### Backend Concepts
- **Express Routing** - Defining API endpoints
- **Middleware** - Request processing pipeline
- **CORS** - Cross-Origin Resource Sharing
- **Async/Await** - Asynchronous operations
- **File System Operations** - Reading JSON files
- **Error Handling** - Try/catch blocks

### Docker Concepts
- **Images** - Application blueprints
- **Containers** - Running instances
- **Dockerfile** - Build instructions
- **Docker Compose** - Multi-container apps
- **Volume Mounting** - Code synchronization
- **Port Mapping** - Exposing services

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

1. **Full-Stack Development** - Building complete applications
2. **Component Architecture** - Modular, reusable code
3. **API Development** - RESTful API design
4. **Containerization** - Docker for deployment
5. **Modern JavaScript** - ES6+ features, async/await
6. **State Management** - React hooks
7. **Error Handling** - Production-ready error states
8. **Version Control** - Git workflow

## 🔧 Docker Commands Reference

```bash
# Build images
docker-compose build

# Start containers
docker-compose up

# Start in background
docker-compose up -d

# Stop containers
docker-compose down

# View logs
docker-compose logs backend
docker-compose logs frontend

# List running containers
docker ps

# Rebuild and restart
docker-compose up --build
```

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions:

1. **Create a GitHub repository** (if you haven't already)
   ```bash
   git remote add origin https://github.com/[your-username]/prismcure.git
   ```

2. **Update the base path** in `frontend/vite.config.js` if your repository name is different:
   ```js
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Pages setup"
   git push -u origin main
   ```

5. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the **Actions** tab in your repository to see the deployment progress
   - Your site will be available at: `https://[your-username].github.io/prismcure/`

### Manual Deployment (Alternative):

If you prefer manual deployment:
```bash
cd frontend
npm run build
# Then use gh-pages or manually upload the dist folder
```

## 📝 Future Enhancements

- [x] Set up CI/CD pipeline (GitHub Actions)
- [x] Deploy to GitHub Pages
- [ ] Add database (PostgreSQL or MongoDB)
- [ ] Implement user authentication
- [ ] Add more API endpoints (POST, PUT, DELETE)
- [ ] Write unit tests (Jest, React Testing Library)
- [ ] Deploy backend to cloud (AWS, Vercel, Netlify)
- [ ] Add environment variables
- [ ] Implement logging
- [ ] Add API documentation (Swagger)

## 👤 Author

**Anh Le**
- Computer Science Student
- Future TACC Intern
- Python Developer learning full-stack JavaScript

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

Built as a learning project to prepare for software engineering internships, with a focus on technologies used in industry including TACC (Texas Advanced Computing Center).
