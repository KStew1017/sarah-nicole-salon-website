import { Reveal } from "@/utlis/reveal";
import { Heading } from "../layout/Heading";
import { Profile } from "./Profile";
import { siteContent } from "@/configs/siteContent";

export const Stylists: React.FC = () => {
    const stylists = siteContent.stylists;

    return (
        <>
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="Meet Us"
                    decoration="e"
                    textColor="green"
                />
            </Reveal>
            <div className="flex-col flex justify-center items-center gap-[250px] mt-[200px]">
                {stylists.map((stylist, i) => (
                    <Profile
                        stylistName={stylist.name}
                        stylistQuote={stylist.quote}
                        key={i}
                        even={(i + 1) % 2 === 0}
                    />
                ))}
            </div>
        </>
    );
};
