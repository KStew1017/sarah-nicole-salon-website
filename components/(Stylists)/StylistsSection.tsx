import { Heading } from "../layout/Heading";
import { OverviewCard } from "./OverviewCard";
import { Reveal } from "@/utlis/reveal";

interface stylistsProps {
    _id: string;
    name: string;
    quote: string;
    bio: string;
    paymentMethods: string[];
    services: string[];
    icons: string[];
}

interface StylistsSectionProps {
    stylists: stylistsProps[];
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ stylists }) => {
    "use client";
    return (
        <div className="max-w-[1250px] mx-auto">
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="Stylists"
                    decoration="e"
                    font="northwell"
                    textStyles="tracking-[5px]"
                    boxStyles="mt-[100px]"
                    textColor="green"
                />
            </Reveal>
            <div className="flex flex-col gap-[100px] py-[50px]">
                {stylists.map((stylist, i) => (
                    <OverviewCard
                        stylistName={stylist.name}
                        stylistServices={stylist.services}
                        key={i}
                        even={(i + 1) % 2 === 0}
                    />
                ))}
            </div>
        </div>
    );
};
