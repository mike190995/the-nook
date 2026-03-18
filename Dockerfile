# Use the official lightweight Nginx image
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy your static website files to the Nginx server's root directory
COPY . /usr/share/nginx/html

# Expose port 8080 for Cloud Run
EXPOSE 8080