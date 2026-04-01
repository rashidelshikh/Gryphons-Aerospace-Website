import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gryphon-red text-white py-16 px-4 md:px-12 w-full mt-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                
                {/* Left Side: Connect With Us & Socials */}
                <div className="flex flex-col h-full justify-between gap-12">
                    <div>
                        <div className="relative inline-block mb-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight italic z-10 relative">
                                CONNECT WITH US
                            </h2>
                            {/* White Strikethrough effect */}
                            <svg 
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[110%] h-auto text-white opacity-80 z-0"
                                viewBox="0 0 500 40" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                            >
                                <path 
                                    d="M10,25 Q120,5 250,22 Q380,35 490,15" 
                                    stroke="currentColor" 
                                    strokeWidth="6" 
                                    strokeLinecap="round" 
                                />
                            </svg>
                        </div>
                        <p className="text-white/80 text-lg">Stay updated on our socials</p>

                        <div className="flex gap-6 mt-6">
                            <a href="#" className="hover:text-black transition-colors"><Instagram className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-black transition-colors"><Linkedin className="w-6 h-6" /></a>
                            <a href="#" className="hover:text-black transition-colors"><Twitter className="w-6 h-6" /></a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 font-black text-xl tracking-tight opacity-50 hover:opacity-100 transition-opacity mt-8">
                        <Rocket className="w-6 h-6" />
                        <span>GRYPHONS AEROSPACE</span>
                    </div>
                </div>

                {/* Right Side: Links */}
                <div className="flex flex-col gap-4 text-left md:text-right">
                    <Link href="/" className="text-lg font-bold hover:text-black transition-colors">Home</Link>
                    <Link href="/team" className="text-lg font-bold hover:text-black transition-colors">Meet The Team</Link>
                    <Link href="/airframes" className="text-lg font-bold hover:text-black transition-colors">Our Airframes</Link>
                    <Link href="/history" className="text-lg font-bold hover:text-black transition-colors">Competition History</Link>
                    <Link href="/contact" className="text-lg font-bold hover:text-black transition-colors">Contact Us</Link>
                </div>
                
            </div>
            
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/20 text-center text-sm text-white/50">
                &copy; {new Date().getFullYear()} Gryphon Aerospace. All rights reserved.
            </div>
        </footer>
    );
}
