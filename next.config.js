/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'skillicons.dev',
            }
        ]
    }
}

module.exports = nextConfig
