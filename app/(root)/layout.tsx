import { Metadata } from "next";
import { siteInfo } from "@/configs/siteInfo";
import { Providers } from "./providers";
import { northwell, northwellAlt, northwellSwash, PTSerif } from "@/utlis/fonts";
import "../globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Background } from "@/components/layout/Background";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FooterSection } from "@/components/footer/FooterSection";

config.autoAddCss = false;

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
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <Background />
                        <div className="overflow-hidden flex-grow">
                            <div className="mx-auto">{children}</div>
                        </div>
                        <FooterSection />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
