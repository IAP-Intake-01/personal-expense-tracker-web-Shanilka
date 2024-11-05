import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';
import '../totalexpensescard/totalexpensesCard.css'
import { FiDollarSign, FiTrendingUp } from 'react-icons/fi';

const TotalExpensesCard = () => {
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
                    <span className="text-sm text-green-600">2.5%</span>
                </div>
            </div>

            {/* Amount */}
            <div className="mb-0">
                <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-bold text-red-500">$24,983</span>
                    <span className="text-sm text-gray-500">this month</span>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div>
                    <p className="text-xs text-gray-500">Previous Month</p>
                    <p className="text-base font-semibold text-gray-900">$21,452</p>
                </div>
                <div>
                    <p className="text-xs text-gray-500">Average</p>
                    <p className="text-base font-semibold text-gray-900">$23,145</p>
                </div>
            </div>
        </div>
    );
};

export default TotalExpensesCard;