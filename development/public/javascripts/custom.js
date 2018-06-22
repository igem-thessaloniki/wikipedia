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
    }
}