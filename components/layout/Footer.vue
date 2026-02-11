<script setup lang="ts">
withDefaults(
	defineProps<{
		variant?: "default" | "case";
	}>(),
	{
		variant: "default",
	},
);
</script>

<template>
	<section v-if="variant === 'default'" class="p-4 relative">
		<div class="py-16 relative text-center bg-primary rounded-3xl">
			<div class="relative z-10 flex flex-col items-center justify-center">
				<h4 class="md:text-6xl text-3xl font-extralight mb-6 text-secondary">
					Vamos começar um projeto <br />
					sob medida?
				</h4>

				<Button variant="secondary"> Entrar em contato </Button>
			</div>

			<div
				class="absolute top-0 z-0 w-full h-full bg-[radial-gradient(circle_at_50%_85%,rgba(218,197,167,0.12),rgba(12,39,23,0)_55%)]"
			/>
		</div>
	</section>

	<footer
		v-else
		class="rounded-[28px] bg-primary px-6 py-8 text-secondary md:px-10"
	>
		<div
			class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-lg font-medium leading-snug md:max-w-2xl">
				Quer aplicar uma abordagem parecida no seu produto?
			</p>
			<NuxtLink
				to="/contato"
				class="inline-flex w-fit items-center justify-center rounded-full bg-secondary px-5 py-2.5 text-sm font-semibold text-primary transition hover:bg-secondary-100"
			>
				Conversar sobre projeto
			</NuxtLink>
		</div>
	</footer>
</template>
