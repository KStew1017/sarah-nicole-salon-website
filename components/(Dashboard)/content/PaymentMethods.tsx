interface PaymentMethodsProps {
    paymentMethods: string[];
}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ paymentMethods }) => {
    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full">
            <h2 className="text-[60px] font-northwell text-green text-center">Payment Methods</h2>
            <div className="flex flex-col items-center my-[50px]">
                <ul className="text-[24px] font-serif text-green text-center">
                    {paymentMethods?.map((paymentMethod) => (
                        <li key={paymentMethod}>{paymentMethod}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
