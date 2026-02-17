'use client';
import { motion } from 'framer-motion';
import { TimelineEvent } from '@/data/history';

type TimelineItemProps = {
    event: TimelineEvent;
    index: number;
};

export default function TimelineItem({ event, index }: TimelineItemProps) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between mb-16 w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Spacer for desktop layout */}
            <div className="hidden md:block md:w-5/12" />

            {/* Center line and dot */}
            <div className="w-full md:w-2/12 flex justify-center relative py-4 md:py-0">
                <div className="w-4 h-4 bg-gryphon-red rounded-full z-10 shadow-[0_0_15px_#C20430] ring-4 ring-dark" />
                {/* Line */}
                <div className="absolute top-4 bottom-[-5rem] w-0.5 bg-white/10 md:left-1/2 md:-ml-px h-[calc(100%+4rem)]" />
            </div>

            {/* Content Card */}
            <div className="w-full md:w-5/12 pl-8 md:pl-0">
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gryphon-red/50 transition-colors backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-6xl font-black text-white">{event.year}</span>
                    </div>
                    <span className="text-gryphon-gold font-bold text-xl block mb-2">{event.year}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                    <p className="text-gray-400">{event.description}</p>
                </div>
            </div>
        </motion.div>
    );
}
