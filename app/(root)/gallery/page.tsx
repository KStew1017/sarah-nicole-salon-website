import { GallerySection } from "@/components/(Gallery)/GallerySection";
import { BackgroundIcons } from "@/components/layout/BackgroundIcons";
import { faScissors, faSpa, faSprayCanSparkles } from "@fortawesome/free-solid-svg-icons";

export const dynamic = 'force-dynamic'

export default function Home() {
    return (
        <>
            <BackgroundIcons
                rows={8}
                icon1={faSprayCanSparkles}
                icon2={faSpa}
                icon3={faScissors}
            />
            <GallerySection />
        </>
    );
}
