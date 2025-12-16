<template>
	<motion.article
		:initial="{ opacity: 0, y: 28 }"
		:animate="inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }"
		:transition="{
			duration: 0.6,
			ease: 'easeOut',
			delay: (index ?? 0) * 0.08,
		}"
		class="group relative aspect-[16/9] cursor-pointer overflow-hidden rounded-[16px] bg-[#dac5a7] shadow-[0_8px_30px_rgba(12,39,23,0.12)] transition duration-500 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
		tabindex="0"
	>
		<div class="absolute inset-0">
			<img
				v-if="image"
				:src="image"
				:alt="title"
				class="h-full w-full object-cover"
				loading="lazy"
			/>
			<div v-else class="h-full w-full bg-[#dac5a7]" />
		</div>

		<div class="absolute left-2 top-2 flex gap-2" aria-hidden="true">
			<span
				v-for="tag in tags"
				:key="tag"
				class="rounded-full bg-[rgba(4,25,32,0.25)] px-3 py-1 text-xs font-medium leading-none tracking-[0.02em] text-white/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-[1px]"
			>
				{{ tag }}
			</span>
		</div>

		<div class="absolute inset-x-2 bottom-2 ">
			<div
				class="pointer-events-none relative rounded-[16px] bg-zinc-900/40 px-4 py-3 text-left text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[1px] transition duration-500 ease-out md:opacity-0 md:translate-y-[120%] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
			>
				<p class="text-xl font-semibold leading-tight tracking-tight">
					{{ title }}
				</p>
				<p class="text-sm font-medium text-white/90 leading-snug">
					{{ description }}
				</p>
			</div>
		</div>
	</motion.article>
</template>

<script setup lang="ts">
import { motion } from "motion-v";

withDefaults(defineProps<{
	title: string;
	description: string;
	tags: string[];
	image?: string;
	index?: number;
	inView?: boolean;
}>(), {
	inView: true,
});
</script>
