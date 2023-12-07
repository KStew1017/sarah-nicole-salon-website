import Loading from "@/components/layout/Loading";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface PaymentMethodsProps {
    paymentMethods: string[];
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ paymentMethods }) => {
    const [selected, setSelected] = useState(paymentMethods);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setSelected(paymentMethods);
        setIsLoaded(true);
    }, [paymentMethods]);

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full">
            <h2 className="text-[60px] font-northwell text-green text-center">Payment Methods</h2>
            {isLoaded ? (
                <CheckboxGroup
                    className="flex flex-col items-center justify-center"
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Checkbox value="Cash">Cash</Checkbox>
                    <Checkbox value="Check">Check</Checkbox>
                    <Checkbox value="Zelle">Zelle</Checkbox>
                </CheckboxGroup>
            ) : (
                <Loading />
            )}
        </div>
    );
};
