// import { promises as fs } from "fs";
// import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = () => {
  // const packageJsonPath = path.join(process.cwd(), "package.json");

  let packageJson = {};
  // try {
  //   packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  // } catch (error) {
  //   console.error("Error reading package.json:", error);
  // }

  return {
    compiler: {
      styledComponents: true,
    },
    env: {
      // APP_VERSION: packageJson.version,
      APP_VERSION: "0.0.1",
    },
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,

    // output: "export",
    // basePath: "/cube",
    // assetPrefix: "/cube/",
  };
};

export default nextConfig;