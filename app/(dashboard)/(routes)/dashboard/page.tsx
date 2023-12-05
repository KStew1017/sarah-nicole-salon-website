"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/layout/Loading";
import { Reveal } from "@/utlis/reveal";
import { DashboardSection } from "@/components/(Dashboard)/DashboardSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { library, findIconDefinition } from "@fortawesome/fontawesome-svg-core";
import { IconName, fas } from "@fortawesome/free-solid-svg-icons";

interface Stylist {
    id: string;
    name: string;
    quote: string;
    bio: string;
    services: string[];
    paymentMethods: string[];
    icons: string[];
}

export default function Dashboard() {
    const currentUser = useUser();
    const [stylists, setStylists] = useState<Stylist[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const fetchStylists = async () => {
        try {
            const response = await fetch("/api/db-get");
            const data = await response.json();
            setStylists(data.stylists);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchStylists();
        setIsLoaded(true);
    }, []);

    const stylist = stylists.filter((stylist) => stylist.name === currentUser.user?.fullName);
    const name = stylist[0]?.name;
    const firstName = stylist[0]?.name.split(" ")[0];
    const quote = stylist[0]?.quote;
    const bio = stylist[0]?.bio;
    const services = stylist[0]?.services;
    const paymentMethods = stylist[0]?.paymentMethods;
    const iconsList = stylist[0]?.icons;

    library.add(fas);

    const getIconData = (i: number) => {
        const iconName = iconsList?.[i];
        const iconNameSlice = iconName?.slice(2).toLowerCase();
        return findIconDefinition({ prefix: "fas", iconName: iconNameSlice as IconName });
    };

    const icon1 = getIconData(0);
    const icon2 = getIconData(1);
    const icon3 = getIconData(2);

    if (!isLoaded) {
        return <Loading />;
    }
    return (
        <>
            <Reveal
                hiddenVariant="hiddenFade"
                visibleVariant="visibleFade"
                delay={1}
            >
                <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[100px]">
                    <DashboardSection
                        name={name}
                        firstName={firstName}
                        quote={quote}
                        bio={bio}
                        services={services}
                        paymentMethods={paymentMethods}
                        icons={iconsList}
                    />
                </div>
            </Reveal>
            <BackgroundIcons
                rows={6}
                icon1={icon1}
                icon2={icon2}
                icon3={icon3}
            />
        </>
    );
}

// - Home page quote
// - Profile bio
// - Services
// - Payment methods
// - Background icons
// - Social media links
// - Results pictures:
//      - Upload pictures
//      - Enforce file format and size
//      - Upload to S3 bucket
//      - Delete pictures
