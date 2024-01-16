"use client";

import React, { useState, useEffect } from "react";

export const Background: React.FC = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        setScrollPosition(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const backgroundStyle = {
        backgroundPosition: `center ${scrollPosition * -0.2}px`,
    };

    return (
        <div
            style={backgroundStyle}
            className="fixed inset-0 -z-20 bg-light bg-[url('/images/patterns/stitching.png')]"
        />
    );
};