import { Bio } from "./content/Bio";
import { Icons } from "./content/Icons";
import { PaymentMethods } from "./content/PaymentMethods";
import { Quote } from "./content/Quote";
import { Services } from "./content/Services";

interface ProfileContentProps {
    name: string;
    quote: string;
    bio: string;
    services: string[];
    paymentMethods: string[];
    icons: string[];
}

export const ProfileContent: React.FC<ProfileContentProps> = ({
    name,
    quote,
    bio,
    services,
    paymentMethods,
    icons,
}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[100px] font-northwell text-green text-center my-[50px]">{name}</h1>
            <Quote quote={quote} />
            <Bio bio={bio} />
            <Services services={services} />
            <PaymentMethods paymentMethods={paymentMethods} />
            <Icons icons={icons} />
        </div>
    );
};
