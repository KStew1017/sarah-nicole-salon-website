
import { StylistsSection } from "@/components/(Stylists)/StylistsSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";


export default function Stylists() {
    "use client";
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

    useEffect(() => {
        const getStylists = async () => {
            try {
                const res = await fetch("/api/db-get");
                const data = await res.json();
                setStylists(data.stylists);
            } catch (error) {
                console.log(error);
            }
        };
        getStylists();
    }, []);

    return (
        <>
            <BackgroundIcons
                rows={8}
                icon1={faSprayCanSparkles}
                icon2={faSpa}
                icon3={faScissors}
            />
            <StylistsSection stylists={stylists} />
        </>
    );
}
