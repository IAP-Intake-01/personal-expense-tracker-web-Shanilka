import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import '../dashbordComponent/dashbordStyle/picechart.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get userEmail from localStorage
                const userEmail = localStorage.getItem('userEmail');
                if (!userEmail) {
                    console.error('No user email found in localStorage');
                    return;
                }

                // Fetch data from the backend with userEmail as a query parameter
                const response = await axios.get(`http://localhost:3000/api/getCatagorySum/${userEmail}`);

                // Normalize the data to make the total value sum up to 100%
                const totalSum = response.data.reduce((sum, item) => sum + item.value, 0);
                const normalizedData = response.data.map(item => ({
                    ...item,
                    value: totalSum ? ((item.value / totalSum) * 100).toFixed(2) : 0 // Convert to percentage
                }));

                setChartData(normalizedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="flex justify-center items-center p-4 w-80 customPossition">
            <PieChart width={300} height={300}>
                <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, value }) => `${name}: ${value}%`} // Display category name and percentage
                >
                    {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default PieChartComponent;
