import React from 'react'

import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'




if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}
const options = {

    credits: {
        enabled: false
    },
    title: { text: "Total Yugioh Wins" },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            day: '%e %b %y',
        },
        min: Date.UTC(2021, 4, 7),
        max: Date.UTC(2021, 4, 12)
    },
    series: [
        {

            name: "Byron",
            color: "orange",
            data: [
                [Date.UTC(2021, 4, 7), 1],
                [Date.UTC(2021, 4, 8), 3],
                [Date.UTC(2021, 4, 9), 3],
                [Date.UTC(2021, 4, 10), 4],
                [Date.UTC(2021, 4, 11), 5]

            ]
        },
        {

            name: "Nata",
            color: "turquoise",
            data: [
                [Date.UTC(2021, 4, 7), 1],
                [Date.UTC(2021, 4, 8), 3],
                [Date.UTC(2021, 4, 9), 4],
                [Date.UTC(2021, 4, 10), 5],
                [Date.UTC(2021, 4, 11), 6]

            ]
        },

    ]
}
export default function WinsChart() {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    )
}
