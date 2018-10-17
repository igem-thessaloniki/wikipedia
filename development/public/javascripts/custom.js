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
    buildTable(payload, symbol = ',') {
        let header = payload.header.split(symbol)
        let data = payload.data
        let headerHTML = "<tr>"
        header.forEach((item) => {
            headerHTML += '<td><b>' + item + '</b></td>'
        })
        headerHTML += '</tr>'
        let bodyHTML = ''
        data.forEach((item) => {
            bodyHTML += "<tr>"
            let items = item.split(symbol)
            items.forEach((i) => {
                bodyHTML += '<td>' + i + '</td>'
            })
            bodyHTML += '</tr>'
        })
        return `<div style="overflow-x:auto;"><table class="simple-table text-center">${headerHTML}${bodyHTML}</table></div>`
    },
    parseLatex(items) {
        let regAmp = new RegExp( String.fromCharCode(38) + 'amp;', 'g')

        items.forEach((item) => {
            let el = document.getElementById(item.id)
            katex.render(item.eq.replace(regAmp, String.fromCharCode(38)), el, {})
        })
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
    NotebookDynamicTimeline: '/components/notebook-dynamic-timeline.vue',
    BalcansMap: '/components/balcans-map.vue',
    GaleneLogo: '/components/galene-logo.vue',
    CircleContent: '/components/circle-content.vue',
    IFFLMainOne: '/components/IFFLMainOne.vue',
    Sponsors: '/components/sponsors.vue',
}

// iGEM.links = {
//     MemberCard: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/member-card.vue&action=raw&ctype=text/javascript',
//     EventCard: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/event-card.vue&action=raw&ctype=text/javascript',
//     RouteItem: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/route-item.vue&action=raw&ctype=text/javascript',
//     Layout: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/igem-layout.vue&action=raw&ctype=text/javascript',
//     TimelineEntry: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/timeline-entry.vue&action=raw&ctype=text/javascript',
//     MonthTable: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/month-table.vue&action=raw&ctype=text/javascript',
//     NotebookDynamicTimeline: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/notebook-dynamic-timeline.vue&action=raw&ctype=text/javascript',
//     BalcansMap: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/balcans-map.vue&action=raw&ctype=text/javascript',
//     GaleneLogo: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/galene-logo.vue&action=raw&ctype=text/javascript',
//     CircleContent: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/circle-content.vue&action=raw&ctype=text/javascript',
//     IFFLMainOne: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/IFFLMainOne.vue&action=raw&ctype=text/javascript',
//     Sponsors: 'http://2018.igem.org/wiki/index.php?title=Template:Thessaloniki/sponsors.vue&action=raw&ctype=text/javascript',
// }