"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Modal, ModalContent, Skeleton, useDisclosure } from "@nextui-org/react";
import { Heading } from "../layout/Heading";
import { Reveal } from "@/utlis/reveal";

interface ImagesProps {
    url: string;
    folderName: string;
}

export const GallerySection: React.FC = () => {
    const [images, setImages] = useState<ImagesProps[]>([]);
    const [displayCount, setDisplayCount] = useState(9);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoaded, setIsLoaded] = useState(new Array(images.length).fill(false));

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/s3-get`);
                const data = await response.json();
                setImages(data.urls);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchImages();
    }, []);

    console.log(images)

    const handleImageClick = (index: any) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    return (
        <div className="flex flex-col items-center relative max-w-[1250px] justify-center mx-auto my-[100px]">
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="Gallery"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
            </Reveal>
            <div className="grid grid-cols-3 grid-flow-row gap-[100px]">
                {images &&
                    images
                        .filter((_, i) => i !== 0)
                        .slice(0, displayCount)
                        .map((url, i) => (
                            <div
                                key={i}
                                onClick={() => handleImageClick(i)}
                                className="relative group"
                            >
                                <Skeleton
                                    isLoaded={isLoaded[i]}
                                    className="rounded-[50px] bg-gradient-to-tr from-green via-blue to-green animate-gradient-xy"
                                >
                                    <Image
                                        src={url.url}
                                        width={400}
                                        height={400}
                                        alt={`result ${i + 1}`}
                                        className="h-[400px] w-[400px] object-cover rounded-[50px] shadow-3xl hover:scale-105 transition-transform ease-s-curve"
                                        onLoad={() =>
                                            setIsLoaded((prevState) => {
                                                const newState = [...prevState];
                                                newState[i] = true;
                                                return newState;
                                            })
                                        }
                                    />
                                </Skeleton>
                                <div className="absolute inset-0 ">
                                    <div className="flex flex-col items-center justify-end h-full text-white">
                                        <p className="font-serif text-light text-[36px] translate-y-[-25px] z-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {url.folderName.split("-")[0][0].toUpperCase() + url.folderName.split("-")[0].slice(1)}
                                        </p>
                                        <div className="bg-green/25 w-full h-[25%] absolute z-10 rounded-b-[50px] backdrop-filter backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </div>
                        ))}
            </div>
            {displayCount < images.length - 1 && (
                <div
                    className="bg-green text-light shadow-3xl rounded-full text-[20px] w-fit h-fit px-[25px] py-[10px]  mt-[100px] font-serif hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all ease-s-curve"
                    onClick={() => setDisplayCount((count) => count + 9)}
                >
                    Show More
                </div>
            )}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                backdrop="blur"
                classNames={{
                    base: "max-w-[75vh]",
                    closeButton:
                        "text-light hover:bg-gold absolute left-0 right-0 bottom-0 top-auto mx-auto translate-y-[-25px] w-[50px] h-[50px] justify-center items-center flex hover:scale-105 transition-all ease-s-curve text-[24px] z-50",
                }}
            >
                <ModalContent className="rounded-[50px]">
                    {selectedImageIndex !== null && (
                        <Skeleton
                            isLoaded={isLoaded[selectedImageIndex]}
                            className="rounded-[50px]"
                        >
                            <Image
                                src={images[selectedImageIndex + 1].url}
                                alt={`result ${selectedImageIndex + 1}`}
                                width={500}
                                height={1000}
                                className="h-[75vh] w-full object-cover shadow-3xl"
                            />
                        </Skeleton>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};
