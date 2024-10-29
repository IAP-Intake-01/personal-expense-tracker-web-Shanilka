// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:flex min-h-screen">
            {/* Sidebar */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:block fixed inset-y-0 left-0 w-64 bg-teal-800 text-white p-5 transition-transform md:translate-x-0`}>
                <div className="text-2xl font-semibold mb-8">
                    MyApp
                </div>
                <nav className="space-y-4">
                    <Link to="/dashboard" className="block text-lg hover:bg-teal-600 p-2 rounded-md">
                        Dashboard
                    </Link>
                    <Link to="/expenses" className="block text-lg hover:bg-teal-600 p-2 rounded-md">
                        Expenses
                    </Link>
                </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-between bg-teal-800 text-white p-5">
                <div className="text-2xl font-semibold">MyApp</div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl focus:outline-none"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-5 md:ml-64">
                <h1 className="text-2xl font-bold">Welcome to MyApp</h1>
                <p className="text-gray-600">Select an option from the sidebar to get started.</p>
            </div>
        </div>
    );
}

export default SideBar;
