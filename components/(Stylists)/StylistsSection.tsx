import { Heading } from "../layout/Heading";
import { OverviewCard } from "./OverviewCard";
import { siteContent } from "@/configs/siteContent";
import { Reveal } from "@/utlis/reveal";

export const StylistsSection = () => {
    const stylists = siteContent.stylists;

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
                    textStyles="tracking-[10px]"
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
