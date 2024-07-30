import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 加载基于 `mode` 的环境变量文件
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: 3000, // 修改开发服务器端口为3000
    },
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    // 根据不同的命令和模式进行条件配置
    ...(command === "serve"
      ? {
          // 开发服务器配置
          server: {
            port: 3000, // 这里可以覆盖之前的端口配置
          },
        }
      : {
          // 构建配置
          build: {
            outDir: "dist", // 输出目录
            sourcemap: mode === "production" ? false : true, // 生产模式下不生成 sourcemap
          },
        }),
  };
});
