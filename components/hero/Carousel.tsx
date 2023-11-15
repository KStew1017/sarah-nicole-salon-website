"use client";

import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Image } from "@nextui-org/react";
import { carouselImages } from "@/utlis/carouselImages";
import "@/public/css/carousel.css";
import { motion } from "framer-motion";

export const Carousel = () => {
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
            className="keen-slider w-[80%] h-fit text-light text-[56px] font-northwell text-center rounded-[50px] absolute right-0"
        >
            {carouselImages.map((image) => (
                <div
                    key={image.src}
                    className="keen-slider__slide"
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        className="object-cover rounded-none h-[100%]"
                    />
                </div>
            ))}
        </motion.div>
    );
};
