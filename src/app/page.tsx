import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for hero background */}
                    <div className="absolute inset-0 bg-[url('/images/team/placeholder.svg')] bg-cover bg-center opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#121212_100%)]" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-6 drop-shadow-2xl">
                        GRYPHONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-gryphon-red to-orange-600">AEROSPACE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light tracking-wide">
                        Pushing the boundaries of student rocketry and autonomous flight.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/airframes"
                            className="group bg-gryphon-red hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 hover:gap-3"
                        >
                            View Airframes <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="/team"
                            className="group bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all backdrop-blur-sm"
                        >
                            Meet the Team
                        </Link>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
                    <ChevronDown className="w-8 h-8" />
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 bg-dark relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="max-w-4xl mx-auto text-center">
                    <SectionHeader title="About Us" />

                    <div className="prose prose-lg prose-invert mx-auto text-gray-300">
                        <p className="text-xl leading-relaxed">
                            &quot;Gryphons Aerospace is a student-design team based at the University of Guelph. We are dedicated to designing, building, and launching high-powered rockets and advanced unmanned aerial systems. Our mission is to foster engineering excellence, teamwork, and innovation within the aerospace field.&quot;
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        {[
                            { number: '10k', label: 'Ft Apogee Goal' },
                            { number: '40+', label: 'Team Members' },
                            { number: '2', label: 'Active Projects' },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:border-gryphon-red/30 transition-colors">
                                <div className="text-5xl font-black text-white mb-2">{stat.number}</div>
                                <div className="text-gryphon-gold font-bold uppercase tracking-wider text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
