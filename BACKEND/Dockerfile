# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json /app

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . /app

# Expose the port your app runs on (make sure it matches the port in your app)
EXPOSE 5000

# Set the entry point for the application
CMD ["node", "index.js"]
