import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UpdateForm({ isOpen, closeModal, expenses, loadAll }) { // Add updateExpensesList prop

    const [id, setId] = useState(expenses.id);
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");

    // function getall() {
    //     useEffect(() => {
    //         const fetchExpenses = async () => {
    //             try {
    //                 const response = await axios.get('http://localhost:3000/api/getAllexpenses');
    //                 setExpenses(response.data);
    //             } catch (err) {
    //                 console.error('Error fetching expenses:', err);
    //                 setError('Error fetching expenses');
    //             }
    //         };
    //         fetchExpenses();
    //     }, []);
    // }

    const handleUpdate = async (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log(id, category, price, date)
        try {
            const response = await axios.put('http://localhost:3000/api/updateExpenses', {
                id: id, // Use the expense's id directly
                category: category,
                price: price,
                date: date,
            });

            console.log(response.data.message);

            closeModal(); // Close the modal after updating
        } catch (error) {
            console.error('Error updating expense:', error.response?.data?.error || error.message);
        }
        // getall();
    };

    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                    <h2 className="text-lg font-semibold mb-4">Update Expense</h2>
                    <form onSubmit={handleUpdate}>
                        <label className="block mb-4">
                            <span className="text-gray-700">Category</span>
                            <select
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="" disabled>Select category</option>
                                <option value="Foods">Foods</option>
                                <option value="Education">Education</option>
                                <option value="Transport">Transport</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Other">Other</option>
                                {/* Add more options as needed */}
                            </select>
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Amount</span>
                            <input
                                type="number"
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                placeholder="Enter amount"
                                required
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </label>
                        <label className="block mb-4">
                            <span className="text-gray-700">Date</span>
                            <input
                                type="date"
                                className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                required
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <div className="flex justify-end">
                            <button
                                type="submit" // Keep this as submit to trigger the form submission
                                className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">
                                Update
                            </button>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="mt-4 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default UpdateForm;
