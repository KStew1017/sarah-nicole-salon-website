import { Heading } from "@/components/layout/Heading";
import { StylistType } from "@/utlis/types";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Modal, ModalContent, Skeleton, useDisclosure } from "@nextui-org/react";
import ImageGrid from "@/components/layout/ImageGrid";
import ImageModal from "@/components/layout/ImageModal";

interface ResultsSectionProps {
    stylist: StylistType;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ stylist }) => {
    const [images, setImages] = useState([]);
    const [displayCount, setDisplayCount] = useState(9);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoaded, setIsLoaded] = useState(new Array(images.length).fill(false));
    const stylistFirstName = stylist.name.split(" ")[0].toLowerCase();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/s3-get/${stylistFirstName}`);
                const data = await response.json();
                setImages(data.urls);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchImages();
    }, [stylistFirstName]);

    const handleImageClick = (index: any) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    if (images.length <= 1) {
        return (
            <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[200px]">
                <Heading
                    title="My Results"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
                <p className="text-green text-[24px] font-serif">No images yet.</p>
            </div>
        );
    } else if (images.length > 1) {
        return (
            <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[200px]">
                <Heading
                    title="My Results"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
                <ImageGrid
                    images={images}
                    onImageClick={handleImageClick}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                    displayCount={displayCount}
                />
                {displayCount < images.length - 1 && (
                    <div
                        className="bg-green text-light shadow-3xl rounded-full text-[20px] w-fit h-fit px-[25px] py-[10px]  mt-[100px] font-serif hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all ease-s-curve"
                        onClick={() => setDisplayCount((count) => count + 4)}
                    >
                        Show More
                    </div>
                )}
                <ImageModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    selectedImageIndex={selectedImageIndex}
                    images={images}
                    isLoaded={isLoaded}
                />
            </div>
        );
    }
};
