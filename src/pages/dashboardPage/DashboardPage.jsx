import React from 'react'
import RevenueCard from '../../components/dashbordComponent/RevenueCard'
import ExpenseCard from '../../components/dashbordComponent/ExpenseCard'

function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <RevenueCard />
            <ExpenseCard />
        </div>
    )
}

export default DashboardPage