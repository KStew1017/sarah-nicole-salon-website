"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

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

    const fetchStylists = async () => {
        try {
            const response = await fetch("/api/db-get");
            console.log(stylists);
            const data = await response.json();
            setStylists(data.stylists);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchStylists();
    }, []);


    const stylist = stylists.filter((stylist) => stylist.name === currentUser.user?.fullName);
    const name = stylist[0]?.name;
    const firstName = stylist[0]?.name.split(" ")[0];
    const quote = stylist[0]?.quote;
    const bio = stylist[0]?.bio;
    const services = stylist[0]?.services;
    const paymentMethods = stylist[0]?.paymentMethods;
    const icons = stylist[0]?.icons;

    return (
        <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[100px]">
            <div className="relative group">
                <img
                    src={`/images/${firstName}/${firstName}-headshot.jpeg`}
                    alt="Angela"
                    className="w-[300px] h-[300px] rounded-full border-2 border-gold transition ease-s-curve group-hover:drop-shadow-xl group-hover:scale-105 group-hover:translate-y-[-10px] object-cover absolute"
                />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            userButtonBox: "w-[300px] h-[300px] opacity-0 -z-10",
                            userButtonTrigger: "focus:shadow-none",
                            userButtonAvatarBox:
                                "w-[300px] h-[300px] rounded-full transition ease-s-curve group-hover:drop-shadow-xl group-hover:scale-105 group-hover:translate-y-[-10px]",
                            userButtonPopoverCard: "bg-tan-100 border-2 border-gold font-sans",
                            userPreviewMainIdentifier: "text-grey text-[18px] font-bold",
                            userPreviewSecondaryIdentifier: "text-grey/50",
                            userButtonPopoverActionButton: "hover:bg-tan-200",
                            userButtonPopoverActionButtonText: "text-[16px]",
                            userButtonPopoverActionButtonIcon: "w-[20px] h-[20px]",
                            userButtonPopoverFooter: "hidden",
                        },
                    }}
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-[60px] font-northwell text-green-600 text-center mt-[100px]">{name}</h1>
                <p className="text-[24px] font-serif text-green-600 text-center mt-[100px]">{quote}</p>
                <p className="text-[24px] font-serif text-green-600 text-center mt-[100px]">{bio}</p>
                <div className="flex flex-col items-center mt-[100px]">
                    <h2 className="text-[50px] font-northwell text-green-600 text-center">Services</h2>
                    <ul className="text-[24px] font-serif text-green-600 text-center">
                        {services?.map((service) => (
                            <li key={service}>{service}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-[100px]">
                    <h2 className="text-[50px] font-northwell text-green-600 text-center">Payment Methods</h2>
                    <ul className="text-[24px] font-serif text-green-600 text-center">
                        {paymentMethods?.map((paymentMethod) => (
                            <li key={paymentMethod}>{paymentMethod}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center mt-[100px]">
                    <h2 className="text-[50px] font-northwell text-green-600 text-center">Background Icons</h2>
                    <ul className="text-[24px] font-serif text-green-600 text-center">
                        {icons?.map((icon) => (
                            <li key={icon}>{icon}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
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
