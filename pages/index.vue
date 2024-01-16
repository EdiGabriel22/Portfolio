<template>
    <div v-dragscroll class="flex items-center h-screen place-content-center">
        <div  v-dragscroll class="flex overflow-x-auto scroll-snap-type-x-mandatory scroll-behavior-smooth">
            <div v-dragscroll class="flex gap-3 px-20 py-4 snap-start">
                <div class="flex h-[520px] w-[711px] flex-col justify-between gap-6 p-6 transition-colors bg-neutral-900 border-2 border-white hover:bg-neutral-800/80 rounded-3xl">
                    <div class="flex">
                        <div
                            class="w-12 h-12 mr-4 bg-white rounded-full aspect-square"></div>
                        <div>
                            <h1>Edi Gabriel</h1>
        
                            <p>Desenvolvedor Front-End | UI/UX</p>
                        </div>
                    </div>
        
                    <h2 class="h-full">
                        Sempre em busca de novos conhecimentos, me encontro na
                        tecnologia, <br />
                        e por isso tenho buscado cada vez mais estudar e aplicar grandes
                        ideias junto com grandes pessoas!
                    </h2>
        
                    <div class="">
                        <h4>Londrina - PR</h4>
                        <p>Brasil</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { dragscroll } from "vue-dragscroll";
	export default {
		setup() {
  			useSeoMeta({
			  	title: 'Edi Gabriel - Portfólio',
			  	ogTitle: 'Edi Gabriel - Portfólio',
			  	description: 'Edi Gabriel UX/UI Designer & Front-End Developer',
			  	ogDescription: 'Edi Gabriel UX/UI Designer & Front-End Developer',
			  	ogImage: 'https://media.licdn.com/dms/image/D5603AQH0PfHYxOH3fA/profile-displayphoto-shrink_200_200/0/1700247494939?e=1710979200&v=beta&t=9zhtdpwbAeYrZa2GwNNMNB1kn0c6CQ_yRvdWJpoOrQA',
			})
  		},
		data() {
			return {
				
			};
		},
        directives: {
            dragscroll,
        },
	};
</script>

