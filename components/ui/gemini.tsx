"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { TextGenerateEffect } from "@/components/ui/text-generation";

import { cn } from "@/lib/utils";

const transition = {
    duration: 0,
    ease: "linear",
};

const GoogleGeminiEffect = ({ pathLengths, className }: { pathLengths: MotionValue[]; className?: string }) => {
    return (
        <div className={cn("sticky top-80", className)}>
            <div className="relative z-10">
                <TextGenerateEffect
                    className="bg-clip-text pb-4 text-center text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-7xl"
                    lineOne={"Un robot coach sportif autonome"}
                    lineTwo={"construit par 6 élèves de terminale"}
                />
                <p className="mx-auto mt-4 max-w-lg text-center text-xs font-normal text-neutral-400 md:text-xl">
                    Améliorez la justesse de vos mouvements grâce à <br /> B-Pump, votre coach sportif 100% Robotique !
                </p>
            </div>
            <div className="absolute -top-60 flex h-[890px] w-full items-center justify-center md:-top-40">
                <button
                    onClick={() => {
                        const section = document.getElementById("startPage");

                        if (section) {
                            section.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}
                    className="z-30 mx-auto mt-16 w-fit rounded-full bg-black px-2 py-1 text-xs font-bold text-white dark:bg-white dark:text-black md:mt-24 md:px-4 md:py-2 md:text-base"
                >
                    En savoir plus
                </button>
            </div>

            <svg
                width="1440"
                height="890"
                viewBox="0 0 920.45 920.45"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-60  w-full md:-top-40"
            >
                <motion.path
                    d="M545.53,630.84S726,683.74,824.39,616.1,871.52,390,735.26,424.8,532.19,666.25,207.15,697C108.51,706.32,49.9,673.8,45.32,577.54S77.7,360.25,145.9,304.72c52.31-40.94,114.65-49.28,133.73,2.88,15,46.71-11.86,57-34.16,84.08-3.91,4.75,2.15,11.26,7.16,7.68,29.56-21.15,80.73-46.23,123.69-12.88,13.66,10.6,25.51,32.11,27.13,49.32,4.35,45.86-25,94.09-99.1,87.48l.44,58"
                    stroke="#2ecc71"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    initial={{
                        pathLength: 0,
                    }}
                    style={{
                        pathLength: pathLengths[0],
                    }}
                    transition={transition}
                />
                <motion.path
                    d="M311.63,234.42S562.25,214.49,604.5,448.27"
                    stroke="#27ae60"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                    initial={{
                        pathLength: 0,
                    }}
                    style={{
                        pathLength: pathLengths[0],
                    }}
                    transition={transition}
                />

                <path
                    d="M545.53,630.84S726,683.74,824.39,616.1,871.52,390,735.26,424.8,532.19,666.25,207.15,697C108.51,706.32,49.9,673.8,45.32,577.54S77.7,360.25,145.9,304.72c52.31-40.94,114.65-49.28,133.73,2.88,15,46.71-11.86,57-34.16,84.08-3.91,4.75,2.15,11.26,7.16,7.68,29.56-21.15,80.73-46.23,123.69-12.88,13.66,10.6,25.51,32.11,27.13,49.32,4.35,45.86-25,94.09-99.1,87.48l.44,58"
                    stroke="#05c46b"
                    strokeWidth="20"
                    fill="none"
                    pathLength={1}
                    filter="url(#blurMe)"
                />
                <path
                    d="M311.63,234.42S562.25,214.49,604.5,448.27"
                    stroke="#3ae374"
                    strokeWidth="20"
                    fill="none"
                    pathLength={1}
                    filter="url(#blurMe)"
                />
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export function HeroGeminiEffect() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <div className="relative h-[400vh] w-full overflow-clip rounded-md pt-40" ref={ref}>
            <GoogleGeminiEffect
                pathLengths={[pathLengthFirst, pathLengthSecond, pathLengthThird, pathLengthFourth, pathLengthFifth]}
            />
        </div>
    );
}
