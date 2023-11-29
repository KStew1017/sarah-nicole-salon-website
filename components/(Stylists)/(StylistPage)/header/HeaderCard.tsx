import { StylistType } from "@/utlis/types";
import { HeaderContent } from "./HeaderContent";
import { motion } from "framer-motion";

interface HeaderCardProps {
    stylist: StylistType;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ stylist }) => {
    const stylistFirstName = stylist.name.split(" ")[0];

    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="relative overflow-hidden rounded-[50px] mt-[50px] shadow-3xl h-[80vh] max-h-[800px]"
        >
            <HeaderContent stylist={stylist} />
            <img
                src={`/images/${stylistFirstName}/${stylistFirstName}-profile.jpeg`}
                alt={`${stylist.name} Profile Picture`}
                title={`${stylist.name} Profile Picture`}
                className="object-cover w-full h-full"
            />
        </motion.div>
    );
};
