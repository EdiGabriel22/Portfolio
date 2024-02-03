<template>
    <div class="items-center px-4 md:p-0 md:flex place-content-center">
        <div class="flex md:flex-row md:overflow-x-auto scroll-behavior-smooth" ref="scrollContainer"> 
            <div class="flex flex-col gap-3 py-4 md:px-20 md:flex-row md:snap-start">
                <div class="flex w-full md:w-[711px] flex-col justify-between gap-6 p-6 bg-neutral-900 border-2 border-white rounded-3xl">
                    <div class="flex">
                        <div class="w-12 h-12 mr-4 bg-white rounded-full aspect-square"></div>
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
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col justify-between row-span-2 gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        twiter
                    </div>
                    <div class="flex flex-col justify-between gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        github
                    </div>
                    <div class="flex flex-col justify-between gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        figma
                    </div>
                    <div class="flex flex-col justify-between col-span-2 gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        email
                    </div>
                    <div class="flex flex-col justify-between row-span-2 gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        twiter
                    </div>
                    <div class="flex flex-col justify-between gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        github
                    </div>
                    <div class="flex flex-col justify-between gap-6 p-6 transition-colors border-2 border-white bg-neutral-900 hover:bg-neutral-800/80 rounded-3xl">
                        figma
                    </div>
                </div>
                <div class="flex  w-full md:w-[711px] flex-col justify-between gap-6 p-6 transition-colors bg-neutral-900 border-2 border-white hover:bg-neutral-800/80 rounded-3xl">
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
				mobile: this.isMobile(),
                desktop: this.isDesktop(),
			};
		},
        mounted() {
                this.$refs.scrollContainer.addEventListener('wheel', this.horizontalScroll);
            
        },

        beforeDestroy() {
            this.$refs.scrollContainer.removeEventListener('wheel', this.horizontalScroll);
        },
        
        methods: {
            isMobile() {
                if (process.client) {
                    return window.innerWidth < 768;
                }
            },
            isDesktop() {
                if (process.client) {
                    return window.innerWidth > 768;
                }
            },
            horizontalScroll(e) {
                if (this.isDesktop) {
                    this.$refs.scrollContainer.scrollLeft += e.deltaY;
                    e.preventDefault();
                }
            },
        }
	};
</script>