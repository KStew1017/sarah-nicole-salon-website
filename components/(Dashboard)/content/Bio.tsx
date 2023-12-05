import React, { useEffect, useState } from "react";
import { TextEditTemplate } from "./TextEditTemplate";

interface BioProps {
    bio: string;
}

export const Bio: React.FC<BioProps> = ({ bio }) => {
    const [textState, setTextState] = useState("");
    const [editedText, setEditedText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isTooLong, setIsTooLong] = useState(false);

    useEffect(() => {
        setTextState(bio);
        setEditedText(bio);
    }, [bio]);

    const handleEditToggle = () => {
        setIsEditing(true);
    };

    const handlebioValueChange = (value: string) => {
        setEditedText(value);

        if (value?.length <= 500) {
            setIsTooLong(false);
        } else {
            setIsTooLong(true);
        }
    };

    const handleSave = () => {
        if (isTooLong) {
            alert("Must be 500 characters or less.");
        } else {
            setTextState(editedText);
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setTextState(textState);
        setEditedText(textState);
        setIsEditing(false);
    };

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full flex flex-col items-center justify-center">
            <h2 className="text-[60px] font-northwell text-green text-center mb-[25px]">Bio</h2>
            <TextEditTemplate
                isEditing={isEditing}
                textState={textState}
                editedText={editedText}
                isTooLong={isTooLong}
                handleEditToggle={handleEditToggle}
                handleTextValueChange={handlebioValueChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
                maxChars={500}
            />
        </div>
    );
};
