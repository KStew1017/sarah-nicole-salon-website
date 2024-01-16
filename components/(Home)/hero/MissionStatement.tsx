import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export const MissionStatement: React.FC = () => {
    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.75, type: "spring" }}
            className="lg:max-w-[40%] h-fit lg:absolute lg:left-0"
        >
            <Card className="rounded-[0px] lg:rounded-[50px] p-[25px] bg-light text-dark bg-opacity-50 backdrop-filter backdrop-blur-2xl shadow-3xl">
                <CardHeader className="flex gap-3 justify-center">
                    <p className="text-[24px] lg:text-[34px] font-serif text-green text-center">
                        The artistry of{" "}
                        <span className="after:content-['d'] after:font-northwellSwash after:inline-flex after:absolute after:translate-x-[-65px] lg:after:translate-x-[-85px] after:translate-y-[12px] after:text-[38px] lg:after:text-[48px] after:font-normal font-bold">
                            style
                        </span>
                        , the quality of{" "}
                        <span className="after:content-['s'] after:font-northwellSwash after:inline-flex after:absolute after:translate-x-[-120px] lg:after:translate-x-[-163px] after:translate-y-[12px] after:text-[38px] lg:after:text-[48px] after:font-normal font-bold">
                            experience
                        </span>
                        , and the beauty of{" "}
                        <span className="after:content-['q'] after:font-northwellSwash after:inline-flex after:absolute after:translate-x-[-50px] lg:after:translate-x-[-60px] after:translate-y-[12px] after:text-[38px] lg:after:text-[48px] after:font-normal font-bold">
                            you.
                        </span>
                    </p>
                </CardHeader>
                <CardBody>
                    <p className="text-[18px] font-serif text-green text-center">
                        For more than 25 years our experienced stylists have provided top-notch services in a warm and
                        welcoming environment that will make you feel right at home.
                    </p>
                </CardBody>
                <Divider />
                <CardFooter className="flex-col">
                    <p className="text-[18px] font-serif text-center mx-auto">Call us to book your appointment:</p>
                    <Link
                        className="text-green font-serif text-[36px]"
                        href="tel:631-751-0822"
                    >
                        (817) 281-0262
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
};
