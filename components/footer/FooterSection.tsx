import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

export const FooterSection: React.FC = () => {
    let now: Date = new Date();
    let year: number = now.getFullYear();

    return (
        <div className="bg-green bg-[url('/images/patterns/leaves.png')] bg-fixed bg-cover w-full h-fit p-[50px] mt-[100px]">
            <div className="flex flex-col justify-center items-center h-full max-w-[1250px] mx-auto">
                <a
                    rel="tag"
                    href="/"
                    className="text-[64px] text-center text-light font-northwell"
                >
                    Sarah Nicole Salon
                </a>
                <div className="w-full h-10px border-light border-1 mb-[40px]" />
                <div className="text-light text-[18px] flex items-center font-serif mb-[20px]">
                    <FontAwesomeIcon icon={faMap} />
                    <a
                        rel="noopener"
                        href="https://www.google.com/maps/place/Sarah+Nicole+Salon/@32.8373304,-97.2157799,17.75z/data=!4m6!3m5!1s0x864e78f082c76ca9:0x897c7a1637dd0464!8m2!3d32.8373795!4d-97.2147635!16s%2Fg%2F1thd269s"
                        target="_blank"
                        className="ml-[8px] hover:underline "
                    >
                        : 5001 Davis Blvd, North Richland Hills, TX 76180
                    </a>
                </div>
                <div className="text-light text-[18px] flex items-center font-serif mb-[20px]">
                    <FontAwesomeIcon icon={faPhone} />
                    <a
                        href="tel:817-281-0262"
                        className="ml-[8px] hover:underline "
                    >
                        : 817-281-0262
                    </a>
                </div>
                <div className="text-light text-[12px] flex items-center font-serif">© {year} Sarah Nicole Salon</div>
                <div className="text-light text-[12px] flex items-center font-serif">All Rights Reserved.</div>
            </div>
        </div>
    );
};
