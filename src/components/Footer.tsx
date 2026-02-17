import Link from 'next/link';
import { Mail, Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-dark/80 backdrop-blur-sm border-t border-white/10 py-16 text-gray-400">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center space-x-2 text-white font-bold text-xl mb-6">
                        <Rocket className="w-6 h-6 text-gryphon-red" />
                        <span>GRYPHONS <span className="text-gryphon-red">AERO</span></span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs text-gray-500">
                        University of Guelph's premier student design team for rocketry and unmanned aerial systems. Fostering engineering excellence through competition.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
                    <a href="mailto:info@gryphonsaero.com" className="flex items-center gap-3 hover:text-gryphon-red transition-colors mb-2 text-sm">
                        <Mail className="w-4 h-4" /> info@gryphonsaero.com
                    </a>
                    <div className="text-sm text-gray-500 mt-4">
                        <p>Thornbrough Building</p>
                        <p>University of Guelph</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Social</h4>
                    <div className="flex gap-4">
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-gryphon-red hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-gryphon-red hover:text-white transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-gryphon-red hover:text-white transition-all duration-300">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <p>© {new Date().getFullYear()} Gryphons Aerospace. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-gray-400">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-400">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
