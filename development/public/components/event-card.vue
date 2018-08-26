<template>
    <div>
        <q-card
            inline
            @click.native="opened=true"
            @mouseover.native="hover = true"
            @mouseout.native="hover = false"
            class="cursor-pointer"
            :class="computedClasses"
            :style="computedStyles"
        >
            <q-card-media>
                <slot name="media">
                    <img class="responsive-image" src="http://2018.igem.org/wiki/images/thumb/e/eb/T--Thessaloniki--lab--photo-3.jpeg/800px-T--Thessaloniki--lab--photo-3.jpeg" alt="default event image">
                </slot>
            </q-card-media>
            <q-card-title>
                <b>{{title}}</b>
            </q-card-title>
            <q-card-main>
                <slot name="content">
                    Default Card Content
                </slot>
            </q-card-main>
        </q-card>

        <q-modal v-model="opened" :content-css="{minWidth: '90vw', minHeight: '80vh'}" minimized>
            <q-modal-layout :class="[nightMode ? 'bg-purple-10' : 'bg-white']">
                <q-toolbar slot="header">
                    <q-toolbar-title>
                        {{title}}
                    </q-toolbar-title>
                    <q-btn flat round icon="close" @click="opened = false">
                    </q-btn>
                </q-toolbar>

                <!-- <q-toolbar slot="footer">
                    <q-toolbar-title>
                    </q-toolbar-title>
                    <q-btn color="primary" @click="opened = false" label="Close">
                    </q-btn>
                </q-toolbar> -->

                <div :class="[nightMode ? 'text-white' : 'text-dark']">
                    <slot name="modal-content">
                    </slot>
                </div>
            </q-modal-layout>
        </q-modal>
    </div>
</template>

<script>
(function (Vue, template) {
    Vue.component('event-card', {
        template,
        props: {
            title: {
                required: true,
                type: String
            }
        },
        computed: {
            computedClasses () {
                let classes = []
                if (this.shadow > 1 && Quasar.plugins.Platform.is.desktop) {
                    classes.push(`shadow-${Math.floor(this.shadow)}`)
                }
                if (this.nightMode) {
                    classes.push('bg-purple-10 text-light')
                } else {
                    classes.push('text-dark')
                }
                return classes
            },
            computedStyles () {
                let styles = {}
                if (Quasar.plugins.Platform.is.desktop) {
                    styles.transform = `scale(${this.scale})`
                }
                return styles
            },
            ...Vuex.mapState(['nightMode'])
        },
        watch: {
            hover(hoverState) {
                if (hoverState) {
                    TweenLite.to(this.$data, 0.6, {
                        shadow: 24,
                        scale: 1.1
                    })
                } else {
                    TweenLite.to(this.$data, 0.6, {
                        shadow: 0,
                        scale: 1
                    })
                }
            }
        },
        data () {
            return {
                opened: false,
                hover: false,
                shadow: 0,
                scale: 1
            }
        }
    })
})(Vue, template)
</script>

<style>

</style>
