"use client";

import React from "react";
import { BackgroundIconsRow } from "./BackgroundIconsRow";

export const HomeBackgroundIcons: React.FC = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridTemplateRows: "repeat(auto-fill, minmax(75px, 1fr))",
                gridRowGap: "200px",
                position: "absolute",
                width: "100%",
                top: "100%",
            }}
        >
            <BackgroundIconsRow row={1} />
            <BackgroundIconsRow row={2} />
            <BackgroundIconsRow row={3} />
        </div>
    );
};