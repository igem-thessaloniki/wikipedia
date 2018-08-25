iGEM.registerHook('loadHook', ([Vue]) => {
    Vue.component('route-item', {
        template: '#route-item-template',
        props: {
            page: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            sublabel: {
                default: ''
            }
        },
        computed: {
            currentPage() {
                return this.$store.state.page
            }
        },
        methods: {
            launch(url) {
                window.open(url, '_self')
            }
        }
    })
})