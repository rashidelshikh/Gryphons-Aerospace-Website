import React from 'react';

type SectionHeaderProps = {
    title: string;
    subtitle?: string;
    className?: string;
};

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-12 z-10 relative ${className}`}>
            <h2 className="text-6xl md:text-8xl font-heading uppercase tracking-normal text-gray-900 leading-[0.85] inline-block relative isolate">
                <span className="relative z-10">{title}</span>
                {/* Red Scribble/Strikethrough sitting strictly behind the text */}
                <svg 
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[105%] h-[120px] -z-10 text-gryphon-red pointer-events-none"
                    viewBox="0 0 500 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path 
                        d="M0,25 Q150,15 250,22 T500,10" 
                        stroke="currentColor" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                    />
                </svg>
            </h2>
            {subtitle && <p className="mt-8 text-gray-600 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
    );
}
