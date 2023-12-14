import { motion } from "framer-motion";

export const Checkmark = () => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                fill="none"
                stroke="#f8f0eb"
                strokeWidth="8"
                strokeLinecap="round"
                d="M15,50 L40,75 L85,25"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
            />
        </svg>
    );
};
