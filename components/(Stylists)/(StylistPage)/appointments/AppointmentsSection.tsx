import React from 'react';
import { StylistType } from '@/utlis/types';
import { Reveal } from '@/utlis/reveal';
import { Heading } from '@/components/layout/Heading';
import { AppointmentsCard } from './AppointmentsCard';

interface AppointmentsSectionProps {
    stylist: StylistType;
}

export const AppointmentsSection: React.FC<AppointmentsSectionProps> = ({ stylist }) => {
    return (
        <div
            className="flex flex-col items-center relative w-full max-w-[1250px] justify-center mx-auto my-[50px] lg:my-[200px]"
        >
            <Reveal
                hiddenVariant="hiddenXPos"
                visibleVariant="visibleXPos"
            >
                <Heading
                    title="Appointments"
                    decoration="e"
                    font="northwell"
                    textColor="green"
                />
            </Reveal>
            <Reveal
                hiddenVariant="hiddenFade"
                visibleVariant="visibleFade"
            >
                <AppointmentsCard stylist={stylist} />
            </Reveal>
        </div>
    );
}