"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

const Aurora = ({ className, children, showRadialGradient = true, ...props }: AuroraBackgroundProps) => {
    return (
        <main>
            <div
                className={cn(
                    "relative flex flex-col  h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
                    className,
                )}
                {...props}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        // sheeeeesh
                        className={cn(
                            `
                            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
                            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
                            [--aurora:repeating-linear-gradient(100deg,var(--green-500)_10%,var(--lime-300)_15%,var(--green-300)_20%,var(--emerald-200)_25%,var(--green-400)_30%)]
                            [background-image:var(--white-gradient),var(--aurora)]
                            dark:[background-image:var(--dark-gradient),var(--aurora)]
                            [background-size:300%,_200%]
                            [background-position:50%_50%,50%_50%]
                            filter blur-[10px] invert dark:invert-0
                            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
                            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
                            after:[background-size:200%,_100%] 
                            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
                            pointer-events-none
                            absolute -inset-[10px] opacity-50 [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                            showRadialGradient &&
                                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
                        )}
                    ></div>
                </div>
                {children}
            </div>
        </main>
    );
};

export function AuroraBackground({ title, description }: { title: string; description: string }) {
    return (
        <Aurora>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col items-center justify-center gap-4 px-4"
            >
                <div className="text-center text-3xl font-bold dark:text-white md:text-7xl">{title}</div>
                <div className="py-4 text-center text-base font-extralight dark:text-neutral-200 md:text-4xl">
                    {description}
                </div>
            </motion.div>
        </Aurora>
    );
}
