<script setup lang="ts">
	import {
	ArrowRight,
	Beaker,
	Github,
	Linkedin,
} from "lucide-vue-next";
import { reactive, ref } from "vue";

	const socialLinks = [
		{
			name: "LINKEDIN",
			href: "https://www.linkedin.com/in/edi-gabriel/",
			icon: Linkedin,
		},
		{
			name: "GITHUB",
			href: "https://github.com/EdiGabriel22",
			icon: Github,
		},
		{
			name: "BEHANCE",
			href: "https://www.behance.net/edigabriel_",
			icon: Beaker,
		}
	];

	const formData = reactive({
		name: "",
		email: "",
		message: "",
	});

	const contactEmail = "edigabrielcontato@gmail.com";
	const isSubmitting = ref(false);
	const submitStatus = ref<"idle" | "opening" | "error">("idle");

	const handleSubmit = () => {
		const name = formData.name.trim();
		const email = formData.email.trim();
		const message = formData.message.trim();

		const subject = `Contato pelo Portfólio — ${name || "Novo contato"}`;
		const body = [
			`Nome: ${name}`,
			`Email: ${email}`,
			"",
			"Mensagem:",
			message,
		].join("\n");

		const mailtoLink = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		isSubmitting.value = true;
		submitStatus.value = "opening";

		try {
			window.location.href = mailtoLink;
			formData.name = "";
			formData.email = "";
			formData.message = "";
		} catch {
			submitStatus.value = "error";
		} finally {
			isSubmitting.value = false;
		}
	};
</script>

<template>
	<section class="min-h-screen pt-32 pb-16">
		<div
			class="mx-auto max-w-6xl rounded-[32px] border border-border/60 bg-card/95 p-6 shadow-[0_40px_120px_rgba(10,27,19,0.15)] backdrop-blur md:p-12"
		>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-10">
				<div class="space-y-8 col-span-2">
					<div class="space-y-4">
						<p
							class="text-sm uppercase tracking-[0.5em] text-primary"
						>
							fale comigo
						</p>
						<h2
							class="text-3xl font-semibold leading-tight text-foreground md:text-4xl"
						>
							Entrar em contato
						</h2>
						<p class="text-base text-muted-foreground">
							Conte-me um pouco sobre o projeto, objetivos ou
							dúvidas e eu retorno o mais rápido possível com
							próximos passos.
						</p>
					</div>

					<form @submit.prevent="handleSubmit" class="grid gap-6">
						<div class="grid gap-2">
							<Label
								for="name"
								class="tracking-[0.2em] uppercase text-xs text-muted-foreground"
							>
								Nome completo
							</Label>
							<Input
								id="name"
								v-model="formData.name"
								type="text"
								placeholder="Digite seu nome"
								autocomplete="name"
								required
								class="bg-secondary/30 text-foreground placeholder:text-muted-foreground"
							/>
						</div>

						<div class="grid gap-2">
							<Label
								for="email"
								class="tracking-[0.2em] uppercase text-xs text-muted-foreground"
							>
								Email
							</Label>
							<Input
								id="email"
								v-model="formData.email"
								type="email"
								placeholder="seu@email.com"
								autocomplete="email"
								required
								class="bg-secondary/30 text-foreground placeholder:text-muted-foreground"
							/>
						</div>

						<div class="grid gap-2">
							<Label
								for="message"
								class="tracking-[0.2em] uppercase text-xs text-muted-foreground"
							>
								Mensagem
							</Label>
							<Textarea
								id="message"
								v-model="formData.message"
								rows="6"
								required
								placeholder="Compartilhe detalhes do projeto, prazos ou perguntas."
								class="bg-secondary/30 text-foreground placeholder:text-muted-foreground"
							/>
						</div>

						<p
							v-if="submitStatus === 'opening'"
							class="text-sm text-muted-foreground"
						>
							Abrindo seu e-mail…
						</p>
						<p
							v-else-if="submitStatus === 'error'"
							class="text-sm text-destructive"
						>
							Não foi possível abrir seu cliente de e-mail. Tente novamente.
						</p>

						<Button
							type="submit"
							size="lg"
							class="justify-center"
							:disabled="isSubmitting"
						>
							{{ isSubmitting ? "Preparando…" : "Enviar mensagem" }}
						</Button>
					</form>
				</div>

				<div class="space-y-4">
					<p
						class="text-sm uppercase tracking-[0.45em] text-muted-foreground"
					>
						Redes sociais
					</p>

					<div class="flex flex-col gap-3">
						<NuxtLink
							v-for="link in socialLinks"
							:key="link.name"
							:href="link.href"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button 
							size="lg" 
							class="text-secondary w-full"
							>
								<component
									:is="link.icon"
									class="size-4 shrink-0 "
								/>
								{{ link.name }}
								<ArrowRight
									class="size-4 shrink-0 transition-transform group-hover:translate-x-1"
								/>
							</Button>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
