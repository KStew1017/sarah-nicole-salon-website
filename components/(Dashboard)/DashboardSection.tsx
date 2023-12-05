import { ProfileBackgroundIcons } from "./ProfileBackgroundIcons";
import { ProfileBio } from "./ProfileBio";
import { ProfilePaymentMethods } from "./ProfilePaymentMethods";
import { ProfileQuote } from "./ProfileQuote";
import { ProfileServices } from "./ProfileServices";

export const DashboardSection: React.FC = () => {
    return (
        <>
            <ProfileQuote />
            <ProfileBio />
            <ProfileServices />
            <ProfilePaymentMethods />
            <ProfileBackgroundIcons />
        </>
    )
};
