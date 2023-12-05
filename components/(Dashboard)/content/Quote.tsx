import React, { useEffect, useState } from "react";
import { TextEditTemplate } from "./TextEditTemplate";

interface QuoteProps {
    quote: string;
}

export const Quote: React.FC<QuoteProps> = ({ quote }) => {
    const [textState, setTextState] = useState("");
    const [editedText, setEditedText] = useState("");
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
    
    const handleSave = () => {
        if (isTooLong) {
            alert("Must be 200 characters or less.");
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
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] w-full flex items-center justify-center">
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
        </div>
    );
};
