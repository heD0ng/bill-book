import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置路径别名
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
    // alias: {
    //   "@": path.resolve(__dirname, "./src"), // src 路径
    //   utils: path.resolve(__dirname, "./src/utils"), // utils 路径
    //   components: path.resolve(__dirname, "./src/components"), // components 路径
    // },
  },
})
