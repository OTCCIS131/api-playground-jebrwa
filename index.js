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

                this.$http.get('http://www.comicvine.com/api/<resource>/?api_key=<775df1eea3760333ce81e39ada323b0e1cd62145>:<value>&format=json')
                    .then(successCallback, errorCallback)

                    .then(resp => {
                        this.charicters = resp.body
                        this.loading = false
                    })
            },
            selectCharicters(charicters) {
                this.charicters = charicters
                this.showing = 'charicters'
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

// 775df1eea3760333ce81e39ada323b0e1cd62145
// http://www.comicvine.com/api/<resource>/?api_key=<api_key>&filter=<filter>:<value>&format=json
// https://comicvine.gamespot.com/api/activate