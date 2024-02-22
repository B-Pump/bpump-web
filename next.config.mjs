/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "black_hole-3kf-1-q4182424.deta.app",
            },
        ],
    },
};

export default nextConfig;
