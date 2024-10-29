import React from 'react';

const ExpensesTable = () => {

    const members = [
        { id: 1, name: "Edgar Rivera", company: "Freelancer Labs", plan: "Office Member", price: "$79.00", payment: "Credit Card", status: "Confirmed" },
        { id: 2, name: "Priya Bollam", company: "Airbnb", plan: "Part-Time", price: "$79.00", payment: "Credit Card", status: "Confirmed" },
        { id: 3, name: "Edna Lee", company: "Spotify", plan: "Part-Time", price: "$79.00", payment: "Credit Card", status: "Not Connected" },
        { id: 4, name: "Kelly Bates", company: "Simply New", plan: "Part-Time", price: "$79.00", payment: "Credit Card", status: "Confirmed" },
        { id: 5, name: "Glen Woods", company: "Kinetic and Fox", plan: "Office Member", price: "$79.00", payment: "Credit Card", status: "Confirmed" },
        { id: 6, name: "Diana Flores", company: "Evercraft", plan: "Full-Time", price: "$79.00", payment: "Credit Card", status: "Confirmed" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            {/* Header */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold text-gray-700">Member Admin</h1>
                <div className="flex justify-between items-center mt-4">
                    <div className="space-x-4">
                        <button className="text-teal-600 font-semibold border-b-2 border-teal-600">All Members</button>
                        <button className="text-gray-500 hover:text-teal-600">Pending</button>
                        <button className="text-gray-500 hover:text-teal-600">Cancelled</button>
                    </div>
                    <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">+ Add Member</button>
                </div>
            </div>

            {/* Search bar */}
            <div className="flex justify-end mb-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-teal-300"
                />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
                <table className="min-w-full border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">Name / Company</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">Plan / Price</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">Payment Method</th>
                            <th className="px-6 py-3 text-left text-gray-600 font-semibold border-b">Status</th>
                            <th className="px-6 py-3 text-center text-gray-600 font-semibold border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member) => (
                            <tr key={member.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 border-b">
                                    <div className="font-semibold text-gray-700">{member.name}</div>
                                    <div className="text-sm text-gray-500">{member.company}</div>
                                </td>
                                <td className="px-6 py-4 border-b">
                                    <div>{member.plan}</div>
                                    <div className="text-sm text-gray-500">{member.price}</div>
                                </td>
                                <td className="px-6 py-4 border-b">{member.payment}</td>
                                <td className="px-6 py-4 border-b">
                                    <span className={`px-2 py-1 text-xs rounded-full ${member.status === "Confirmed" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                                        {member.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 border-b text-center">
                                    <button className="bg-teal-600 text-white px-3 py-1 rounded mr-2 hover:bg-teal-700 transition-colors">Update</button>
                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">Page 1 of 10</p>
                <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded">{"<"}</button>
                    {[1, 2, 3, 4, 5].map((page) => (
                        <button
                            key={page}
                            className={`px-2 py-1 rounded ${page === 1 ? "bg-teal-600 text-white" : "text-gray-500 hover:bg-gray-200"}`}
                        >
                            {page}
                        </button>
                    ))}
                    <button className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded">{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default ExpensesTable;
