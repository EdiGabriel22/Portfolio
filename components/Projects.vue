<template>
	<section id="projects" class="px-6 py-20 bg-secondary text-dark">
		<div class="flex items-center justify-between mb-12">
			<h2 class="text-3xl font-semibold">Principais Trabalhos</h2>
			<a href="#" class="text-sm font-medium hover:underline">VER TODOS</a>
		</div>
		
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Viva Sorte Project -->
			<div class="overflow-hidden transition shadow-lg rounded-2xl hover:shadow-xl group">
				<div class="relative h-80 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
					<div class="text-white text-center">
						<h3 class="text-4xl font-bold mb-2">VIVA SORTE</h3>
						<div class="w-16 h-16 bg-white rounded-full mx-auto flex items-center justify-center">
							<span class="text-blue-600 font-bold text-xl">VS</span>
						</div>
					</div>
				</div>
				<div class="p-6 bg-white">
					<div class="flex items-center justify-between">
						<div>
							<h3 class="text-xl font-bold">Viva Sorte</h3>
							<p class="text-sm text-gray-500 uppercase tracking-wide">PRODUCT DESIGN, DESENVOLVIMENTO</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Cartão da Gente Project -->
			<div class="overflow-hidden transition shadow-lg rounded-2xl hover:shadow-xl group">
				<div class="relative h-80 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
					<div class="text-white text-center">
						<div class="flex items-center justify-center mb-4">
							<div class="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mr-4">
								<span class="text-white font-bold text-xl">C9</span>
							</div>
							<div>
								<h3 class="text-2xl font-bold">cartão</h3>
								<h3 class="text-2xl font-bold">Gente</h3>
							</div>
						</div>
					</div>
				</div>
				<div class="p-6 bg-white">
					<div class="flex items-center justify-between">
						<div>
							<h3 class="text-xl font-bold">Cartão da Gente</h3>
							<p class="text-sm text-gray-500 uppercase tracking-wide">PRODUCT DESIGN</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	// Projects data is now hardcoded in template for better design control
</script>
