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
            },
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com'
            }
        ]
    }
}

module.exports = nextConfig
