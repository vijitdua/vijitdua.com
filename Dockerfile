# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with minimal runtime environment
FROM node:18-slim

# Install 'serve' to serve the static files
RUN npm install -g serve
WORKDIR /app

# Copy the build artifacts from the 'build' stage
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build"]
