import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Заменить на имя твоего репозитория
export default defineConfig({
  base: '/wedding-invite/',
  plugins: [react()],
})

