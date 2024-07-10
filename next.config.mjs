import { promises as fs } from 'fs';
import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));

  return {
    compiler: {
      styledComponents: true,
    },
    env: {
      APP_VERSION: packageJson.version,
    },
  };
};

export default nextConfig;
