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

                this.$http.get('http://www.comicvine.com/api/<resource>/?api_key=<775df1eea3760333ce81e39ada323b0e1cd62145>&filter=<real_name>:<value>&format=json')
                    .then(resp => {
                        this.charicters = resp.body
                        this.loading = false
                    })
            },
            loadCharicters(charicters) {
                this.charicters = charicters
                this.showing = 'charicters'
                this.loadCharcters()
            },
        }
    })

})

/**
 * API Info
 * KEY - 775df1eea3760333ce81e39ada323b0e1cd62145
 * http://www.comicvine.com/api/<resource>/?api_key=<api_key>&filter=<filter>:<value>&format=json
 * https://comicvine.gamespot.com/api/documentation
 * https://comicvine.gamespot.com/api/activate
 */
