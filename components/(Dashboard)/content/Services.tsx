interface ServicesProps {
    services: string[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full">
            <h2 className="text-[50px] font-northwell text-green text-center">Services</h2>
            <div className="flex flex-col items-center my-[50px]">
                <ul className="text-[24px] font-serif text-green text-center">
                    {services?.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
