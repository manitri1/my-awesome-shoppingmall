/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화 설정
  images: {
    domains: ["localhost"],
    unoptimized: false, // Vercel에서는 자동 최적화
  },
  // 정적 파일 서빙 설정
  trailingSlash: false,
  // TypeScript 오류 무시 (개발 중)
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint 오류 무시 (개발 중)
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Next.js 15 최적화 설정
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
};

export default nextConfig;
