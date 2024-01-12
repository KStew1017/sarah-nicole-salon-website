import { StylistType } from "@/utlis/types";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

interface HeaderContentProps {
    stylist: StylistType;
}

export const HeaderContent: React.FC<HeaderContentProps> = ({ stylist }) => {
    const bioParagraphs = stylist.bio.split("\n").map((line, index) => (
        <div
            key={index}
            className="mb-[25px]"
        >
            {line}
            <br />
        </div>
    ));

    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="lg:absolute flex items-center w-screen lg:w-[50%] h-full"
        >
            <div className="py-[50px] px-[25px] lg:mx-[50px] h-fit max-h-[80%] flex flex-col items-center bg-green lg:bg-opacity-50 lg:backdrop-filter lg:backdrop-blur-2xl shadow-3xl lg:rounded-[25px] overflow-hidden">
                <div className="flex flex-col items-center justify-center text-light font-northwell text-[60px]">
                    {stylist.name}
                </div>
                <Divider className="my-[25px] w-[90%] bg-light/50" />
                <div className="flex flex-col items-center justify-evenly text-light font-serif h-full text-center text-[16px]">
                    {bioParagraphs}
                </div>
            </div>
        </motion.div>
    );
};
