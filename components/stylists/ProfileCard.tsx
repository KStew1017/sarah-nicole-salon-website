import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import React from "react";

interface ProfileCardProps {
    buttonColors?: string[];
    stylistName: string;
    stylistQuote: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
    buttonColors = ["#C3AC3C", "#E7DCA6"],
    stylistName,
    stylistQuote,
}) => {
    return (
        <Card
            className="w-[60%] h-[400px] rounded-[50px] bg-gradient-to-bl from-green to-blue"
            isBlurred
        >
            <CardHeader className="flex justify-center items-center h-fit p-[15px]">
                <h1 className="font-northwell text-light text-[64px] translate-y-[15px]">{stylistName}</h1>
            </CardHeader>
            <Divider className="w-[80%] mx-auto" />
            <CardBody className="flex justify-center items-center h-fit overflow-hidden">
                <p className="font-northwell text-light text-[200px] absolute translate-x-[-325px] translate-y-[50px] max-xl:hidden">
                    "
                </p>
                <p className="font-serif text-light text-[22px] text-center w-[80%]">{stylistQuote}</p>
                <p className="font-northwell text-light text-[200px] absolute translate-x-[325px] translate-y-[50px] transform scale-x-[-1] max-xl:hidden">
                    "
                </p>
            </CardBody>
            <Divider className="w-[80%] mx-auto" />
            <CardFooter className="flex justify-center items-center h-fit p-[30px]">
                <Link href={`/stylists/${stylistName}`}>
                    <Button
                        radius="full"
                        className={`font-serif text-[20px] text-light hover:shadow-lg hover:scale-105 data-[hover=true]:opacity-100`}
                        style={{
                            background: `linear-gradient(to top right, ${buttonColors[0]}, ${buttonColors[1]})`,
                        }}
                    >
                        <p className="p-[10px] drop-shadow-md">View Profile</p>
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};
