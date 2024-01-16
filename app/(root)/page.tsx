import { GetServerSideProps } from "next";
import { HeroSection } from "@/components/(Home)/hero/HeroSection";
import { MeetUsSection } from "@/components/(Home)/meetUs/MeetUsSection";
import { AnimatedDivider } from "@/components/layout/AnimatedDivder";
import { TestimonialsSection } from "@/components/(Home)/testimonials/TestimonialsSection";
import { LocationSection } from "@/components/(Home)/location/LocationSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface StylistsProps {
    _id: string;
    name: string;
    quote: string;
    bio: string;
    paymentMethods: string[];
    services: string[];
    icons: string[];
}

interface HomeProps {
    stylists: StylistsProps[];
}

export default function Home({ stylists: initialStylists }: HomeProps) {
    const [stylists, setStylists] = useState<StylistsProps[]>(initialStylists);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/db-get");
                const newData = await response.json();
                setStylists(newData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({}) => {
    const response = await fetch("/api/db-get");
    const initialData: StylistsProps[] = await response.json();

    return {
        props: {
            stylists: initialData,
        },
    };
};
