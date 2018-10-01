<template>
    <q-layout view="lHh Lpr fff" v-show="loaded">
        <div class="fixed-top-left" style="margin-top: 16px; z-index: 10;">
            <q-btn flat dense size="lg" class="bg-indigo-12 text-white" @click="drawerState = !drawerState" icon="menu"
                aria-label="Menu"></q-btn>
        </div>
        <!-- <q-layout-header style="margin-top: 16px" class="no-shadow"> -->
        <!-- <q-toolbar shrink> -->

        <!-- TODO -->
        <!-- <q-toolbar-title>
                    iGEM Thessaloniki
                    <div slot="subtitle">Hello Sun :D</div>
                </q-toolbar-title> -->
        <!-- </q-toolbar> -->
        <!-- </q-layout-header> -->

        <q-layout-drawer v-model="drawerState" behavior="mobile">
            <q-list no-border link inset-delimiter>
                <q-list-header>
                    <img class=" responsive-image" src="http://2018.igem.org/wiki/images/4/40/T--Thessaloniki--team-logo.png">
                </q-list-header>

                <route-item page="index" link="http://2018.igem.org/Team:Thessaloniki" icon="home" label="Home" sublabel="Our Project homepage">
                </route-item>

                <q-collapsible icon="build" label="Project" :opened="['description', 'design', 'results', 'demonstrate', 'safety', 'notebook', 'improve'].includes(page)">
                    <route-item page="description" link="http://2018.igem.org/Team:Thessaloniki/Description" icon="info" label="Description">
                    </route-item>
                    <route-item page="design" link="http://2018.igem.org/Team:Thessaloniki/Design" icon="create" label="Design">
                    </route-item>
                    <route-item page="results" link="http://2018.igem.org/Team:Thessaloniki/Results" icon="show_charts" label="Results">
                    </route-item>
                    <route-item page="demonstrate" link="http://2018.igem.org/Team:Thessaloniki/Demonstrate" icon="looks" label="Demonstrate">
                    </route-item>
                    <route-item page="safety" link="http://2018.igem.org/Team:Thessaloniki/Safety" icon="verified_user" label="Safety">
                    </route-item>
                    
                    <route-item page="notebook" link="http://2018.igem.org/Team:Thessaloniki/Notebook" icon="notes" label="Notebook">
                    </route-item>
                    
                    <route-item page="improve" link="http://2018.igem.org/Team:Thessaloniki/Improve" icon="plus_one" label="Improve">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="waves" label="Wet Lab" :opened="['experiments', 'protocols', 'cloning-strategy', 'interlab'].includes(page)">
                    <route-item page="experiments" link="http://2018.igem.org/Team:Thessaloniki/Experiments" icon="colorize" label="Experiments">
                    </route-item>
                    <route-item page="protocols" link="http://2018.igem.org/Team:Thessaloniki/Protocols" icon="assignment" label="Protocols">
                    </route-item>
                    <route-item page="cloning-strategy" link="http://2018.igem.org/Team:Thessaloniki/Cloning_Strategy" icon="flip_to_front" label="Cloning Strategy">
                    </route-item>
                    <route-item page="interlab" link="http://2018.igem.org/Team:Thessaloniki/InterLab" icon="sync" label="InterLab">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="extensions" label="Parts" :opened="['overview', 'basic', 'composite', 'collection'].includes(page)">
                    <route-item page="overview" link="http://2018.igem.org/Team:Thessaloniki/Parts" icon="info" label="Parts Overview">
                    </route-item>
                    <route-item page="collection" link="http://2018.igem.org/Team:Thessaloniki/Part_Collection" icon="collections"
                        label="Part Collection">
                    </route-item>
                    <route-item page="basic" link="http://2018.igem.org/Team:Thessaloniki/Basic_Part" icon="apps" label="Basic Parts">
                    </route-item>
                    <route-item page="composite" link="http://2018.igem.org/Team:Thessaloniki/Composite_Part" icon="grid_on"
                        label="Composite Parts">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="memory" label="Dry Lab" :opened="['model'].includes(page)">
                    <route-item page="model" link="http://2018.igem.org/Team:Thessaloniki/Model" icon="poll" label="Model">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="people" label="Human Practices" :opened="['synapsis', 'human-practices', 'public-engagement'].includes(page)">
                    <route-item page="synapsis" link="http://2018.igem.org/Team:Thessaloniki/Synapsis" icon="settings_input_hdmi"
                        label="Synapsis">
                    </route-item>

                    <route-item page="human-practices" link="http://2018.igem.org/Team:Thessaloniki/Human_Practices" icon="people_outline"
                        label="Human Practices">
                    </route-item>

                    <route-item page="public-engagement" link="http://2018.igem.org/Team:Thessaloniki/Public_Engagement"
                        icon="nature_people" label="Public Engagement">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="star" label="Awards" :opened="['applied', 'hardware', 'entrepreneurship', 'measurement', 'model', 'plant', 'software'].includes(page)">
                    <route-item page="Applied_Design" link="http://2018.igem.org/Team:Thessaloniki/Applied_Design" icon="settings_applications"
                        label="Applied Design">
                    </route-item>

                    <route-item page="Entrepreneurship" link="http://2018.igem.org/Team:Thessaloniki/Entrepreneurship" icon="monetization_on"
                        label="Entrepreneurship">
                    </route-item>

                    <route-item page="Hardware" link="http://2018.igem.org/Team:Thessaloniki/Hardware" icon="memory" label="Hardware">
                    </route-item>

                    <route-item page="Measurement" link="http://2018.igem.org/Team:Thessaloniki/Measurement" icon="bar_chart"
                        label="Measurement">
                    </route-item>

                    <route-item page="model" link="http://2018.igem.org/Team:Thessaloniki/Model" icon="poll" label="Model">
                    </route-item>

                    <route-item page="Plant" link="http://2018.igem.org/Team:Thessaloniki/Plant" icon="edit" label="Plant">
                    </route-item>

                    <route-item page="Software" link="http://2018.igem.org/Team:Thessaloniki/Software" icon="code" label="Software">
                    </route-item>
                </q-collapsible>

                <q-collapsible icon="people_outline" label="Team" :opened="['team', 'collaborations', 'attributions'].includes(page)">
                    <route-item page="team" link="http://2018.igem.org/Team:Thessaloniki/Team" icon="people" label="Team Members">
                    </route-item>

                    <route-item page="collaborations" link="http://2018.igem.org/Team:Thessaloniki/Collaborations" icon="account_balance"
                        label="Team Collaborations">
                    </route-item>

                    <route-item page="people_outline" link="http://2018.igem.org/Team:Thessaloniki/Attributions" icon="people"
                        label="Attributions">
                    </route-item>
                </q-collapsible>

                <route-item page="judging" link="http://igem.org/2018_Judging_Form?team=Thessaloniki" icon="call_made"
                    label="Judging Form">
                </route-item>

                <q-item>
                    <q-select style="width: 100%" v-model="colorMode" float-label="Color Mode" radio :options="colorModes">
                    </q-select>
                </q-item>
            </q-list>
        </q-layout-drawer>

        <q-page-container :class="[rM('day-bg', 'night-bg')]">
            <slot></slot>
        </q-page-container>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab v-back-to-top.animate="{offset: 500, duration: 200}" class="animate-pop bg-indigo-12 text-white">
                <q-icon name="keyboard_arrow_up"></q-icon>
            </q-btn>
        </q-page-sticky>
    </q-layout>
</template>

<script>
(function (Vue, template) {
    Vue.component('igem-layout', {
        template,
        data() {
            return {
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
            }
        },
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
        methods: {
            launch(url) {
                window.open(url, '_self')
            },
            rM: resolveMode
        }
    })
})(Vue, template)
</script>

<style>
</style>