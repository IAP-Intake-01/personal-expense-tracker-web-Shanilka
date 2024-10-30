import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

function ExpensesTable() {

    const items = [];

    // ************************************* Load All Data
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/expenses');
                setExpenses(response.data);
            } catch (err) {
                console.error('Error fetching expenses:', err);
                setError('Error fetching expenses');
            } finally {
                setLoading(false);
            }
        };
        fetchExpenses();
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="p-4  top-44 w-11/12 left-8 h-96 absolute">
            <div className="overflow-auto bg-white shadow-md rounded-lg h-80 left-1">
                <table className="min-w-full text-sm text-left text-gray-500 ">
                    <thead className="bg-gray-200 sticky top-0">
                        <tr>
                            <th className="px-6 py-3 text-gray-700 font-semibold">ID</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Category</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Price</th>
                            <th className="px-6 py-3 text-gray-700 font-semibold">Date</th>
                            <th className="px-6 py-3 text-center text-gray-700 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <button className="bg-teal-600 text-white px-3 py-1 rounded mr-2 hover:bg-teal-700 transition-colors">
                                        Update
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                    <span>Rows per page: 10</span>
                    {/* <select
                        value={rowsPerPage}
                        onChange={handleChangeRowsPerPage}
                        className="border rounded-md p-1"
                    >
                        {[5, 10].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select> */}
                </div>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => handleChangePage(page - 1)}
                        disabled={page === 0}
                        className="px-3 py-1 bg-gray-200 rounded-md text-gray-500 hover:bg-gray-300 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>
                        Page {page + 1} of {Math.ceil(items.length / rowsPerPage)}
                    </span>
                    <button
                        onClick={() => handleChangePage(page + 1)}
                        disabled={page >= Math.ceil(items.length / rowsPerPage) - 1}
                        className="px-3 py-1 bg-gray-200 rounded-md text-gray-500 hover:bg-gray-300 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExpensesTable;
