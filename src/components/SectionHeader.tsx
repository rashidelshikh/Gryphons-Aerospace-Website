import React from 'react';

type SectionHeaderProps = {
    title: string;
    subtitle?: string;
    className?: string; // Allow custom classes
};

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-16 text-center ${className}`}>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-widest text-white inline-block relative pb-4">
                {title}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gryphon-red rounded-full shadow-[0_0_15px_rgba(194,4,48,0.5)]" />
            </h2>
            {subtitle && <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </div>
    );
}
