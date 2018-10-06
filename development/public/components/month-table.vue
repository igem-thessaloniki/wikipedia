<template>
    <div class="text-color-white">
        <div class="row justify-center">
            <h5 class="q-ma-xs">{{title}}</h5>
        </div>
        <div class="row justify-center text-white">
            <table>
                <tr v-for="row in 6" :key="row">
                    <td v-for="col in 7" :key="row + '-' + col" :class="calculateClasses(row, col)" @click="clickEvent(row, col)">
                        <div style="width: 30px; height: 30px" class="flex flex-center">
                            <strong>{{getText(row,col)}}</strong>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
(function (Vue, template) {
    Vue.component('month-table', {
        template,
        props: {
            title: {
                required: true,
                type: String
            },
            start: {
                required: true,
                type: Number
            },
            length: {
                required: true,
                type: Number
            },
            events: {
                required: true,
                type: Array
            },
            filter: {
                type: Array,
                required: true
            },
            selected: {
                type: Object,
                required: true
            }
        },
        computed: {
            eventsPrepared () {
                let data = {}

                let events = this.events

                if (this.filter.length > 0) {
                    events = _.filter(events, (event) => {
                        return this.filter.some(f => event.tags.includes(f))
                    })
                }

                _.forEach(events, (event) => {
                    if (! data[event.day]) {
                        data[event.day] = []
                    }
                    data[event.day].push(event)
                })
                return data
            }
        },
        watch: {
            filter() {
                let array = this.eventsPrepared[this.selected.pos + 1]
                if (array && this.selected.month == this.title && this.selected.count != array.length ) {
                    let select = Object.assign({}, this.selected)
                    select.count = array.length
                    this.$emit('select', select)
                    this.$emit('set-events', array)
                } else if (this.selected.month == this.title && this.selected.count > 0) {
                    let select = Object.assign({}, this.selected)
                    select.count = 0
                    this.$emit('select', select)
                    this.$emit('set-events', [])
                }
            }
        },
        methods: {
            getPos(row, col) {
                return (row - 1) * 7 + (col - 1 - this.start)
            },
            calculateCount(row, col) {
                let pos = this.getPos(row, col)
                if (pos >= 0 && pos < this.length) {
                    let array = this.eventsPrepared[pos + 1]
                    if (array) {
                        let count = this.eventsPrepared[pos + 1].length
                        return count
                    }
                }
                return 0
            },
            calculateClasses(row, col) {
                let pos = this.getPos(row, col)

                if (this.selected.month == this.title && this.selected.pos == pos) {
                    return ['bg-orange']
                }

                if (pos >= 0 && pos < this.length) {
                    let array = this.eventsPrepared[pos + 1]
                    if (array) {
                        let count = this.eventsPrepared[pos + 1].length
                        if (count >= 4) {
                            return ['bg-pink-10', 'cursor-pointer']
                        }
                        if (count >= 3) {
                            return ['bg-pink-8', 'cursor-pointer']
                        }
                        if (count >= 2) {
                            return ['bg-pink-6', 'cursor-pointer']
                        }
                        if (count >= 1) {
                            return ['bg-pink-4', 'cursor-pointer']
                        }
                    }
                    return [ 'bg-grey' ]
                }
                return []
            },
            getText(row, col) {
                let pos = this.getPos(row, col)
                if (pos >= 0 && pos < this.length) {
                    return pos + 1
                }
                return ''
            },
            clickEvent(row, col) {
                let pos = this.getPos(row, col)
                if (pos >= 0 && pos < this.length) {
                    let array = this.eventsPrepared[pos + 1]
                    if (array) {
                        this.$emit('set-events', array)
                        this.$emit('select', {
                            count: array.length,
                            month: this.title,
                            pos
                        })
                    }
                }
            }
        }
    })
})(Vue, template)
</script>

<style>

</style>
