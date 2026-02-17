import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Instagram, Linkedin, Twitter, Users, Rocket } from 'lucide-react';

export default function Contact() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <SectionHeader title="Contact Us" subtitle="Get in touch with the Gryphons Aerospace team." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Recruitment */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gryphon-red/50 transition-all hover:-translate-y-2 group">
                        <div className="bg-gryphon-red/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-gryphon-red/30 group-hover:bg-gryphon-red/30 transition-colors">
                            <Users className="w-8 h-8 text-gryphon-red" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Student Recruitment</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Are you a University of Guelph student passionate about aerospace? We recruit for technical and operations roles at the beginning of each semester.
                        </p>
                        <a href="mailto:recruitment@gryphonsaero.com" className="inline-flex items-center gap-2 text-gryphon-gold font-bold hover:text-white transition-colors">
                            <Mail className="w-5 h-5" /> recruitment@gryphonsaero.com
                        </a>
                    </div>

                    {/* Sponsorship */}
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10 hover:border-gryphon-gold/50 transition-all hover:-translate-y-2 group">
                        <div className="bg-gryphon-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-gryphon-gold/30 group-hover:bg-gryphon-gold/30 transition-colors">
                            <Rocket className="w-8 h-8 text-gryphon-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Sponsorship Inquiries</h3>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Partner with us to support the next generation of aerospace engineers. We offer various sponsorship packages with branding and recruitment benefits.
                        </p>
                        <a href="mailto:sponsorship@gryphonsaero.com" className="inline-flex items-center gap-2 text-gryphon-gold font-bold hover:text-white transition-colors">
                            <Mail className="w-5 h-5" /> sponsorship@gryphonsaero.com
                        </a>
                    </div>
                </div>

                {/* Socials */}
                <div className="mt-24 text-center">
                    <h3 className="text-xl font-bold text-white mb-8">Follow Our Progress</h3>
                    <div className="flex justify-center gap-6">
                        <a href="#" className="bg-white/5 p-4 rounded-full hover:bg-gryphon-red hover:text-white hover:scale-110 transition-all duration-300 border border-white/10">
                            <Instagram className="w-8 h-8" />
                        </a>
                        <a href="#" className="bg-white/5 p-4 rounded-full hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all duration-300 border border-white/10">
                            <Linkedin className="w-8 h-8" />
                        </a>
                        <a href="#" className="bg-white/5 p-4 rounded-full hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 border border-white/10">
                            <Twitter className="w-8 h-8" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
