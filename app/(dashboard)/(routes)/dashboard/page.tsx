
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Loading from "@/components/layout/Loading";
import { Reveal } from "@/utlis/reveal";
import { DashboardSection } from "@/components/(Dashboard)/DashboardSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { siteContent } from "@/configs/siteContent";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";

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
    "use client";
    
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

    const stylist = stylists.filter((stylist) => stylist.name === currentUser.user?.fullName);
    const name = stylist[0]?.name;
    const firstName = stylist[0]?.name.split(" ")[0].toLowerCase();
    const quote = stylist[0]?.quote;
    const bio = stylist[0]?.bio;
    const services = stylist[0]?.services;
    const paymentMethods = stylist[0]?.paymentMethods;

    useEffect(() => {
        fetchStylists();
        setIsLoaded(true);
    }, []);

    let icon1;
    let icon2;
    let icon3;

    switch (currentUser?.user?.username) {
        case "angelacollins":
            icon1 = siteContent.stylists[0].icons[0];
            icon2 = siteContent.stylists[0].icons[1];
            icon3 = siteContent.stylists[0].icons[2];
            break;
        case "beckihutchison":
            icon1 = siteContent.stylists[1].icons[0];
            icon2 = siteContent.stylists[1].icons[1];
            icon3 = siteContent.stylists[1].icons[2];
            break;
        case "teresacampbell":
            icon1 = siteContent.stylists[2].icons[0];
            icon2 = siteContent.stylists[2].icons[1];
            icon3 = siteContent.stylists[2].icons[2];
            break;
        case "mistyrecord":
            icon1 = siteContent.stylists[3].icons[0];
            icon2 = siteContent.stylists[3].icons[1];
            icon3 = siteContent.stylists[3].icons[2];
            break;
        default:
            icon1 = faScissors;
            icon2 = faSpa;
            icon3 = faSprayCanSparkles;
            break;
    }

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
                <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[50px] lg:my-[100px]">
                    <DashboardSection
                        name={name}
                        firstName={firstName}
                        quote={quote}
                        bio={bio}
                        services={services}
                        paymentMethods={paymentMethods}
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
