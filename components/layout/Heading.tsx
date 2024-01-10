interface HeadingProps {
    title: string;
    decoration: string;
    textColor: string;
    font: string;
    textStyles?: string;
    boxStyles?: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, decoration, textColor, font, textStyles, boxStyles }) => {
    return (
        <div className={`flex justify-center items-center mb-[50px] ${boxStyles}`}>
            <span className={`font-northwellSwash text-[25px] md:text-[80px] text-${textColor}`}>{decoration}</span>
            <h1 className={`font-${font} text-[50px] mx-[10px] md:text-[80px] text-${textColor} ${textStyles}`}>{title}</h1>
            <span className={`font-northwellSwash text-[25px] md:text-[80px] text-${textColor}`}>{decoration}</span>
        </div>
    );
};
