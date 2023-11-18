"use client";

import { HeroSection } from "@/components/hero/HeroSection";
import { Stylists } from "@/components/stylists/StylistsSection";
import { AnimatedDivider } from "@/components/layout/AnimatedDivder";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AnimatedDivider />
            <Stylists />
            <AnimatedDivider />
            <TestimonialsSection />
        </>
    );
}
