import { Button, Divider, ModalContent } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

interface ImageUploadProps {
    name: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ name }) => {
    "use client";

    const [images, setImages] = useState<string[]>([]);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [isAddingImages, setIsAddingImages] = useState(false);
    const [isRemovingImages, setIsRemovingImages] = useState(false);
    const [newImagesAdded, setNewImagesAdded] = useState(false);
    const [isRemovingUploadedImages, setIsRemovingUploadedImages] = useState(false);
    const [confirmRemove, setConfirmRemove] = useState(false);
    const firstName: string = name?.split(" ")[0].toLowerCase();

    useEffect(() => {
        if (!name) return;

        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/s3-get/${firstName}`, { cache: 'no-store' });
                const data = await response.json();
                const imageUrls = data.urls;
                setImages(imageUrls.splice(1, imageUrls.length - 1));
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchImages();
        setNewImagesAdded(false);
    }, [name, newImagesAdded]);

    const handleFetchImages = async () => {
        try {
            const response = await fetch(`/api/s3-get/${firstName}`, { cache: 'no-store' });
            const data = await response.json();
            const imageUrls = data.urls;
            setImages(imageUrls.splice(1, imageUrls.length - 1));
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleIsAddingImages = (newLength: number) => {
        if (newLength > 0) {
            setIsAddingImages(true);
        }
    };

    const handleUpload = (e: any) => {
        const fileInput = document.getElementById("fileInput");
        fileInput?.click();
    };

    const handleUploadButtonClick = (e: any) => {
        handleUpload(e);
        handleIsAddingImages(uploadedImages.length);
    };

    const handleRemoveUploadedImageButtonClick = () => {
        setIsRemovingUploadedImages(true);
    };

    const handleRemoveImageButtonClick = (e: any) => {
        setIsRemovingImages(true);
    };

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        const newFileName = `${firstName}-result-${Date.now()}`;
        const newFile = new File([file], newFileName, { type: file.type });
        const newUploadedImages = [...uploadedImages, newFile];
        setUploadedImages(newUploadedImages);
        handleIsAddingImages(newUploadedImages.length);
    };

    const handleSaveUploadedImages = async () => {
        try {
            if (uploadedImages.length === 0) {
                setIsAddingImages(false);
                setUploadedImages([]);
                setIsRemovingUploadedImages(false);
            }

            for (const file of uploadedImages) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("userName", firstName);

                try {
                    const response = await fetch("/api/s3-post", {
                        method: "POST",
                        body: formData,
                    });
                    const data = await response.json();
                    console.log(data.status);
                } catch (error) {
                    console.log(error);
                }
            }
            setIsAddingImages(false);
            setUploadedImages([]);
            setIsRemovingUploadedImages(false);
            setNewImagesAdded(true);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRemoveImage = async (imageKey: string) => {
        try {
            const response = await fetch(`/api/s3-delete?name=${firstName}&imageKey=${imageKey}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        images.splice(images.indexOf(imageKey), 1);
    };

    const handleCancelUpload = () => {
        setIsAddingImages(false);
        setIsRemovingUploadedImages(false);
        setUploadedImages([]);
    };

    const handleRemoveUploadedImage = (image: any) => {
        if (isRemovingUploadedImages) {
            const newUploadedImages = uploadedImages.filter((img) => img !== image);
            setUploadedImages(newUploadedImages);
        }
    };

    const handleDoneRemovingUploadedImages = () => {
        setIsRemovingUploadedImages(false);
    };

    const handleDoneRemovingImageButtonClick = () => {
        setIsRemovingImages(false);
    };

    const xDisappearAnimation = {
        opacity: [1, 0],
        scale: [1, 0],
        transition: {
            duration: 0.5,
            times: [0.075, 0.82, 0.165, 1],
        },
    };

    const xShakeAnimation = {
        rotate: [0, -3, 3, -3, 3, 0],
        transition: {
            duration: 1,
            times: [0.075, 0.82, 0.165, 1],
            repeat: Infinity,
        },
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[25px] lg:p-[50px] rounded-[50px] w-full flex flex-col items-center justify-center">
            <h2 className="text-[48px] lg:text-[60px] font-northwell text-green text-center mb-[25px]">My Images</h2>
            {images.length > 0 ? (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-flow-row gap-[25px] md:gap-[50px] lg:gap-[75px]">
                        <AnimatePresence>
                            {images &&
                                images.map((url, i) => (
                                    <motion.div
                                        key={i}
                                        className={`relative ${isRemovingImages ? "cursor-pointer" : ""}`}
                                        animate={isRemovingImages ? xShakeAnimation : { x: 0 }}
                                        exit={xDisappearAnimation}
                                    >
                                        <img
                                            src={url}
                                            alt={`result ${url.split("/").pop()?.split("?")[0]}`}
                                            className="h-auto w-auto object-cover shadow-3xl hover:scale-105 transition-transform ease-s-curve aspect-square"
                                        />
                                        {isRemovingImages && (
                                            <>
                                                <div
                                                    className="absolute top-1/4 right-1/4 lg:-top-1/4 lg:-right-1/4 bg-none bg-red-500 bg-opacity-25 backdrop-filter backdrop-blur-lg text-white font-bold text-[25px] rounded-full h-1/2 w-1/2 flex items-center justify-center hover:scale-105 transition duration-100 hover:shadow-xl"
                                                    onClick={onOpen}
                                                >
                                                    X
                                                </div>
                                                <Modal
                                                    isOpen={isOpen}
                                                    onOpenChange={onOpenChange}
                                                    backdrop="opaque"
                                                    classNames={{
                                                        base: "bg-tan text-green font-serif text-[20px] flex my-auto",
                                                        backdrop: "bg-light/10",
                                                        header: "border-b-[1px] border-[#292f46]",
                                                        body: "py-[25px] px-[50px]",
                                                        footer: "border-t-[1px] border-[#292f46] flex items-center justify-center gap-[50px]",
                                                        closeButton:
                                                            "hover:bg-white/5 active:bg-white/10 hover:scale-105 transition-transform ease-s-curve",
                                                    }}
                                                >
                                                    <ModalContent>
                                                        {(onClose) => (
                                                            <>
                                                                <ModalBody>
                                                                    Are you sure you want to remove this image?
                                                                </ModalBody>
                                                                <ModalFooter>
                                                                    <Button
                                                                        className="hover:bg-tan hover:shadow-lg bg-red-500 hover:border-2 hover:border-red-500 hover:text-red-500 text-light font-serif text-[20px] w-fit"
                                                                        onPress={onClose}
                                                                    >
                                                                        Cancel
                                                                    </Button>
                                                                    <Button
                                                                        onPress={() => {
                                                                            handleRemoveImage(
                                                                                url.split("/").pop()?.split("?")[0] ||
                                                                                    ""
                                                                            )
                                                                                handleFetchImages
                                                                                onClose
                                                                                setIsRemovingImages(false);
                                                                        }}
                                                                        className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-fit"
                                                                    >
                                                                        Confirm
                                                                    </Button>
                                                                </ModalFooter>
                                                            </>
                                                        )}
                                                    </ModalContent>
                                                </Modal>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>
                    {uploadedImages.length > 0 && (
                        <>
                            <Divider className="my-[100px]" />
                            <h2 className="text-[48px] lg:text-[60px] font-northwell text-green text-center mb-[25px]">
                                Images to Add
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 grid-flow-row gap-[25px] md:gap-[50px] lg:gap-[75px]">
                                <AnimatePresence>
                                    {uploadedImages &&
                                        uploadedImages.map((image, i) => (
                                            <motion.div
                                                key={i}
                                                className={`relative ${
                                                    isRemovingUploadedImages ? "cursor-pointer" : ""
                                                }`}
                                                animate={isRemovingUploadedImages ? xShakeAnimation : { x: 0 }}
                                                exit={xDisappearAnimation}
                                                onClick={() => handleRemoveUploadedImage(image)}
                                            >
                                                <img
                                                    src={
                                                        typeof image === "string"
                                                            ? image
                                                            : image instanceof Blob
                                                            ? URL.createObjectURL(image)
                                                            : ""
                                                    }
                                                    alt={`result`}
                                                    className="h-auto w-auto object-cover shadow-3xl hover:scale-105 transition-transform ease-s-curve aspect-square"
                                                />
                                                {isRemovingUploadedImages && (
                                                    <div
                                                        className="absolute top-1/4 right-1/4 lg:-top-1/4 lg:-right-1/4 bg-none bg-red-500 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white font-bold text-[25px] rounded-full h-1/2 w-1/2 flex items-center justify-center hover:scale-105 transition duration-100 hover:shadow-xl"
                                                        onClick={handleRemoveUploadedImage}
                                                    >
                                                        X
                                                    </div>
                                                )}
                                            </motion.div>
                                        ))}
                                </AnimatePresence>
                            </div>
                        </>
                    )}
                    <div className="flex flex-col items-center mt-[50px] gap-[30px] w-fit">
                        <input
                            type="file"
                            id="fileInput"
                            aria-label="File Upload"
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />
                        {isRemovingImages ? (
                            <></>
                        ) : (
                            <Button
                                className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-fit mt-[25px] lg:mt-[50px]"
                                onClick={handleUploadButtonClick}
                            >
                                Add Image
                            </Button>
                        )}

                        {!isAddingImages && (
                            <>
                                {isRemovingImages ? (
                                    <Button
                                        className={`hover:bg-tan hover:shadow-lg bg-red-500 hover:border-2 hover:border-red-500 hover:text-red-500 text-light font-serif text-[20px] ${
                                            isRemovingImages ? "mt-[50px]" : ""
                                        }`}
                                        onClick={handleDoneRemovingImageButtonClick}
                                    >
                                        Done Removing
                                    </Button>
                                ) : (
                                    <Button
                                        className={`hover:bg-tan hover:shadow-lg bg-red-500 hover:border-2 hover:border-red-500 hover:text-red-500 text-light font-serif text-[20px] ${
                                            isRemovingImages ? "mt-[50px]" : ""
                                        }`}
                                        onClick={handleRemoveImageButtonClick}
                                    >
                                        Remove Images
                                    </Button>
                                )}
                            </>
                        )}
                        {isAddingImages && (
                            <div className="flex flex-col gap-[25px] lg:gap-[50px] items-center justify-center">
                                {isRemovingUploadedImages ? (
                                    <Button
                                        className="hover:bg-tan hover:shadow-lg bg-orange-400 hover:border-2 hover:border-orange-400 hover:text-orange-400 text-light font-serif text-[20px] w-fit"
                                        onClick={handleDoneRemovingUploadedImages}
                                    >
                                        Done Removing
                                    </Button>
                                ) : (
                                    <Button
                                        className="hover:bg-tan hover:shadow-lg bg-orange-400 hover:border-2 hover:border-orange-400 hover:text-orange-400 text-light font-serif text-[20px] w-fit"
                                        onClick={handleRemoveUploadedImageButtonClick}
                                    >
                                        Remove Images
                                    </Button>
                                )}
                                <div className="flex gap-[25px] items-center justify-center">
                                    <Button
                                        className="hover:bg-tan hover:shadow-lg bg-gold hover:border-2 hover:border-gold hover:text-gold text-light font-serif text-[20px] w-[100px]"
                                        onClick={handleSaveUploadedImages}
                                    >
                                        Save
                                    </Button>

                                    <Button
                                        className="hover:bg-tan hover:shadow-lg bg-red-500 hover:border-2 hover:border-red-500 hover:text-red-500 text-light font-serif text-[20px] w-[100px]"
                                        onClick={handleCancelUpload}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <>
                    <p className="text-green text-[24px] font-serif">You have no images yet.</p>
                    <input
                        type="file"
                        id="fileInput"
                        aria-label="File Upload"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                    />
                    <Button
                        className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-fit mt-[50px]"
                        onClick={handleUploadButtonClick}
                    >
                        Add Image
                    </Button>
                </>
            )}
        </div>
    );
};
