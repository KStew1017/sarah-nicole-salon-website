import { Modal, ModalContent, Skeleton } from "@nextui-org/react";
import Image from "next/image";

interface ImageModalProps {
    isOpen: boolean;
    onOpenChange: () => void;
    selectedImageIndex: number | null;
    images: string[];
    isLoaded: boolean[];
    gallery?: boolean;
}

const getImageSrc = (image: string): string => {
    if (typeof image === "string") {
        return image;
    } else {
        return image;
    }
};

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onOpenChange, selectedImageIndex, images, isLoaded }) => {
    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            backdrop="blur"
            classNames={{
                base: "w-[90%] max-w-[75vh] flex my-auto",
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
                        <img
                            src={getImageSrc(images[selectedImageIndex + 1])}
                            alt={`result ${selectedImageIndex + 1}`}
                            width={500}
                            height={1000}
                            className="lg:h-[75vh] w-full object-cover shadow-3xl"
                        />
                    </Skeleton>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ImageModal;
