import React from 'react'
import PieChartComponent from '../../components/dashbordComponent/PieChartComponent'
import CategoryCards from '../../components/dashbordComponent/catogorycard/CategoryCard'
import BarChart from '../../components/dashbordComponent/barchartComponent/BarChart'
import TotalExpensesCard from '../../components/dashbordComponent/totalexpensescard/TotalExpensesCard'

function DashboardPage() {

    return (
        <div className="App">
            <CategoryCards />
            <TotalExpensesCard />
            <PieChartComponent />
            <BarChart />
        </div>
    )
}

export default DashboardPage