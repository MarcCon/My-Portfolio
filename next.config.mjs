/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
  },
  // andere Konfigurationseinstellungen können hier ebenfalls aufgenommen werden
};

export default nextConfig;
