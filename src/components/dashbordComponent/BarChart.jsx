// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    // Sample data for the last 7 days for each category
    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
            {
                label: 'Food',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Education',
                data: [2, 3, 20, 5, 1, 4, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
                label: 'Transport',
                data: [3, 10, 13, 15, 22, 30, 45],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
                label: 'Other',
                data: [5, 2, 3, 9, 6, 8, 11],
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
            },
            {
                label: 'Entertainment',
                data: [7, 8, 6, 4, 7, 5, 9],
                backgroundColor: 'rgba(255, 159, 64, 0.5)',
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expenses in the Last 7 Days',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
