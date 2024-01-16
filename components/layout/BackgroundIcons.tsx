import React from "react";
import { BackgroundIconsRow } from "./BackgroundIconsRow";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface HomeBackgroundIconsProps {
    rows: number;
    icon1: IconDefinition;
    icon2: IconDefinition;
    icon3: IconDefinition;
}

export const BackgroundIcons: React.FC<HomeBackgroundIconsProps> = ({ rows, icon1, icon2, icon3 }) => {
    "use client";

    return (
        <div
            style={{
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(auto-fill, minmax(75px, 1fr))",
                position: "fixed",
                gridRowGap: "200px",
                width: "100%",
                height: "100%",
                top: "100%",
                zIndex: -1,
            }}
            className="hidden lg:grid"
        >
            {Array(rows)
                .fill(0)
                .map((_, i) => (
                    <BackgroundIconsRow
                        key={i}
                        rows={rows}
                        row={i + 1}
                        icon1={icon1}
                        icon2={icon2}
                        icon3={icon3}
                    />
                ))}
        </div>
    );
};
