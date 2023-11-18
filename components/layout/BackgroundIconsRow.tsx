"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faSprayCanSparkles, faScissors } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from "react";
import tailwindCustomColors from "@/utlis/customColors";

interface BackgroundIconsRowProps {
    row: number;
}

export const BackgroundIconsRow: React.FC<BackgroundIconsRowProps> = ({ row }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const iconRotateFactor = Array(6).fill([0.1, 0.18, 0.12, 0.08, 0.04, 0.1]);
    const iconTranslateFactors = [
        [0.23, 0.18, 0.3, 0.25, 0.31, 0.16],
        [0.33, 0.22, 0.37, 0.3, 0.4, 0.25],
        [0.4, 0.3, 0.5, 0.33, 0.5, 0.37],
        [0.5, 0.37, 0.6, 0.4, 0.6, 0.4],
        [0.6, 0.4, 0.65, 0.45, 0.64, 0.5],
        [0.65, 0.45, 0.7, 0.5, 0.7, 0.5],
    ];
    const icons = [
        [faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles, faSpa, faScissors],
        [faScissors, faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles, faSpa],
        [faSpa, faScissors, faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles],
        [faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles, faSpa, faScissors],
        [faScissors, faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles, faSpa],
        [faSpa, faScissors, faSprayCanSparkles, faSpa, faScissors, faSprayCanSparkles],
    ];

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {icons[row - 1].map((icon, i) => {
                const translate = scrollPosition * iconTranslateFactors[row - 1][i];
                const rotate = scrollPosition * iconRotateFactor[row - 1][i];
                const style = {
                    transform: `translateY(${translate}px) rotate(${rotate}deg)`,
                    color: tailwindCustomColors.green,
                    opacity: 0.25,
                };

                return (
                    <FontAwesomeIcon
                        style={style}
                        icon={icon}
                        className="h-[75px] place-self-center"
                        key={i}
                    />
                );
            })}
        </>
    );
};
