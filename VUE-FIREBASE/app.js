const app = Vue.createApp({
    data() {
        return{
            showJoke: true,
            commedian: 'Ralphie May',
            special: 'Too Big To Ignore',
            joke: 'Stoned Like a Gravel Road',
            Likes: 0
        }
    },
    methods: {
        toggleShowJokes() {
            this.showJoke = !this.showJoke
        }
    }
})

app.mount('#app')
