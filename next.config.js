/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "salon-website-images.s3.us-east-2.amazonaws.com",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
