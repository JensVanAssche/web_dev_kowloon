<template>
  <div>
    <div class="faq-question mb-2" v-for="q in faqQuestions" :key="q.id" @click="toggleFaq(q.id)">
        <div class="faq-header m-0">
            <p>{{ q.title }}</p>
            <img src="@/assets/images/dropdown.png" alt="">
        </div>
        <div class="faq-content" v-if="activeFaq === q.id">
            <span>{{ q.description }}</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'faqquestions',
    data () {
        return {
            activeFaq: 2,
            faqQuestions: [
                {
                    id: 1,
                    title: 'Dit is een vraag',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
                },
                {
                    id: 2,
                    title: 'Dit is een vraag',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
                },
                {
                    id: 3,
                    title: 'Dit is een vraag',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..Lorem ipsum dolor sit amet, consectetur adipisicing elit..'
                },
            ],
        }
    },
    methods: {
        toggleFaq(id) {
        this.activeFaq === id ? this.activeFaq = '' : this.activeFaq = id
        }
    },
}
</script>
