import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Education', value: 400 },
    { name: 'Entertainment', value: 300 },
    { name: 'Transport', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Other', value: 100 },
];

// Define colors for each segment
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = () => (
    <div className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Expense Distribution</h2>
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    </div>
);

export default PieChartComponent;
