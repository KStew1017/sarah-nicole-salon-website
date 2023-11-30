import { Reveal } from "@/utlis/reveal";
import { StylistType } from "@/utlis/types";
import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface ServicesListProps {
    stylist: StylistType;
}

export const ServicesList: React.FC<ServicesListProps> = ({ stylist }) => {
    return (
        <div className="flex flex-col text-center gap-[25px]">
            {stylist.services.map((service, i) => (
                <Reveal
                    key={i}
                    hiddenVariant={i % 2 === 0 ? "hiddenXPos" : "hiddenXNeg"}
                    visibleVariant={i % 2 === 0 ? "visibleXPos" : "visibleXNeg"}
                >
                    <div
                        key={i}
                        style={{ fontSize: `${80 - (i + 2) * 6}px` }}
                        className="font-serif text-green flex justify-center"
                    >
                        {service.split("").map((letter, j) => {
                            const [ref, inView] = useInView({
                                triggerOnce: true,
                            });
                            return (
                                <motion.div
                                    ref={ref}
                                    key={j}
                                    initial={{ opacity: 0, y: 25, rotate: -50 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 25, rotate: inView ? 0 : -50 }}
                                    transition={{ delay: j * 0.1 }}
                                    style={{ whiteSpace: "pre" }}
                                >
                                    {letter}
                                </motion.div>
                            );
                        })}
                    </div>
                </Reveal>
            ))}
        </div>
    );
};
