# Dockerfile for Frontend (React App)

# FROM - Base image
FROM node:25-alpine

# WORKDIR - Set working directory
WORKDIR /app

# COPY package files
COPY package*.json ./

# Install all dependencies (including devDependencies for Vite)
RUN npm ci

# COPY source code
COPY . .

# EXPOSE - Vite dev server runs on port 5173
EXPOSE 5173

# CMD - Start development server
# --host 0.0.0.0 makes it accessible from outside container
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
