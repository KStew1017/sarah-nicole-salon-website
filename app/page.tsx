"use client";

import { HeroSection } from "@/components/hero/HeroSection";
import { Stylists } from "@/components/stylists/StylistsSection";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <HeroSection />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.75, delay: 1.5 }}
            >
                <Divider className="my-[100px]" />
            </motion.div>
            <Stylists />
        </>
    );
}
