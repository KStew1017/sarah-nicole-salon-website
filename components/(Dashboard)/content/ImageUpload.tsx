import { Button, Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ImageUploadProps {
    name: string;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ name }) => {
    const [images, setImages] = useState<string[]>([]);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [isAddingImages, setIsAddingImages] = useState(false);
    const [newImagesAdded, setNewImagesAdded] = useState(false);
    const firstName: string = name?.split(" ")[0].toLowerCase();

    useEffect(() => {
        if (!name) return;

        const fetchImages = async () => {
            try {
                const response = await fetch(`/api/s3-get/${firstName}`);
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

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        const newFileName = `${firstName}-result-${Date.now()}`;
        const newFile = new File([file], newFileName, { type: file.type });
        const newUploadedImages = [...uploadedImages, newFile];
        setUploadedImages(newUploadedImages);
        handleIsAddingImages(newUploadedImages.length);
    };

    const handleSaveUploadedImages = async () => {
        if (uploadedImages.length === 0) return;

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
        setNewImagesAdded(true);
    };

    const handleCancelUpload = () => {
        setIsAddingImages(false);
        setUploadedImages([]);
    };

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full flex flex-col items-center justify-center">
            <h2 className="text-[60px] font-northwell text-green text-center mb-[25px]">My Images</h2>
            {images.length > 0 ? (
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-6 grid-flow-row gap-[75px]">
                        {images &&
                            images.map((url, i) => (
                                <div
                                    key={i}
                                    className="relative"
                                >
                                    <img
                                        src={url}
                                        alt={`result ${i + 1}`}
                                        className="h-auto w-auto object-cover shadow-3xl hover:scale-105 transition-transform ease-s-curve aspect-square"
                                    />
                                </div>
                            ))}
                    </div>
                    {uploadedImages.length > 0 && (
                        <>
                            <Divider className="my-[100px]" />
                            <h2 className="text-[60px] font-northwell text-green text-center mb-[25px]">
                                Images to Add
                            </h2>
                            <div className="grid grid-cols-6 grid-flow-row gap-[75px]">
                                {uploadedImages &&
                                    uploadedImages.map((image, i) => (
                                        <div
                                            key={i}
                                            className="relative"
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
                                        </div>
                                    ))}
                            </div>
                        </>
                    )}
                    <div className="flex flex-col items-center mt-[50px] gap-[50px] w-fit">
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
                        {isAddingImages && (
                            <div className="flex gap-[50px] items-center justify-center">
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
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-green text-[24px] font-serif">You have no images yet.</p>
            )}
        </div>
    );
};
