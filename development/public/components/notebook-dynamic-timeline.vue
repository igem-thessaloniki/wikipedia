<template>
    <q-timeline color="secondary" style="width: 95%; padding-right: 20px" responsive>
        <q-timeline-entry
            v-for="(event, index) in events"
            :key="event.title + '-' + index"
            :title="event.title"
            :subtitle="getSubtitle(event)"
            :side="getSide(event)"
            :icon="getIcon(event)"
            :color="getColor(event)"
            >
            <div v-html="event.content"></div>
        </q-timeline-entry>
    </q-timeline>
</template>

<script>
(function (Vue, template) {
    Vue.component('notebook-dynamic-timeline', {
        template,
        props: {
            events: {
                required: true,
                type: Array
            },
            clearBtn: {
                required: true
            }
        },
        watch: {
            events(newEvents) {
                if (newEvents.length > 0) {
                    this.scrollToElement(this.clearBtn)
                } else {
                    this.scrollToTop(this.clearBtn)
                }
            }
        },
        methods: {
            getSubtitle(event) {
                if (event.subtitle) {
                    return event.subtitle
                }

                if (event.tags.includes('dry')) {
                    return 'Dry'
                }
                if (event.tags.includes('wet')) {
                    return 'Wet'
                }
                if (event.tags.includes('milestone')) {
                    return 'Milestone'
                }

                return event.day + '/' + event.month + '/2018'
            },
            getSide(event) {
                if (event.side) {
                    return event.side
                }

                if (event.tags.includes('dry')) {
                    return 'right'
                }
                return 'left'
            },
            getIcon(event) {
                if (event.icon) {
                    return event.icon
                }

                if (event.tags.includes('team')) {
                    return 'people'
                }
                if (event.tags.includes('dry')) {
                    return 'memory'
                }
                if (event.tags.includes('wet')) {
                    return 'waves'
                }
                if (event.tags.includes('milestone')) {
                    return 'start'
                }
                return ''
            },
            getColor(event) {
                if (event.color) {
                    return event.color
                }

                if (event.tags.includes('team')) {
                    return 'green'
                }
                if (event.tags.includes('dry')) {
                    return 'red'
                }
                if (event.tags.includes('wet')) {
                    return 'blue'
                }
                if (event.tags.includes('milestone')) {
                    return 'orange'
                }
                return 'grey'
            },
            scrollToElement (el) {
                el = el.$el
                iGEM.scrollToElement(el)
            },
            scrollToTop (el) {
                el = el.$el
                iGEM.scrollToTop(el)
            }
        }
    })
})(Vue, template)
</script>

<style>

</style>
