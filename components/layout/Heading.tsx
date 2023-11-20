interface HeadingProps {
    title: string;
    decoration: string;
    textColor: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, decoration, textColor }) => {
    return (
        <div className="flex justify-center items-center mb-[50px]">
            <span className={`font-northwellSwash text-[80px] text-${textColor} drop-shadow-md`}>{decoration}</span>
            <h1 className={`font-northwell text-[80px] text-${textColor} drop-shadow-md`}>{title}</h1>
            <span className={`font-northwellSwash text-[80px] text-${textColor} drop-shadow-md`}>{decoration}</span>
        </div>
    );
};
