import React, { useEffect }from 'react';
import { Bar } from 'react-chartjs-2';
import { histogram } from 'd3-array';

const Histogram = ({ data, bins, xLabel, yLabel }) => {
    // Bin the data into histogram bins
    const histogramBins = histogram()
        .thresholds(bins)
        (data);

    // Extract bin edges and frequencies
    const labels = histogramBins.map(bin => bin.x0);
    const frequencies = histogramBins.map(bin => bin.length);

    // Define chart data
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Frequency',
                data: frequencies,
                backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
                borderColor: 'rgba(75, 192, 192, 1)', // Border color
                borderWidth: 1,
            },
        ],
    };

    // Define chart options
    const chartOptions = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: xLabel,
                },
            },
            y: {
                title: {
                    display: true,
                    text: yLabel,
                },
            },
        },
    };
    // useEffect(() => {
    //     console.log("data = ", data);
    // }, [data]); // Log data when the data prop changes
    console.log("dataaaa =", data)
    return <Bar data={chartData} options={chartOptions} />;
};

export default React.memo(Histogram);
