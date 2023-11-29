"use client";

import { Reveal } from "@/utlis/reveal";
import { StylistType } from "@/utlis/types";
import { motion } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface ServicesListProps {
    stylist: StylistType;
}

export const ServicesList: React.FC<ServicesListProps> = ({ stylist }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in/out of view
    });

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
                        style={{ fontSize: `${80 - (i + 2) ** 2}px` }}
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
                                    initial={{ opacity: 0, y: 20, rotate: -10 }}
                                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20, rotate: inView ? 0 : -10 }}
                                    transition={{ delay: j * 0.1 }}
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
