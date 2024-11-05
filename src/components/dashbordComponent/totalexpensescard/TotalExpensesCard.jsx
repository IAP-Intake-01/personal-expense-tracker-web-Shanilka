import React, { useEffect, useState } from 'react';
import { FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import axios from 'axios';
import '../totalexpensescard/totalexpensesCard.css';

const TotalExpensesCard = () => {
    const [data, setData] = useState({
        currentMonthTotal: 0,
        previousMonthTotal: 0,
        average: 0,
        growthPercentage: 0
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get('http://localhost:3000/api/expense-summary')
                    .then(response => {
                        setData(response.data);
                    })
                    .catch(error => {
                        console.error("Error fetching expense summary:", error);
                    });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, []);

    return (
        <div
            className="bg-white rounded-xl shadow-lg p-6"
            style={{
                position: 'absolute',
                top: '120%',
                left: '3%',
                height: '160%',
                width: '40%',
            }}
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-1 rounded-lg">
                        <FiDollarSign className="w-4 h-4 text-blue-600" />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-700">Total Expenses</h2>
                </div>
                <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                    <FiTrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-600">{data.growthPercentage}%</span>
                </div>
            </div>

            {/* Amount */}
            <div className="mb-0">
                <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-green-600">${data.currentMonthTotal.toLocaleString()}</span>
                    <span className="text-sm text-gray-500">this month</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                    <p className="text-xs text-gray-500">Previous Month</p>
                    <p className="text-base font-semibold text-gray-900">${data.previousMonthTotal.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">Average</p>
                    <p className="text-base font-semibold text-gray-900">${data.average.toLocaleString()}</p>
                </div>
            </div>
        </div>
    );
};

export default TotalExpensesCard;
