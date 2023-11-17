import { Metadata } from "next";
import { siteInfo } from "@/configs/siteInfo";
import { Providers } from "./providers";
import { northwell, northwellAlt, northwellSwash, PTSerif } from "@/utlis/fonts";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Background } from "@/components/layout/Background";

export const metadata: Metadata = {
    title: {
        default: siteInfo.title,
        template: `%s - ${siteInfo.title}`,
    },
    description: siteInfo.description,
    icons: {
        icon: "/images/website-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className={`${northwell.variable} ${northwellAlt.variable} ${northwellSwash.variable} ${PTSerif.variable} scroll-smooth`}
        >
            <body>
                <Providers>
                    <Navbar />
                    <Background />
                    <div className="max-w-[1280px] mx-auto realtive">{children}</div>
                </Providers>
            </body>
        </html>
    );
}
