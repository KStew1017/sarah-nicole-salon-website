"use client";

import { useState, useEffect } from "react";
import { useDisclosure } from "@nextui-org/react";
import { Heading } from "../layout/Heading";
import { Reveal } from "@/utlis/reveal";
import ImageGrid from "../layout/ImageGrid";
import ImageModal from "../layout/ImageModal";


export const GallerySection: React.FC = () => {
    const [galleryImages, setGalleryImages] = useState<string[]>([]);
    const [displayCount, setDisplayCount] = useState(0);
    const [numberOfImageToAdd, setNumberOfImageToAdd] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoaded, setIsLoaded] = useState(new Array(galleryImages.length).fill(false));


    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/s3-get`);
                const data = await response.json();
                const urlPrefixes: string[] = data.randomizedObjects.map((item: any) => item.Key);
                const filteredUrls = urlPrefixes.filter((url: string) => !url.endsWith("/"));
                setGalleryImages(filteredUrls);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchImages();

        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 768) {
                setDisplayCount(6);
                setNumberOfImageToAdd(4);
            } else {
                setDisplayCount(9);
                setNumberOfImageToAdd(6);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleImageClick = (index: any) => {
        setSelectedImageIndex(index);
        onOpen();
    };

    return (
        <div className="flex flex-col items-center relative w-[90%] lg:w-full max-w-[1250px] justify-center mx-auto my-[100px]">
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
            <ImageGrid
                images={galleryImages}
                onImageClick={handleImageClick}
                isLoaded={isLoaded}
                setIsLoaded={setIsLoaded}
                displayCount={displayCount}
                gallery
            />
            {displayCount < galleryImages.length - 1 && (
                <div
                    className="bg-green text-light shadow-3xl rounded-full text-[20px] w-fit h-fit px-[25px] py-[10px]  mt-[100px] font-serif hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all ease-s-curve"
                    onClick={() => setDisplayCount((count) => count + numberOfImageToAdd)}
                >
                    Show More
                </div>
            )}
            <ImageModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                selectedImageIndex={selectedImageIndex}
                images={galleryImages}
                isLoaded={isLoaded}
            />
        </div>
    );
};
