import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Clock, DollarSign, Truck, Gauge } from 'lucide-react';

// Sample data for the line chart
const revenueData = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(2024, i).toLocaleString('default', { month: 'short' }),
    value: Math.floor(Math.random() * 50000) + 70000
}));

// Sample fleet data
const fleetData = [
    { id: 'FL-001', performance: 85, revenue: 56780 },
    { id: 'FL-002', performance: 75, revenue: 48780 },
    { id: 'FL-003', performance: 65, revenue: 26500 },
    { id: 'FL-004', performance: 45, revenue: 30700 },
    { id: 'FL-005', performance: 22, revenue: 40000 }
];

// Sample emissions data
const emissionsData = [
    { vehicle: 'FL-001', emissions: 6.2 },
    { vehicle: 'FL-002', emissions: 5.8 },
    { vehicle: 'FL-003', emissions: 4.9 },
    { vehicle: 'FL-004', emissions: 7.1 },
    { vehicle: 'FL-005', emissions: 5.4 }
];

const DashbordComponent = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Fleet Management</h1>
                </header>

                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { title: 'Total Expenses', value: '$124K', icon: DollarSign, color: 'text-red-500' },
                        { title: 'Profit', value: '$134K', icon: DollarSign, color: 'text-green-500' },
                        { title: 'Revenue', value: '$100K', icon: DollarSign, color: 'text-blue-500' },
                        { title: 'Labor Hours', value: '300K', icon: Clock, color: 'text-purple-500' }
                    ].map((stat, index) => (
                        <Card key={index} className="bg-white">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.title}</p>
                                        <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                    </div>
                                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Revenue Chart */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <h2 className="text-lg font-semibold mb-4">Revenue Trends</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#10B981"
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Fleet Performance */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-4">Fleet Performance</h2>
                            <div className="space-y-4">
                                {fleetData.map((vehicle) => (
                                    <div key={vehicle.id} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Truck className="w-5 h-5 text-gray-400" />
                                            <span className="font-medium">{vehicle.id}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-32 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-green-500 rounded-full h-2"
                                                    style={{ width: `${vehicle.performance}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600">{vehicle.performance}%</span>
                                            <span className="text-sm font-medium">${vehicle.revenue}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Emissions Chart */}
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-4">CO2 Emissions</h2>
                            <div className="space-y-4">
                                {emissionsData.map((vehicle) => (
                                    <div key={vehicle.vehicle} className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <Gauge className="w-5 h-5 text-gray-400" />
                                            <span className="font-medium">{vehicle.vehicle}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-32 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-emerald-500 rounded-full h-2"
                                                    style={{ width: `${(vehicle.emissions / 8) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-gray-600">{vehicle.emissions} t</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashbordComponent;