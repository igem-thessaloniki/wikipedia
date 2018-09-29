let iGEM = {
    hooks: {},
    registerHook(hook, cb) {
        if ((hook in this.hooks) !== true) {
            this.hooks[hook] = []
        }
        this.hooks[hook].push(cb)
    },
    async callHook(hook) {
        if (hook in this.hooks) {
            for (let i = 0; i < this.hooks[hook].length; i++) {
                const cb = this.hooks[hook][i];
                await cb(Array.prototype.slice.call(arguments, 1))
            }
            return true
        }
        return false
    },
    async loadComponent(url) {
        try {
            const response = await fetch(url)
            const html = await response.text()
            const parser = new DOMParser()
            const document = parser.parseFromString( html, 'text/html' )
            const head = document.head
            const template = head.querySelector( 'template' )
            const style = head.querySelector( 'style' )
            const script = head.querySelector( 'script' )

            eval(script.text)
        } catch (error) {
            console.log(error)
        }
    },
    scrollToElement(el) {
        let scroll = Quasar.utils.scroll
        let target = scroll.getScrollTarget(el)
        let offset = el.offsetTop - el.scrollHeight
        let duration = 500
        scroll.setScrollPosition(target, offset, duration)
    },
    scrollToTop (el) {
        let scroll = Quasar.utils.scroll
        let target = scroll.getScrollTarget(el)
        let offset = 0
        let duration = 500
        scroll.setScrollPosition(target, offset, duration)
    },
    data: {}
}

iGEM.links = {
    MemberCard: '/components/member-card.vue',
    EventCard: '/components/event-card.vue',
    RouteItem: '/components/route-item.vue',
    Layout: '/components/igem-layout.vue',
    TimelineEntry: '/components/timeline-entry.vue',
    MonthTable: '/components/month-table.vue',
    NotebookDynamicTimeline: '/components/notebook-dynamic-timeline.vue'
}

// iGEM.links = {
//     MemberCard: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/member-card.vue&action=raw&ctype=text/javascript',
//     EventCard: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/event-card.vue&action=raw&ctype=text/javascript',
//     RouteItem: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/route-item.vue&action=raw&ctype=text/javascript',
//     Layout: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/igem-layout.vue&action=raw&ctype=text/javascript',
// }