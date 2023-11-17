interface HeadingProps {
    title: string;
    decoration: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, decoration }) => {
    return (
        <div className="flex justify-center items-center mb-[100px]">
            <span className="font-northwellSwash text-[80px] text-green">{decoration}</span>
            <h1 className="font-northwell text-[80px] text-green mx-[20px]">{title}</h1>
            <span className="font-northwellSwash text-[80px] text-green">{decoration}</span>
        </div>
    );
};
