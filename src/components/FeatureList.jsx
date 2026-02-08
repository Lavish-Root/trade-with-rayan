import React from 'react';
import { BarChart2, BookOpen, Zap } from 'lucide-react';

const FeatureList = () => {
    const features = [
        {
            icon: <BarChart2 className="w-8 h-8 text-blue-400" />,
            title: "Market Insights & Analysis",
            subtitle: "Real-time market updates and expert discussions",
            gradient: "from-blue-500/10 to-blue-600/5",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: <BookOpen className="w-8 h-8 text-green-400" />,
            title: "Learn Trading Strategies",
            subtitle: "Investment | Share Market | Trading guidance",
            gradient: "from-green-500/10 to-green-600/5",
            border: "group-hover:border-green-500/50"
        },
        {
            icon: <Zap className="w-8 h-8 text-yellow-400" />,
            title: "Practical Tips & Tricks",
            subtitle: "Actionable strategies and proven methods",
            gradient: "from-yellow-500/10 to-yellow-600/5",
            border: "group-hover:border-yellow-500/50"
        }
    ];

    return (
        <div className="flex flex-col gap-4 w-full max-w-md px-4 md:px-6 text-white mb-10">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={`relative group p-4 rounded-2xl border border-white/10 bg-gradient-to-r ${feature.gradient} backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] ${feature.border}`}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                            {feature.icon}
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold text-gray-100">{feature.title}</h3>
                            <p className="text-sm text-gray-400 font-light leading-snug">{feature.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeatureList;