import { Metadata } from "next";
import { siteInfo } from "@/configs/siteInfo";
import { Providers } from "./providers";
import { northwell, northwellAlt, northwellSwash, PTSerif } from "@/utlis/fonts";
import "../globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ClerkProvider } from "@clerk/nextjs";
import { Background } from "@/components/layout/Background";

config.autoAddCss = false;

export const metadata: Metadata = {
    title: {
        default: "Sarah Nicole Salon - Stylist Dashboard",
        template: `%s - ${siteInfo.title}`,
    },
    description: siteInfo.description,
    icons: {
        icon: "/images/website-icon.png",
    },
};


export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
            <html
                lang="en"
                className={`${northwell.variable} ${northwellAlt.variable} ${northwellSwash.variable} ${PTSerif.variable} scroll-smooth`}
            >
                <body>
                    <Providers>
                        <div className="flex flex-col h-screen">
                            <Background />
                            <div className="flex-grow">
                                <div className="mx-auto">{children}</div>
                            </div>
                        </div>
                    </Providers>
                </body>
            </html>
        </ClerkProvider>
    );
}
