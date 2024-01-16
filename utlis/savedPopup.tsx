import { motion, AnimatePresence } from "framer-motion";
import { Checkmark } from "./checkmark";
import { useState } from "react";

interface T {
    exitAnimation: boolean;
    saveSuccess: boolean;
}

export const SavedPopup: React.FC<T> = ({ exitAnimation, saveSuccess }) => {
    const [exitAnimationState, setExitAnimationState] = useState(exitAnimation);
    const [saveSuccessState, setSaveSuccessState] = useState(saveSuccess);

    return (
        saveSuccessState && (
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
        )
    );
};
