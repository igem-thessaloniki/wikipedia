(async function (iGEM) {
    await iGEM.callHook('loadHook')

    new Vue({
        el: '#q-app',
        data: function () {
            return {
                loaded: false,
                drawerState: true
            }
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