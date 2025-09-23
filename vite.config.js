import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// 배포하려면 base: '/레포지토리명/' 추가

// 추가하고 자동 배포 라이브러리 설치
// npm install gp-pages --save-dev

// 그 다음엔 package.json의 scripts에
// "predeploy": "npm run build",
// "deploy": "gh-pages -d dist"
// 추가

export default defineConfig({
  plugins: [react()],
  base: '/w25w04-state-hosisting/',
})
