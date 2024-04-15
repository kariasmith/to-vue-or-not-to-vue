const app = Vue.createApp({
    data() {
        return{
            showJoke: true,
            comedys: [
                { comedian: 'Ralphie May', special: 'Too Big To Ignore', joke: 'Stoned Like a Gravel Road'},
                { comedian: 'Ralphie May', special: 'Too Big To Ignore', joke: 'Stoned Like a Gravel Road'},
                { comedian: 'Ralphie May', special: 'Too Big To Ignore', joke: 'Stoned Like a Gravel Road'},
            ],
            Likes: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowJokes() {
            this.showJoke = !this.showJoke
        },
        eventAction(k, data) {
            console.log(k)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')
