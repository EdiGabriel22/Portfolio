<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { LucideMenu, LucideX } from "lucide-vue-next";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import logoUrl from "~/assets/logo.svg?url";

const props = withDefaults(
	defineProps<{
		variant?: "default" | "secondary" | "auto";
	}>(),
	{
		variant: "default",
	},
);

const links = [
	{ label: "Início", to: "/" },
	{ label: "Projetos", to: "/projetos" },
	{ label: "Sobre", to: "/sobre" },
];

const route = useRoute();
const isMenuOpen = ref(false);
const isPastHero = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
	isMenuOpen.value = false;
};

const isHomePage = computed(() => route.path === "/");
const shouldTrackHero = computed(
	() => props.variant === "auto" && isHomePage.value
);

const headerVariant = computed<"default" | "secondary">(() => {
	if (props.variant === "default" || props.variant === "secondary") {
		return props.variant;
	}

	return isPastHero.value ? "default" : "secondary";
});

const isSolidHeader = computed(() => headerVariant.value === "default");

const handleScroll = () => {
	if (!shouldTrackHero.value) {
		isPastHero.value = true;
		return;
	}

	const heroSection = document.getElementById("hero-section");
	if (!heroSection) {
		isPastHero.value = false;
		return;
	}

	const rect = heroSection.getBoundingClientRect();
	isPastHero.value = rect.bottom < 100;
};

const iconColorClass = computed(() =>
	isSolidHeader.value ? "text-primary" : "text-secondary"
);

watch(
	() => [route.path, props.variant],
	() => {
		closeMenu();
		if (import.meta.client) {
			handleScroll();
		}
	}
);

onMounted(() => {
	handleScroll();
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<div
		class="fixed top-7 md:top-9 z-30 w-full md:w-fit mx-auto left-1/2 -translate-x-1/2 px-7 md:px-0"
	>
		<header
			class="h-fit flex items-center justify-between gap-6 overflow-hidden rounded-[18px] border border-white/10 px-6 py-3 shadow-[0_0_2px_rgba(0,0,0,0.1),0_1px_8px_rgba(0,0,0,0.12)] backdrop-blur-md backdrop-saturate-150 w-full md:w-auto"
			:class="isSolidHeader ? 'bg-primary' : ''"
		>
			<NuxtLink to="/" @click="closeMenu">
				<img :src="logoUrl" alt="Logo" class="size-6 md:size-8" />
			</NuxtLink>

			<!-- Menu Desktop -->
			<nav
				aria-label="Navegação principal"
				class="hidden md:flex items-center gap-4 text-[16px] font-medium tracking-[0.16em]"
			>
				<Button
					v-for="link in links"
					:key="link.to"
					variant="link"
					as-child
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
				class="md:hidden flex items-center justify-center size-10 rounded-md hover:bg-white/10 transition-colors"
				:class="iconColorClass"
				aria-label="Toggle menu"
				:aria-expanded="isMenuOpen"
			>
				<LucideMenu v-if="!isMenuOpen" class="size-6" />
				<LucideX v-else class="size-6" />
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
						class="px-6 py-3 text-[16px] font-medium tracking-[0.16em] hover:bg-white/10 transition-colors"
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
