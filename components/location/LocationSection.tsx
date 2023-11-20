import { Heading } from "../layout/Heading";
import { Map } from "./Map";
import { Reveal } from "@/utlis/reveal";
import React from "react";

export const LocationSection: React.FC = () => {
    return (
        <div id="location" className="max-w-[1250px] mx-auto">
            <Reveal
                hiddenVariant="hiddenXNeg"
                visibleVariant="visibleXNeg"
            >
                <Heading
                    title="Find Us Here"
                    decoration="e"
                    textColor="green"
                />
            </Reveal>
            <Map />
        </div>
    );
};
