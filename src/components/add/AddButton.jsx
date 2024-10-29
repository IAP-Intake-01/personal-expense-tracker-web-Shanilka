import React, { useState } from 'react';
import '../add/Button.css';

function AddButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible(!isVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        toggleModal(); // Close the modal after submitting
    };

    return (
        <div>
            <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-100 text-emerald-600 rounded-md 
                           hover:bg-emerald-100 hover:text-emerald-600 hover:border-none 
                           transition duration-500 ease-in-out add-expenses-btn-custom-possition">
                + Add New Expenses
            </button>

            {/* Modal Overlay */}
            {isVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">New Expense</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-4">
                                <span className="text-gray-700">Expense Name</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                    placeholder="Enter expense name"
                                    required
                                />
                            </label>
                            <label className="block mb-4">
                                <span className="text-gray-700">Category</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                    placeholder="Enter category"
                                    required
                                />
                            </label>
                            <label className="block mb-4">
                                <span className="text-gray-700">Amount</span>
                                <input
                                    type="number"
                                    className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                    placeholder="Enter amount"
                                    required
                                />
                            </label>
                            <label className="block mb-4">
                                <span className="text-gray-700">Date</span>
                                <input
                                    type="date"
                                    className="mt-1 block w-full h-12 border border-gray-300 rounded-md shadow-sm"
                                    required
                                />
                            </label>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleModal}
                                    className="mt-4 ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddButton;
