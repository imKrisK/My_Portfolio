# Use official Node.js image as the build environment
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline --no-audit

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets from builder
FROM node:20-alpine AS runner
WORKDIR /app

# Install only production dependencies
COPY package.json package-lock.json ./
RUN npm ci --only=production --prefer-offline --no-audit

# Copy built app and public assets
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/package.json ./
COPY --from=builder /app/src ./src

# Expose port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
