<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="text-center p-8">
      <h1 class="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        {{ error?.statusCode || '500' }}
      </h1>
      <h2 class="text-2xl font-semibold text-gray-600 dark:text-gray-400 mb-4">
        {{ error?.statusMessage || 'Algo deu errado' }}
      </h2>
      <p class="text-gray-500 dark:text-gray-500 mb-8">
        {{ error?.message || 'Ocorreu um erro interno no servidor.' }}
      </p>
      <button 
        @click="handleError"
        class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
      >
        Voltar ao início
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>
