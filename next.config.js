/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    distDir: "build",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "salon-website-images.s3.us-east-2.amazonaws.com",
                port: "",
            },
        ],
    },
    headers: () => [
        {
            source: "/:path*",
            headers: [
                {
                    key: "Cache-Control",
                    value: "no-store",
                },
            ],
        },
    ],
};

module.exports = nextConfig;
