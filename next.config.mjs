/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: {
            ssr: true,
            displayName: false,
        },
    },
};

export default nextConfig;
