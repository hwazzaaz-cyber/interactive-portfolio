/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@next/svg'],
          as: '*.js',
        },
      },
    },
  },
}

module.exports = nextConfig