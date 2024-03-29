"use client";

import { Carousel } from "./Carousel";
import { MissionStatement } from "./MissionStatement";
import { motion } from "framer-motion";

export const HeroSection: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="flex-row lg:flex items-center lg:h-[90vh] max-h-[1250px] relative max-w-[1250px] justify-center mx-auto"
        >
            <Carousel />
            <MissionStatement />
        </motion.div>
    );
};
