<template>
    <li class="q-timeline-entry" :class="classes">
        <div class="q-timeline-content">
            <slot></slot>
        </div>
        <div class="q-timeline-dot" :class="colorClass">
            <q-icon class="row items-center justify-center" :name="icon">
            </q-icon>
        </div>
        <div class="q-timeline-subtitle" style="text-transform: none">
            <slot name="side">
            </slot>
        </div>
    </li>
</template>

<script>
(function (Vue, template) {
    Vue.component('igem-timeline-entry', {
        template,
        inject: {
            __timeline: {
                default () {
                    console.error('QTimelineEntry needs to be child of QTimeline')
                }
            }
        },
        props: {
            color: String,
            icon: String,
            side: {
                type: String,
                default: 'right',
                validator: v => ['left', 'right'].includes(v)
            }
        },
        computed: {
            colorClass () {
                return `text-${this.color || this.__timeline.color}`
            },
            classes () {
                return [
                    `q-timeline-entry-${this.side === 'left' ? 'left' : 'right'}`,
                    this.icon ? 'q-timeline-entry-with-icon' : ''
                ]
            }
        }
    })
})(Vue, template)
</script>

<style>
</style>