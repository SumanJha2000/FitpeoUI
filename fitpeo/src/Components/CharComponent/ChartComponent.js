import React from 'react';
import ReactApexChart from 'react-apexcharts';

function ChartComponent() {
    const chartOptions = {
        series: [100, 55, 41],
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: false,
                    },
                },
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            }],
        },
    };









    return (
        <div>
            <h1></h1>
            <ReactApexChart options={chartOptions.options} series={chartOptions.series} type="donut" height={350} />
        </div>
    );
}

export default ChartComponent;
