(async function (iGEM) {
    await iGEM.callHook('loadHook', Vue)

    new Vue({
        el: '#q-app',
        data: function () {
            let data = Object.assign({
                loaded: false,
                drawerState: true,
            }, iGEM.data)
            return data
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true
            }, 100)
        },
        methods: {
            launch: function (url) {
                window.open(url, '_self')
            }
        }
    })
})(iGEM)