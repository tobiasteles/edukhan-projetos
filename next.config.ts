import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // gera HTML estático na pasta /out
  images: { unoptimized: true }, // necessário para next/image em export estático
  trailingSlash: true,
};

export default nextConfig;
