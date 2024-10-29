import React from 'react'
import ExpensesTable from '../../components/table/ExpensesTable'

function ExpensesPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Expenses</h2>
            <ExpensesTable />
        </div>
    )
}

export default ExpensesPage