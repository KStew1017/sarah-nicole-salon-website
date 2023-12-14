import Loading from "@/components/layout/Loading";
import tailwindCustomColors from "@/utlis/customColors";
import { Zelle } from "@/utlis/icons";
import { faMoneyBillWave, faMoneyCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface PaymentMethodsProps {
    paymentMethods: string[];
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ paymentMethods }) => {
    const [selected, setSelected] = useState(paymentMethods || []);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setSelected(paymentMethods);
        setIsLoaded(true);
    }, [paymentMethods]);

    const checkboxClassNames = {
        base: "flex flex-col items-center justify-center gap-[25px]",
        label: "font-serif text-[24px] text-green mr-2 text-center",
    };

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full">
            <h2 className="text-[60px] font-northwell text-green text-center">Payment Methods</h2>
            {isLoaded ? (
                <CheckboxGroup
                    className="items-center"
                    value={selected}
                    onValueChange={setSelected}
                    classNames={{
                        base: "mt-[25px]",
                        wrapper: "flex flex-row gap-[100px] items-center justify-center",
                    }}
                >
                    <Checkbox
                        value="Cash"
                        classNames={checkboxClassNames}
                    >
                        <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className="h-[50px]"
                        />
                        <p className="text-center">Cash</p>
                    </Checkbox>
                    <Checkbox
                        value="Check"
                        classNames={checkboxClassNames}
                    >
                        <FontAwesomeIcon
                            icon={faMoneyCheck}
                            className="h-[50px]"
                        />
                        <p className="text-center">Check</p>
                    </Checkbox>
                    <Checkbox
                        value="Zelle"
                        classNames={checkboxClassNames}
                    >
                        <Zelle
                            color={tailwindCustomColors.green}
                            height="50px"
                        />
                        <p className="text-center mt-[5px]">Zelle</p>
                    </Checkbox>
                </CheckboxGroup>
            ) : (
                <Loading />
            )}
        </div>
    );
};
