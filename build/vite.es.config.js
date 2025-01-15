// 组件库打包配置
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: "dist/es",
    lib: {
      entry: path.resolve(__dirname, '../packages/components/index.js'),
      name: "TestUI",
      fileName: "index",
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
        },
        // assetFileNames: (assetInfo) => {
        //   if (assetInfo.names === 'index.css') {
        //     return 'style.css'
        //   }
        //   return assetInfo.names
        // }
      }
    }
  }
})