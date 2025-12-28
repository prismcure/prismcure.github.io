// Import Express - the web framework
import express from 'express';
// Import CORS - allows frontend (different port) to talk to backend
import cors from 'cors';
// Import fs (file system) to read files
import fs from 'fs/promises';
// Import path to work with file paths
import path from 'path';
// Import url to get directory name in ES modules
import { fileURLToPath } from 'url';

// Get current directory (needed for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create an Express application
const app = express();
// Define the port our server will listen on
const PORT = 3000;

// ===== MIDDLEWARE =====
// Middleware are functions that run before your routes
// Think of them like decorators in Python

// Enable CORS - allows requests from frontend (localhost:5173)
app.use(cors());

// Parse JSON bodies - converts JSON in requests to JavaScript objects
app.use(express.json());

// ===== ROUTES =====
// Routes are endpoints that respond to HTTP requests

// GET / - Root endpoint (home page of API)
app.get('/', (req, res) => {
  // req = request object (data from client)
  // res = response object (send data back to client)
  res.json({
    message: 'Welcome to Prismcure API!',
    endpoints: {
      projects: '/api/projects',
      about: '/api/about'
    }
  });
});

// GET /api/about - Returns information about you
app.get('/api/about', (req, res) => {
  res.json({
    name: 'Anh Le',
    title: 'Computer Science Student',
    bio: 'Learning full-stack development for TACC internship',
    skills: ['Python', 'React', 'JavaScript', 'Node.js', 'Docker'],
    education: 'Computer Science',
    location: 'North Dakota'
  });
});

// GET /api/projects - Returns list of projects
// This is an ASYNC function because we read from a file
app.get('/api/projects', async (req, res) => {
  try {
    // Read the projects.json file
    const filePath = path.join(__dirname, 'data', 'projects.json');
    const data = await fs.readFile(filePath, 'utf-8');

    // Parse JSON string into JavaScript object
    const projects = JSON.parse(data);

    // Send the projects as JSON response
    res.json(projects);
  } catch (error) {
    // If something goes wrong, send error response
    console.error('Error reading projects:', error);
    res.status(500).json({
      error: 'Failed to load projects',
      message: error.message
    });
  }
});

// ===== START SERVER =====
// Listen on the specified port
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 API endpoints:`);
  console.log(`   - GET http://localhost:${PORT}/`);
  console.log(`   - GET http://localhost:${PORT}/api/about`);
  console.log(`   - GET http://localhost:${PORT}/api/projects`);
});
