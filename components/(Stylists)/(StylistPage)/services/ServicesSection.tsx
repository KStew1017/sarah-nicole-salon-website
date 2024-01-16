import { Heading } from "@/components/layout/Heading";
import { ServicesList } from "./ServicesList";
import { StylistType } from "@/utlis/types";
import { Reveal } from "@/utlis/reveal";

interface ServicesListProps {
    stylist: StylistType;
}

export const ServicesSection: React.FC<ServicesListProps> = ({ stylist }) => {
    "use client";

    return (
        <div
            className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[50px] lg:my-[200px]"
        >
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="My Services"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
            </Reveal>
            <ServicesList stylist={stylist} />
        </div>
    );
};
