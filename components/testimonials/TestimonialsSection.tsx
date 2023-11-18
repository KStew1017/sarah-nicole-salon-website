import { Heading } from "../layout/Heading";

export const TestimonialsSection = () => {
    return (
        <div className="absolute left-0 h-[600px] w-screen bg-blue bg-[url('/images/patterns/leaves.png')] bg-fixed bg-cover">
            <div className="mt-[50px]">
                <Heading
                    title="Testimonials"
                    decoration="e"
                    textColor="light"
                />
            </div>
        </div>
    );
};
