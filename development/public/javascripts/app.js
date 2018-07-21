(async function (iGEM) {
    await iGEM.callHook('loadHook', Vue)

    new Vue({
        el: '#q-app',
        data: function () {
            let data = Object.assign({
                loaded: false,
                drawerState: true,
                nightMode: false,
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
            },
            resolveMode (dayClass, nightClass) {
                if (this.nightMode) {
                    return nightClass
                }
                return dayClass
            },
            rM (dC, nC) {
                return this.resolveMode(dC, nC)
            }
        }
    })
})(iGEM)