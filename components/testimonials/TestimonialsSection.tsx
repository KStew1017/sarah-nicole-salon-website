import { Heading } from "../layout/Heading";
import { TestimonialsMarquee } from "./TestimonialsMarquee";

export const TestimonialsSection = () => {
    return (
        <div id="testimonials" className="relative h-fit w-full bg-blue bg-[url('/images/patterns/leaves.png')] bg-fixed bg-cover mt-[150px] mb-[100px]">
            <div className="py-[50px]">
                <Heading
                    title="Testimonials"
                    decoration="e"
                    textColor="light"
                />
                <TestimonialsMarquee />
            </div>
        </div>
    );
};
