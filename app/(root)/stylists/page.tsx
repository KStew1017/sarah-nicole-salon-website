import { StylistsSection } from "@/components/(Stylists)/StylistsSection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";

export default function Stylists() {
    return (
        <>
            <BackgroundIcons
                rows={8}
                icon1={faSprayCanSparkles}
                icon2={faSpa}
                icon3={faScissors}
            />
            <StylistsSection />
        </>
    );
}
