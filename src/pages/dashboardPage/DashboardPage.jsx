import React from 'react'
import RevenueCard from '../../components/dashbordComponent/RevenueCard'
import ExpenseCard from '../../components/dashbordComponent/ExpenseCard'
import Chart from '../../components/dashbordComponent/Chart'
import PieChartComponent from '../../components/dashbordComponent/PieChartComponent'
import BarChart from '../../components/dashbordComponent/BarChart'

function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            {/* <RevenueCard /> */}
            {/* <ExpenseCard /> */}
            {/* <Chart /> */}
            <PieChartComponent />
            <BarChart />
        </div>
    )
}

export default DashboardPage