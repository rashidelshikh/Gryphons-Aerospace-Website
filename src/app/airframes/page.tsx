import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';
import AirframeCard from '@/components/AirframeCard';
import { airframes } from '@/data/airframes';

export default function Airframes() {
    return (
        <main className="min-h-screen bg-dark">
            <Navbar />
            <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
                <SectionHeader title="Airframes" subtitle="Engineering excellence in flight. From sounding rockets to advanced UAVs." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {airframes.map((airframe) => (
                        <AirframeCard key={airframe.id} airframe={airframe} />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
