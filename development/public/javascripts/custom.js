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
    data: {}
}