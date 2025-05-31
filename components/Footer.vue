<template>
  <footer class="py-10 text-center bg-dark text-beige">
    <div class="mb-4">EDI GABRIEL</div>
    <div class="flex justify-center gap-6">
      <a v-for="s in socials" :key="s.name" :href="s.link" target="_blank">{{ s.name }}</a>
    </div>
    <div class="mt-6">
      <NuxtLink to="#top" class="underline">TO TOP</NuxtLink>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'INSTAGRAM', link: '#' },
  { name: 'TWITTER', link: '#' },
  { name: 'BEHANCE', link: '#' }
]
</script>
