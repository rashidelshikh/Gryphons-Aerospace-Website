"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F9F9F9] flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <SectionHeader 
                            title="CONTACT US" 
                            subtitle="University of Guelph's aerospace club"
                            className="!mb-8 origin-left" 
                        />
                        
                        <div className="text-gray-700 text-lg space-y-6 leading-relaxed font-medium mb-16">
                            <p>
                                Gryphon Aerospace is a new club at Guelph aiming to explore the growing Canadian aerospace sector through international design competitions and team projects.
                            </p>
                            <p>
                                On our team, students from every discipline will develop skills in mechanical, electrical and computer engineering in a supportive team environment.
                            </p>
                        </div>

                        {/* For Students Block */}
                        <div className="mb-16 w-full">
                            <h3 className="font-heading text-4xl md:text-5xl mb-6 tracking-wider uppercase text-gray-900">FOR STUDENTS</h3>
                            <div className="text-gray-600 text-lg leading-relaxed font-medium mb-8 space-y-4">
                                <p>Are you a University of Guelph student passionate about aerospace? We recruit for technical and operations roles at the beginning of each semester.</p>
                                <p>Donec nec massa lacus. Ut nisl dolor, porttitor sit amet lorem sed, bibendum pulvinar arcu. Duis at egestas velit, vel gravida dolor. Sed quam tellus eleifend.</p>
                            </div>
                            <a href="#" className="inline-block bg-gryphon-red hover:bg-[#a00327] text-white font-black uppercase tracking-widest px-10 py-4 rounded-full text-base transition-transform hover:scale-105 shadow-md">
                                Apply Now
                            </a>
                        </div>

                        {/* For Sponsors Block */}
                        <div className="w-full">
                            <h3 className="font-heading text-4xl md:text-5xl mb-6 tracking-wider uppercase text-gray-900">FOR SPONSORS</h3>
                            <div className="text-gray-600 text-lg leading-relaxed font-medium mb-8 space-y-4">
                                <p>Partner with us to support the next generation of aerospace engineers. We offer various sponsorship packages with branding and recruitment benefits.</p>
                                <p>Donec nec massa lacus. Ut nisl dolor, porttitor sit amet lorem sed, bibendum pulvinar arcu <a href="mailto:email@gmail.com" className="text-gryphon-red underline hover:text-[#a00327] font-bold">email@gmail.com</a> duis at egestas velit, vel gravida dolor sed quam tellus.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 sticky top-32">
                        <div className="relative aspect-[4/5] w-full max-w-xl ml-auto rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border-8 border-white group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center text-gray-400 font-medium text-xl transition-transform duration-700 group-hover:scale-105">
                                <span>[ Contact Hero Image ]</span>
                            </div>
                            <img 
                                src="/images/contact/contact-hero.jpg" 
                                alt="Gryphon Aerospace Team working" 
                                className="object-cover w-full h-full relative z-10 transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => { e.currentTarget.style.opacity = '0' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect With Us Footer applies globally */}
            <Footer />
        </main>
    );
}
