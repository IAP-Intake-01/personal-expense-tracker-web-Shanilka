import React, { useEffect, useState } from 'react';
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

const CategoryCard = ({ icon: Icon, category, amount, bgColor }) => (
    <div className={`p-4 rounded-lg ${bgColor} flex items-center space-x-3 w-48`}>
        <div className="bg-white/90 p-2 rounded-lg">
            <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-gray-600">{category}</p>
            <p className="text-xl font-bold text-gray-900">{amount}</p>
        </div>
    </div>
);

const CategoryCards = () => {
    const [categories, setCategories] = useState([
        { icon: Utensils, category: "Food", amount: 0, bgColor: "bg-blue-100" },
        { icon: GraduationCap, category: "Education", amount: 0, bgColor: "bg-orange-100" },
        { icon: Bus, category: "Transport", amount: 0, bgColor: "bg-green-100" },
        { icon: ShoppingCartIcon, category: "Shoping", amount: 0, bgColor: "bg-red-100" },
        { icon: MoreHorizontal, category: "Other", amount: 0, bgColor: "bg-purple-100" }
    ]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getCatogoryTotal');
                const data = response.data; // This is the actual array from the API response
                const updatedCategories = categories.map(category => {
                    const match = data.find(item => item.category.toLowerCase() === category.category.toLowerCase());
                    return match ? { ...category, amount: match.total_price } : category;
                });
                setCategories(updatedCategories);
            } catch (error) {
                console.error('Error fetching category totals:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="p-6 cardmain-w">
            <div className="flex flex-row gap-4 items-center flex-wrap justify-center">
                {categories.map(cat => (
                    <CategoryCard
                        key={cat.category}
                        icon={cat.icon}
                        category={cat.category}
                        rs={cat.rs}
                        amount={cat.amount}
                        bgColor={cat.bgColor}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryCards;
