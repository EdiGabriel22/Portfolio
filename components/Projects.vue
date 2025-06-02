<template>
	<section id="projects" class="px-6 py-20 bg-beige text-dark">
		<h2 class="mb-12 text-3xl font-semibold">Principais Trabalhos</h2>
		<div class="grid gap-8 md:grid-cols-2">
			<div
				v-for="p in projects"
				:key="p.id"
				class="overflow-hidden transition shadow rounded-xl hover:shadow-lg">
				<img :src="p.image" alt="" class="w-full" />
				<div class="p-4">
					<h3 class="text-xl font-bold">{{ p.title }}</h3>
					<p class="text-sm text-gray-500">{{ p.category }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	const projects = [
		{
			id: 1,
			image: "https://placehold.co/600x400",
			title: "Viva Sorte",
			category: "Product Design, Desenvolvimento",
		},
		{
			id: 2,
			image: "https://placehold.co/600x400",
			title: "Cartão da Gente",
			category: "Product Design",
		},
	];
</script>
