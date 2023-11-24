import { Link, Button } from "@nextui-org/react";
import React from "react";
import { Reveal } from "@/utlis/reveal";

interface OverviewCardProps {
    stylistName: string;
    stylistServices: string[];
    even: boolean;
    buttonColors?: string[];
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
    stylistName,
    stylistServices,
    even,
    buttonColors = ["#C3AC3C", "#E7DCA6"],
}) => {
    const stylistFirstName = stylistName.split(" ")[0];

    return (
        <Reveal
            hiddenVariant={!even ? "hiddenXNeg" : "hiddenXPos"}
            visibleVariant={!even ? "visibleXNeg" : "visibleXPos"}
        >
            <div className={`relative mx-auto w-[80%] h-[500px] shadow-3xl rounded-[50px] overflow-hidden`}>
                <div className={`w-[40%] h-full absolute z-10 pt-[50px] text-center ${!even ? "" : "right-0"}`}>
                    <h1 className="text-light font-northwell text-[64px] h-[100px]">{stylistName}</h1>
                    <div className="h-[200px] flex flex-col justify-between">
                        {stylistServices.slice(0, 5).map((service, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center"
                            >
                                <p className="text-light font-serif text-[18px]">{service}</p>
                            </div>
                        ))}
                        <p className="text-light font-serif text-[18px]">...and more!</p>
                    </div>
                    <div className="h-[150px] flex justify-center items-center">
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
                    </div>
                </div>
                <div className={`absolute w-full h-full bg-green ${!even ? "" : "scale-x-[-1]"}`} />
                <img
                    src={`/images/${stylistFirstName}/${stylistFirstName}-profile.jpeg`}
                    alt={`${stylistName} profile`}
                    className={`absolute w-[80%] h-full object-cover ${
                        !even ? "right-0" : "scale-x-[-1] left-0"
                    } gradient-mask-l-10 `}
                />
            </div>
        </Reveal>
    );
};
