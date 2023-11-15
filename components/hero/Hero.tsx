import { Carousel } from "./Carousel";
import { MissionStatement } from "./MissionStatement";

export const Hero = () => {
    return (
        <div className="flex justify-end items-center h-screen mt-[-50px] relative">
            <Carousel />
            <MissionStatement />
        </div>
    );
};
