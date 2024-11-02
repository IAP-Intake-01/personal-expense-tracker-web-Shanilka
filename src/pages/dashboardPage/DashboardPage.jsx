import React from 'react'
import RevenueCard from '../../components/dashbordComponent/RevenueCard'
import ExpenseCard from '../../components/dashbordComponent/ExpenseCard'
import Chart from '../../components/dashbordComponent/Chart'
import PieChartComponent from '../../components/dashbordComponent/PieChartComponent'
import BarChart from '../../components/dashbordComponent/BarChart'
import Card from '../../components/dashbordComponent/Card'

function DashboardPage() {

    const data = [
        { icon: '📅', count: '40', label: 'Appointments', subtitle: 'Yesterday: 30 Appointments' },
        { icon: '👤', count: '21', label: 'New Admit', subtitle: 'Yesterday: 17 Admits' },
        { icon: '🩺', count: '14', label: 'Operations', subtitle: 'Yesterday: 9 Operations' },
        { icon: '👨‍⚕️', count: '15', label: 'Doctors', subtitle: 'Today Available' },
        { icon: '👩‍⚕️', count: '36', label: 'Nurses', subtitle: 'Today Available' },
        { icon: '💰', count: '$52,140', label: 'Earnings', subtitle: 'Yesterday: $41,000' },
    ];

    return (
        <div className="App">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            icon={item.icon}
                            count={item.count}
                            label={item.label}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </div> */}
            <PieChartComponent />
            <BarChart />

        </div>
    )
}

export default DashboardPage