import { motion } from "framer-motion";
import { Divider } from "@nextui-org/react";

export const AnimatedDivider: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1.5 }}
        >
            <Divider className="my-[100px]" />
        </motion.div>
    );
};
