import { Heading } from "../../layout/Heading";
import { Map } from "./Map";
import { Reveal } from "@/utlis/reveal";
import React from "react";

export const LocationSection: React.FC = () => {
    "use client";
    return (
        <div
            id="location"
            className="max-w-[1250px] mx-auto pb-[100px]"
        >
            <Reveal
                hiddenVariant="hiddenXNeg"
                visibleVariant="visibleXNeg"
            >
                <Heading
                    title="Find Us Here"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
            </Reveal>
            <Map />
        </div>
    );
};
