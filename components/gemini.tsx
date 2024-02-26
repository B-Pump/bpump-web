"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function HeroGeminiEffect() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
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
