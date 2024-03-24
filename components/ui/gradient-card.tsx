"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

const BackgroundGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    animate?: boolean;
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <div className={cn("relative p-[4px] group", containerClassName)}>
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500",
                    " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-3xl z-[1]",
                    "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]",
                )}
            />

            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};

export function GradientCard({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <div>
            <BackgroundGradient className="max-w-sm rounded-[22px] bg-white p-4 dark:bg-zinc-900 sm:p-10">
                <Image src={image} alt="" height="400" width="400" className="object-contain" />
                <p className="mb-2 mt-4 text-base text-black dark:text-neutral-200 sm:text-xl">{title}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
            </BackgroundGradient>
        </div>
    );
}
