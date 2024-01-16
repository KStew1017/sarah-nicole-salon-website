import React, { useEffect, useState } from "react";
import { ListEditTemplate } from "./ListEditTemplate";
import { AnimatePresence, motion } from "framer-motion";
import { Checkmark } from "@/utlis/checkmark";

interface ServicesProps {
    services: string[];
    name: string;
}

export const Services: React.FC<ServicesProps> = ({ services, name }) => {
    const [listState, setListState] = useState<string[]>([]);
    const [editedList, setEditedList] = useState<string[]>([]);
    const [saveSuccess, setSaveSuccess] = useState(false);
    const [exitAnimation, setExitAnimation] = useState(false);
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

    const handleSave = async () => {
        if (isTooLong) {
            alert("Must be 6 items or less.");
        } else {
            try {
                const res = await fetch(`/api/db-patch?name=${name}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        services: editedList,
                    }),
                    cache: "reload",
                });

                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            setListState(editedList);
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
        setListState(listState);
        setEditedList(listState);
        setIsEditing(false);
    };

    return (
        <div className="relative bg-light shadow-3xl my-[50px] p-[50px] rounded-[50px] min-w-full flex flex-col items-center justify-center">
            <h2 className="text-[48px] lg:text-[60px] font-northwell text-green text-center">Services</h2>
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
