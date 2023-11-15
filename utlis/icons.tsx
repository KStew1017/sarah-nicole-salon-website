import * as React from "react";

interface ExpandProps {
    color?: string;
    customClass?: string;
    expanded?: boolean;
    width?: string;
    height?: string;
}

export const Expand = ({ color = "current color", customClass, expanded, width, height }: ExpandProps) => (
    <div className={customClass}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className={`transition-transform duration-500 ease-in-out ${expanded ? "rotate-180" : ""}`}
        >
            <path
                fill={color}
                d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
            />
        </svg>
    </div>
);