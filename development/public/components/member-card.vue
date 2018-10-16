<template>
    <div>
        <q-card @click.native="opened = true" @mouseover.native="hover = true" @mouseout.native="hover = false" class="q-ma-md no-shadow member-card cursor-pointer">
            <q-card-media>
                <img class="member-card-image" :style="imageStyle" :src="member.photo" :alt="member.fullname + ' personal photo'">
            </q-card-media>
            <q-card-main>
                <div :class="textClass" :style="textStyle">
                    <b>
                        {{member.fullname}}
                    </b>
                    <p>
                        {{member.role}}
                    </p>
                </div>
            </q-card-main>
        </q-card>

        <q-modal v-model="opened" :content-css="{minWidth, minHeight}" minimized>
            <q-modal-layout :class="[nightMode ? 'night-bg' : 'day-bg']">
                <q-toolbar slot="header">
                    <q-toolbar-title>
                        {{member.fullname}}
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

                <div class="row gutter-md q-pa-lg" :class="[nightMode ? 'text-white' : 'text-dark']">
                    <div class="col-md-5">
                        <div class="q-pa-sm" :class="[nightMode ? 'bg-white' : '']">
                            <img class="member-card-modal-image round-borders" :src="member.photo" :alt="member.fullname + ' personal photo'">
                        </div>
                    </div>
                    <div class="col-md-7 q-pl-md q-pr-md">
                        <h4 class="q-mt-sm q-mb-md">{{member.fullname}}</h4>
                        <!-- TODO <q-scroll-area> -->
                        <div v-html="member.body">
                        </div>
                        <!-- </q-scroll-area> -->
                    </div>
                </div>
            </q-modal-layout>
        </q-modal>
    </div>
</template>

<script>
(function (Vue, template) {
    Vue.component('member-card', {
        template,
        props: {
            member: {
                type: Object,
                required: true
            }
        },
        computed: {
            imageStyle() {
                return {
                    'filter': `grayscale(${this.grey}%)`,
                    'clip-path': `ellipse(${this.e_x}% ${this.e_y}% at center)`
                }
            },
            textClass() {
                return [this.top < -45 ? 'text-white' : 'text-dark']
            },
            textStyle() {
                return {
                    'position': 'relative',
                    'top': `${this.top}px`
                }
            },
            minWidth() {
                if (Quasar.plugins.Platform.is.desktop) {
                    return '60vw'
                }
                return '100vw'
            },
            minHeight() {
                if (Quasar.plugins.Platform.is.desktop) {
                    return '80vh'
                }
                return '95vh'
            },
            ...Vuex.mapState(['nightMode'])
        },
        watch: {
            hover(flag) {
                if (flag) {
                    TweenLite.to(this.$data, 0.6, {
                        top: -75,
                        e_x: 100,
                        e_y: 100,
                        grey: 0
                    })
                } else {
                    TweenLite.to(this.$data, 0.6, {
                        top: -10,
                        e_x: 50,
                        e_y: 50,
                        grey: 100
                    })
                }
            }
        },
        data() {
            return {
                opened: false,
                hover: true,
                top: -10,
                e_x: 50,
                e_y: 50,
                grey: 100
            }
        }
    })
})(Vue, template)
</script>

<style>

</style>
