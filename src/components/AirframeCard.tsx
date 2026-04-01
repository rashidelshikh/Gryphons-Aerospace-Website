"use client";

import { Airframe } from '@/data/airframes';

type AirframeCardProps = {
    airframe: Airframe;
};

export default function AirframeCard({ airframe }: AirframeCardProps) {
    return (
        <div className="bg-gradient-to-b from-white to-gray-100 rounded-[40px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center p-8 pb-10 transition-transform duration-300 hover:-translate-y-2">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-8 bg-transparent">
                <div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center text-gray-400 font-medium text-sm z-0 rounded-3xl">Missing Image</div>
                <img
                    src={airframe.image}
                    alt={airframe.name}
                    className="object-contain w-full h-full relative z-10 drop-shadow-xl p-4"
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                />
            </div>
            
            <h3 className="text-4xl font-heading text-gray-900 uppercase tracking-widest text-center mb-3">
                {airframe.name}
            </h3>
            
            <p className="text-gray-500 text-sm md:text-base text-center leading-relaxed font-medium px-2">
                {airframe.description}
            </p>
        </div>
    );
}
