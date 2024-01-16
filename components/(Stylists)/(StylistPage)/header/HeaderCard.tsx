import { StylistType } from "@/utlis/types";
import { HeaderContent } from "./HeaderContent";
import { motion } from "framer-motion";

interface HeaderCardProps {
    stylist: StylistType;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ stylist }) => {
    const stylistFirstName = stylist.name.split(" ")[0].toLowerCase();

    return (
        <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="relative lg:rounded-[50px] lg:mt-[50px] shadow-3xl lg:h-[80vh] lg:max-h-[800px]"
        >
            <img
                src={`/images/${stylistFirstName}/${stylistFirstName}-profile.jpeg`}
                alt={`${stylist.name} Profile Picture`}
                title={`${stylist.name} Profile Picture`}
                className="object-cover w-full h-full lg:rounded-[50px]"
            />
            <div className="lg:absolute inset-0 lg:flex lg:items-center ">
                <HeaderContent stylist={stylist} />
            </div>
        </motion.div>
    );
};
