import React from 'react'

function LoginPage() {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Left Side - Marketing Section */}
            <div className="flex-1 bg-teal-800 text-white p-10 flex items-center justify-center">
                <div className="max-w-lg space-y-4">
                    <h1 className="text-4xl font-bold leading-snug">
                        Welcome Back to TuneGO
                    </h1>
                    <p className="text-lg">
                        Log in to manage your creative work, distribute your music, and collect your royalties.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="flex-1 bg-white p-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center mb-8">
                        <a href="/register" className="px-4 py-2 text-sm font-semibold text-teal-800 border border-teal-800 rounded-lg hover:bg-teal-800 hover:text-white transition duration-300">Create Account</a>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
                    <p className="text-sm text-gray-600 mb-4">Access your account</p>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                                placeholder="Your password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage