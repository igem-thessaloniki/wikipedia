(async function (iGEM) {
    await iGEM.callHook('loadHook', Vue)

    new Vue({
        el: '#q-app',
        data: function () {
            let data = Object.assign({
                loaded: false,
                drawerState: true,
                nightMode: this.getNightMode(),
            }, iGEM.data)
            return data
        },
        watch: {
            nightMode(mode) {
                iGEM.callHook('nightModeHook', mode)
            }
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true
                iGEM.callHook('loadedHook', this)
            }, 100)
            iGEM.callHook('mountHook', this)
            this.registerNighModeHook()
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
            },
            getNightMode() {
                let value = false

                let date = new Date()
                let hour = date.getHours()
                if (hour >= 20) {
                    value = true
                }

                if (window.localStorage) {
                    let mode = localStorage.getItem('igem-nightMode')
                    if (mode !== null) {
                        mode = mode === 'true'
                        console.log('mode', mode)
                        value = mode
                    }
                }

                return value
            },
            async registerNighModeHook() {
                setTimeout(() => {
                    iGEM.registerHook('nightModeHook', ([mode]) => {
                        console.log('hook', mode)
                        if (window.localStorage) {
                            window.localStorage.setItem('igem-nightMode', mode)
                        }
                    })
                })
            }
        }
    })
})(iGEM)