# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to the container
COPY . .

# Expose the port the application runs on
EXPOSE 3000

# Command to run the application
CMD [ "node", "app.js" ]
