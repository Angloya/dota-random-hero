/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'cdn.dota2.com',
                port: '',
            },
        ],
    },
};

module.exports = nextConfig;
