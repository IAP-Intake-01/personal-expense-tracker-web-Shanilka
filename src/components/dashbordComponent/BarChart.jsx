// BarChart.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);
    console.log(chartData);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getLast7dayData');
                const data = response.data;

                // Process data to fit the chart format
                const labels = [...new Set(data.map(item => item.date))]; // Unique dates in the last 7 days
                const categories = ['Food', 'Education', 'Transport', 'Other', 'Entertainment'];
                const backgroundColors = [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    '#b3ffcc',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ];

                // Construct datasets for each category
                const datasets = categories.map((category, index) => {
                    // Find total expense for each date for this category
                    const categoryData = labels.map(label => {
                        const dayData = data.find(item => item.date === label && item.category === category);
                        return dayData ? dayData.total : 0;
                    });

                    return {
                        label: category,
                        data: categoryData,
                        total: { data },
                        backgroundColor: backgroundColors[index],
                    };
                });

                setChartData({
                    labels,
                    datasets,
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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

    return (
        <div className='absolute w-2/4'>
            {chartData ? <Bar data={chartData} options={options} /> : <p>Loading...</p>}
        </div>
    );
};

export default BarChart;
