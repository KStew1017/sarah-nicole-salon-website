import { ProfileContent } from "./ProfileContent";
import { ProfileUserButton } from "./ProfileUserButton";

interface DashboardSectionProps {
    name: string;
    firstName: string;
    quote: string;
    bio: string;
    services: string[];
    paymentMethods: string[];
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({
    name,
    firstName,
    quote,
    bio,
    services,
    paymentMethods,
}) => {
    return (
        <>
            <ProfileUserButton firstName={firstName} />
            <ProfileContent
                name={name}
                quote={quote}
                bio={bio}
                services={services}
                paymentMethods={paymentMethods}
            />
        </>
    );
};
