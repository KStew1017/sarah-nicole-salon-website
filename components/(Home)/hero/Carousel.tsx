import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Image } from "@nextui-org/react";
import { carouselImages } from "@/utlis/carouselImages";
import { motion } from "framer-motion";

export const Carousel: React.FC = () => {
    "use client";
    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>;
                let mouseOver = false;
                function clearNextTimeout() {
                    clearTimeout(timeout);
                }
                function nextTimeout() {
                    clearTimeout(timeout);
                    if (mouseOver) return;
                    timeout = setTimeout(() => {
                        slider.next();
                    }, 3000);
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true;
                        clearNextTimeout();
                    });
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false;
                        nextTimeout();
                    });
                    nextTimeout();
                });
                slider.on("dragStarted", clearNextTimeout);
                slider.on("animationEnded", nextTimeout);
                slider.on("updated", nextTimeout);
            },
        ]
    );

    return (
        <motion.div
            ref={sliderRef}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
            className="keen-slider lg:w-[calc(80%_-_1px)] w-full h-full lg:h-fit text-light text-[56px] font-northwell text-center lg:rounded-[50px] lg:absolute lg:right-0 lg:shadow-3xl"
        >
            {carouselImages.map((image) => (
                <div
                    key={image.src}
                    className="keen-slider__slide "
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-none lg:h-[100%]"
                    />
                </div>
            ))}
        </motion.div>
    );
};
