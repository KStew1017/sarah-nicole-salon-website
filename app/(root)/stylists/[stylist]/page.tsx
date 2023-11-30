"use client";

import { siteContent } from "@/configs/siteContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import tailwindCustomColors from "@/utlis/customColors";
import { StylistHeader } from "@/components/(Stylists)/(StylistPage)/header/HeaderSection";
import { ServicesSection } from "@/components/(Stylists)/(StylistPage)/services/ServicesSection";
import { AppointmentsSection } from "@/components/(Stylists)/(StylistPage)/appointments/AppointmentsSection";

export default function StylistPage({ params }: { params: { stylist: string } }) {
    const stylists = siteContent.stylists;
    const stylist = stylists.find((stylist) => stylist.name.split(" ")[0].toLowerCase() === params.stylist);

    if (!stylist) {
        return (
            <div className="flex flex-col items-center justify-center h-[50vh]">
                <FontAwesomeIcon
                    className="h-[150px]"
                    color={tailwindCustomColors.green}
                    icon={faTriangleExclamation}
                />
                <h1 className="font-serif text-green text-[48px] mt-4">Stylist not found</h1>
                <p className="font-serif text-green text-[18px] mt-4">Please check the URL and try again,</p>
                <p className="font-serif text-green text-[18px]">
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
                <StylistHeader stylist={stylist} />
                <ServicesSection stylist={stylist} />
                <AppointmentsSection stylist={stylist} />
            </>
        );
    }
}
