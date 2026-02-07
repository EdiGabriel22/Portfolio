<template>
	<section
		id="hero-section"
		class="relative m-4 flex h-[calc(100vh-32px)] flex-col items-center justify-center gap-4 rounded-4xl border-4 border-primary-900 bg-primary text-center text-[#dac5a7]"
	>
		<motion.div
			:initial="{ opacity: 0, y: 32 }"
			:animate="{ opacity: 1, y: 0 }"
			:transition="{ duration: 0.7, ease: 'easeOut' }"
			class="z-10"
		>
			<div
				class="text-base font-medium leading-relaxed tracking-[0.04em] md:text-lg"
			>
				<p>Oi! sou Edi Gabriel,</p>
				<p>Tem um projeto em mente? Vamos conversar→</p>
			</div>

			<h1
				class="text-4xl font-semibold leading-[1.05] tracking-[0.03em] md:text-[64px] lg:text-[96px]"
			>
				Product designer
				<br />
				& Front-End Developer
			</h1>
		</motion.div>
		
		<motion.div
			:initial="{ opacity: 0.2 }"
			:animate="{ opacity: 1 }"
			:transition="{ duration: 0.9, ease: 'easeOut' }"
			class="absolute -bottom-6 z-0 h-full w-full bg-[radial-gradient(circle_at_50%_85%,rgba(218,197,167,0.12),rgba(12,39,23,0)_55%)]"
		/>
	</section>
</template>

<script setup lang="ts">
	import { motion } from "motion-v";
</script>
