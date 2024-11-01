import React from 'react'
import ExpensesTable from '../../components/table/ExpensesTable'
import DashbordComponent from '../../components/dashbordComponent/DashbordComponent'

function DashboardPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <DashbordComponent />
        </div>
    )
}

export default DashboardPage