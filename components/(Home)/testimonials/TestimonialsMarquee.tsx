import Marquee from "react-fast-marquee";
import { siteContent } from "@/configs/siteContent";
import React from "react";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TestimonialsMarquee = () => {
    const [play, setPlay] = React.useState(true);

    return (
        <div className="flex flex-col justify-center items-center">
            <Marquee
                play={play}
                className="w-[1250px] overflow-hidden gradient-mask-l-90-d"
            >
                {siteContent.reviews.map((testimonial, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center text-center w-[400px] mx-[100px] h-fit"
                    >
                        <p className="font-serif text-light text-[24px]">{testimonial.review}</p>
                        <p className="font-northwell text-light text-[64px] pt-[25px]">- {testimonial.name}</p>
                    </div>
                ))}
            </Marquee>
            <div
                onClick={() => setPlay(!play)}
                className="drop-shadow-sm text-light font-bold text-[50px] h-[50px] flex items-center hover:cursor-pointer hover:drop-shadow-lg hover:scale-105 transition ease-s-curve"
            >
                {!play ? <FontAwesomeIcon icon={faPlayCircle} /> : <FontAwesomeIcon icon={faPauseCircle} />}
            </div>
        </div>
    );
};
