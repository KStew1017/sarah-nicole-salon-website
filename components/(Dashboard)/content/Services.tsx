import React, { useEffect, useState } from "react";
import { ListEditTemplate } from "./ListEditTemplate";

interface ServicesProps {
    services: string[];
}

export const Services: React.FC<ServicesProps> = ({ services }) => {
    const [listState, setListState] = useState<string[]>([]);
    const [editedList, setEditedList] = useState<string[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isTooLong, setIsTooLong] = useState(false);

    useEffect(() => {
        setListState(services);
        setEditedList(services);
    }, [services]);

    const handleEditToggle = () => {
        setIsEditing(true);
    };

    const handleListValueChange = (value: string[]) => {
        setEditedList(value);

        if (value?.length <= 6) {
            setIsTooLong(false);
        } else {
            setIsTooLong(true);
        }
    };

    const handleAddItem = () => {
        const newList = [...editedList];
        newList.push("");
        setEditedList(newList);
    };

    const handleRemoveLastItem = () => {
        const newList = [...editedList];
        newList.splice(-1);
        setEditedList(newList);
    };

    const handleSave = () => {
        if (isTooLong) {
            alert("Must be 6 items or less.");
        } else {
            setListState(editedList);
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        setListState(listState);
        setEditedList(listState);
        setIsEditing(false);
    };

    return (
        <div className="bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] min-w-full flex flex-col items-center justify-center">
            <h2 className="text-[60px] font-northwell text-green text-center">Services</h2>
            <ListEditTemplate
                listState={listState}
                isEditing={isEditing}
                editedList={editedList}
                isTooLong={isTooLong}
                handleEditToggle={handleEditToggle}
                handleListValueChange={handleListValueChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleAddItem={handleAddItem}
                handleRemoveLastItem={handleRemoveLastItem}
                maxItems={6}
            />
        </div>
    );
};
