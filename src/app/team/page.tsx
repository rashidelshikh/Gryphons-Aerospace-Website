"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { team } from '@/data/team';

export default function TeamPage() {
    const president = team.find(m => m.category === 'president');
    const vp = team.find(m => m.category === 'vp');
    const execs = team.filter(m => m.category === 'exec');

    return (
        <main className="min-h-screen bg-[#F9F9F9] flex flex-col">
            <Navbar />

            {/* Header Section */}
            <section className="pt-40 pb-16 px-4 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <SectionHeader 
                            title="MEET THE TEAM" 
                            subtitle="The minds that run this club!"
                            className="!mb-8 scale-90 origin-left md:scale-100" 
                        />
                        <h3 className="font-heading text-4xl mb-6 tracking-wider uppercase text-gray-900">OUR TEAM</h3>
                        <div className="text-gray-700 text-lg space-y-6 leading-relaxed font-medium">
                            <p>
                                Gryphons Aerospace is a new club at Guelph aiming to explore the growing Canadian aerospace sector through international design competitions and team projects.
                            </p>
                            <p>
                                On our team, students from every discipline will develop skills in mechanical, electrical and computer engineering in a supportive team environment.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-xl">
                                <span>[ Team Hero Image ]</span>
                            </div>
                            <img 
                                src="/images/team/team-hero.jpg" 
                                alt="Gryphon Aerospace Team working" 
                                className="object-cover w-full h-full relative z-10"
                                onError={(e) => { e.currentTarget.style.opacity = '0' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Roster Layout */}
            <section className="py-20 px-4 md:px-12 max-w-6xl mx-auto text-center w-full">
                <h3 className="text-4xl font-heading mb-4 text-gray-900 tracking-wider">2025-2026</h3>
                <p className="text-lg text-gray-600 mb-20 max-w-2xl mx-auto font-medium">
                    Gryphon Aerospace is currently being led by {president?.name || 'Daniel SURNAME'}, president for the 2025-2026 season.
                </p>

                {/* President & VP */}
                <div className="mb-24">
                    <h4 className="font-heading text-6xl mb-16 tracking-wide uppercase text-gray-900 relative inline-block">
                        <span className="relative z-10">PRESIDENT & VP</span>
                        <svg className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[110%] h-[100px] -z-10 text-gryphon-red opacity-20 pointer-events-none" viewBox="0 0 500 40" fill="none" preserveAspectRatio="none"><path d="M0,25 Q150,15 250,22 T500,10" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg>
                    </h4>
                    
                    <div className="flex flex-wrap justify-center gap-16 md:gap-32">
                        {[president, vp].map((member, idx) => member && (
                            <div key={idx} className="flex flex-col items-center group">
                                <div className="relative w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium z-0">Missing Image</div>
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-full relative z-10" onError={(e) => { e.currentTarget.style.opacity = '0' }}/>
                                </div>
                                <h5 className="font-heading text-4xl text-gray-900 uppercase tracking-widest">{member.name}</h5>
                                <p className="text-gryphon-red font-bold uppercase text-sm tracking-widest mt-2">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Execs */}
                <div>
                    <h4 className="font-heading text-6xl mb-16 tracking-wide uppercase text-gray-900 relative inline-block">
                        <span className="relative z-10">OUR EXECS</span>
                        <svg className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[110%] h-[100px] -z-10 text-gryphon-red opacity-20 pointer-events-none" viewBox="0 0 500 40" fill="none" preserveAspectRatio="none"><path d="M0,25 Q150,15 250,22 T500,10" stroke="currentColor" strokeWidth="10" strokeLinecap="round" /></svg>
                    </h4>
                    
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-5xl mx-auto">
                        {execs.map((member, idx) => (
                            <div key={idx} className="flex flex-col items-center group w-48">
                                <div className="relative w-44 h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:-translate-y-3 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm font-medium z-0">Missing Image</div>
                                    <img src={member.image} alt={member.name} className="object-cover w-full h-full relative z-10" onError={(e) => { e.currentTarget.style.opacity = '0' }}/>
                                </div>
                                <h5 className="font-heading text-3xl text-gray-900 uppercase tracking-widest">{member.name}</h5>
                                <p className="text-gray-500 font-bold text-xs text-center tracking-widest leading-tight mt-2 uppercase">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Banner */}
            <section className="bg-white py-24 relative overflow-hidden border-t border-gray-200/50 mt-12">
                {/* Subtle patterned background placeholder */}
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
