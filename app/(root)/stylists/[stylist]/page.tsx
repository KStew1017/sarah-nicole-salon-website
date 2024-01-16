"use client";

import { siteContent } from "@/configs/siteContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/utlis/customColors";
import { StylistHeader } from "@/components/(Stylists)/(StylistPage)/header/HeaderSection";
import { ServicesSection } from "@/components/(Stylists)/(StylistPage)/services/ServicesSection";
import { AppointmentsSection } from "@/components/(Stylists)/(StylistPage)/appointments/AppointmentsSection";
import { ResultsSection } from "@/components/(Stylists)/(StylistPage)/results/ResultsSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { useState, useEffect } from "react";

export default function StylistPage({ params }: { params: { stylist: string } }) {
    const [stylists, setStylists] = useState<stylistsProps[]>([]);

    const filteredStylists = siteContent.stylists.filter(
        (stylist) => stylist.name.split(" ")[0].toLowerCase() === params.stylist
    );

    let icons: any = [];
    if (filteredStylists.length > 0) {
        icons = filteredStylists[0].icons;
    }

    interface stylistsProps {
        _id: string;
        name: string;
        quote: string;
        bio: string;
        paymentMethods: string[];
        services: string[];
        icons: string[];
    }

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

    if (stylists.length === 0) {
        return (
            <div className="flex justify-center items-center h-[800px]">
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-5 border-b-5 border-green"></div>
                </div>
            </div>
        );
    }

    const currentStylist = stylists.find((stylist) => stylist.name.split(" ")[0].toLowerCase() === params.stylist);

    if (!currentStylist) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <FontAwesomeIcon
                    className="h-[50px] md:h-[150px]"
                    color={tailwindCustomColors.green}
                    icon={faTriangleExclamation}
                />
                <h1 className="font-serif text-green text-[36px] md:text-[48px] mt-4">Stylist not found</h1>
                <p className="font-serif text-green text-[14px] md:text-[18px] mt-4">
                    Please check the URL and try again,
                </p>
                <p className="font-serif text-green text-[14px] md:text-[18px]">
                    or see our stylists{" "}
                    <a
                        href="/stylists"
                        className="font-bold underline-offset-2 underline"
                    >
                        here
                    </a>
                    .
                </p>
            </div>
        );
    } else {
        return (
            <>
                <BackgroundIcons
                    rows={8}
                    icon1={icons[0]}
                    icon2={icons[1]}
                    icon3={icons[2]}
                />
                <StylistHeader stylist={currentStylist} />
                <ServicesSection stylist={currentStylist} />
                <AppointmentsSection stylist={currentStylist} />
                <ResultsSection stylist={currentStylist} />
            </>
        );
    }
}
