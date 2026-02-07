<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { motion } from "motion-v";

withDefaults(
	defineProps<{
		kicker?: string;
		title?: string;
		description?: string;
	}>(),
	{
		kicker: "em construção",
		title: "Ainda tô montando essa parte",
		description:
			"Prometo que não é desculpa: é backlog. Enquanto isso, você pode voltar pro início ou me chamar no contato.",
	}
);
</script>

<template>
	<section
		class="relative m-4 flex h-[calc(100vh-32px)] flex-col items-center justify-center gap-4 rounded-4xl border-4 border-primary-900 bg-primary text-center"
	>
		<motion.div
			:initial="{ opacity: 0, y: 28 }"
			:animate="{ opacity: 1, y: 0 }"
			:transition="{ duration: 0.65, ease: 'easeOut' }"
			class="z-10 mx-auto w-full max-w-4xl"
		>
			<p class="text-sm uppercase tracking-[0.5em] opacity-90 text-secondary md:text-base">
				{{ kicker }}
			</p>

			<h1
				class="mt-4 text-4xl font-semibold leading-[1.05] tracking-[0.03em] md:text-[64px] lg:text-[80px] text-secondary"
			>
				{{ title }}
			</h1>

			<p
				class="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed tracking-[0.04em] opacity-90 md:text-lg text-secondary"
			>
				{{ description }}
			</p>

			<div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
				<NuxtLink to="/">
					<Button size="lg" variant="secondary">
						Voltar pro início
					</Button>
				</NuxtLink>

				<NuxtLink to="/contato">
					<Button size="lg" class="text-secondary">
						Falar comigo
					</Button>
				</NuxtLink>
			</div>
		</motion.div>

		<motion.div
			:initial="{ opacity: 0.2 }"
			:animate="{ opacity: 1 }"
			:transition="{ duration: 0.9, ease: 'easeOut' }"
			class="absolute -bottom-6 z-0 h-full w-full bg-[radial-gradient(circle_at_50%_85%,rgba(218,197,167,0.12),rgba(12,39,23,0)_55%)]"
		/>
	</section>
</template>
