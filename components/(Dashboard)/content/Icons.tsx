interface IconsProps {
    icons: string[];
}

export const Icons: React.FC<IconsProps> = ({ icons }) => {
    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full">
            <h2 className="text-[60px] font-northwell text-green text-center">Background Icons</h2>
            <div className="flex flex-col items-center my-[50px]">
                <ul className="text-[24px] font-serif text-green text-center">
                    {icons?.map((icon) => (
                        <li key={icon}>{icon}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
