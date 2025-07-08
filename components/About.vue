<template>
	<section id="about" class="px-6 py-20 bg-secondary text-dark">
		<div class="mx-auto max-w-6xl">
			<div class="grid gap-12 items-center md:grid-cols-2">
				<!-- Profile Image -->
				<div class="flex justify-center md:justify-start">
					<img
						src="https://media.licdn.com/dms/image/v2/D5603AQH0PfHYxOH3fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700247494939?e=1757548800&v=beta&t=jaAHRufd8CpOY9bbFr0AxQDfGiXFh5vgmSQRdXOqCv4"
						alt="Edi Gabriel"
						class="object-cover w-80 h-96 rounded-2xl shadow-lg" />
				</div>
				
				<!-- About Content -->
				<div class="space-y-6">
					<p class="text-lg leading-relaxed text-gray-700">
						Sou designer de produtos com foco em UI/UX e desenvolvimento front-end, apaixonado por criar experiências digitais intuitivas e acessíveis. Trabalho em projetos inovadores, como o Viva Sorte e o Cartão da Gente. Meu trabalho é guiado pela necessidade de encontrar soluções práticas e eficientes, sempre centradas no usuário. Estou constantemente me aprimorando e aberto a novas metodologias para melhorar a experiência digital.
					</p>
					
					<!-- Social Links Grid -->
					<div class="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
						<a
							href="#"
							target="_blank"
							class="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200 transition hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">LINKEDIN</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200 transition hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">GITHUB</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200 transition hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">BEHANCE</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200 transition hover:border-gray-400 hover:bg-gray-50 group">
							<span class="font-medium">TWITTER</span>
							<svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</a>
						
						<a
							href="#"
							target="_blank"
							class="flex justify-between items-center p-4 rounded-lg border-2 border-gray-200 transition hover:border-gray-400 hover:bg-gray-50 group">
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
