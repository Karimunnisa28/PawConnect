#!/bin/bash

echo "Starting deployment process..."

# Frontend Build
echo "Building frontend..."
cd frontend
npm install
npm run build

# Backend Preparation
echo "Preparing backend..."
cd ../backend
npm install

# Environment Setup
echo "Setting up environment variables..."
cp .env.example .env

# Database Backup
echo "Creating database backup..."
mongodump --db pawconnect --out ./backup

# PM2 Process Management
echo "Configuring PM2..."
pm2 delete pawconnect || true
pm2 start server.js --name pawconnect

echo "Deployment completed!"
