import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import {
    Utensils,
    GraduationCap,
    Bus,
    Music,
    MoreHorizontal,
    ShoppingCartIcon
} from 'lucide-react';
import '../../dashbordComponent/catogorycard/catogorycard.css';

const CategoryCard = memo(({ icon: Icon, category, amount, bgColor }) => (
    <div className={`p-4 rounded-lg ${bgColor} flex items-center space-x-3 w-48`}>
        <div className="bg-white/90 p-2 rounded-lg">
            <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{category}</p>
            <p className="text-xl font-bold text-gray-900">{amount}</p>
        </div>
    </div>
));

const CategoryCards = memo(() => {
    const [categories, setCategories] = useState([
        { icon: Utensils, category: "Foods", amount: 0, bgColor: "bg-blue-100" },
        { icon: GraduationCap, category: "Education", amount: 0, bgColor: "bg-orange-100" },
        { icon: Bus, category: "Transport", amount: 0, bgColor: "bg-green-100" },
        { icon: ShoppingCartIcon, category: "Shopping", amount: 0, bgColor: "bg-red-100" },
        { icon: MoreHorizontal, category: "Other", amount: 0, bgColor: "bg-purple-100" }
    ]);
    const [fetched, setFetched] = useState(false); // Add a fetched state

    useEffect(() => {
        // Get userEmail from localStorage
        const userEmail = localStorage.getItem('userEmail');
        if (!userEmail) {
            console.error('No user email found in localStorage');
            return;
        }

        // Check if data is already fetched to avoid double fetching
        if (fetched) return;

        const fetchData = async (email) => {
            try {
                const response = await axios.get(`http://localhost:3000/api/getCatogoryTotal/${email}`);
                const data = response.data;
                setCategories(prevCategories =>
                    prevCategories.map(category => {
                        const match = data.find(item => item.category.toLowerCase() === category.category.toLowerCase());
                        return match ? { ...category, amount: match.total_price } : category;
                    })
                );
                setFetched(true); // Mark as fetched
            } catch (error) {
                console.error('Error fetching category totals:', error);
            }
        };

        fetchData(userEmail); // Pass the userEmail to the API

    }, [fetched]); // Include `fetched` dependency to prevent multiple fetches

    return (
        <div className="p-6 cardmain-w">
            <div className="flex flex-row gap-4 items-center flex-wrap justify-center">
                {categories.map(cat => (
                    <CategoryCard
                        key={cat.category}
                        icon={cat.icon}
                        category={cat.category}
                        amount={cat.amount}
                        bgColor={cat.bgColor}
                    />
                ))}
            </div>
        </div>
    );
});

export default CategoryCards;
