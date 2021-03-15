FROM node:alpine

# Create app directory
RUN mkdir -p /user-service

# Change workdir
WORKDIR /user-service

# Copy source to app directory
COPY . /user-service

# Install packages
RUN npm install

CMD ["npm", "start"]

