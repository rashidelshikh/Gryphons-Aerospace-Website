'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Meet the Team', href: '/team' },
    { name: 'Our Airframes', href: '/airframes' },
    { name: 'Competition History', href: '/history' },
    { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="flex items-center space-x-3 text-black font-heading text-3xl md:text-4xl tracking-normal group">
                        <div className="bg-gryphon-red text-white p-2 rounded-full transition-transform group-hover:scale-110">
                            <Rocket className="w-5 h-5" />
                        </div>
                        <span className="opacity-0 w-0 md:opacity-100 md:w-auto overflow-hidden transition-all duration-300">
                            GRYPHONS <span className="text-gryphon-red">AEROSPACE</span>
                        </span>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 font-heading tracking-widest text-2xl hover:text-gryphon-red transition-colors"
                    >
                        <span>MENU</span>
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-0 right-0 bg-white shadow-2xl border-b border-gray-100"
                    >
                        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-end gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl md:text-6xl font-black uppercase text-gray-900 hover:text-gryphon-red transition-all tracking-tighter hover:translate-x-[-10px]"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
