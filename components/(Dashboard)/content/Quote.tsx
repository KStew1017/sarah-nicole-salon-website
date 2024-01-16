import React, { useEffect, useState } from "react";
import { TextEditTemplate } from "./TextEditTemplate";
import { AnimatePresence, motion } from "framer-motion";
import { Checkmark } from "@/utlis/checkmark";

interface QuoteProps {
    quote: string;
    name: string;
}

export const Quote: React.FC<QuoteProps> = ({ quote, name }) => {
    const [textState, setTextState] = useState("");
    const [editedText, setEditedText] = useState("");
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false); // Used to trigger exit animation on save success
    const [isEditing, setIsEditing] = useState(false);
    const [isTooLong, setIsTooLong] = useState(false);

    useEffect(() => {
        setTextState(quote);
        setEditedText(quote);
    }, [quote]);

    const handleEditToggle = () => {
        setIsEditing(true);
    };

    const handleQuoteValueChange = (value: string) => {
        setEditedText(value);

        if (value?.length <= 200) {
            setIsTooLong(false);
        } else {
            setIsTooLong(true);
        }
    };

    const handleSave = async () => {
        if (isTooLong) {
            alert("Must be 200 characters or less.");
        } else {
            try {
                const res = await fetch(`/api/db-patch?name=${name}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        quote: editedText,
                    }),
                    cache: "reload",
                });

                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            setTextState(editedText);
            setIsEditing(false);
            setSaveSuccess(true);
            setTimeout(() => {
                setExitAnimation(true);
            }, 2000);
            setTimeout(() => {
                setExitAnimation(false);
            }, 3000);
            setTimeout(() => {
                setSaveSuccess(false);
            }, 3000);
        }
    };

    const handleCancel = () => {
        setTextState(textState);
        setEditedText(textState);
        setIsEditing(false);
    };

    return (
        <div className="relative bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] min-w-full flex flex-col items-center justify-center">
            <h2 className="text-[48px] lg:text-[60px] font-northwell text-green text-center mb-[25px]">Meet Me Quote</h2>
            <TextEditTemplate
                isEditing={isEditing}
                textState={textState}
                editedText={editedText}
                isTooLong={isTooLong}
                handleEditToggle={handleEditToggle}
                handleTextValueChange={handleQuoteValueChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
                maxChars={200}
            />
            {saveSuccess && (
                <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AnimatePresence>
                        <motion.div
                            className="bg-green h-[250px] w-[250px] flex flex-col items-center justify-center rounded-full bg-opacity-75 backdrop-filter backdrop-blur-lg"
                            initial={exitAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            animate={exitAnimation ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                        >
                            <Checkmark />
                            <p className="text-[36px] font-serif text-light text-center">Saved!</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
};
