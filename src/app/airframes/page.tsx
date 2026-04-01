"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AirframeCard from '@/components/AirframeCard';
import { airframes } from '@/data/airframes';

export default function AirframesPage() {
    return (
        <main className="min-h-screen bg-[#F9F9F9] flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-16 px-4 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <SectionHeader 
                            title="OUR AIRFRAMES" 
                            subtitle="Airframes we've developed so far"
                            className="!mb-8 scale-90 md:scale-100 origin-left" 
                        />
                        <h3 className="font-heading text-3xl mb-6 tracking-wider uppercase text-gray-900">HEADING</h3>
                        <div className="text-gray-700 text-lg space-y-6 leading-relaxed font-medium">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat mattis ultrices. Nam hendrerit sodales turpis. Nam id metus et eros ullamcorper volutpat.
                            </p>
                            <p>
                                Nulla facilisi. Aenean quis bibendum augue, ut consequat metus. Sed non nunc nec sem blandit porttitor at ut sapien. 
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[#C20430] border-b-[16px] border-r-[16px]">
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-medium text-xl bg-white">
                                <span>[ Airframes Hero Image ]</span>
                            </div>
                            <img 
                                src="/images/airframes/airframes-hero.jpg" 
                                alt="Gryphon Aerospace Airframes" 
                                className="object-cover w-full h-full relative z-10"
                                onError={(e) => { e.currentTarget.style.opacity = '0' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h3 className="text-5xl md:text-6xl font-heading text-gray-900 tracking-wide uppercase mb-6">PAST AIRFRAMES</h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
                        Gryphon Aerospace is a new club at Guelph aiming to explore the growing Canadian aerospace sector through international design competitions and team projects.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {airframes.map((airframe) => (
                        <AirframeCard key={airframe.id} airframe={airframe} />
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
