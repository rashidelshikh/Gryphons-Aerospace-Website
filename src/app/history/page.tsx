"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimelineItem from '@/components/TimelineItem';
import { history } from '@/data/history';

export default function HistoryPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-48 pb-40 mb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gray-900">
                    {/* Fallback pattern if image is missing */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-54.628 54.628-.83-.83z\\' fill=\\'%23fff\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
                    <img 
                        src="/images/history/history-hero.jpg" 
                        alt="Competition History Hero" 
                        className="w-full h-full object-cover object-center opacity-80" 
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                </div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full mt-12">
                    <h5 className="text-white/60 font-black tracking-widest uppercase mb-4 text-sm">A BIT ABOUT US</h5>
                    <h1 className="text-6xl md:text-8xl lg:text-[100px] font-heading text-white tracking-widest uppercase relative inline-block leading-none">
                        COMPETITION <br/>HISTORY
                        <svg className="absolute top-[35%] left-[-5%] w-[110%] h-[80px] -z-10 text-gryphon-red pointer-events-none" viewBox="0 0 100 20" fill="none" preserveAspectRatio="none"><path d="M0,10 Q25,5 50,15 T100,5" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>
                    </h1>
                </div>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-12 px-4 md:px-12 max-w-6xl mx-auto w-full flex-grow">
                <div className="relative pl-2 md:pl-12">
                    {history.map((event, idx) => (
                        <TimelineItem key={idx} event={event} />
                    ))}
                </div>
            </section>

            {/* Join Banner */}
            <section className="bg-[#F9F9F9] py-24 relative overflow-hidden mt-20 border-t border-gray-100">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-54.628 54.628-.83-.83z\\' fill=\\'%23000\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')" }}></div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h2 className="font-heading text-5xl md:text-7xl text-gray-900 tracking-normal uppercase mb-8 drop-shadow-sm">INTERESTED IN JOINING?</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                        Gryphon Aerospace is always open to new members. If you&apos;re interested in building, flying drones and competing on a national level, join us for 2025-2026 season!
                    </p>
                    <a href="/contact" className="inline-block bg-gryphon-red hover:bg-[#a00327] text-white font-black uppercase tracking-widest px-12 py-5 rounded-full text-lg transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(194,4,48,0.3)]">
                        Apply Now
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
