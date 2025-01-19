/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(glb|gltf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name][ext]',
        },
      },
      {
        test: /\.bin$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name][ext]',
        },
      }
    );
    
    return config;
  },
  // Increase memory limit and optimize for large assets
  experimental: {
    largePageDataBytes: 128 * 1000000,
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'],
  },
};

export default nextConfig;
