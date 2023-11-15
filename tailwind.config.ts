import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} **/
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                tan: "#e8dfda",
                tan200: "#DDD5D1",
                light: "#f8f0eb",
                green: "#013220",
                blue: "#1D363A",
            },
            transitionTimingFunction: {
                "s-curve": "cubic-bezier(0.075, 0.82, 0.165, 1)",
            },
        },
        fontFamily: {
            serif: ["var(--font-ptserif)"],
            northwell: ["var(--font-northwell)"],
            northwellAlt: ["var(--font-northwell-alt)"],
            northwellSwash: ["var(--font-northwell-swash)"],
        },
        transitionProperty: {
            transform: "transform",
        },
        rotate: {
            "180": "180deg",
        },
    },
    darkMode: "class",
    important: true,
    plugins: [nextui()],
};
