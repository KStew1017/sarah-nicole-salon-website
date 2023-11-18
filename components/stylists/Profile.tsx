import { Reveal } from "@/utlis/reveal";
import { ProfileCard } from "./ProfileCard";
import { ProfilePicture } from "./ProfilePicture";

interface ProfileProps {
    stylistName: string;
    even: boolean;
    stylistQuote: string;
}

export const Profile: React.FC<ProfileProps> = ({ stylistName, even, stylistQuote }) => {
    return (
        <Reveal
            hiddenVariant={!even ? "hiddenXNeg" : "hiddenXPos"}
            visibleVariant={!even ? "visibleXNeg" : "visibleXPos"}
        >
            <div className="flex relative justify-center items-center">
                <ProfileCard
                    stylistName={stylistName}
                    stylistQuote={stylistQuote}
                />
                <ProfilePicture
                    stylistName={stylistName.split(" ")[0]}
                    even={even}
                />
            </div>
        </Reveal>
    );
};
