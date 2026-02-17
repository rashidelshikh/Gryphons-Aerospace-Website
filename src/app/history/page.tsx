import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import TimelineItem from '@/components/TimelineItem';
import { history } from '@/data/history';

export default function History() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <SectionHeader title="Our Journey" subtitle="From humble beginnings to high-altitude excellence." />

                <div className="relative">
                    <div className="max-w-5xl mx-auto pb-12">
                        {history.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>

                    {/* End dot */}
                    <div className="flex justify-center mt-[-4rem] relative z-20">
                        <div className="w-6 h-6 bg-gryphon-gold rounded-full shadow-[0_0_15px_#FFC72C] ring-4 ring-dark" />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
