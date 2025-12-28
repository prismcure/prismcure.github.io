# Dockerfile for Backend (Express API)

# FROM - Base image to build from (official Node.js image)
FROM node:25-alpine

# WORKDIR - Set working directory inside container
# All subsequent commands run from this directory
WORKDIR /app

# COPY package files first (for better caching)
# Docker caches layers - if package.json doesn't change, skip npm install
COPY package*.json ./

# RUN - Execute command during image build
# Install production dependencies only
RUN npm ci --only=production

# COPY all source code
COPY . .

# EXPOSE - Document which port the app uses
# This is informational; doesn't actually publish the port
EXPOSE 3000

# CMD - Command to run when container starts
# Use JSON array format
CMD ["node", "server.js"]
