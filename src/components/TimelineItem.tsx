"use client";

import { TimelineEvent } from '@/data/history';

type TimelineItemProps = {
    event: TimelineEvent;
};

export default function TimelineItem({ event }: TimelineItemProps) {
    return (
        <div className="relative pl-8 md:pl-16 pb-20 group last:pb-8">
            {/* Red Line extending downwards */}
            <div className="absolute left-[7px] top-6 bottom-[-24px] w-0.5 bg-gryphon-red group-last:bg-transparent" />
            
            {/* Red Dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-gryphon-red border-4 border-white shadow-sm z-10 ring-2 ring-gryphon-red/20" />

            {/* Year Label */}
            <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center">{event.year}</h3>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Content */}
                <div className="lg:w-1/2">
                    <h4 className="font-heading text-4xl lg:text-5xl uppercase tracking-widest text-gray-900 mb-6 flex items-center gap-4 relative inline-block">
                        <span className="relative z-10">{event.title}</span>
                        {/* Subtle red line detail on heading */}
                        <svg className="absolute top-[40%] left-[-5%] w-[110%] h-[30px] -z-10 text-gryphon-red pointer-events-none" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none"><path d="M0,10 Q25,5 50,15 T100,5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg>
                    </h4>
                    
                    <div className="text-gray-600 text-lg leading-relaxed font-medium mb-6 space-y-4">
                        <p>{event.description}</p>
                        {/* Dummy paragraph to match Figma mockup look */}
                        <p>Aenean quis bibendum augue, ut consequat metus. Sed non nunc nec sem blandit porttitor at ut sapien.</p>
                    </div>
                    <span className="text-gryphon-red font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                        This is a link &rarr;
                    </span>
                </div>

                {/* Image */}
                <div className="lg:w-1/2 relative mt-4 lg:mt-0">
                    <div className="absolute -right-2 -bottom-2 w-full h-full bg-gryphon-red rounded-3xl -z-10" />
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-gray-100">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium text-sm">Missing Image</div>
                        <img 
                            src={event.image || '/images/team/placeholder.svg'} 
                            alt={event.title} 
                            className="object-cover w-full h-full relative z-10" 
                            onError={(e) => { e.currentTarget.style.opacity = '0' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
