import Loading from "@/components/layout/Loading";
import { Checkmark } from "@/utlis/checkmark";
import tailwindCustomColors from "@/utlis/customColors";
import { Zelle } from "@/utlis/icons";
import { faMoneyBillWave, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PaymentMethodsProps {
    paymentMethods: string[];
    name: string;
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ paymentMethods, name }) => {
    const [selected, setSelected] = useState(paymentMethods || []);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false); // Used to trigger exit animation on save success
    const [isLoaded, setIsLoaded] = useState(false);
    const [svgHeight, setHeight] = useState(0);


    useEffect(() => {
        setSelected(paymentMethods);
        setIsLoaded(true);
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 1024) {
                setHeight(30);
            } else {
                setHeight(50);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [paymentMethods]);

    const handleSave = async () => {
        try {
            const res = await fetch(`/api/db-patch?name=${name}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    paymentMethods: selected,
                }),
                cache: "reload",
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        setSaveSuccess(true);
        setTimeout(() => {
            setExitAnimation(true);
        }, 2000);
        setTimeout(() => {
            setExitAnimation(false);
        }, 3000);
        setTimeout(() => {
            setSaveSuccess(false);
        }, 3000);
    };

    const checkboxClassNames = {
        base: "flex flex-col items-center justify-center gap-[25px]",
        label: "font-serif text-[24px] text-green mr-2 text-center",
    };

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full relative">
            <h2 className="text-[48px] lg:text-[60px] font-northwell text-green text-center">Payment Methods</h2>
            {isLoaded ? (
                <>
                    <CheckboxGroup
                        className="items-center"
                        value={selected}
                        onValueChange={setSelected}
                        classNames={{
                            base: "mt-[25px]",
                            wrapper: "flex flex-row gap-[25px] lg:gap-[100px] items-center justify-center",
                        }}
                    >
                        <Checkbox
                            value="Cash"
                            classNames={checkboxClassNames}
                        >
                            <FontAwesomeIcon
                                icon={faMoneyBillWave}
                                className="h-[30px] lg:h-[50px]"
                            />
                            <p className="text-center">Cash</p>
                        </Checkbox>
                        <Checkbox
                            value="Check"
                            classNames={checkboxClassNames}
                        >
                            <FontAwesomeIcon
                                icon={faMoneyCheck}
                                className="h-[30px] lg:h-[50px]"
                            />
                            <p className="text-center">Check</p>
                        </Checkbox>
                        <Checkbox
                            value="Zelle"
                            classNames={checkboxClassNames}
                        >
                            <Zelle
                                color={tailwindCustomColors.green}
                                height={`${svgHeight}px`}
                            />
                            <p className="text-center mt-[5px]">Zelle</p>
                        </Checkbox>
                    </CheckboxGroup>
                    <Button
                        className="hover:bg-tan hover:shadow-lg bg-gold hover:border-2 hover:border-gold hover:text-gold text-light font-serif text-[20px] w-[100px] mx-auto flex mt-[50px]"
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                    {saveSuccess && (
                        <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <AnimatePresence>
                                <motion.div
                                    className="bg-green h-[250px] w-[250px] flex flex-col items-center justify-center rounded-full bg-opacity-75 backdrop-filter backdrop-blur-lg"
                                    initial={exitAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    animate={exitAnimation ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                                >
                                    <Checkmark />
                                    <p className="text-[36px] font-serif text-light text-center">Saved!</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};
