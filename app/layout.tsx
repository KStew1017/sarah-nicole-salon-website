import { Metadata } from "next";
import { siteConfig } from "@/configs/siteConfig";
import { Providers } from "./providers";
import { northwell, northwellAlt, northwellSwash, PTSerif } from "@/utlis/fonts";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s - ${siteConfig.title}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/images/website-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${northwell.variable} ${northwellAlt.variable} ${northwellSwash.variable} ${PTSerif.variable} scroll-smooth bg-light bg-[url('/images/patterns/stitching.png')]`}
        >
            <body>
                <Providers>
                    <Navbar />
                    <div className="max-w-[1536px] mx-auto realtive">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}
