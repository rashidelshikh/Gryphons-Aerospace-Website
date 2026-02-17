import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import { team } from '@/data/team';
import Image from 'next/image';

export default function Team() {
    const execs = team.filter((m) => m.category === 'exec');
    const general = team.filter((m) => m.category === 'general');

    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <SectionHeader title="Our Team" subtitle="The minds behind the mission." />

                {/* Execs */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-gryphon-red pl-4">Executive Leadership</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {execs.map((member) => (
                            <div key={member.id} className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-gryphon-red/50 transition-all group">
                                <div className="relative h-80">
                                    {/* Grayscale to color on hover for dramatic effect */}
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h4 className="text-xl font-bold text-white">{member.name}</h4>
                                        <p className="text-gryphon-gold font-medium">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* General Members */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-gryphon-gold pl-4">General Members</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {general.map((member) => (
                            <div key={member.id} className="bg-white/5 rounded-lg p-4 border border-white/5 hover:bg-white/10 transition-colors flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm">{member.name}</h5>
                                    <p className="text-gray-400 text-xs">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
