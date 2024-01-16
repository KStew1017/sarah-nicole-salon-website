"use client";

import { HeroSection } from "@/components/(Home)/hero/HeroSection";
import { MeetUsSection } from "@/components/(Home)/meetUs/MeetUsSection";
import { AnimatedDivider } from "@/components/layout/AnimatedDivder";
import { TestimonialsSection } from "@/components/(Home)/testimonials/TestimonialsSection";
import { LocationSection } from "@/components/(Home)/location/LocationSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Home() {
    interface stylistsProps {
        _id: string;
        name: string;
        quote: string;
        bio: string;
        paymentMethods: string[];
        services: string[];
        icons: string[];
    }

    const [stylists, setStylists] = useState<stylistsProps[]>([]);

    const getStylists = async () => {
        try {
            const res = await fetch("/api/db-get");
            const data = await res.json();
            setStylists(data.stylists);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getStylists();
    }, []);

    console.log(stylists);
    
    return (
        <>
            <BackgroundIcons
                rows={8}
                icon1={faSprayCanSparkles}
                icon2={faSpa}
                icon3={faScissors}
            />
            <HeroSection />
            <AnimatedDivider />
            <MeetUsSection stylists={stylists} />
            <TestimonialsSection />
            <LocationSection />
        </>
    );
}
