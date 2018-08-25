(async function (Vue, Vuex, iGEM) {
    Vue.use(Vuex)

    function getColorMode() {
        let mode = 'auto'

        if (window.localStorage) {
            let storageMode = localStorage.getItem('igem-colorMode')
            if (storageMode !== null) {
                mode = storageMode
            }
        }

        return mode
    }

    function getNightMode() {
        let mode = getColorMode()
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
    }

    const store = new Vuex.Store({
        state: {
            loaded: false,
            drawerState: true,
            nightMode: getNightMode(),
            colorMode: getColorMode(),
            page: 'index'
        },
        mutations: {
            loaded(state) {
                state.loaded = true
            },
            setDrawerState(state, payload) {
                state.drawerState = payload
            },
            setNightMode(state, payload) {
                state.nightMode = payload
            },
            setColorMode(state, payload) {
                state.colorMode = payload
            },
            setPage(state, payload) {
                state.page = payload
            },
        }
    })

    await iGEM.loadComponent('/components/route-item.vue')
    await iGEM.callHook('loadHook', Vue, store)

    new Vue({
        el: '#q-app',
        data: function () {
            let data = Object.assign({
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
        store: store,
        computed: {
            ...Vuex.mapState(['loaded', 'nightMode', 'page']),
            drawerState: {
                get() {
                    return this.$store.state.drawerState
                },
                set(state) {
                    this.$store.commit('setDrawerState', state)
                }
            },
            colorMode: {
                get() {
                    return this.$store.state.colorMode
                },
                set(mode) {
                    this.$store.commit('setColorMode', mode)
                }
            }
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
                this.$store.commit('loaded')
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
            async registerColorModeHook() {
                setTimeout(() => {
                    iGEM.registerHook('colorModeHook', ([mode]) => {
                        if (window.localStorage) {
                            window.localStorage.setItem('igem-colorMode', mode)
                        }

                        let temp_mode = false

                        switch (mode) {
                            case 'auto':
                                temp_mode = getNightMode()
                                break
                            case 'night':
                                temp_mode = true
                                break
                            case 'day':
                            default:
                                temp_mode = false
                                break
                        }

                        this.$store.commit('setNightMode', temp_mode)
                    })
                })
            }
        }
    })
})(Vue, Vuex, iGEM)