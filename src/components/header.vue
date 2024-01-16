<template>
    <div class="absolute px-3 text-gray-200 transform -translate-x-1/2 border-2 rounded-full bg-primary-900 bottom-4 left-1/2 px border-muted">
      <nav class="container flex items-center justify-between py-4 mx-auto">
        <ul class="flex space-x-4">    
          <span class="text-5xl text-green-800 i-mdi-home hover:i-mdi-home-alert"></span>
          <li><NuxtLink to="/" class="hover:text-gray-300">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="hover:text-gray-300">Sobre</NuxtLink></li>
          <li><NuxtLink href="#" class="hover:text-gray-300">Contato</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </template>

<script>
export default {
    name: 'Header',
}
</script>