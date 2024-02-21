"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import tailwindCustomColors from "@/utlis/customColors";

interface BackgroundIconsRowProps {
    row: number;
    rows: number;
    icon1: IconDefinition;
    icon2: IconDefinition;
    icon3: IconDefinition;
}

export const BackgroundIconsRow: React.FC<BackgroundIconsRowProps> = ({ row, rows, icon1, icon2, icon3 }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const iconRotateFactor = Array(rows).fill([0.1, 0.18, 0.12, 0.08, 0.04, 0.1, 0.18, 0.12, 0.08, 0.07]);
    const iconTranslateYFactors = [
        [0.85, 0.65, 0.90, 0.70, 0.90, 0.70],
        [0.80, 0.60, 0.85, 0.65, 0.85, 0.65],
        [0.75, 0.55, 0.80, 0.60, 0.80, 0.60],
        [0.70, 0.50, 0.75, 0.55, 0.75, 0.55],
        [0.65, 0.45, 0.70, 0.50, 0.70, 0.50],
        [0.60, 0.40, 0.65, 0.45, 0.64, 0.50],
        [0.50, 0.37, 0.60, 0.40, 0.60, 0.40],
        [0.40, 0.30, 0.50, 0.33, 0.50, 0.37],
        [0.33, 0.22, 0.37, 0.30, 0.40, 0.25],
        [0.23, 0.18, 0.30, 0.25, 0.31, 0.16],
    ];

    const generateIconsArray = (icon1: IconDefinition, icon2: IconDefinition, icon3: IconDefinition) => {
        const pattern = [
            [icon1, icon2, icon3],
            [icon3, icon1, icon2],
            [icon2, icon3, icon1],
        ];

        let iconsArray = [];

        for (let i = 0; i < rows; i++) {
            iconsArray.push([...pattern[i % 3], ...pattern[i % 3]]);
        }

        return iconsArray;
    };

    const icons = generateIconsArray(icon1, icon2, icon3);

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
            {icons[row - 1].map((icon: any, i) => {
                const translateY = -scrollPosition * iconTranslateYFactors[row - 1][i];
                const rotate = scrollPosition * iconRotateFactor[row - 1][i];
                const style = {
                    transform: `translateY(${translateY}px) rotate(${rotate}deg)`,
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
