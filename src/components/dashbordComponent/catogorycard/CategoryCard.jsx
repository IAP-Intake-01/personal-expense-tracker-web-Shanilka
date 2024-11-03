import React from 'react';
import {
    Utensils,
    GraduationCap,
    Bus,
    Music,
    MoreHorizontal
} from 'lucide-react';
import '../../dashbordComponent/catogorycard/catogorycard.css'

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
    const categories = [
        {
            icon: Utensils,
            category: "Food",
            amount: "83457",
            bgColor: "bg-blue-100"
        },
        {
            icon: GraduationCap,
            category: "Education",
            amount: "21457",
            bgColor: "bg-orange-100"
        },
        {
            icon: Bus,
            category: "Transport",
            amount: "31457",
            bgColor: "bg-green-100"
        },
        {
            icon: Music,
            category: "Entertainment",
            amount: "23419",
            bgColor: "bg-red-100"
        },
        {
            icon: MoreHorizontal,
            category: "Other",
            amount: "18234",
            bgColor: "bg-purple-100"
        }
    ];

    return (
        <div className="p-6  cardmain-w">
            <div className="flex flex-row gap-4 items-center flex-wrap justify-center">
                {categories.map((cat) => (
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
};

export default CategoryCards;