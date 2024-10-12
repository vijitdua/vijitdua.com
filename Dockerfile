# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install `serve` to serve the static build files
RUN npm install -g serve

# Expose the port where the app will be served
EXPOSE 3000

# Serve the static files from the build directory
CMD ["serve", "-s", "build"]