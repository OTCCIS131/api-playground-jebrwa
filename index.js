$(function () {

    const vm = new Vue({
        el: '#app',
        data: {
            loading: false,
            showing: 'charicters',
            name: [],
            charicters: null,
            aliases: []
        },
        methods: {
            loadName() {
                this.loading = true

                this.$http.get('https://comicvine.gamespot.com/api/documentation#toc-0-3/characters')
                    .then(resp => {
                        this.charicters = resp.body
                        this.loading = false
                    })
            },
            selectCharicters(charicters) {
                this.charicters = charicters
                this.showing = 'people'
                this.loadCharcters()
            },
            loadNames() {
                this.name = []
                this.name.aliases.forEach(charicters => {
                    this.$http.get(name)
                        .then(resp => {
                            this.name.push(resp.body)
                        })
                })
            }
        }
    })

})