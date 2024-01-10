"use client";

import { Reveal } from "@/utlis/reveal";
import { Heading } from "../../layout/Heading";
import { Profile } from "./Profile";
import { useEffect, useState } from "react";

interface stylistsProps {
    _id: string;
    name: string;
    quote: string;
    bio: string;
    paymentMethods: string[];
    services: string[];
    icons: string[];
}

interface MeetUsSectionProps {
    stylists: stylistsProps[];
}

export const MeetUsSection: React.FC<MeetUsSectionProps> = ({ stylists }) => {
    return (
        <div className="max-w-[1250px] mx-auto">
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="Meet Us"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
            </Reveal>
            <div className="flex-col flex justify-center items-center gap-[150px] lg:gap-[250px] lg:mt-[200px]">
                {stylists.map((stylist, i) => (
                    <Profile
                        stylistName={stylist.name}
                        stylistQuote={stylist.quote}
                        key={i}
                        even={(i + 1) % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
};
