(async function (iGEM) {
    await iGEM.callHook('loadHook', Vue)

    new Vue({
        el: '#q-app',
        data: function () {
            let data = Object.assign({
                loaded: false,
                drawerState: true,
                nightMode: this.getNightMode(),
                colorMode: this.getColorMode(),
                colorModes: [
                    {
                        value: 'auto',
                        label: 'Auto'
                    },
                    {
                        value: 'night',
                        label: 'Night'
                    },
                    {
                        value: 'day',
                        label: 'Day'
                    },
                ]
            }, iGEM.data)
            return data
        },
        watch: {
            nightMode(mode) {
                iGEM.callHook('nightModeHook', mode)
            },
            colorMode(mode) {
                iGEM.callHook('colorModeHook', mode)
            }
        },
        mounted() {
            setTimeout(() => {
                this.loaded = true
                iGEM.callHook('loadedHook', this)
            }, 100)
            iGEM.callHook('mountHook', this)
            this.registerColorModeHook()
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
            getColorMode() {
                let mode = 'auto'

                if (window.localStorage) {
                    let storageMode = localStorage.getItem('igem-colorMode')
                    if (storageMode !== null) {
                        mode = storageMode
                    }
                }

                return mode
            },
            getNightMode() {
                let mode = this.getColorMode()
                let value = false

                switch (mode) {
                    case 'auto':
                        let date = new Date()
                        let hour = date.getHours()
                        if ((hour >= 20 && hour <= 23) || (hour >= 0 && hour <= 6)) {
                            value = true
                        }
                        break
                        value
                    case 'night':
                        value = true
                        break
                    case 'day':
                    default:
                        value = false
                }

                return value
            },
            async registerColorModeHook() {
                setTimeout(() => {
                    iGEM.registerHook('colorModeHook', ([mode]) => {
                        if (window.localStorage) {
                            window.localStorage.setItem('igem-colorMode', mode)
                        }

                        switch (mode) {
                            case 'auto':
                                this.nightMode = this.getNightMode()
                                break
                            case 'night':
                                this.nightMode = true
                                break
                            case 'day':
                            default:
                                this.nightMode = false
                                break
                        }
                    })
                })
            }
        }
    })
})(iGEM)