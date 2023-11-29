import { StylistType } from "@/utlis/types";
import { motion } from "framer-motion";
import { HeaderCard } from "./HeaderCard";

interface StylistHeaderProps {
    stylist: StylistType;
}

export const StylistHeader: React.FC<StylistHeaderProps> = ({ stylist }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="flex items-center relative max-w-[1250px] justify-center mx-auto"
        >
            <HeaderCard stylist={stylist} />
        </motion.div>
    );
};
