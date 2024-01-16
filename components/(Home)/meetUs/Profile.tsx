import { Reveal } from "@/utlis/reveal";
import { ProfileCard } from "./ProfileCard";
import { ProfilePicture } from "./ProfilePicture";

interface ProfileProps {
    stylistName: string;
    even: boolean;
    stylistQuote: string;
}

export const Profile: React.FC<ProfileProps> = ({ stylistName, even, stylistQuote }) => {
    "use client";
    return (
        <Reveal
            hiddenVariant={!even ? "hiddenXNeg" : "hiddenXPos"}
            visibleVariant={!even ? "visibleXNeg" : "visibleXPos"}
        >
            <div className="flex-col flex relative justify-center items-center">
                <ProfilePicture
                    stylistName={stylistName.split(" ")[0]}
                    even={even}
                />
                <ProfileCard
                    stylistName={stylistName}
                    stylistQuote={stylistQuote}
                />
            </div>
        </Reveal>
    );
};