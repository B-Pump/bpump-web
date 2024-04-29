"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const transition = {
    duration: 0,
    ease: "linear",
};

const GeminiEffect = ({
    children,
    pathLengths,
    className,
}: {
    children: React.ReactNode;
    pathLengths: MotionValue[];
    className?: string;
}) => {
    return (
        <div className={cn("sticky top-32", className)}>
            <div className="relative z-10 select-none">{children}</div>
            <svg
                width="1440"
                height="890"
                viewBox="0 -150 920.45 920.45"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -top-28 w-full md:-top-24"
            >
                <motion.path
                    d="M545.53,630.84S726,683.74,824.39,616.1,871.52,390,735.26,424.8,532.19,666.25,207.15,697C108.51,706.32,49.9,673.8,45.32,577.54S77.7,360.25,145.9,304.72c52.31-40.94,114.65-49.28,133.73,2.88,15,46.71-11.86,57-34.16,84.08-3.91,4.75,2.15,11.26,7.16,7.68,29.56-21.15,80.73-46.23,123.69-12.88,13.66,10.6,25.51,32.11,27.13,49.32,4.35,45.86-25,94.09-99.1,87.48l.44,58"
                    stroke="#3ae374"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[1] }}
                    transition={transition}
                />
                <motion.path
                    d="M311.63,234.42S562.25,214.49,604.5,448.27"
                    stroke="#3ae374"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    style={{ pathLength: pathLengths[0] }}
                    transition={transition}
                />
                <path
                    d="M545.53,630.84S726,683.74,824.39,616.1,871.52,390,735.26,424.8,532.19,666.25,207.15,697C108.51,706.32,49.9,673.8,45.32,577.54S77.7,360.25,145.9,304.72c52.31-40.94,114.65-49.28,133.73,2.88,15,46.71-11.86,57-34.16,84.08-3.91,4.75,2.15,11.26,7.16,7.68,29.56-21.15,80.73-46.23,123.69-12.88,13.66,10.6,25.51,32.11,27.13,49.32,4.35,45.86-25,94.09-99.1,87.48l.44,58"
                    stroke="#05c46b"
                    strokeWidth="1"
                    fill="none"
                    pathLength={1}
                    filter="url(#blurMe)"
                />
                <path
                    d="M311.63,234.42S562.25,214.49,604.5,448.27"
                    stroke="#3ae374"
                    strokeWidth="1"
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

export function Gemini({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0, 1.7]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0, 1.5]);

    return (
        // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
        <div className="relative h-[230vh] overflow-clip" ref={ref}>
            <GeminiEffect pathLengths={[pathLengthFirst, pathLengthSecond]}>{children}</GeminiEffect>
        </div>
    );
}
