import React from 'react';
import { useState } from 'react';

function ExpensesTable() {

    const items = [
        { id: 1, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 2, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 3, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 4, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 5, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 6, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 7, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 8, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 9, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 10, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 11, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 12, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 13, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 14, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 15, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 16, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 17, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 18, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 19, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 20, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 21, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 22, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 23, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 24, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 25, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 26, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 27, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 28, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 29, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 30, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 31, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 32, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 33, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 34, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 35, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 36, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 37, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 38, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 39, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 40, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 41, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 42, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
        { id: 43, category: "Electronics", price: "$299.99", date: "2024-10-28", status: "Available" },
        { id: 44, category: "Furniture", price: "$199.99", date: "2024-10-25", status: "Sold" },
        { id: 45, category: "Clothing", price: "$49.99", date: "2024-10-22", status: "Available" },
        { id: 46, category: "Toys", price: "$29.99", date: "2024-10-18", status: "Available" },
        { id: 47, category: "Appliances", price: "$499.99", date: "2024-10-10", status: "Sold" },
        { id: 48, category: "Books", price: "$19.99", date: "2024-10-05", status: "Available" },
    ];

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
                        {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
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
