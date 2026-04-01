import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F9F9F9] flex flex-col">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full flex-grow">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <div className="mb-4">
                            <SectionHeader title="GRYPHON AEROSPACE" className="!mb-6 scale-90 origin-left md:scale-100" />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl text-gray-600 mb-12">
                            University of Guelph&apos;s aerospace club
                        </h3>
                        
                        <h4 className="font-heading text-4xl mb-4 tracking-wider uppercase text-gray-900">ABOUT US</h4>
                        <div className="text-gray-700 text-lg space-y-6 leading-relaxed font-medium">
                            <p>
                                Gryphons Aerospace is a student-design team based at the University of Guelph. We are dedicated to designing, building, and launching high-powered rockets and advanced unmanned aerial systems.
                            </p>
                            <p>
                                Our mission is to foster engineering excellence, teamwork, and innovation within the aerospace field.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white">
                            {/* Fallback image background */}
                            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-medium">
                                <span>[ Hero Image Placeholder ]</span>
                            </div>
                            {/* Try to load standard image, will fallback to above if fails */}
                            <img 
                                src="/images/hero-placeholder.jpg" 
                                alt="Gryphon Aerospace Hero" 
                                className="object-cover w-full h-full relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 px-4 md:px-12 max-w-6xl mx-auto text-center w-full">
                <h2 className="text-6xl md:text-7xl font-heading tracking-wide mb-6 text-gray-900">OUR TEAM</h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
                    Gryphon Aerospace is a new club at Guelph aiming to explore the growing Canadian aerospace sector through international design competitions and team projects.
                </p>

                <div className="relative aspect-[16/9] w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border-4 border-white">
                    {/* Fallback image background */}
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-xl">
                        <span>[ Team Photo Placeholder ]</span>
                    </div>
                    {/* Try to load standard image, will fallback to above if fails */}
                    <img 
                        src="/images/team-placeholder.jpg" 
                        alt="Gryphon Aerospace Team" 
                        className="object-cover w-full h-full relative z-10"
                    />
                </div>
            </section>

            <Footer />
        </main>
    );
}
