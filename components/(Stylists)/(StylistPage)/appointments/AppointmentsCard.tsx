import tailwindCustomColors from "@/utlis/customColors";
import { Zelle } from "@/utlis/icons";
import { StylistType } from "@/utlis/types";
import { faMoneyBillWave, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

interface AppointmentsCardProps {
    stylist: StylistType;
}

export const AppointmentsCard: React.FC<AppointmentsCardProps> = ({ stylist }) => {
    const stylistFirstName = stylist.name.split(" ")[0];

    return (
        <Card className="bg-blue bg-[url('/images/patterns/leaves.png')] bg-fixed bg-cover w-[75%] py-[50px] rounded-[50px] shadow-3xl mx-auto">
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[80px] text-light flex justify-center items-center">
                    Booking
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[24px] w-[75%]">
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
            <Divider className="mx-auto bg-light/50 w-[75%]" />
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[80px] text-light flex justify-center items-center">
                    Pricing
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[24px] w-[75%]">
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
            <Divider className="mx-auto bg-light/50 w-[75%]" />
            <CardBody className="flex justify-center items-center">
                <CardHeader className="font-northwell text-[60px] text-light flex justify-center items-center">
                    Payments
                </CardHeader>
                <CardBody className="flex justify-center items-center text-light font-serif text-center text-[24px] w-[75%]">
                    I accept the following as payment methods:
                    <div className="flex flex-row gap-[100px] mt-[50px]">
                        {stylist.paymentMethods.map((method, i) => (
                            <div
                                key={i}
                                className="flex flex-col justify-center items-center font-northwell text-[48px] gap-[15px]"
                            >
                                {method === "Cash" ? (
                                    <FontAwesomeIcon
                                        icon={faMoneyBillWave}
                                        className="h-[80px] w-[90px]"
                                    />
                                ) : method === "Check" ? (
                                    <FontAwesomeIcon
                                        icon={faMoneyCheck}
                                        className="h-[80px] w-[90px]"
                                    />
                                ) : method === "Zelle" ? (
                                    <Zelle
                                        color={tailwindCustomColors.light}
                                        width="90px"
                                        height="80px"
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
