import { Reveal } from "@/utlis/reveal";
import React from "react";

export const Map: React.FC = () => {
    "use client";
    return (
        <Reveal
            hiddenVariant="hiddenXPos"
            visibleVariant="visibleXPos"
        >
            <div className="flex justify-center items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.713920146813!2d-97.21468423218167!3d32.83738301010757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e78f082c76ca9%3A0x897c7a1637dd0464!2sSarah%20Nicole%20Salon!5e1!3m2!1sen!2sus!4v1700503832155!5m2!1sen!2sus"
                    title="Sarah Nicole Salon Location"
                    className="w-[90%] h-[600px] rounded-[50px] shadow-3xl"
                ></iframe>
            </div>
        </Reveal>
    );
};
