<template>
	<div class="fixed flex justify-center w-full bottom-4">
		<nav class="container flex items-center justify-between px-4 py-4 text-gray-200 border-2 rounded-full w-fit bg-neutral-950 border-muted">
			<ul class="flex space-x-4">
				<li>
					<NuxtLink to="/" :class="isActiveRoute('/') ? 'text-gray-300' : 'hover:text-gray-300'">Home</NuxtLink>
        		</li>
				<li>
					<NuxtLink to="/about" :class="isActiveRoute('/about') ? 'text-gray-300' : 'hover:text-gray-300'">Sobre</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/about" :class="isActiveRoute('/about') ? 'text-gray-300' : 'hover:text-gray-300'">Projetos</NuxtLink>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
export default {
  	name: "Header",
  	methods: {
  	  	isActiveRoute(path) {
  	  	  	return this.$route.path === path;
  	  	}
  	}
};
</script>
