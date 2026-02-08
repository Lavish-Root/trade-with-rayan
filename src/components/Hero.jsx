import React from 'react';
import rayanProfile from '../assets/rayan-profile.jpg';
import { BarChart2 } from 'lucide-react';

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center p-4 pt-8 md:p-6 md:pt-10">
            {/* Logo with glowing ring */}
            <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-brand-gold blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-b from-yellow-300 to-yellow-600 shadow-neon-gold">
                    <img
                        src={rayanProfile}
                        alt="Grow with Rayan Profile"
                        className="w-full h-full rounded-full object-cover border-4 border-black"
                    />
                </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-brand-gold mb-2 tracking-wide uppercase drop-shadow-md">
                Grow With <br />
                <span className="text-4xl md:text-5xl">Rayan<sup className="text-sm align-top">TM</sup></span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-2 text-yellow-100 text-base md:text-lg mt-4 font-medium">
                <BarChart2 className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                <span>Stock Market Learning Community</span>
            </div>
        </div>
    );
};

export default Hero;