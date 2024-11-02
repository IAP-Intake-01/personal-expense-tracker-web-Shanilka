// // BarChart.js
// import React, { useEffect, useState } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart = () => {
//     const [chartData, setChartData] = useState(null);

//     useEffect(() => {
//         // Fetch data from the backend API
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/getLast7dayData');
//                 const data = response.data;

//                 // Process data to fit the chart format
//                 const labels = [...new Set(data.map(item => item.date))]; // Unique dates
//                 const categories = ['Food', 'Education', 'Transport', 'Other', 'Entertainment'];
//                 const backgroundColor = [
//                     'rgba(255, 99, 132, 0.5)',
//                     'rgba(54, 162, 235, 0.5)',
//                     '#b3ffcc',
//                     'rgba(153, 102, 255, 0.5)',
//                     'rgba(255, 159, 64, 0.5)',
//                 ];

//                 const datasets = categories.map((category, index) => {
//                     const categoryData = labels.map(label => {
//                         const dayData = data.find(item => item.date === label && item.category === category);
//                         return dayData ? dayData.total : 0;
//                     });

//                     return {
//                         label: category,
//                         data: categoryData,
//                         backgroundColor: [
//                             'rgba(255, 99, 132, 0.5)',
//                             'rgba(54, 162, 235, 0.5)',
//                             '#b3ffcc',
//                             'rgba(153, 102, 255, 0.5)',
//                             'rgba(255, 159, 64, 0.5)',
//                         ][index],
//                     };
//                 });

//                 setChartData({
//                     labels,
//                     datasets,
//                 });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     // Chart options
//     const options = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'top',
//             },
//             title: {
//                 display: true,
//                 text: 'Expenses in the Last 7 Days',
//             },
//         },
//     };

//     return (
//         <div className='absolute w-2/4'>
//             {chartData ? <Bar data={chartData} options={options} backgroundColor={chartData} /> : <p>Loading...</p>}
//         </div>
//     );
// };

// export default BarChart;


// BarChart.js
import React, { useEffect, useState } from 'react';
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

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getLast7dayData');
                const data = response.data;

                setChartData(data);
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
        <div className='abslute w-2/3'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
