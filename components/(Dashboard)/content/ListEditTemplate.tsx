import { Button, Textarea } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

interface ListEditTemplateProps {
    listState: string[];
    editedList: string[];
    isEditing: boolean;
    isTooLong: boolean;
    handleEditToggle: () => void;
    handleListValueChange: (value: string[]) => void;
    handleSave: () => void;
    handleCancel: () => void;
    handleAddItem: () => void;
    handleRemoveLastItem: () => void;
    maxItems: number;
}

export const ListEditTemplate: React.FC<ListEditTemplateProps> = ({
    listState,
    editedList,
    isEditing,
    isTooLong,
    handleEditToggle,
    handleListValueChange,
    handleSave,
    handleCancel,
    handleAddItem,
    handleRemoveLastItem,
    maxItems,
}) => {
    return (
        <>
            {isEditing ? (
                <div className="h-full min-w-full flex flex-col items-center justify-center gap-[25px]">
                    <div className="flex flex-col items-center w-[25%] gap-[25px]">
                        {editedList?.map((item, index) => (
                            <Textarea
                                key={index}
                                width="100%"
                                height="100%"
                                defaultValue={editedList[index]}
                                onValueChange={(value) => {
                                    const newList = [...editedList];
                                    newList[index] = value;
                                    handleListValueChange(newList);
                                }}
                                errorMessage={isTooLong ? `Must be ${maxItems} items or less.` : ""}
                                isInvalid={isTooLong}
                                maxRows={1}
                                classNames={{
                                    base: "w-full",
                                    innerWrapper: "items-center",
                                    inputWrapper:
                                        "bg-tan rounded-[25px] px-[25px] data-[hover=true]:bg-tan group-data-[focus=true]:bg-white",
                                    input: "font-serif text-[20px] text-green text-center",
                                    errorMessage: "font-serif text-red-600 text-[16px] w-full text-center",
                                }}
                            />
                        ))}
                    </div>
                    <div className="w-[25%] flex justify-between items-center ">
                        <Button
                            className="hover:bg-tan hover:shadow-lg bg-cyan-600 hover:border-2 hover:border-cyan-600 hover:text-cyan-600 text-light rounded-r-none font-serif text-[20px] w-full"
                            onClick={handleAddItem}
                        >
                            Add
                        </Button>
                        <Button
                            className="hover:bg-tan hover:shadow-lg bg-red-500 hover:border-2 hover:border-red-500 hover:text-red-500 text-light rounded-l-none font-serif text-[20px] w-full"
                            onClick={handleRemoveLastItem}
                        >
                            Remove Last
                        </Button>
                    </div>
                    <div className="w-[25%] flex justify-between items-center ">
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
                    <div className="flex flex-col items-center my-[25px]">
                        <ul className="text-[24px] font-serif text-green text-center">
                            {listState?.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <Button
                        className="hover:bg-tan hover:shadow-lg bg-green hover:border-2 hover:border-green hover:text-green text-light font-serif text-[20px] w-[100px] mt-[25px]"
                        onClick={handleEditToggle}
                    >
                        Edit
                    </Button>
                </div>
            )}
        </>
    );
};
