import { Textarea, Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";


interface TextEditTemplateProps {
    isEditing: boolean;
    textState: string;
    editedText: string;
    isTooLong: boolean;
    handleEditToggle: () => void;
    handleTextValueChange: (value: string) => void;
    handleSave: () => void;
    handleCancel: () => void;
    maxChars: number;
}

export const TextEditTemplate: React.FC<TextEditTemplateProps> = ({
    isEditing,
    textState,
    editedText,
    isTooLong,
    handleEditToggle,
    handleTextValueChange,
    handleSave,
    handleCancel,
    maxChars
}) => {
    return (
        <>
            {isEditing ? (
                <div className="h-full min-w-full flex flex-col items-center justify-center gap-[50px]">
                    <div className="h-full min-w-full flex flex-col">
                        <Textarea
                            width="100%"
                            height="100%"
                            defaultValue={editedText}
                            onValueChange={handleTextValueChange}
                            errorMessage={isTooLong ? `Must be ${maxChars} characters or less.` : ""}
                            isInvalid={isTooLong}
                            maxRows={5}
                            classNames={{
                                inputWrapper:
                                    "w-full h-full bg-tan rounded-[25px] p-[25px] data-[hover=true]:bg-tan group-data-[focus=true]:bg-white",
                                input: "font-serif text-[18px] lg:text-[24px] text-green",
                                errorMessage:
                                    "font-serif text-red-600 text-[14px] lg:text-[16px] absolute bottom-0 left-0 translate-y-[25px]",
                            }}
                        />
                        <p className="ml-auto font-serif text-green text-[16px]">{editedText?.length || 0}/{maxChars}</p>
                    </div>
                    <div className="w-[250px] flex justify-between items-center ">
                        <Button
                            className="hover:bg-tan hover:shadow-lg bg-gold hover:border-2 hover:border-gold hover:text-gold text-light font-serif text-[20px] w-[100px]"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                        <Button
                            className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-[100px]"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="h-full w-full flex flex-col items-center justify-center">
                    <p className="text-[18px] lg:text-[24px] font-serif text-green text-center ">{textState}</p>
                    <Button
                        className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-[100px] mt-[50px]"
                        onClick={handleEditToggle}
                    >
                        Edit
                    </Button>
                </div>
            )}
        </>
    );
};
