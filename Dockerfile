# Frontend Dockerfile
FROM node:16 as frontend-build
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install
RUN npm run build

# Backend Dockerfile
FROM node:16
WORKDIR /app
COPY backend/ .
COPY --from=frontend-build /app/frontend/build ./public
RUN npm install
EXPOSE 5001
CMD ["npm", "start"]
