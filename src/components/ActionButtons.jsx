import React from 'react';
import { Rocket, Zap } from 'lucide-react';

const ActionButtons = () => {
    return (
        <div className="flex flex-col items-center w-full px-4 md:px-6 gap-5 md:gap-6 my-4 md:my-6">
            {/* Info Badges */}
            <div className="flex gap-3 md:gap-4 w-full max-w-md justify-center mb-[-0.5rem] z-10 flex-wrap">
                <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 bg-black/40 text-gray-300 text-xs md:text-sm font-medium backdrop-blur-md shadow-lg whitespace-nowrap">
                    24/7 Updates
                </div>
                <div className="px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 bg-black/40 text-gray-300 text-xs md:text-sm font-medium backdrop-blur-md shadow-lg whitespace-nowrap">
                    Free to Join
                </div>
            </div>

            {/* Telegram Button */}
            <a
                href="https://t.me/tradewithrohan78"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full max-w-md bg-gradient-to-r from-emerald-500 to-green-600 p-[2px] rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
                <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors rounded-xl"></div>
                <div className="relative bg-gradient-to-r from-emerald-600 to-green-700 rounded-xl py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat group-hover:bg-[position:200%_0,0_0] transition-[background-position] duration-[1500ms] ease-in-out pointer-events-none"></div>
                    <Rocket className="w-6 h-6 md:w-7 md:h-7 text-white animate-bounce-custom drop-shadow-md" />
                    <span className="text-white font-extrabold text-xl md:text-2xl tracking-wide drop-shadow-sm">Join Free Telegram Channel</span>
                </div>
            </a>

            {/* Trusted Group Button */}
            <div className="w-full max-w-md relative group">
                <div className="absolute inset-0 bg-brand-gold blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-black border-2 border-brand-gold rounded-xl py-4 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(218,165,32,0.3)]">
                    <Zap className="w-6 h-6 text-brand-gold fill-brand-gold" />
                    <span className="text-brand-gold font-bold text-lg">India's Trusted Learning Group</span>
                </div>
            </div>
        </div>
    );
};

export default ActionButtons;