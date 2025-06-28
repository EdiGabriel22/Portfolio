<template>
	<section id="about" class="px-6 py-20 bg-secondary text-dark">
		<div class="max-w-6xl mx-auto">
			<div class="grid gap-12 md:grid-cols-2 items-center">
				<!-- Profile Image -->
				<div class="flex justify-center md:justify-start">
					<img
						src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
						alt="Edi Gabriel"
						class="object-cover w-80 h-96 rounded-2xl shadow-lg" />
				</div>
				
				<!-- About Content -->
				<div class="space-y-6">
					<p class="text-lg leading-relaxed text-gray-700">
						Sou designer de produtos com foco em UI/UX e desenvolvimento front-end, apaixonado por criar experiências digitais intuitivas e acessíveis. Trabalho em projetos inovadores, como o Viva Sorte e o Cartão da Gente. Meu trabalho é guiado pela necessidade de encontrar soluções práticas e eficientes, sempre centradas no usuário. Estou constantemente me aprimorando e aberto a novas metodologias para melhorar a experiência digital.
					</p>
					
					<!-- Social Links Grid -->
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
						<a
							href="#"
							target="_blank"
							class="flex items-center justify-between p-4 transition border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">LINKEDIN</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex items-center justify-between p-4 transition border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">GITHUB</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex items-center justify-between p-4 transition border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">BEHANCE</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex items-center justify-between p-4 transition border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">TWITTER</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex items-center justify-between p-4 transition border-2 border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">INSTAGRAM</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	// Social links are now hardcoded in template for better design control
</script>
