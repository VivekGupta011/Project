/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "webevis.s3.us-west-1.amazonaws.com"
        ],
    },
}

module.exports = nextConfig
