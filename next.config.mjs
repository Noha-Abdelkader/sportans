/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-global.website-files.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "a.espncdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.thesportsdb.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "r2.thesportsdb.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "c8.alamy.com",
        pathname: "**",
      },
    ],
    localPatterns: [
      {
        pathname: "@/assets",
      },
    ],
  },
  experimental: {
    // fontLoaders: [
    // { loader: "@next/font/google", options: { subsets: ["lato"] } },
    // ],
  },
};

export default nextConfig;
