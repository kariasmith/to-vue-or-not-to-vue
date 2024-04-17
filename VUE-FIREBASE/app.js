const app = Vue.createApp({
    // data, functions, templates
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'The Hobbit', author: 'J. R. R. Tolkien', year: 1937, img: 'assets/the-hobbit.jpg', isFav: true },
                { title: 'The Fellowship of the Ring', author: 'J. R. R. Tolkien', year: 1954, img: 'assets/the-fellowship.jpg', isFav: true },
                { title: 'The Two Towers', author: 'J. R. R. Tolkien', year: 1954, img: 'assets/the-two-towers.jpg', isFav: false },
                { title: 'The Return of the King', author: 'J. R. R. Tolkien', year: 1955, img: 'assets/the-return-ofthe-king.jpg', isFav: false },
            ],
            url: "https://www.tolkiensociety.org/author/books-by-tolkien/",
            likes: 0,
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e) {
            console.log(e)
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')

