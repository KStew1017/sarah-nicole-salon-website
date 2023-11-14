import localFont from "next/font/local";

export const northwell = localFont({
    src: [
        {
            path: "../public/fonts/Northwell.ttf",
            weight: "normal",
        },
    ],
    variable: "--font-northwell",
});

export const northwellSwash = localFont({
    src: [
        {
            path: "../public/fonts/Northwell-Swash.ttf",
            weight: "normal",
        },
    ],
    variable: "--font-northwell-swash",
});

export const northwellAlt = localFont({
    src: [
        {
            path: "../public/fonts/Northwell-Alt.ttf",
            weight: "normal",
        },
    ],
    variable: "--font-northwell-alt",
});

export const PTSerif = localFont({
    src: [
        {
            path: "../public/fonts/PTSerif-Regular.ttf",
            weight: "normal",
        },
        {
            path: "../public/fonts/PTSerif-Bold.ttf",
            weight: "bold",
        },
    ],
    variable: "--font-ptserif",
});
