import React, { useState } from 'react'

function RegisterPage() {

    const [userdata, setUserData] = useState({
        email: '',
        password: '',
        conformePassword: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUserData({ ...userdata, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.prevendDefult();

        if (userdata.password !== userdata.conformePassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('https:', {
                email: userdata.email,
                password: userdata.password,
                conformpassword: userdata.conformePassword
            });
            // alert('Form Submitted')
            console.log(response.data)
        } catch (error) {
            alert('Error SingUp')
            setError('Faild to sing up. Please try Again')
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
            {/* Left Side - Marketing Section */}
            <div className="flex-1 bg-teal-800 text-white p-10 flex items-center justify-center">
                <div className="max-w-lg space-y-4">
                    <h1 className="text-4xl font-bold leading-snug">
                        You make the Tune. We make it GO.
                    </h1>
                    <p className="text-lg">
                        Securely store your creative work, protect your rights, distribute your music, and collect your royalties worldwide with TuneGO.
                    </p>
                </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="flex-1 bg-white p-10 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="flex justify-between items-center mb-8">
                        <a href="/login" className="px-4 py-2 text-sm font-semibold text-teal-800 border border-teal-800 rounded-lg hover:bg-teal-800 hover:text-white transition duration-300">Sign In</a>

                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Registration</h2>
                    <p className="text-sm text-gray-600 mb-4">Create your free account</p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                                placeholder="you@example.com"
                                required
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                // value={userdata.password}
                                onChange={handleInputChange}
                                type="password"
                                className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                                placeholder="Enter 8 characters or more"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Repeat password</label>
                            <input
                                // value={userdata.conformePassword}
                                onChange={handleInputChange}
                                type="password"
                                className="w-full px-4 py-3 mt-1 text-gray-900 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-200"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-200"
                                required
                            />
                            <label className="ml-2 text-sm text-gray-600">
                                I accept the <a href="#" className="text-teal-600 hover:underline">Terms and Conditions</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 font-semibold text-white bg-teal-600 rounded-md hover:bg-teal-700 transition duration-300"
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage