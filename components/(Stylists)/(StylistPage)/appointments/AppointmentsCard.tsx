import tailwindCustomColors from "@/utlis/customColors";
import { Zelle } from "@/utlis/icons";
import { StylistType } from "@/utlis/types";
import { faMoneyBillWave, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface AppointmentsCardProps {
    stylist: StylistType;
}

export const AppointmentsCard: React.FC<AppointmentsCardProps> = ({ stylist }) => {
    "use client";

    const stylistFirstName = stylist.name.split(" ")[0];
    const [svgHeight, setHeight] = useState(0);
    const [svgWidth, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setHeight(40);
                setWidth(45);
            } else {
                setHeight(80);
                setWidth(90);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Card className="bg-blue bg-[url('/images/patterns/leaves.png')] bg-fixed bg-cover w-full lg:w-[75%] py-[20px] lg:py-[50px] rounded-[0px] lg:rounded-[50px] shadow-3xl mx-auto">
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[40px] md:text-[60px] lg:text-[80px] text-light flex justify-center items-center">
                    Booking
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[16px] md:text-[18px] lg:text-[24px] w-[75%]">
                    <p>
                        To book an appointment, please call the salon{" "}
                        <a
                            className="text-gold"
                            href="tel:8172810262"
                        >
                            (817-281-0262)
                        </a>{" "}
                        and ask for <span className="text-gold">{stylistFirstName}</span>.
                    </p>
                </CardBody>
            </CardBody>
            <Divider className="mx-auto bg-light/50 w-full lg:w-[75%]" />
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[40px] md:text-[60px] lg:text-[80px] text-light flex justify-center items-center">
                    Pricing
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[16px] md:text-[18px] lg:text-[24px] w-[75%]">
                    <p>
                        Prices vary by appointment and service. For more information on pricing, call the salon{" "}
                        <a
                            className="text-gold"
                            href="tel:8172810262"
                        >
                            (817-281-0262)
                        </a>{" "}
                        and ask for <span className="text-gold">{stylistFirstName}</span>.
                    </p>
                </CardBody>
            </CardBody>
            <Divider className="mx-auto bg-light/50 w-full lg:w-[75%]" />
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[40px] md:text-[60px] lg:text-[80px] text-light flex justify-center items-center">
                    Payments
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[16px] md:text-[18px] lg:text-[24px] w-[75%]">
                    I accept the following as payment methods:
                    <div className="flex flex-row gap-[25px] lg:gap-[100px] mt-[50px]">
                        {stylist.paymentMethods.map((method, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-center items-center font-northwell text-[30px] lg:text-[48px] gap-[15px]"
                            >
                                {method === "Cash" ? (
                                    <FontAwesomeIcon
                                        icon={faMoneyBillWave}
                                        className="h-[40px] lg:h-[80px] lg:w-[90px]"
                                    />
                                ) : method === "Check" ? (
                                    <FontAwesomeIcon
                                        icon={faMoneyCheck}
                                        className="h-[40px] lg:h-[80px] lg:w-[90px]"
                                    />
                                ) : method === "Zelle" ? (
                                    <Zelle
                                        color={tailwindCustomColors.light}
                                        width={`${svgWidth}px`}
                                        height={`${svgHeight}px`}
                                    />
                                ) : null}
                                {method}
                            </div>
                        ))}
                    </div>
                </CardBody>
            </CardBody>
        </Card>
    );
};
