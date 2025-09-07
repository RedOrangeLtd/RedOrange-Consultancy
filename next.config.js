/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // কারণ export এ Next.js image optimization কাজ করে না
  },
};

module.exports = nextConfig;
