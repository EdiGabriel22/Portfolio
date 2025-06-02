<template>
	<section
		id="about"
		class="flex flex-col items-center gap-12 px-6 py-20 bg-beige text-dark md:flex-row">
		<img
			src="https://placehold.co/400x300"
			alt="Edi Gabriel"
			class="object-cover w-64 h-64 rounded-lg" />
		<div>
			<p class="max-w-md mb-6">
				Sou designer de produtos com foco em UI/UX e desenvolvimento
				front-end...
			</p>
			<div class="flex flex-wrap gap-4">
				<a
					v-for="s in socials"
					:key="s.name"
					:href="s.link"
					target="_blank"
					class="px-4 py-2 transition border rounded hover:bg-dark hover:text-beige">
					{{ s.name }}
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
	const socials = [
		{ name: "LINKEDIN", link: "#" },
		{ name: "GITHUB", link: "#" },
		{ name: "BEHANCE", link: "#" },
		{ name: "TWITTER", link: "#" },
		{ name: "INSTAGRAM", link: "#" },
	];
</script>
