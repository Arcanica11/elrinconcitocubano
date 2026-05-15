/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Moved from experimental.outputFileTracingIncludes (deprecated location)
  outputFileTracingIncludes: {
    '/': [
      './src/app/i18n/locales/en/common.json',
      './src/app/i18n/locales/es/common.json'
    ],
  },
};

export default nextConfig;