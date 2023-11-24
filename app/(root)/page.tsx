"use client";

import { HeroSection } from "@/components/(Home)/hero/HeroSection";
import { MeetUsSection } from "@/components/(Home)/meetUs/MeetUsSection";
import { AnimatedDivider } from "@/components/layout/AnimatedDivder";
import { TestimonialsSection } from "@/components/(Home)/testimonials/TestimonialsSection";
import { LocationSection } from "@/components/(Home)/location/LocationSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <AnimatedDivider />
            <MeetUsSection />
            <TestimonialsSection />
            <LocationSection />
        </>
    );
}
