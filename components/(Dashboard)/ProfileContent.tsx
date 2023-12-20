import { Button } from "@nextui-org/react";
import { Bio } from "./content/Bio";
import { ImageUpload } from "./content/ImageUpload";
import { PaymentMethods } from "./content/PaymentMethods";
import { Quote } from "./content/Quote";
import { Services } from "./content/Services";

interface ProfileContentProps {
    name: string;
    quote: string;
    bio: string;
    services: string[];
    paymentMethods: string[];
}

export const ProfileContent: React.FC<ProfileContentProps> = ({ name, quote, bio, services, paymentMethods }) => {
    const firstName: string = name?.split(" ")[0].toLowerCase();

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[100px] font-northwell text-green text-center my-[50px]">{name}</h1>
            <div className="h-[100px] flex gap-[50px]">
                <a href="/">
                    <Button className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[30px] rounded-full p-[30px] w-[200px] m-[10px]">
                        Home Page
                    </Button>
                </a>
                <a href={`/stylists/${firstName}`}>
                    <Button className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[30px] rounded-full p-[30px] w-[200px] m-[10px]">
                        My Page
                    </Button>
                </a>
            </div>
            <Quote quote={quote} name={name} />
            <Bio bio={bio} name={name} />
            <Services services={services} name={name}  />
            <PaymentMethods paymentMethods={paymentMethods} name={name} />
            <ImageUpload name={name} />
        </div>
    );
};
