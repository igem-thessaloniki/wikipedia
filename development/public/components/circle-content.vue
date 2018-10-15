<template>
    <div
        class="row justify-center cursor-pointer"
    >
        <q-card
            class="flex flex-center"
            style="width: 150px; height: 150px; border: 4px solid cornflowerblue; border-radius: 100%"
            :class="hover ? 'shadow-10 bg-orange' : ''"
            @click.native="opened = true"
            @mouseover.native="hover = true"
            @mouseout.native="hover = false"
        >
            {{title}}
        </q-card>
         <q-modal v-model="opened" :content-css="{minWidth: '90vw', minHeight: '60vh'}" maximized>
            <q-modal-layout :class="[nightMode ? 'night-bg' : 'day-bg']">
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
    Vue.component('circle-content', {
        template,
        props: {
            title: {
                required: true,
                type: String
            }
        },
        computed: {
            ...Vuex.mapState(['nightMode'])
        },
        data () {
            return {
                opened: false,
                hover: false
            }
        }
    })
})(Vue, template)
</script>

<style>

</style>
