import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Link } from "@nextui-org/react";
import React, { useEffect, useState } from "react";

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
    "use client";
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(stylistQuote);
    }, []);

    console.log(quote)

    return (
        <Card
            className="w-[90%] md:w-[75%] rounded-b-[50px] rounded-t-[0px] lg:w-[60%] lg:h-[400px] lg:rounded-[50px] bg-gradient-to-bl from-green to-blue"
            isBlurred
        >
            <CardHeader className="flex justify-center items-center h-fit p-[15px]">
                <h1 className="font-northwell text-light text-[64px] translate-y-[15px]">{stylistName}</h1>
            </CardHeader>
            <Divider className="w-[80%] mx-auto" />
            <CardBody className="flex justify-center items-center h-fit overflow-hidden">
                <p className="font-northwell text-light text-[200px] absolute translate-x-[-325px] translate-y-[50px] max-xl:hidden">
                    &quot;
                </p>
                <p className="font-serif text-light text-[18px] lg:text-[22px] text-center w-[80%]">{quote}</p>
                <p className="font-northwell text-light text-[200px] absolute translate-x-[325px] translate-y-[50px] transform scale-x-[-1] max-xl:hidden">
                    &quot;
                </p>
            </CardBody>
            <Divider className="w-[80%] mx-auto" />
            <CardFooter className="flex justify-center items-center h-fit p-[30px]">
                <Link href={`/stylists/${stylistName.split(" ")[0].toLowerCase()}`}>
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
