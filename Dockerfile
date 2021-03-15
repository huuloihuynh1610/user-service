FROM node:alpine

# Create app directory
RUN mkdir -p /user-service

# Change workdir
WORKDIR /user-service

# Copy package.json to app directory
COPY package*.json /user-service

# Copy source to app directory
COPY . /user-service

# Install packages
RUN npm install

# Expose
EXPOSE 3000 

