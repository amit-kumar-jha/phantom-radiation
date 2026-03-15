import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import NewsTicker from '../components/home/NewsTicker';
import FeaturedNews from '../components/home/FeaturedNews';
import PopularSidebar from '../components/home/PopularSidebar';
import ToolsQuickAccess from '../components/home/ToolsQuickAccess';
import MonthlyRankings from '../components/home/MonthlyRankings';
import MakeMoneyAI from '../components/home/MakeMoneyAI';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <HeroSection />
            <NewsTicker />
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-12 sm:py-16">
                    <div className="lg:col-span-2">
                        <FeaturedNews />
                    </div>
                    <div className="lg:col-span-1">
                        <PopularSidebar />
                    </div>
                </div>
            </div>
            <ToolsQuickAccess />
            <MonthlyRankings />
            <MakeMoneyAI />
        </motion.div>
    );
}
