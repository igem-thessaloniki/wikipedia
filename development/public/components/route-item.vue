<template>
    <q-item
        link
        :class="{'bg-light': currentPage === page, 'text-dark': true}"
        style="text-decoration: none"
        :href="link"
        tag="a"
    >
        <q-item-side :icon="icon"></q-item-side>
        <q-item-main :label="label" :sublabel="sublabel"></q-item-main>
    </q-item>
</template>

<script>
(function (Vue, template) {
    Vue.component('route-item', {
        template,
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
                default: '',
                required: false
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
})(Vue, template)
</script>

<style>
</style>