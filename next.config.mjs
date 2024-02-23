/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "black_hole-3kf-1-q4182424.deta.app",
            },
            {
                protocol: "https",
                hostname: "aceternity.com",
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com",
            },
        ],
    },
};

export default nextConfig;
