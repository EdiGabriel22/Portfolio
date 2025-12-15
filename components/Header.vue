<script setup lang="ts">
	import { Button } from "@/components/ui/button";
import { ref } from "vue";

	const links = [
		{ label: "Início", to: "/" },
		{ label: "Projetos", to: "/projetos" },
		{ label: "Sobre", to: "/sobre" },
	];

	const isMenuOpen = ref(false);

	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value;
	};

	const closeMenu = () => {
		isMenuOpen.value = false;
	};
</script>

<template>
	<div class="fixed top-9 z-30 w-full md:w-fit mx-auto left-1/2 -translate-x-1/2 px-4 md:px-0">
		<header
			class="h-fit flex items-center justify-between gap-6 overflow-hidden rounded-[18px] border border-white/10 px-6 py-3 shadow-[0_0_2px_rgba(0,0,0,0.1),0_1px_8px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150 w-full md:w-auto"
		>
			<NuxtLink to="/" @click="closeMenu">
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-[14px] bg-[#0c2717] shadow-inner"
					>
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
			</NuxtLink>

			<!-- Menu Desktop -->
			<nav
				aria-label="Navegação principal"
				class="hidden md:flex items-center gap-6 text-[16px] font-medium tracking-[0.16em] text-[#dac5a7]"
			>
				<Button
					v-for="link in links"
					:key="link.to"
					variant="link"
					as-child
					class="color-red-500"
				>
					<NuxtLink :to="link.to" @click="closeMenu">
						{{ link.label }}
					</NuxtLink>
				</Button>
			</nav>

			<!-- Botão Contato Desktop -->
			<NuxtLink to="/contato" class="hidden md:block">
				<Button size="lg" variant="secondary"> Contato </Button>
			</NuxtLink>

			<!-- Botão Hambúrguer Mobile -->
			<button
				@click="toggleMenu"
				class="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-[#dac5a7] hover:bg-white/10 transition-colors"
				aria-label="Toggle menu"
				aria-expanded="isMenuOpen"
			>
				<svg
					v-if="!isMenuOpen"
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
				<svg
					v-else
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</header>

		<!-- Menu Mobile Expandido -->
		<Transition
			enter-active-class="transition-all duration-300 ease-out"
			enter-from-class="opacity-0 -translate-y-4 max-h-0"
			enter-to-class="opacity-100 translate-y-0 max-h-96"
			leave-active-class="transition-all duration-300 ease-in"
			leave-from-class="opacity-100 translate-y-0 max-h-96"
			leave-to-class="opacity-0 -translate-y-4 max-h-0"
		>
			<nav
				v-if="isMenuOpen"
				class="md:hidden mt-2 rounded-[18px] border border-white/10 bg-background/95 backdrop-blur-md backdrop-saturate-150 shadow-[0_0_2px_rgba(0,0,0,0.1),0_1px_8px_rgba(0,0,0,0.12)] overflow-hidden w-full"
				aria-label="Navegação mobile"
			>
				<div class="flex flex-col py-2">
					<NuxtLink
						v-for="link in links"
						:key="link.to"
						:to="link.to"
						@click="closeMenu"
						class="px-6 py-3 text-[16px] font-medium tracking-[0.16em] text-[#dac5a7] hover:bg-white/10 transition-colors"
					>
						{{ link.label }}
					</NuxtLink>
					<NuxtLink
						to="/contato"
						@click="closeMenu"
						class="mx-4 mt-2 mb-2"
					>
						<Button size="lg" variant="secondary" class="w-full">
							Contato
						</Button>
					</NuxtLink>
				</div>
			</nav>
		</Transition>
	</div>
</template>
