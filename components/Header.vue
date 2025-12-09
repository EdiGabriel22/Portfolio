<script setup lang="ts">
const links = [
  { label: 'Projetos', to: '#projects' },
  { label: 'Playground', to: '#playground' },
  { label: 'Sobre', to: '#about' }
];
</script>

<template>
	<header
		class=" fixed top-9 z-30 w-fit mx-auto inset-0 h-fit flex items-center justify-between gap-6 overflow-hidden rounded-[18px] border border-white/10  px-6 py-3 shadow-[0_0_2px_rgba(0,0,0,0.1),0_1px_8px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150"
	>
		<div class="flex items-center gap-3">
			<div class="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#0c2717] shadow-inner">
				<svg
					aria-hidden="true"
					class="h-8 w-8 text-[#dac5a7]"
					fill="currentColor"
					viewBox="0 0 64 64"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M32 7c-7.18 0-13 5.82-13 13 0 3.79 1.62 7.19 4.26 9.52L32 39l8.74-9.48C43.38 27.19 45 23.79 45 20c0-7.18-5.82-13-13-13z"
					/>
					<path
						d="M32 57c7.18 0 13-5.82 13-13 0-3.79-1.62-7.19-4.26-9.52L32 25l-8.74 9.48C20.62 36.81 19 40.21 19 44c0 7.18 5.82 13 13 13z"
					/>
					<path
						d="M7 32c0-7.18 5.82-13 13-13 3.79 0 7.19 1.62 9.52 4.26L39 32l-9.48 8.74C27.19 43.38 23.79 45 20 45 12.82 45 7 39.18 7 32z"
					/>
					<path
						d="M57 32c0 7.18-5.82 13-13 13-3.79 0-7.19-1.62-9.52-4.26L25 32l9.48-8.74C36.81 20.62 40.21 19 44 19c7.18 0 13 5.82 13 13z"
					/>
					<circle cx="32" cy="32" r="4" />
				</svg>
			</div>
		</div>

		<nav aria-label="Navegação principal" class="flex items-center gap-10 text-[16px] font-medium tracking-[0.16em] text-[#dac5a7]">
			<NuxtLink
				v-for="link in links"
				:key="link.to"
				:to="link.to"
				class="transition hover:text-[#f0dfc5]"
			>
				{{ link.label }}
			</NuxtLink>
		</nav>

		<NuxtLink
			to="#contact"
			class="inline-flex h-10 items-center justify-center rounded-[16px] bg-[#dac5a7] px-5 text-[16px] font-medium text-[#0c2717] shadow-[0_1px_4px_rgba(0,0,0,0.18)] transition hover:shadow-[0_4px_14px_rgba(0,0,0,0.22)]"
		>
			Contato
		</NuxtLink>
	</header>
</template>
