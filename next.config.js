/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
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
                protocol: "https",
                hostname: "cdn.sanity.io"
            }
        ]
    }
}

module.exports = nextConfig
