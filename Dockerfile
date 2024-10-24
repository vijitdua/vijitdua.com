# Stage 1: Build the application
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./

# Get chromium for reactSnap
RUN apt-get update && apt-get install -y \
  chromium \
  libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxi6 libxtst6 libnss3 libxrandr2 \
  libasound2 libatk1.0-0 libgtk-3-0 libxss1 libxshmfence1 libgbm1 libglib2.0-0

# Give path to puppeteer
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

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
