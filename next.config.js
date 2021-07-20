// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  env: {
    AWS_ACCESS_KEY_ID: process.env.ENV_AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.ENV_AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.ENV_AWS_REGION,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  async redirects() {
    return [
      {
        source: '/trabalhos',
        destination: '/trabalhos/model',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['photography-web.s3.sa-east-1.amazonaws.com'],
  },
};
 
module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  
  // your other plugins here

], nextConfig);
