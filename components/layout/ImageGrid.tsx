import Image from "next/image";
import { Skeleton } from "@nextui-org/react";

interface ImageGridProps {
    images: string[];
    onImageClick: (index: number) => void;
    isLoaded: boolean[];
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean[]>>;
    displayCount: number;
    gallery?: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({
    images,
    onImageClick,
    isLoaded,
    setIsLoaded,
    gallery,
    displayCount,
}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-[25px] md:gap-[75px] lg:gap-[100px]">
            {images &&
                images
                    .filter((_, i) => i !== 0)
                    .slice(0, displayCount)
                    .map((url, i) => (
                        <div
                            key={i}
                            onClick={() => onImageClick(i)}
                            className="relative group"
                        >
                            <Skeleton
                                isLoaded={isLoaded[i]}
                                className="rounded-[50px] bg-gradient-to-tr from-green via-blue to-green animate-gradient-xy"
                            >
                                <img
                                    src={url}
                                    width={400}
                                    height={400}
                                    alt={`result ${i + 1}`}
                                    className="h-auto w-auto object-cover rounded-[50px] shadow-3xl hover:scale-105 transition-transform ease-s-curve aspect-square"
                                    onLoad={() =>
                                        setIsLoaded((prevState) => {
                                            const newState = [...prevState];
                                            newState[i] = true;
                                            return newState;
                                        })
                                    }
                                />
                            </Skeleton>
                            {gallery ? (
                                <div className="absolute inset-0 ">
                                    <div className="flex flex-col items-center justify-end h-full text-white">
                                        <p className="font-serif text-light text-[36px] translate-y-[-25px] z-40 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {(url as any).folderName.split("-")[0][0].toUpperCase() +
                                                (url as any).folderName.split("-")[0].slice(1)}
                                        </p>
                                        <div className="bg-green/25 w-full h-[25%] absolute z-10 rounded-b-[50px] backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ))}
        </div>
    );
};

export default ImageGrid;
