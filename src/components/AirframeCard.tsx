'use client';
import { motion } from 'framer-motion';
import { Airframe } from '@/data/airframes';
import Image from 'next/image';

type AirframeCardProps = {
    airframe: Airframe;
};

export default function AirframeCard({ airframe }: AirframeCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10, boxShadow: '0 10px 30px -10px rgba(194, 4, 48, 0.3)' }}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm group"
        >
            <div className="relative h-64 overflow-hidden">
                {/* Placeholder background if image load fails or is missing */}
                <div className="absolute inset-0 bg-gray-800/50" />

                {/* Using standard img tag if strict static export validation fails with next/image without specific loader, 
            but unoptimized: true in next.config.mjs allows next/image. 
            We'll use next/image with unoptimized config. */}
                <Image
                    src={airframe.image}
                    alt={airframe.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 z-10">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full mb-2 uppercase tracking-wide ${airframe.status === 'Competed' ? 'bg-gryphon-gold text-dark-black' : 'bg-blue-600/80 text-white backdrop-blur-sm'
                        }`}>
                        {airframe.status}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{airframe.name}</h3>
                </div>
            </div>
            <div className="p-6">
                <p className="text-gray-400 leading-relaxed">{airframe.description}</p>
            </div>
        </motion.div>
    );
}
