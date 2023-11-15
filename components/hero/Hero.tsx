"use client";

import { Carousel } from "./Carousel";
import { MissionStatement } from "./MissionStatement";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="flex items-center h-[800px] relative"
        >
            <Carousel />
            <MissionStatement />
        </motion.div>
    );
};
