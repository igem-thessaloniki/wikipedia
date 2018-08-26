iGEM.registerCharts = function (nightMode, chartConfigs) {
    let theme = 'default'
    let charts = []

    if (nightMode) {
        theme = 'darker'
    }

    function initCharts() {
        charts = []

        _.forEach(chartConfigs, (config) => {
            let chart = echarts.init(document.getElementById(config.dom), theme)
            chart.setOption(config.option)
            charts.push(chart)
        })
    }

    window.addEventListener('resize', _.debounce(() => {
        _.forEach(charts, (chart) => {
            chart.resize()
        })
    }, 200))

    setTimeout(() => {
        initCharts()
    }, 100)

    iGEM.registerHook('nightModeHook', ([mode]) => {
        if (mode) {
            theme = 'darker'
        } else {
            theme = 'default'
        }

        _.forEach(charts, (chart) => {
            chart.dispose()
        })
        initCharts()
    })
}