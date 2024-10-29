// Sidebar.js
import React, { useState } from 'react';
import {
    Home,
    Users,
    Settings,
    HelpCircle,
    LogOut,
    Menu,
    X,
    BarChart2,
    Mail,
    Calendar
} from 'lucide-react';
import { Link, Route, Routes } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import DashboardPage from '../../pages/dashboardPage/DashboardPage';
import ExpensesPage from '../../pages/expensesPage/ExpensesPage';
import route from '../../routes/route';

function SideBar() {

    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { title: 'Dashboard', icon: <Home size={20} />, badge: null },
        { title: 'Analytics', icon: <BarChart2 size={20} />, badge: '4' },
        { title: 'Customers', icon: <Users size={20} />, badge: 'New' },
        { title: 'Messages', icon: <Mail size={20} />, badge: '23' },
        { title: 'Calendar', icon: <Calendar size={20} />, badge: null },
        { title: 'Settings', icon: <Settings size={20} />, badge: null },
        { title: 'Help Center', icon: <HelpCircle size={20} />, badge: null },
    ];

    return (
        <div className="min-h-screen">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`
          fixed top-0 left-0 h-full bg-white w-64 shadow-lg z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:h-screen
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
                {/* Logo Section */}
                <div className="flex items-center justify-center h-16 bg-teal-600">
                    <h1 className="text-white text-xl font-bold">Your Logo</h1>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6 px-4">
                    <div className="space-y-2">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-teal-50 rounded-lg transition-colors duration-200 group"
                            >
                                <div className="flex items-center">
                                    <span className="text-gray-500 group-hover:text-teal-600">
                                        {item.icon}
                                    </span>
                                    <span className="ml-3 font-medium group-hover:text-teal-600">
                                        {item.title}
                                    </span>
                                </div>
                                {item.badge && (
                                    <span className={`
                      px-2 py-1 text-xs rounded-full
                      ${item.badge === 'New'
                                            ? 'bg-teal-100 text-teal-600'
                                            : 'bg-gray-100 text-gray-600'}
                    `}>
                                        {item.badge}
                                    </span>
                                )}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 w-full p-4 border-t">
                    <a
                        href="#"
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 rounded-lg transition-colors duration-200 group"
                    >
                        <span className="text-gray-500 group-hover:text-teal-600">
                            <LogOut size={20} />
                        </span>
                        <span className="ml-3 font-medium group-hover:text-teal-600">
                            Logout
                        </span>
                    </a>

                </div>

            </div>
            {/* Main Content Area */}
            <div className="lg:ml-64 p-8 absolute top-0 bg-slate-800 w-10/12">
                <div className="max-w-4xl mx-auto w-full">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Dashboard</h2>
                    <p className="text-gray-600 w-96">
                        This is your main content area. The sidebar will be visible on large screens
                        and can be toggled on mobile devices using the menu button.
                    </p>
                </div>
            </div>


        </div>
    );
}

export default SideBar;
