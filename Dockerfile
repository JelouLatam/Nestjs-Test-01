# Multistage techniques and buildkit to optimize our app (https://pnpm.io/docker)

# Base stage with Node.js and pnpm configuration
FROM node:20-slim AS base
# Set the PNPM_HOME environment variable to manage pnpm installations and add it to the PATH for easy access
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
# Enable Corepack to manage pnpm
RUN corepack enable
# Set the working directory inside the container
WORKDIR /app
# Copy all files from the current directory in the host to the working directory in the container
COPY . .

# Production dependencies installation stage
FROM base AS prod-deps
# Use BuildKit's caching to speed up builds by reusing the stored pnpm cache
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Application build stage
FROM base AS build
# Install all dependencies necessary for building the application
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
# Run the build script defined in package.json to compile the application
RUN pnpm run build

# Final image, containing only the necessary files
FROM base
# Copy installed production node_modules from the prod-deps stage
COPY --from=prod-deps /app/node_modules /app/node_modules
# Copy the built application from the build stage
COPY --from=build /app/dist /app/dist
# Expose the port the app runs on
EXPOSE 3000
# Command to start the application
CMD ["pnpm", "start"]
